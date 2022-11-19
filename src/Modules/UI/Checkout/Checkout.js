import {useLocation, useParams} from "react-router-dom";
import {useRoom} from "../../hooks";
import {addDoc, collection, doc, getFirestore, setDoc} from "firebase/firestore";
import {Order, OrderConverter} from "../../../Classes/Order";
import {getFBAuth} from "../../../FirebaseWrapper/FBAuth";
import {FBInit} from "../../../FirebaseWrapper/FBInit";

export const Checkout = () => {
    const params = useParams()
    const location = useLocation()
    const [room, loading] = useRoom(params.checkout)
    const searchParams = new URLSearchParams(location.search)
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    if (loading) return (<> 로딩 중</>)
    return (
        <>
            <p>{JSON.stringify(room, null, 4)}</p>
            <p>{room.name}</p>
            <p>시작일 : {startDate} 부터</p>
            <p>종료일 : {endDate} 까지</p>
            <button onClick={() => {
                alert(`${room.id}`)
                const order = new Order();
                order.UID = getFBAuth().currentUser.uid
                order.startDate = startDate
                order.endDate= endDate
                order.roomId = room.id
                order.orderId = "asdfff"
                createOrder(order)
            }}>결제하기
            </button>
        </>
    )

}

const createOrder = (order) => {
    const firestore = getFirestore(FBInit().app)
    const orderRef = collection(firestore, "orders")
    const docRef = doc(orderRef)
    setDoc(docRef.withConverter(OrderConverter), order).then()
}