import {useFBAuth} from "../../../FirebaseWrapper/FBAuth";
import {useEffect, useState} from "react";
import {collection, getDoc, getFirestore} from "firebase/firestore";
import {FBInit} from "../../../FirebaseWrapper/FBInit";
import {where, query, getDocs} from 'firebase/firestore'
import CircularProgress from '@mui/material/CircularProgress';
import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import css from './MyPage.css'
import {useNavigate} from "react-router-dom";

export const MyPageRoot = () => {
    const [auth, isSignIn] = useFBAuth()
    const [orders, loading] = useOrderHistory(isSignIn ? auth.currentUser.uid : "")
    if (!isSignIn) {
        return (
            <>
                <p>로딩중</p>
            </>
        )
    }
    return (
        <Container maxWidth={"sm"}>
            <OrderContainer orders={orders} loading={loading}/>
        </Container>
    )


}
export const OrderContainer = ({orders, loading}) => {
    return (
        <TableContainer sx={{minWidth: 800}} component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="Order-table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">예약번호</TableCell>
                        <TableCell align="left">숙소 이름</TableCell>
                        <TableCell align="left">입실일</TableCell>
                        <TableCell align="left">퇴실일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <EnumerateOrders orders={orders} loading={loading}/>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
/**
 * 주문내역을 목록화 하는 컴포넌트
 * @param orders
 * @param loading
 * @returns {{orders}}
 * @constructor
 */
export const EnumerateOrders = ({orders, loading}) => {
    if (loading) {
        return (<CircularProgress/>)
    } else if (!loading && orders.length === 0) {
        return (<>
            <CircularProgress/>
        </>)
    } else if (!loading && orders.length > 0) {
        return (
            <>{
                orders.map((item, idx) =>
                    <DrawOrderItem key={idx} order={item}/>
                )
            }</>
        )
    }

}
/**
 * 조회한 개별의 주문을 렌더링
 * @param order
 * @constructor
 */
export const DrawOrderItem = ({order}) => {
    const navigator = useNavigate()
    return (
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component="th" scope="row" align={"left"}>{"aldkfjalskdjflkjasdflakjsdlfjlaks"}</TableCell>
            <TableCell align={"left"} onClick={() => {
                navigator(`/Product/${order.key.substring(5).replace(']', '')}`)
            }}>{order.name}</TableCell>
            <TableCell align={"left"}>{order.startDate}</TableCell>
            <TableCell align={"left"}>{order.endDate}</TableCell>
        </TableRow>
    )
}

/**
 *
 * @param uid 조회할 사용자의 UID
 * @returns {[*[],boolean]} 주문정보, 로딩 여부
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
                //Do nothing
            );
        }
        , [uid])

    return [orders, loading];
}