import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./UI/MainPage/MainPage";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import {getFBAuth, isSignedIn} from "../FirebaseWrapper/FBAuth";
import {DrawBanner} from "./UI/MainPage/CarouselBanner";
import Flight from "./Search/Flight";

function Home() {
    const signedIn = isSignedIn()
    return (
        <div className='app-container'>
            <header style={{height: 100}}>
                {signedIn ? getFBAuth().currentUser.displayName : ""}
                {signedIn ? <SignOutButton/> : <ToSignInPageButton/>}
                <br/>
            </header>
            <section>
                <Flight/>
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
                <Route path="/Product/:productID" element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    )
}

