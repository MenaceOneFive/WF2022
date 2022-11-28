import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {FBInit} from "../../../FirebaseWrapper/FBInit";

/**
 * 사용자의 주문내역을 파이어스토어에서 가져오는 훅
 * @param uid 조회할 사용자의 UID
 * @returns {[ * [],boolean]} 주문정보, 로딩 여부
 */
export const useOrderHistory = (uid) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
            const colRef = collection(getFirestore(FBInit().app), "orders")
            const qu = query(colRef, where("UID", "==", uid))
            const res = async () => {
                const query = await getDocs(qu)
                let array = []
                for (let i = 0; i < query.docs.length; i++) {
                    const room = await getRoomInfo(query.docs[i].data().roomId)
                    array = [...array, {key: room.id, ...query.docs[i].data(), ...room.data()}]
                }
                setOrders(array)
                setLoading(false)
            }
            const getRoomInfo = async (roomId) => {
                const res = await getDocs(
                    query(
                        collection(getFirestore(), "rooms"), where("id", "==", roomId.toString()
                        )))
                return (res.docs.length > 0) ? res.docs[0] : ""
            };
            res().then(
                setLoading(false)
                //Do nothing
            );
        }
        , [uid])

    return [orders, loading];
}