import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Navigate} from "react-router-dom";

export const GoogleSignInButton = () => {
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                GoogleAuthProvider.credentialFromResult(result);
            }).catch((error) => {
            console.error(error)
        });
    }
    if (getAuth().currentUser == null) {
        return (<button onClick={signIn}>로그인</button>)
    } else {
        console.log("이미 로그인되어 있습니다.")
        return (<Navigate to={"/"}/>)
    }
}