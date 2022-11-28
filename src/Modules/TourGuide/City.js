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

    /**
     * 상위 컴포넌트에서 여행지에 대한 코드와 함께 링크를 시켜 현재 페이지로 컴포넌트를 교체합니다.
     * 현재 페이지에서는 가지고 있는 데이터 중 여행지 코드에 맞는 데이터만 필터링하여 화면에 뿌려주게 됩니다.
     * 각 도시마다 추천 즐길거리, 액티비티와 음식점들을 사진과 함께 소개하며 클릭하면 해당 상세페이지로 컴포넌트를 교체합니다.
     */