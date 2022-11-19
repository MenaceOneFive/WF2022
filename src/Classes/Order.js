export class Order {
    constructor() {
        this.orderId = ""    //유저 평가한 별점
        this.roomId = ""
        this.startDate = ""
        this.endDate = ""
        this.UID = ""  //FirebaseUID
    }
}

export const OrderConverter = {
    toFirestore: (order) => {
        return {
            orderId: order.orderId,       //유저 평가한 별점
            roomId: order.roomId,
            startDate: order.startDate,
            endDate: order.endDate,
            UID: order.UID,        //FirebaseUID
        }
    }, fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options)
        const order = new Order();
        order.orderId = data.orderId       //유저 평가한 별점
        order.startDate = data.startDate
        order.endDate = data.endDate
        order.UID = data.UID        //FirebaseUID
        order.roomId = data.roomId
        return order
    }
}
