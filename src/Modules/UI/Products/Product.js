import {useNavigate, useParams} from "react-router-dom";
import {useRoom, useRoomCollectionLength} from "../../hooks";
import {Loading} from "../Common/Loading";
import './css/product.css'
import Carousel from "./Carousel";
import DenseAppBar from "./RoomName";
import SimpleAccordion from "./Facilities"
import AlertDialog from "./Description";
import BasicButtons from "./Reservation";
import Paper from "@mui/material/Paper";
import {DatePickers} from "../Checkout/Components/DatePickers";
import {useState} from "react";
import dayjs from "dayjs";
import {ReviewSection} from "../../Review/ReviewSection";

/**
 * 개별 숙소에 대한 로딩과 링크 검증을 담당하는 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */
export const Product = () => {
    const params = useParams();
    const [length, loading] = useRoomCollectionLength()
    const roomID = params.productID
    //TODO: roomID를 검증해서 범위에서 벗어나면 강제로 이동시킬 것
    if (loading) {
        return (<Loading/>)
    }
    if (length < roomID)
        console.error("outOfIndexErr")
    return (<ProductDetail idx={roomID}/>)
}

/**
 * 개별 숙소에 대한 상세 정보를 렌더링 하는 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */
export const ProductDetail = ({idx}) => {
    const [room, loading] = useRoom(idx)
    const today = dayjs()
    today.second(0).valueOf()
    today.hour(0).valueOf()
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today.add(1, 'day'))
    const navigate = useNavigate()
    if (loading) {
        return (<Loading/>)
    }
    //결과 화면
    return (
        <div className="container">
            <article>
                <Paper elevation={15}>
                    <DenseAppBar name={room.name}/>
                    <Carousel images={room.images}/>
                    <AlertDialog name={room.name} description={room.description}/>
                    <SimpleAccordion facility={room.facility}/>
                </Paper>
                <ReviewSection idx={idx}/>
            </article>
            <aside>
                <Paper sx={{width: '100px'}} elevation={12}>
                    <DatePickers start={{startDate, setStartDate}} end={{endDate, setEndDate}}></DatePickers>
                    <BasicButtons idx={idx} startDate={startDate.format("YYYY-MM-DD")} endDate={endDate.format("YYYY-MM-DD")}/>
                </Paper>
            </aside>
        </div>
    )
}
