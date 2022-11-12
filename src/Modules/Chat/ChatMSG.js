import {Message, MessageList} from "@chatscope/chat-ui-kit-react";
import {getAuth} from "firebase/auth";

/**
 * 채팅방의 개별 채팅요소를 렌더링 하는 컴포넌트
 * @param chat
 * @param styles
 * @returns {JSX.Element}
 * @constructor
 */
export const ChatMSG = ({chat, styles}) => {
    if (chat === undefined || chat == null) {
        return (<MessageList style={styles}></MessageList>)
    }
    let currentUser = getAuth().currentUser
    let participants = chat.data.participants
    let messages = chat.data.messages
    if (currentUser == null) {               //현재 사용자가 null이면 로그인 필요
        console.error("로그인이 필요합니다")
        return (<MessageList style={styles}></MessageList>)
    }

    const me = participants.filter((item) => item === currentUser.uid)
    if (me.length === 0) {
        console.error("해당 채팅에 대한 접근 권한이 없습니다.")
        return (<MessageList style={styles}></MessageList>)
    }

    const myIDX = participants.findIndex((item) => item === currentUser.uid)
    const otherIDX = myIDX === 0 ? 1 : 2

    return (
        <MessageList style={styles}>{
            messages.map(
                (item, idx) =>
                    <Message key={idx} model={{
                        message: `${item}`,
                        sentTime: "15 mins ago",
                        sender: "Zoe",
                        direction: "incoming",
                        position: "single"
                    }}/>)}
        </MessageList>)
}