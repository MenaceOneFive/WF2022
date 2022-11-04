import './App.css';
import {MainPage} from "./Modules/UI/MainPage/MainPage";
import {GoogleSignIn, GoogleSignInButton} from "./Modules/Firebase/FBAuth";
import {useState} from "react";
import {getAuth} from "firebase/auth";
import {FBInit} from "./Modules/Firebase/FBInit";
import {ImportJsonButton} from "./Modules/Firebase/UsefulButtons";

function App() {
    FBInit()
    const [userState, setUserState] = useState(getAuth().currentUser)
    return (
        <>
            <div className='app-container'>
                <MainPage/>
            <GoogleSignInButton setUser={setUserState}/>
            </div>
        </>
        
    )
        ;
}

export default App;
