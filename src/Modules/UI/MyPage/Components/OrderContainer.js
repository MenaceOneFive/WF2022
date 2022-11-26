import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {EnumerateOrders} from "./EnumerateOrders";
import {Loading} from "../../Common/Loading";

export const OrderContainer = ({orders, loading}) => {
    if (loading)
        return (<Loading/>)
    else if (!loading && orders.length === 0) {
        return (
            <TableContainer sx={{minWidth: 800}} component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="Order-table">
                    <TableHead>
                        <TableRow>
                            <TableCell id="orderId" align="left">예약번호</TableCell>
                            <TableCell id="roomName" >숙소 이름</TableCell>
                            <TableCell id="startDate" align="left">입실일</TableCell>
                            <TableCell id="endDate" align="left">퇴실일</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )

    }
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