import {useNavigate} from "react-router-dom";
import {getFBAuth, isSignedIn, signOut} from "../../Firebase/FBAuth";
import {GoogleSignInButton} from "../../Firebase/GoogleSignInButton";

export const SignInPage = () => {
    console.log(getFBAuth().currentUser.displayName)
    return (
        <div>
            <h1>{"환영합니다"}</h1>
            <p>로그인하기</p>
            <GoogleSignInButton/>
        </div>
    )

}

export const ToSignInPageButton = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate("/SignIn")
        }}>
            로그인
        </button>
    )
}

export const SignOutButton = () => {
    return (
        <button onClick={() => {
            signOut()
            window.location.reload()
        }}>로그아웃</button>
    )
}

export const DrawSignButton = () => {
    return isSignedIn() ? <SignOutButton/> : <ToSignInPageButton/>
}