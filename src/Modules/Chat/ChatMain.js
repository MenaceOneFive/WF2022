import {isSignedIn} from "../../FirebaseWrapper/FBAuth";
import {SignOutButton, ToSignInPageButton} from "../UI/Common/SignInPage";
import {Container} from "./Container";
import {useChat} from "./hooks";
import {getAuth} from "firebase/auth";


export const ChattingRoom = () => {
    const signedIn = isSignedIn()
    const [chats, CreateChat] = useChat()

    return (
        <>
            <h3>로그인</h3>
            {signedIn ? getAuth().currentUser.displayName : ""}
            {signedIn ? <SignOutButton/> : <ToSignInPageButton/>}
            <hr/>
            <button onClick={() => {
                CreateChat("aslkdjfl;kjzxkc;vjjzl;kjlqjllker")
            }}>채팅시작
            </button>
            <h4>채팅</h4>
            <Container chats={chats}/>
        </>
    )
}

