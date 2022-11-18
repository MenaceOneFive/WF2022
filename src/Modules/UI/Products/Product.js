import {useParams} from "react-router-dom";
import {useRoom, useRoomCollectionLength} from "../../hooks";
import {ProductReservation} from "./ProductResevation";
import { Link } from "react-router-dom";

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
    //이미지 불러오기
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
                        <li><img src={item} key={idx} /></li>
                    </ul>
                </>
                )
                 }
             )
         )
    }

    //가격출력
    const getRandom = (min, max) =>{
        let price = Math.floor(Math.random() * (max - min) + min) *10
        console.log(price)
        return price
    }
    //결과 화면
    return (
        <>
            <div><h2 className="room_title">{room.name}</h2></div>
            <div className={"images"}>{
                renderImage(room.images)
            }</div>
           
            <div className="room_dec">
                <p>{room.description}</p>
            </div>
            <div className={"facility"}>
                <h3>시설</h3>
                {renderFacilities(room.facility)}
            </div>
            <div><h3>가격 : {getRandom(3000, 50000)}</h3></div>
           <a href={`/reservation/${idx}`}><button>예약하러가기</button></a>
        </>
    )
}
 /*
        <div>
            <p>{JSON.stringify(room, null, 2)}</p>
        </div>
        //
        
        <div> <Link to="/reservation/:num"><button>예약하러가기</button></Link></div>
          <div>
                <Route path="/reseervation/:id">
                    <ProductReservation id={idx}/>
                    <div><Link to="/reservation/:id"><button>예약하러가기</button></Link></div>
                </Route>
            </div>
             <div> 
                <Link to={reservation_num}><button>예약하러가기</button></Link>
            </div>
 */
