import {Avatar, Conversation} from "@chatscope/chat-ui-kit-react";

/**
 * 채팅방 목록을 렌더링하는 컴포넌트
 * @param chat
 * @param style
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
export const ChatList = ({chat, style, onClick = f => f}) => {
    const participants = chat.participants
    const nicknames = chat.nicknames
    const messages = chat.messages
    return (
        <Conversation onClick={() => {
            onClick()
        }}>
            <Avatar src={""} name={""} status="available" style={style}/>
            <Conversation.Content name={`${nicknames[0]}`} lastSenderName="Lilly"
                                  info={`${messages[0].message}`}
                                  style={style}/>
        </Conversation>
    )
}