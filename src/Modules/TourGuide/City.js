import {useParams, Link} from "react-router-dom";
import tourData from '../../Data/tourData';
import cityData from '../../Data/cityData';
import Box from '@mui/material/Box';

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
            <h2>{detail.city}</h2>
            <h4>{detail.city} 여행 가이드</h4>
            <Box component="span">{detail.explaination}</Box>
            <h4>{detail.city} 여행 즐기기</h4>
            <Box className="placeList">
                <Box className="popularPlaceList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "즐길거리") ? "" :
                        <Box className="popularPlaceDetail" key={i}>
                            <Link to={`/CityDetail/Place/${item.namecode}`}>
                                <Box component="span">{item.name}</Box><br/>
                                <Box component="span">"{item.semitype}"</Box>
                            </Link>
                        </Box>
                    )})}
                </Box>
                <Box className="restaurantList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "추천 레스토랑") ? "" :
                        <Box className="restaurantDetail" key={i}>
                            <Link to={`/CityDetail/Place/${item.namecode}`}>
                                <Box component="span">{item.name}</Box><br/>
                                <Box component="span">"{item.semitype}"</Box>
                            </Link>
                        </Box>
                    )})}
                </Box>
            </Box>
        </Box>
    )
}
