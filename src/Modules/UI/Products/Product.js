import {useNavigate, useParams} from "react-router-dom";
import {useRoom, useRoomCollectionLength} from "../../hooks";
import {Loading} from "../Common/Loading";
import './css/product.css'
import Carousel from "./Carousel";
import DenseAppBar from "./RoomName";
import BasicTable from "./Facilities";
import AlertDialog from "./Description";
import BasicButtons from "./Reservation";
import {PageTemplate} from "../Pages";
import Paper from "@mui/material/Paper";
import {DatePickers} from "../Checkout/Components/DatePickers";
import {useState} from "react";
import dayjs, {Dayjs} from "dayjs";
import {ReviewSection} from "../../Review/UploadReview";

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

export const ProductDetail = ({idx}) => {
    const [room, loading] = useRoom(idx)
    const [startDate, setStartDate] = useState(dayjs())
    const [endDate, setEndDate] = useState(dayjs().add(1, 'day'))
    const navigate = useNavigate()
    if (loading) {
        return (<Loading/>)
    }
    //결과 화면
    return (
        <>
            <PageTemplate>
                <div className="container">
                    <article>
                        <Paper elevation={15}>
                            <DenseAppBar name={room.name}/>
                            <Carousel images={room.images}/>
                            <AlertDialog name={room.name} description={room.description}/>
                            <BasicTable facility={room.facility}/>
                        </Paper>
                        <ReviewSection idx={idx}/>
                    </article>
                    <aside>
                        <Paper sx={{width: '100px'}} elevation={12}>
                            <DatePickers start={{startDate, setStartDate}} end={{endDate, setEndDate}}></DatePickers>
                            <BasicButtons idx={idx}/>
                        </Paper>
                    </aside>
                </div>
            </PageTemplate>
        </>
    )
}
/*
    //시설 설명
    const renderFacilities = (facility) => {
        if (facility == null)
            return (<></>)
        return facility.map((object, idx) => {
            return (<>
                <ul key={idx}>
                    <li><h4>{object.head}</h4>
                        <ul>
                            {object.items.map((item, i) => {
                                return <li key={i}><h5>{item}</h5></li>
                            })}</ul>
                    </li>
                </ul>
                </>
             )
        })
    }
    //결과 화면
    return (
    <div><h2 className="room_title">{room.name}</h2></div>
                <Carousel images={room.images}/>
            <div className="room_dec">
                <p>{room.description}</p>
            </div>
            <div className={"facility"}>
                <h3>시설</h3>
                {renderFacilities(room.facility)}
            </div>
        <div>
            <button onClick={() => {
                navigate(`/Checkout/${idx}?startDate=${"1970-01-01"}&endDate=${"2022-11-18"}`)
            }}>예약하기</button>
        </div>
        )
*/
