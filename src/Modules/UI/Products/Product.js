import {useNavigate, useParams} from "react-router-dom";
import {useRoom, useRoomCollectionLength} from "../../hooks";

export const Product = () => {
    const params = useParams();
    const [length, loading] = useRoomCollectionLength()
    const roomID = params.productID
    console.log(roomID)
    //TODO: roomID를 검증해서 범위에서 벗어나면 강제로 이동시킬 것
    if (loading)
        return (<>{"Hold on, page will be ready soon"}</>)
    if(length < roomID)
        console.error("outOfIndexErr")
    return (<ProductDetail idx={roomID}/>)
}

export const ProductDetail = ({idx}) => {
    const [room, loading] = useRoom(idx)
    const navigate = useNavigate()
    if (loading)
        return (<>{"Hold on, page will be ready soon"}</>)
    return (
        <div>
            <button onClick={() => {
                navigate(`/Checkout/${idx}?startDate=${"1970-01-01"}&endDate=${"2022-11-18"}`)
            }}>예약하기</button>
            <p>{JSON.stringify(room, null, 2)}</p>
        </div>
    )
}
