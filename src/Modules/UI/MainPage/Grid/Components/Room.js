import css from '../css/grid.css'
import {useWindowWidth,} from '@react-hook/window-size'

/**
 * 개별 방을 렌더링 하는 컴포넌트
 * @param loading 로딩 중?
 * @param room 방의 정보를 담는 Json객체
 * @param style 부모에게 상속받는 스타일
 * @param imageSrc 대표 이미지
 * @param setMouseEnter 마우스 위치에 따른 이미지 변화를 제어할 함수
 * @returns {JSX.Element}
 * @constructor
 */
export const Room = ({data, style, imageSrc, setMouseEnter}) => {
    const windowWidth = useWindowWidth()
    const room = data.room
    const loading = data.loading
    if (!loading)
        return (
            <div style={{
                ...style, transform: `translate(${(windowWidth / 2) - 300 * 2}px,0)`,
                padding: 20, position: "absolute"
            }}>
                <img src={imageSrc}
                     style={{width: '100%', height: '66.6%', position: "relative"}}
                     onMouseEnter={() => {
                         setMouseEnter(true)
                     }}
                     onMouseLeave={() => {
                         setMouseEnter(false)
                     }} alt={room.id}/>
                <hr/>
                <div style={{width: '100%', height: '33.3%', position: "relative"}}>
                    {room.name}</div>
            </div>)
    else return (
        //TODO: 꾸미기
        <></>
    )
}

export const CustomRoom = ({loading, room, style, imageSrc, setMouseEnter}) => {
    if (!loading)
        return (
            <div style={{...style}}>
                <img src={imageSrc} width={300} height={300} className="hotel-img"
                     onMouseEnter={() => {
                         setMouseEnter(true)
                     }}
                     onMouseLeave={() => {
                         setMouseEnter(false)
                     }} alt={room.id}/>
                <hr/>
            </div>)
    else return (
        //TODO: 꾸미기
        <>{"Loading!"}</>
    )
}