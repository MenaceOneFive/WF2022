import {useRoom} from "../../hooks";
import {useEffect, useRef, useState} from "react";
import {CustomRoom, Room} from "./Room";

export const RoomHolder = ({idx, style}) => {
    const [data, loading] = useRoom(idx)
    const [imgIdx, setImgIdx] = useState(0)
    const [mouseEnter, setMouseEnter] = useState(false)
    const savedCallback = useRef()

    const updateIDX = () => {
        if (!loading && mouseEnter)
            setImgIdx((imgIdx + 1) % data.images.length)
    } //리액트에서 setInterval을 사용하기 위한 방법 (1)

    savedCallback.current = updateIDX //리액트에서 setInterval을 사용하기 위한 방법 (2)
    useEffect(
        () => {
            const tick = () => (savedCallback.current())  //리액트에서 setInterval을 사용하기 위한 방법 (3)
            let timer = setInterval(tick, 2000)  // 일정시간마다 사진의 인덱스를 바꿈 -> 다시 렌더링
            return () => {
                clearInterval(timer)
            } // 소멸시 Clean up
        }, []);
    return (
        <a href={`/Product/${idx}`}>
            <Room loading={loading} room={data} imageSrc={loading ? "" : data.images[imgIdx]} style={style}
                  setMouseEnter={setMouseEnter}/></a>)
}