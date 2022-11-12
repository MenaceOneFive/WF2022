//<editor-fold desc="자료 정의">
import {v4} from "uuid";

export class Chat {
    constructor() {
        this.participants = [];
        this.messages = [];
        this.uuid = v4()
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