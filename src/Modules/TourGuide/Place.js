import { useParams } from "react-router-dom";
import { Map } from './Map';
import tourData from '../../Data/tourData';
import Box from '@mui/material/Box';

export const Place = () => {

    const params = useParams();
    const placename = params.namecode;
    
    return (<PlaceDetail placename={placename}/>)
}

export const PlaceDetail = ({placename}) => {

  const detail = tourData.filter(data => data.namecode === placename)[0];
  const markers = tourData.filter(data => data.cityeng === detail.cityeng);

  return (
    <Box className="PlaceDetail">
      <h2>{detail.name}</h2>
      <Box component="span">"{detail.semitype}"</Box>
      {(detail.ticket === "무료") ? "" :
      (detail.ticket.map((data, i) => { return (
        <Box className="PlaceTicket" key={i}>
          <h4>{data.ticketname}</h4>
          <Box component="span">{data.age}</Box>
          <Box component="span">{data.price}</Box>
        </Box>
      )}))}
      <Box className="PlaceExplaination">{detail.explain}</Box>
      <Map detail={detail} markers={markers} />
    </Box>
  )
}
// 