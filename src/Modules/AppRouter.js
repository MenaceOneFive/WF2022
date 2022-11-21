import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./UI/MainPage/MainPage";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import {getFBAuth, isSignedIn} from "../FirebaseWrapper/FBAuth";
import {DrawBanner} from "./UI/MainPage/CarouselBanner";
import Flight from "./Search/Flight";
import {TourGuide} from "./TourGuide/TourGuide";
import {City} from "./TourGuide/City";
import {Place} from './TourGuide/Place';

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
                <TourGuide />
                {/* <DrawBanner/>
                <MainPage/> */}
            </section>
        </div>
    )
}

const Welcome = () => {
    return (<p>Welcome</p>)
}
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import { SignUpPage } from "./UI/Common/SignUpPage";
import {getFBAuth, isSignedIn, useFBAuth} from "./FirebaseWrapper/FBAuth";
import {DrawBanner} from "./UI/MainPage/Grid/Components/CarouselBanner";
import Flight from "./Search/Flight";
import {CheckoutRoot} from "./UI/Checkout/CheckoutRoot";
import {useEffect} from "react";
import { FlightPage, Home, MyPage, RoomPage, Welcome } from "./UI/Pages";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Welcome" element={<Welcome/>}/>
                <Route path="/Test" element={<TestPage/>}/>
                <Route path="/SignIn" element={<SignInPage/>}/>
                <Route path="/Product/:productID" element={<Product/>}/>
                <Route path="/CityDetail/:cityeng" element={<City/>}/>
                <Route path="/CityDetail/Place/:namecode" element={<Place/>}/>
                <Route path="/SignUp" element={<SignUpPage/>}/>
                <Route path="/Product/:productID" element={<Product/>}/>
                <Route path="/Checkout/:checkout" element={<CheckoutRoot/>}/>
                <Route path="/MyPage" element={<MyPage/>}/>
                <Route path="/FlightPage" element={<FlightPage />} />
                <Route path="/RoomPage" element={<RoomPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

