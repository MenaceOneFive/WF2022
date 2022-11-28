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
import {CityPage, FlightPage, Home, MyPage, PlacePage, ProductPage, RoomPage, SearchPage, TourGuidePage, Welcome} from "./UI/Pages";


// 전체 라우팅 path를 지정하는 컴포넌트
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/SignIn" element={<SignInPage/>}/>
                <Route path="/CityDetail/:cityeng" element={<CityPage/>}/>
                <Route path="/CityDetail/Place/:namecode" element={<PlacePage/>}/>
                <Route path="/SignUp" element={<SignUpPage/>}/>
                <Route path="/Product/:productID" element={<ProductPage/>}/>
                <Route path="/Checkout/:checkout" element={<CheckoutRoot/>}/>
                <Route path="/MyPage" element={<MyPage/>}/>
                <Route path="/FlightPage" element={<FlightPage />} />
                <Route path="/TourGuide" element={<TourGuidePage/>} />
                <Route path="/RoomPage" element={<RoomPage/>} />
                <Route path="/Search/:searchText" element={<SearchPage/>} />
                <Route path="/Search" element={<SearchPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

