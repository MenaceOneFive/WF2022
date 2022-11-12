import {useFBAuth} from "../../FirebaseWrapper/FBAuth";
import {SignOutButton, ToSignInPageButton} from "./Common/SignInPage";
import Flight from "../Search/Flight";
import {DrawBanner} from "./MainPage/CarouselBanner";
import {MainPage} from "./MainPage/MainPage";

export const Home = () => {
    const [auth, isSignIn] = useFBAuth()
    return (
        <div className='app-container'>
            <header style={{height: 200}}>
                <h1>기능 테스트</h1><br/>
                <h3>로그인</h3>
                {isSignIn ? auth.currentUser.displayName : ""}
                {isSignIn ? <SignOutButton/> : <ToSignInPageButton/>}
                <hr/>
            </header>
            <section>
                <h3>항공권 찾기</h3>
                <Flight/>
                <hr/>
                <h3>배너</h3>
                <DrawBanner/>
                <hr/>
                <h3>숙소</h3>
                <MainPage/>
                <hr/>
            </section>
        </div>
    )
}