import {Link} from "react-router-dom";
import {RoomPageRoot} from "./MainPage/RoomPageRoot";
import {SignOutButton, ToSignInPageButton} from "./Common/SignInPage";
import {isSignedIn, useFBAuth} from "../FirebaseWrapper/FBAuth";
import {DrawBanner} from "./MainPage/Grid/Components/CarouselBanner";
import Flight from "../Search/Flight";
import {MyPageRoot} from "./MyPage/MyPageRoot";
import "./grid.min.css"
import "./style.css";
import headerImg from "./assets/header.png";
import {TourGuide} from "../TourGuide/TourGuide";

export const Home = () => {
    const [auth, isSignIn] = useFBAuth();
    return (
        <>
            <MainMenu/>
            <DrawBanner/>
            <RoomPageRoot/>
        </>
    );
};

export const Welcome = () => {
    return <p>Welcome</p>;
};

export const MainMenu = () => {
    const [auth, isSignIn] = useFBAuth();
    return (
        <>
        <div class="container">
        <div class="header">
            <div class="row">
                <div class="col-2">
                    <h1 class="header-icon">
                        <Link className="text-link" to="/" >
                            <img src={headerImg} alt="header"/>
                        </Link>
                    </h1>
                </div>
                
                <div class="col-4">
                    <ul class="tab-menu">
                        <li class="tab-menu-item">
                        <Link to="/TourGuide" className="text-link">여행지</Link>
                        </li>
                        <li class="tab-menu-item">
                        <Link to="/RoomPage" className="text-link">호텔</Link>
                        </li>
                        <li class="tab-menu-item"> 
                        <Link to="/FlightPage" className="text-link">항공권</Link>
                        </li>
                    </ul>
                </div>
                
                <div class="col-4">
                    <div class="tab-menu-search">
                        <form>
                            <input type="text" placeholder="여행지를 검색하세요."></input>
                        </form>
                    </div>
                </div>
                
                <div class="col-1">
                    <Link to="/MyPage" class="sign-in-button text-link">로그인</Link>
                </div>

                <div class="col-1">
                    <Link to="/SignUp" class="sign-up-button text-link">회원가입</Link>
                </div>   
            </div>     
        </div>
    </div>
           
    <div class="main-image">
        <h1 class="main-image-h1">자유를 찾아 떠나는<br/><strong>"여행"</strong></h1>
    </div>

    <div class="container">
        <div class="destination-recommendation">
            <div class="row">
                <div class="col-12">
                    <h1>가장 핫한 여행지 추천</h1>
                </div>
                <div class="col-12">
                    <p>나만의 여행지를 발견해봐요~</p>
                </div>
            </div>
           
            <div class="row">
                <div class="col-4">
                    <a href="#" class="destination-img1"></a>
                </div>
                <div class="col-4">
                    <a href="#" class="destination-img2"></a>
                </div>
                <div class="col-4">
                    <a href="#" class="destination-img3"></a>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="go-destination">
                        <Link to="/TourGuide" class="go-destination-page text-link">여행지 더보기
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div class="line"></div>
    
    <div class="container">
        <div class="hotel-recommendation">
            <div class="row">
                <div class="col-12">
                    <h1>내가 찾던 바로 그곳!</h1>
                </div>
                <div class="col-12">
                    <p>내 삶에 특별한 선물을 줄 수 있는 이번이 마지막 기회!</p>
                </div>
            </div>
           
            <div class="row">
                <div class="col-12">
                    <a href="#" class="hotel-img"></a>
                </div>
                
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="go-destination">
                        <Link to="/RoomPage" class="go-destination-page text-link">호텔 더보기
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export const PageTemplate = ({children}) => (
    <div className="page">
        <MainMenu/>
        {children}
    </div>
);

export const RoomPage = () => {
    return (
        <PageTemplate>
            <RoomPageRoot/>
        </PageTemplate>
    );
};

export const FlightPage = () => {
    return (
        <PageTemplate>
            <Flight/>
        </PageTemplate>
    );
};

export const MyPage = () => {
    return (
        <PageTemplate>
            <MyPageRoot/>
        </PageTemplate>
    );
};
export const TourGuidePage= () => {
    return (
        <PageTemplate>
            <TourGuide/>
        </PageTemplate>
    );
};
