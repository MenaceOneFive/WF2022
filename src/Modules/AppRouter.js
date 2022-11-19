import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./UI/MainPage/MainPage";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import {getFBAuth, isSignedIn} from "./Firebase/FBAuth";
import {DrawBanner} from "./UI/MainPage/CarouselBanner";
import { SignUpPage } from "./UI/Common/SignUpPage";

function Home() {
    const signedIn = isSignedIn()
    return (
        <div className='app-container'>
            <header style={{height: 100}}>
                <div>
                    {signedIn ? getFBAuth().currentUser.displayName : ""}
                    {signedIn ? <SignOutButton/> : <ToSignInPageButton/>}
                    <br/>
                </div>
            </header>
            <section>
                <DrawBanner/>
                <MainPage/>
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
            </Routes>
        </BrowserRouter>
    )
}

