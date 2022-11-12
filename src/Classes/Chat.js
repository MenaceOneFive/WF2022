//<editor-fold desc="자료 정의">
import {v4} from "uuid";
import { MessageConverter} from "./Message";

export class Chat {
    constructor() {
        this.participants = [];
        this.nicknames = []
        this.messages = [];
        this.uuid = v4()
    }
}

export const ChatConverter = {
    toFirestore: (chat) => {
        return {
            participants: [...chat.participants],
            nicknames:[...chat.nicknames],
            messages: chat.messages.map(
                (item) => {
                    return MessageConverter.toFirestore(item)
                }
            ),
            uuid: chat.uuid
        }
    },
    fromFirestore: (snapshot, options) => {
        const {fromFirestore} = MessageConverter
        const data = snapshot.data(options)
        const chat = new Chat();
        chat.participants = data.participants
        chat.nicknames = data.nicknames
        chat.messages = data.messages.map(
            (item) => {
                console.log(item)
                return fromFirestore(item)
            }
        );
        chat.uuid = data.uuid;
        return chat
    }
}