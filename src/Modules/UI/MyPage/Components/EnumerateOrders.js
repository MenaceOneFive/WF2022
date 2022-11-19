import CircularProgress from "@mui/material/CircularProgress";
import {DrawOrderItem} from "./DrawOrderItem";
import {Loading} from "../../Common/Loading";

/**
 * 주문내역을 목록화 하는 컴포넌트
 * @param orders
 * @param loading
 * @returns {{orders}}
 * @constructor
 */
export const EnumerateOrders = ({orders, loading}) => {
    if (loading) {
        return (<Loading/>)
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