import {useEffect, useRef, useState} from "react";
import {collection, doc,  getDocs, getFirestore, onSnapshot, query, setDoc, where} from "firebase/firestore";
import {useFBAuth} from "../../FirebaseWrapper/FBAuth";
import {FBInit} from "../../FirebaseWrapper/FBInit";
import {Chat, ChatConverter} from "../../Classes/Chat";
import {Message} from "../../Classes/Message";


export const getCollection = () => {
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
                            const data = item.data()
                            return {id: item.id, ...data}
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
            const message = new Message()
            message.speaker = 1
            message.message = "Hello"
            message.itemType = "Text"
            GetUser(other).then((result) => {
                console.log(result)
                chat.nicknames = [result.nickname, auth.currentUser.displayName]
                chat.participants = [result.uid, myUid]
                chat.messages = [...chat.messages, message]
                setDoc(newChat.withConverter(ChatConverter), chat).then()
            })
        }
    }
    const GetUser = (uid) => new Promise(async (resolve, reject) => {
        const col = collection(getFirestore(), "users")
        const docRef = doc(col, uid)
        const q = query(col, where("uid", "==", uid))
        const res = await getDocs(q)
        if (res.docs.length === 0)
            reject("찾을 수 없는 사용자입니다.")
        resolve(res.docs[0].data())
    })

    return [chats, CreateChat]
}