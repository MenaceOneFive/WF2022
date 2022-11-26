import {useNavigate} from "react-router-dom";
import {TableCell, TableRow} from "@mui/material";
import '../css/MyPage.css'

/**
 * 조회한 개별의 주문을 렌더링
 * @param order
 * @constructor
 */
export const DrawOrderItem = ({order}) => {
    const navigator = useNavigate()
    return (
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component="th" id="orderId" scope="row" align={"left"}>{order.orderId}</TableCell>
            <TableCell id="roomName"  onClick={() => {
                navigator(`/Product/${order.key.substring(5).replace(']', '')}`)
            }}><span style={{cursor:"pointer"}}>{order.name}</span></TableCell>
            <TableCell id="startDate" align={"left"}>{order.startDate}</TableCell>
            <TableCell id="endDate" align={"left"}>{order.endDate}</TableCell>
        </TableRow>
    )
}