import {getCollection} from "../Modules/Chat/hooks";
import {doc, setDoc} from "firebase/firestore";
import {ChatConverter} from "../Classes/Chat";

export const addMessageToChat = async (chat, message) => {
    const collection = getCollection()
    const docRef = doc(collection, `${chat.id}`)
    console.log(chat)
    chat.messages = [...chat.messages, message]
    await setDoc(docRef.withConverter(ChatConverter), chat)
}