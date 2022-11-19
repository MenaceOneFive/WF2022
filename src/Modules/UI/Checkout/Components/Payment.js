import {Chip} from "@mui/material";
import '../css/Payment.css'
export const Payment = ({current, set}) => {
    return (<div className='payment-method'>
        <Chip label="현장 결제" variant={current === "현장 결제"?"outlined":""} onClick={() => {
                set("현장 결제")
        }} />
        <Chip label="신용카드" variant={current === "신용카드"?"outlined":""} onClick={() => {
            set("신용카드")
        }} />
        <Chip label="무통장입금" variant={current === "무통장입금"?"outlined":""} onClick={() => {
            set("무통장입금")
        }} />
    </div>)
}