import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Navigate } from "react-router-dom";
import {useState} from "react";

export const GoogleSignInButton = () => {
    const [redirect, setRedirect] = useState(false)
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                GoogleAuthProvider.credentialFromResult(result);
                setRedirect(true)
            }).catch((error) => {
            console.error(error)
        });
    }
    if (getAuth().currentUser == null || redirect === false) {
        return (<button onClick={signIn}>로그인</button>)
    } else {
        console.log("이미 로그인되어 있습니다.")
        return (<Navigate to={"/"}/>)
    }
}