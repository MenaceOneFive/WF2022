import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {FBInit} from "./FBInit";

// TODO: Replace the following with your app's FirebaseWrapper project configuration

/**
 * 설정파일을 사용해서 파이어베이스를 초기화하고 파이어베이스인증 객체를 반환
 * @param firebaseConfig 파이어베이스 설정
 * @returns {Auth}  파이어베이스 인증
 * @constructor
 */
export const FBAuthInit = (firebaseConfig) => {
    const app = initializeApp(firebaseConfig);
    // Initialize FirebaseWrapper Authentication and get a reference to the service
    return getAuth(app);
}

/**
 * 파이어베이스 인증 객체를 반환하는 함수
 * @returns {Auth} 파이어베이스 인증 객체
 */
export const getFBAuth = () => {
    const {app} = FBInit()
    return getAuth(app);
}

export const isSignedIn = () => {
    const {app} = FBInit()
    // Initialize FirebaseWrapper Authentication and get a reference to the service
    const auth = getAuth(app);
    return (auth.currentUser !== null)
}


export const signOut = () => {
    if (!isSignedIn()) {
        getFBAuth().signOut().then()
    }
}