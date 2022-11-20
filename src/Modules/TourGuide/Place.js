import {useParams} from "react-router-dom";
import tourData from '../../Data/tourData';
import cityData from '../../Data/cityData';

export const Place = () => {

    const params = useParams();
    const placename = params.namecode;
    
    return (<PlaceDetail placename={placename}/>)
}

export const PlaceDetail = ({placename}) => {

  const detail = tourData.filter(data => data.namecode === placename)[0];
  console.log(detail);

  return (
    <div className="PlaceDetail">
      <h2>{detail.name}</h2>
      <span>"{detail.semitype}"</span>
      {(detail.ticket === "무료") ? "" :
      (detail.ticket.map((data, i) => { return (
        <div className="PlaceTicket">
          <h4>{data.ticketname}</h4>
          <span>{data.age}</span>
          <span>{data.price}</span>
        </div>
      )}))}
      <div className="PlaceExplaination">{detail.explain}</div>
    </div>
  )
}
