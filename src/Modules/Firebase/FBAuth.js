import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {FBInit} from "./FBInit";

// TODO: Replace the following with your app's Firebase project configuration

export const FBAuthInit = (firebaseConfig) => {
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase Authentication and get a reference to the service
    return getAuth(app);
}
export const getFBAuth = () => {
    const {app} = FBInit()
    return getAuth(app);
}

export const isSignedIn = () => {
    const {app} = FBInit()
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    return (auth.currentUser !== null)
}


export const signOut = () => {
    if (!isSignedIn()) {
        getFBAuth().signOut().then()
    }
}