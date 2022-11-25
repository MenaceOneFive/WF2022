import {useParams, Link} from "react-router-dom";
import tourData from '../../Data/tourData';
import cityData from '../../Data/cityData';
import "./css/city.css"
import Box from '@mui/material/Box';
import SimpleAccordion from "./CityExplaination";
export const City = () => {

    const params = useParams();
    const citycode = params.cityeng;
    
    return (<CityDetail citycode={citycode}/>)
}

export const CityDetail = ({citycode}) => {

    const detail = cityData.filter(data => data.cityeng === citycode)[0];
    const detailList = tourData.filter(data => data.cityeng === citycode);
    console.log(detail);
    console.log(detailList);

    return (
        <Box className="cityDetail">
            <Box className="cityGuid">
            <h2>{detail.city}</h2>
           <SimpleAccordion detail={detail} />
            </Box>
            <Box className="totalList">
            <h4>{detail.city} 여행 즐기기</h4>
            <Box className="placeList">
                <Box className="popularPlaceList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "즐길거리") ? "" :
                        <Box className="placeDetail-container" key={i}>
                            <Link to={`/CityDetail/Place/${item.namecode}`} className="placeLink">
                                <img src={item.image[0]}  width={250} height={150}/>
                               <Box className="popular-info">
                                <h5>{item.name}</h5>
                                <Box componet="span" className="semitype">"{item.semitype}"</Box>
                                </Box>
                            </Link>
                        </Box>
                    )})}
                </Box>
                <Box className="restaurantList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "추천 레스토랑") ? "" :
                        <Box className="placeDetail-container" key={i}>
                            <Link to={`/CityDetail/Place/${item.namecode}`} className="placeLink">
                            <img src={item.image[0]} width={250} height={150}/>
                            <Box className="popular-info">
                            <h5>{item.name}</h5>
                            <Box componet="span" className="semitype">"{item.semitype}"</Box>
                            </Box>
                            </Link>
                        </Box>
                    )})}
                </Box>
                </Box>
            </Box>
        </Box>
    ) }