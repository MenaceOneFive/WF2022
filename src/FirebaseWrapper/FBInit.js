// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "Resources/FirebaseConfig.json"
import {FBAuthInit} from "./FBAuth";
// TODO: Add SDKs for FirebaseWrapper products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's FirebaseWrapper configuration
// For FirebaseWrapper JS SDK v7.20.0 and later, measurementId is optional

// Initialize FirebaseWrapper
export function FBInit()
{
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = FBAuthInit(firebaseConfig)
    return {app, analytics, auth}
}