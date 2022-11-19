import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {FBInit} from "./FBInit";
import {useEffect, useState} from "react";

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
 * 로그인을 관찰하는 훅
 * @returns {[Auth,boolean]} 인증 객체, isSignIn을 이용해서 상태를 확인할 것
 */
export const useFBAuth = () => {
    const [auth, setAuth] = useState(getAuth())
    const [isSignIn, setIsSignIn] = useState(false)
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((usr) => {
            if (usr.uid !== "") {
                setAuth(auth)
                setIsSignIn(true)
            } else {
                setAuth(auth)
                setIsSignIn(false)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])
    return [auth, isSignIn]
}

/**
 * 파이어베이스 인증 객체를 반환하는 함수
 * @deprecated getAuth를 사용할 것(파이어베이스에 있음)
 * @returns {Auth} 파이어베이스 인증 객체
 */
export const getFBAuth = () => {
    const {app} = FBInit()
    return getAuth(app);
}

/**
 * 사용자 로그인 여부를 확인하는 함수
 * @returns {boolean}
 */
export const isSignedIn = () => {
    const auth = getAuth();
    return (auth.currentUser !== null)
}

/**
 * 로그아웃 하는 함수
 */
export const signOut = () => {
    if (!isSignedIn()) {
        getAuth().signOut().then()
    }
}