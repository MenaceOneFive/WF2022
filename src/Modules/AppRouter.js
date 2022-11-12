import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Product} from "./UI/Products/Product";
import {TestPage} from "./TestPage";
import {SignInPage} from "./UI/Common/SignInPage";
import {ChattingRoom} from "./Chat/ChatMain";
import {Home} from "./UI/Home";

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

