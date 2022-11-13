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
// <p>{JSON.stringify(room, null, 2)}</p>
export const ProductDetail = ({idx}) => {
    const [room, loading] = useRoom(idx)
    if (loading)
        return (<>{"Hold on, page will be ready soon"}</>)
//데이터 받기
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
const renderImage = (images) => {
    if (images == null)
        return (<></>)
    return (
        images.map(
            (item, idx) => {
                console.log(item);
                return (
                <>
                    <ul>
                        <li><img src={item} key={idx} width={200} height={100}/></li>
                    </ul>
                </>
                )
            }
        )
        )
}
    return (
        <>
            <div><h2>{room.name}</h2></div>
            <div>
            </div>
            <div className={"images"}>{
                renderImage(room.images)
            }</div>
           
            <div>
                <h3>설명 : {room.description}</h3>
            </div>
            <div className={"facility"}>
                <p><h2>시설</h2></p>
                {renderFacilities(room.facility)}
            </div>
        </>
    )
    /*
        <div>
            <p>{JSON.stringify(room, null, 2)}</p>
        </div>
    */
}
