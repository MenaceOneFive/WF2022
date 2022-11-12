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
    return (
        <Conversation onClick={() => {
            onClick()
        }}>
            <Avatar src={""} name={""} status="available" style={style}/>
            <Conversation.Content name={`${chat.uuid.slice(0, 6)}`} lastSenderName="Lilly"
                                  info="Yes i can do it for you"
                                  style={style}/>
        </Conversation>
    )
}