import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Navigate } from "react-router-dom";
import {useState} from "react";
import {collection, doc, getFirestore, setDoc} from "firebase/firestore";
import {User, UserConverter} from "../Classes/User";

export const GoogleSignInButton = () => {
    const [redirect, setRedirect] = useState(false)
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                GoogleAuthProvider.credentialFromResult(result);
                setRedirect(true)
                if(result.additionalUserInfo.isNewUser)
                {
                    const col = collection(getFirestore(),"users")
                    const usr = new User()
                    usr.uid = result.user.uid
                    usr.nickname = result.user.displayName
                    const docRef = doc(col, `${result.user.uid}`)
                    setDoc(docRef.withConverter(UserConverter), usr).then()
                }
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