import {Link, useNavigate} from "react-router-dom";
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
import { signOut } from "../FirebaseWrapper/FBAuth";
import { CustomRoomHolder } from "./MainPage/Grid/Components/RoomHolder";
import tourData from "../../Data/tourData"
import { Search } from "./Search/Search";
import { Place } from "Modules/TourGuide/Place";
import { Product } from "./Products/Product";
import { City } from "Modules/TourGuide/City";

export const Home = () => {
    return (
        <>
       <PageTemplate>
    <div className="main-image">
        <h1 className="main-image-h1">자유를 찾아 떠나는<br/><strong>"여행"</strong></h1>
    </div>

    <div className="container">
        <div className="destination-recommendation">
            <div className="row">
                <div className="col-12">
                    <h1>가장 핫한 여행지 추천</h1>
                </div>
                <div className="col-12">
                    <p>나만의 여행지를 발견해봐요~</p>
                </div>
            </div>
           
            <div className="row">
                <div className="col-4">
                    <a href="CityDetail/Place/jeju-hanrasanpark">
                        <img src={tourData.filter(data => data.name==="경복궁")[0].image[0]} className="destination-img"></img>
                    </a>
                </div>
                <div className="col-4">
                    <a href="CityDetail/Place/jeju-udo">
                        <img src={tourData.filter(data => data.name==="우도")[0].image[0]} className="destination-img"></img>
                    </a>
                </div>
                <div className="col-4">
                    <a href="CityDetail/Place/seoul-chunggecheun">
                        <img src={tourData.filter(data => data.name==="청계천")[0].image[0]} className="destination-img"></img>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="go-destination">
                        <Link to="/TourGuide" onClick={() => {window.scrollTo({top:0})}} className="text-link go-destination-page">여행지 더보기
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div className="line"></div>
    
    <div className="container">
        <div className="hotel-recommendation">
            <div className="row">
                <div className="col-12">
                    <h1>내가 찾던 바로 그곳!</h1>
                </div>
                <div className="col-12">
                    <p>내 삶에 특별한 선물을 줄 수 있는 이번이 마지막 기회!</p>
                </div>
            </div>
           
            <div className="row">
                <div className="col-4">
                    <a href="#" className="hotel-img"><CustomRoomHolder idx={9}></CustomRoomHolder></a>
                </div>
                <div className="col-4">
                    <a href="#" className="hotel-img"><CustomRoomHolder idx={45}></CustomRoomHolder></a>
                </div>
                <div className="col-4">
                    <a href="#" className="hotel-img"><CustomRoomHolder idx={53}></CustomRoomHolder></a>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="go-destination">
                        <Link to="/RoomPage" onClick={() => {window.scrollTo({top:0})}} className="text-link go-destination-page">호텔 더보기
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </PageTemplate>
        </>
    );
};

export const Welcome = () => {
    return <p>Welcome</p>;
};

export const MainMenu = () => {
    const [auth, isSignIn] = useFBAuth();
    const navigate = useNavigate();

    const signOutMethod = async () => {
        await signOut();
        window.location.reload();
    }
    const searchMethod = (event) => {
        event.preventDefault();
        navigate(`/Search/${event.currentTarget.searchText.value}`)
    }
    return (
        <>
        <div className="container">
        <div className="header">
            <div className="row">
                <div className="col-2">
                    <h1 className="header-icon">
                        <Link className="text-link" to="/" >
                            <img src={headerImg} alt="header"/>
                        </Link>
                    </h1>
                </div>
                
                <div className="col-4">
                    <ul className="tab-menu">
                        <li className="tab-menu-item">
                        <Link to="/TourGuide" className="text-link">여행지</Link>
                        </li>
                        <li className="tab-menu-item">
                        <Link to="/RoomPage" className="text-link">호텔</Link>
                        </li>
                        <li className="tab-menu-item"> 
                        <Link to="/FlightPage" className="text-link">항공권</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="col-4">
                    <div className="tab-menu-search">
                        <form onSubmit={searchMethod}>
                            <input id="searchText" type="text" placeholder="여행지를 검색하세요."></input>
                        </form>
                    </div>
                </div>
                {isSignedIn() ?
                    <>
                        <div className="col-1">
                            <Link to="#" onClick={signOutMethod} className="sign-in-button">로그아웃</Link>
                        </div>
                        <div className="col-1">
                            <Link to="/MyPage" className="sign-up-button">마이페이지</Link>
                        </div> 
                    </>
                    :
                    <>
                        <div className="col-1">
                            <Link to="/SignIn" className="sign-in-button">로그인</Link>
                        </div>
                        <div className="col-1">
                            <Link to="/SignUp" className="sign-up-button">회원가입</Link>
                        </div>
                    </> 
                }   
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

export const SearchPage = () => {
    return (
        <PageTemplate>
            <Search/>
        </PageTemplate>
    )
}

export const PlacePage = () => {
    return (
        <PageTemplate>
            <Place/>
        </PageTemplate>
    )
}

export const ProductPage = () => {
    return (
        <PageTemplate>
            <Product/>
        </PageTemplate>
    )
}

export const CityPage = () => {
    return (
        <PageTemplate>
            <City/>
        </PageTemplate>
    )
}