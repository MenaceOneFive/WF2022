import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPageRoot} from "./UI/MainPage/MainPageRoot";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import { SignUpPage } from "./UI/Common/SignUpPage";
import {getFBAuth, isSignedIn, useFBAuth} from "./FirebaseWrapper/FBAuth";
import {DrawBanner} from "./UI/Grid/Components/CarouselBanner";
import Flight from "./Search/Flight";
import {CheckoutRoot} from "./UI/Checkout/CheckoutRoot";
import {MyPageRoot} from "./UI/MyPage/MyPageRoot";
import {useEffect} from "react";

function Home() {
    const [auth, isSignIn] = useFBAuth();
    const signedIn = isSignedIn()
    return (
        <div className='app-container'>
            <header style={{height: 100}}>
                {isSignIn? auth.currentUser.displayName : ""}
                {isSignIn? <SignOutButton/> : <ToSignInPageButton/>}
                <br/>
            </header>
            <section>
                <DrawBanner/>
                <MainPageRoot/>
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
                <Route path="/SignUp" element={<SignUpPage/>}/>
                <Route path="/Product/:productID" element={<Product/>}/>
                <Route path="/Checkout/:checkout" element={<CheckoutRoot/>}/>
                <Route path="/MyPage" element={<MyPageRoot/>}/>
            </Routes>
        </BrowserRouter>
    )
}

