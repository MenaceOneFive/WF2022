import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./UI/MainPage/MainPage";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import {isSignedIn} from "../FirebaseWrapper/FBAuth";
import {DrawBanner} from "./UI/MainPage/CarouselBanner";
import Flight from "./Search/Flight";
import {ChattingRoom} from "./Chat/Chat";
import {getAuth} from "firebase/auth";

function Home() {
    const signedIn = isSignedIn()
    return (
        <div className='app-container'>
            <header style={{height: 200}}>
                <h1>기능 테스트</h1><br/>
                    <h3>로그인</h3>
                    {signedIn ? getAuth().currentUser.displayName : ""}
                    {signedIn ? <SignOutButton/> : <ToSignInPageButton/>}
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

const Welcome = () => {
    return (<p>Welcome</p>)
}

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Welcome" element={<Welcome/>}/>
                <Route path="/Test" element={<TestPage/>}/>
                <Route path="/SignIn" element={<SignInPage/>}/>
                <Route path="/Chat" element={<ChattingRoom/>}/>
                <Route path="/Product/:productID" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    )
}

