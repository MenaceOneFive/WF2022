import {useEffect, useRef, useState} from "react";
import {collection, doc, getFirestore, onSnapshot, query, setDoc, where} from "firebase/firestore";
import {useFBAuth} from "../../FirebaseWrapper/FBAuth";
import {Chat, ChatConverter} from "./Chat";
import {FBInit} from "../../FirebaseWrapper/FBInit";


const getCollection = () => {
    const {app} = FBInit()
    return collection(getFirestore(app), 'chat')
}

export const useChat = () => {
    const [chats, setChats] = useState([])
    const [auth, isSignedIn] = useFBAuth()
    const detach = useRef();

    //<editor-fold desc="현재 사용자가 참여하고 있는 모든 채팅방에 대해 구독(Observer)">
    useEffect(() => {
            if (isSignedIn === true && auth.currentUser != null) {
                const q = query(getCollection(),
                    where("participants", "array-contains", auth.currentUser.uid))
                detach.current = onSnapshot(q, (snapshot) => {
                    setChats(snapshot.docs.map(
                        (item) => {
                            console.log(item)
                            const data = item.data()
                            return {id: item.id, uuid: data.uuid, data: data}
                        }))
                })
            }
        }, [isSignedIn]
    )
    useEffect(() => {
        return () => {
            if (detach.current !== undefined)
                detach.current()
        }
    }, [])
    //</editor-fold>

    /**
     *
     * @param other 다른 사용자의 파이어베이스 UID
     * @constructor
     */
    const CreateChat = (other) => {
        //Create new chat data
        if (isSignedIn) {
            const newChat = doc(getCollection());
            const myUid = auth.currentUser.uid
            const chat = new Chat();
            chat.participants = [other, myUid]
            setDoc(newChat.withConverter(ChatConverter), chat).then()
        }
    }

    return [chats, CreateChat]
}