import { useParams } from "react-router-dom";
import { Map } from './Map';
import tourData from '../../Data/tourData';
import Carousel from "./Slider";
import "./css/place.css"
import "./css/reset.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

export const Place = () => {

    const params = useParams();
    const placename = params.namecode;
    
    return (<PlaceDetail placename={placename}/>)
}

export const PlaceDetail = ({placename}) => {

  const detail = tourData.filter(data => data.namecode === placename)[0];
  const markers = tourData.filter(data => data.cityeng === detail.cityeng);

  return (
    <div className="PlaceDetail">
      <div className="placeName">
      <h2>{detail.name}</h2>
      <p>"{detail.semitype}"</p>
      </div>
      <Carousel images={detail.image} />
      {(detail.ticket === "무료") ? "" : <div className="ticket_wrapper"> {
      (detail.ticket.map((data, i) => { return (
        <div className="PlaceTicket" >
          <h3 key={i}>{data.ticketname} </h3>
          <p>{data.age} {data.price}</p>
        </div>
      )})) 
      }</div>
      } 
     
      <div className="PlaceExplaination">
        <h3>핵심 포인트!</h3>
        <p>{detail.explain}</p>
        </div>
        <div className="place_gps">
          <h3>찾아오는 길</h3>
          <Map detail={detail} markers={markers}/>
        </div>
     
    </div>
  )
}
// 