import {isSignedIn} from "../../FirebaseWrapper/FBAuth";
import {SignOutButton, ToSignInPageButton} from "../UI/Common/SignInPage";
import {v4} from 'uuid'
import {Container} from "./Container";
import {useChat} from "./hooks";
import {getAuth} from "firebase/auth";

//<editor-fold desc="자료 정의">
export class Chat {
    constructor() {
        this.participants = [];
        this.messages = [];
        this.uuid = v4()
    }
}

export class Message2 {
    constructor() {
        this.speaker = null;
        this.itemType = "Text"
        this.item = ""
    }

}

export const ChatConverter = {
    toFirestore: (chat) => {
        return {
            participants: chat.participants,
            messages: chat.messages,
            uuid: chat.uuid
        }
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options)
        const chat = new Chat();
        chat.participants = data.participants;
        chat.messages = data.messages;
        chat.uuid = data.uuid;
    }
}
export const MessageConverter = {
    toFirestore: (msg) => {
        return {
            speaker: msg.speaker,
            itemType: msg.itemType,
            item: msg.item

        }
    }, fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        const msg = new Message2();
        msg.item = data.item;
        msg.itemType = data.itemType;
        msg.speaker = data.speaker;
        return msg
    }


}
//</editor-fold>

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

