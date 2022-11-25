import { useParams } from "react-router-dom";
import { Map } from './Map';
import tourData from '../../Data/tourData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Box from '@mui/material/Box';
import SimpleAccordion from "./PlaceExplaination";
import {Carousel} from "react-bootstrap";
import { PageTemplate } from "Modules/UI/Pages";

export const Place = () => {

    const params = useParams();
    const placename = params.namecode;
    
    return (
    <PageTemplate>
      <PlaceDetail placename={placename}/>
    </PageTemplate>
    )
}

export const PlaceDetail = ({placename}) => {

  const detail = tourData.filter(data => data.namecode === placename)[0];
  const markers = tourData.filter(data => data.cityeng === detail.cityeng);

  return (
    <Box className="PlaceDetail">
      <Box className="placeName">
      <h2>{detail.name}</h2>
      <p>"{detail.semitype}"</p>
      </Box>
      <Carousel images={detail.image} />
      {(detail.ticket === "무료") ? "" : <Box className="ticket_wrapper"> {
      (detail.ticket.map((data, i) => { return (
        <Box className="PlaceTicket" >
          <h3 key={i}>{data.ticketname} </h3>
          <p>{data.age} {data.price}</p>
        </Box>
      )}))
      }</Box>
      }

      <Box className="PlaceExplaination">
          <SimpleAccordion detail={detail} className="accordian"/>
        </Box>
        <Box className="place_gps">
          <h3>찾아오는 길</h3>
          <Map className="map" detail={detail} markers={markers}/>
        </Box>

    </Box>
  )
}
// 