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
export const Room = ({loading, room, style, imageSrc, setMouseEnter}) => {
    if (!loading)
        return (
            <div style={{...style, padding: 20}}>
                <img src={imageSrc} width={200} height={300}
                     onMouseEnter={() => {
                         setMouseEnter(true)
                     }}
                     onMouseLeave={() => {
                         setMouseEnter(false)
                     }} alt={room.id}/>
                <hr/>
                <div style={{width: 200, height: 100}}>{room.name}</div>
            </div>)
    else return (
        //TODO: 꾸미기
        <>{"Loading!"}</>
    )
}