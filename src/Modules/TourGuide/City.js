import {useParams} from "react-router-dom";
import tourData from '../../Data/tourData';
import cityData from '../../Data/cityData';
import "./css/place.css"

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
        <div className="cityDetail">
            <div className="cityGuid">
            <h2>{detail.city}</h2>
            <h4>{detail.city} 여행 가이드</h4>
            <span>{detail.explaination}</span>
            </div>
            <div className="totalList">
            <h4>{detail.city} 여행 즐기기</h4>
            <div className="placeList">
                <div className="popularPlaceList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "즐길거리") ? "" :
                        <div className="placeDetail-container" key={i}>
                            <a href={`/CityDetail/Place/${item.namecode}`} className="placeLink">
                                <img src={item.image[0]} width={250} height={150}/>
                               <div className="popular-info">
                                <h4>{item.name}</h4>
                                <span>"{item.semitype}"</span>
                                </div>
                            </a>
                        </div>
                    )})}
                </div>
                <div className="restaurantList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "추천 레스토랑") ? "" :
                        <div className="placeDetail-container" key={i}>
                            <a href={`/CityDetail/Place/${item.namecode}`} className="placeLink">
                            <img src={item.image[0]} width={250} height={150}/>
                            <div className="popular-info">
                            <h4>{item.name}</h4>
                            <span>"{item.semitype}"</span>
                            </div>
                            </a>
                        </div>
                    )})}
                </div>
                </div>
            </div>
        </div>
    )
}
/*
    <div className="popularPlaceDetail" key={i}>
    <div className="restaurantDetail" key={i}>

*/