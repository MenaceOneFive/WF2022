import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage, SignOutButton, ToSignInPageButton} from "./UI/Common/SignInPage";
import { SignUpPage } from "./UI/Common/SignUpPage";
import {getFBAuth, isSignedIn, useFBAuth} from "./FirebaseWrapper/FBAuth";
import Flight from "./Search/Flight";
import {City} from "./TourGuide/City";
import {Place} from './TourGuide/Place';
import {CheckoutRoot} from "./UI/Checkout/CheckoutRoot";
import {FlightPage, Home, MyPage, RoomPage, SearchPage, TourGuidePage, Welcome} from "./UI/Pages";


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
                <Route path="/TourGuide" element={<TourGuidePage/>} />
                <Route path="/RoomPage" element={<RoomPage/>} />
                <Route path="/Search/:searchText" element={<SearchPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

