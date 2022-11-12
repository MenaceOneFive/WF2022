export class Message {
    constructor() {
        this.speaker = 0//Int_Type
        this.itemType = "Text"
        this.message = ""
        this.timestamp = 0
    }

}

export const MessageConverter = {
    toFirestore: (msg) => {
        return {
            speaker: msg.speaker,
            itemType: msg.itemType,
            message: msg.message,
            timestamp: Date.now()/1000
        }
    }, fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        const msg = new Message();
        msg.message = data.message;
        msg.itemType = data.itemType;
        msg.speaker = data.speaker;
        msg.timestamp = data.timestamp
        return msg
    }


}
//</editor-fold>
