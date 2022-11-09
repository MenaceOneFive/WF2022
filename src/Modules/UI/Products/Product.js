import {useParams} from "react-router-dom";
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
    if (loading)
        return (<>{"Hold on, page will be ready soon"}</>)
    return (
        <div>
            <p>{JSON.stringify(room, null, 2)}</p>
        </div>
    )
}
