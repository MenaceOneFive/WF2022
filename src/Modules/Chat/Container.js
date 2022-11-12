import {useCallback, useEffect, useMemo, useState} from "react";
// eslint-disable-next-line no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
    Avatar,
    ChatContainer,
    ConversationHeader,
    ConversationList,
    MainContainer,
    MessageInput,
    Sidebar
} from "@chatscope/chat-ui-kit-react";
import {ChatMSG} from "./ChatMSG";
import {ChatList} from "./ChatList";
import {addMessageToChat} from "../../FirebaseWrapper/writeMessage";
import {Message} from "../../Classes/Message";

export const Container = ({chats, style: styles}) => {
    styles = {...styles}
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [sidebarStyle, setSidebarStyle] = useState({});
    const [chatContainerStyle, setChatContainerStyle] = useState({});
    const [conversationContentStyle, setConversationContentStyle] = useState({});
    const [conversationAvatarStyle, setConversationAvatarStyle] = useState({});

    const handleBackClick = () => setSidebarVisible(!sidebarVisible);

    const [uuid, setUuid] = useState("")

    const currentRoom = useMemo(() => {
        if (chats.length > 0) {
            const chat = chats.find((item) => item.uuid === uuid)
            return (ChatMSG({chat, styles}))
        }
    }, [chats, uuid])
    const chatList = () => {
        if (chats.length > 0)
            return chats.map(
                (item, idx) =>
                    ChatList({
                        chat: item,
                        key: idx,
                        style: {...styles, conversationAvatarStyle, conversationContentStyle},
                        onClick: () => {
                            setUuid(item.uuid)
                        }
                    }))
    }

    const handleConversationClick = useCallback(() => {
        if (sidebarVisible) {
            setSidebarVisible(false);
        }
    }, [sidebarVisible, setSidebarVisible]);
    const sendMessage = (msg) => {
        const chat = chats.find((item) => item.uuid === uuid)
        if (chat !== undefined)
            addMessageToChat(chat, msg).then()
        console.log()

    }
    useEffect(() => {
        if (sidebarVisible) {
            setSidebarStyle({
                display: "flex",
                flexBasis: "auto",
                width: "100%",
                maxWidth: "100%"
            });
            setConversationContentStyle({
                display: "flex"
            });
            setConversationAvatarStyle({
                marginRight: "1em"
            });
            setChatContainerStyle({
                display: "none"
            });
        } else {
            setSidebarStyle({});
            setConversationContentStyle({});
            setConversationAvatarStyle({});
            setChatContainerStyle({});
        }
    }, [sidebarVisible, setSidebarVisible, setConversationContentStyle, setConversationAvatarStyle, setSidebarStyle, setChatContainerStyle]);
    return <div style={{height: "600px", position: "relative"}}>
        <MainContainer responsive>
            <Sidebar position="left" scrollable={false} style={sidebarStyle}>
                <ConversationList>
                    {chatList()}
                </ConversationList>
            </Sidebar>

            <ChatContainer style={chatContainerStyle}>
                <ConversationHeader>
                    <ConversationHeader.Back onClick={handleBackClick}/>
                    <Avatar src={""} name="Zoe"/>
                    <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago"/>
                </ConversationHeader>
                {currentRoom}
                <MessageInput placeholder="여기에 입력하세요." sendDisabled={false}
                              onSend={(innerHtml, textContent, innerText) => {
                                  const msg = new Message()
                                  msg.message = innerText
                                  msg.timestamp = Date.now() / 1000
                                  msg.itemType = "Text"
                                  msg.speaker = 1
                                  console.log("Clicked")
                                  sendMessage(msg)
                              }}/>
            </ChatContainer>
        </MainContainer>
    </div>
}

