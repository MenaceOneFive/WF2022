import './App.css';
import {MainPage} from "./Modules/UI/MainPage/MainPage";
import {GoogleSignIn, GoogleSignInButton} from "./Modules/Firebase/FBAuth";
import {useState} from "react";
import {getAuth} from "firebase/auth";
import {FBInit} from "./Modules/Firebase/FBInit";

function App() {
    FBInit()
    const [userState, setUserState] = useState(getAuth().currentUser)
    return (
        <>
            <MainPage userState={userState}/>
            <GoogleSignInButton setUser={setUserState}/>
            {/*<GetSnapshot/>*/}
            {/*<GetRooms/>*/}
        </>
        
    )
        ;
}

export default App;
