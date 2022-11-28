export class Order {
    constructor() {
        this.orderId = ""       //유저 평가한 별점
        this.roomId = ""        //숙소의 고유 정보
        this.startDate = ""     //입실일
        this.endDate = ""       //퇴실일
        this.UID = ""           //FirebaseUID- 로그인 정보
    }
}

/**
 * 파이어스토어에서 자료를 가져오거나 보낼 때 변환을 담당하는 객체
 * @type {{toFirestore: (function(*): {UID: *, orderId: *, endDate: *, roomId: *, startDate: *}), fromFirestore: (function(*, *): Order)}}
 */
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
