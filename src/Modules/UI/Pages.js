import {Link} from "react-router-dom";
import {RoomPageRoot} from "./MainPage/RoomPageRoot";
import {SignOutButton, ToSignInPageButton} from "./Common/SignInPage";
import {isSignedIn, useFBAuth} from "../FirebaseWrapper/FBAuth";
import {DrawBanner} from "./MainPage/Grid/Components/CarouselBanner";
import Flight from "../Search/Flight";
import {MyPageRoot} from "./MyPage/MyPageRoot";

import "./pages.css";
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
        <nav className="main-menu">
            <Link to="/" style={{marginLeft: "200px", fontSize: "25px"}}>
                호연지기 여행
            </Link>
            <Link to="/RoomPage" style={{marginLeft: "30px"}}>
                숙소
            </Link>
            <Link to="/FlightPage" style={{marginLeft: "30px"}}>
                항공권
            </Link>
            <Link to="/TourGuide" style={{marginLeft: "30px"}}>
                여행지
            </Link>

            <div style={{marginLeft: "200px"}}>검색</div>
            <div style={{marginLeft: "300px"}}>
                {isSignIn ? auth.currentUser.displayName : ""}
                {isSignIn ? <SignOutButton/> : <ToSignInPageButton/>}
                {isSignIn ? <Link to="/MyPage" style={{marginLeft: "30px"}}>
                    마이페이지
                </Link> : <Link to="/SignUp" style={{marginLeft: "30px"}}>
                    회원가입
                </Link>
                }
            </div>
        </nav>
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
