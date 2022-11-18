import React from "react";
import {useParams} from "react-router-dom";
import {useRoom, useRoomCollectionLength} from "../../hooks";

export const ProductReservation =() =>{
    const params = useParams();
    const [length, loading] = useRoomCollectionLength()
    const roomID = params.productID
    console.log(roomID)
    if (loading)
        return (<>{"ㄱㄷㄱㄷ"}</>)
    if(length < roomID)
        console.error("outOfIndexErr")
    return(<ProductDetail idx={roomID}/>)
}
export const ProductDetail = ({idx}) => {
    const [room, loading] = useRoom(idx)
    if (loading)
        return (<>{"Hold on"}</>)
    return(
        <>
            <h1>숙소예약</h1>
            <div>{room.id}</div>
            <div>{room.name}</div>
        </>
    )
 }