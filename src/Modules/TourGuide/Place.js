import { useParams } from "react-router-dom";
import { Map } from './Map';
import tourData from '../../Data/tourData';
import Carousel from "./Slider";
import "./css/place.css"
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
      <h2>{detail.name}</h2>
      <span>"{detail.semitype}"</span>
      {(detail.ticket === "무료") ? "" :
      (detail.ticket.map((data, i) => { return (
        <div className="PlaceTicket" key={i}>
          <h4>{data.ticketname}</h4>
          <span>{data.age}</span>
          <span>{data.price}</span>
        </div>
      )}))}
      <Carousel images={detail.image} />
      <div className="PlaceExplaination">{detail.explain}</div>
      <Map detail={detail} markers={markers} />
    </div>
  )
}
// 