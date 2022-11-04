import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {useState} from "react";

// TODO: Replace the following with your app's Firebase project configuration

export const FBAuthInit = (firebaseConfig) => {
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    return auth
}

export const GoogleSignInButton = ({setUser}) => {
    const signOut = () => {
        const auth = getAuth();
        auth.signOut().then(r => {
            setUser(null)
        })
    }
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                setUser(result.user)
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    if (getAuth().currentUser == null) {
        return (<button onClick={signIn}>로그인</button>)
    } else {
        return (<button onClick={signOut}>로그아웃</button>)
    }
}
