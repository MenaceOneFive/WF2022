import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {FBInit} from "./FBInit";

import {collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore";
import {getFirestore} from 'firebase/firestore'

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

export const isOverlapUsername = async (_username) => {
    var flag = false
    
    const {app} = FBInit()
    const db = getFirestore(app);
    const docRef = collection(db, "users");
    await getDocs(docRef).then((result) => {
        result.forEach((user) => {
            const data = user.data();
            if(data.username === _username) {
                console.log("search is success");
                flag = true
            }
        }
        )
    })
    
    return flag
}

export const addUserToDB = (_username, _email, _uid) => {
    const {app} = FBInit()
    const db = getFirestore(app);
    addDoc(collection(db, "users"), {
        username: _username,
        email: _email,
        uid: _uid
    }).then((result) => {
        console.log(`add user info to DB. doc ID: [${result.id}]`)
    })
}