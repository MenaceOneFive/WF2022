import {useParams} from "react-router-dom";
import tourData from '../../Data/tourData';
import cityData from '../../Data/cityData';

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
            <h2>{detail.city}</h2>
            <h4>{detail.city} 여행 가이드</h4>
            <span>{detail.explaination}</span>
            <h4>{detail.city} 여행 즐기기</h4>
            <div className="placeList">
                <div className="popularPlaceList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "즐길거리") ? "" :
                        <div className="popularPlaceDetail" key={i}>
                            <a href={`/CityDetail/Place/${item.namecode}`}>
                                <span>{item.name}</span><br/>
                                <span>"{item.semitype}"</span>
                            </a>
                        </div>
                    )})}
                </div>
                <div className="restaurantList">
                    {detailList.map((item, i) => {return (
                        !(item.type === "추천 레스토랑") ? "" :
                        <div className="restaurantDetail" key={i}>
                            <a href={`/CityDetail/Place/${item.namecode}`}>
                                <span>{item.name}</span><br/>
                                <span>"{item.semitype}"</span>
                            </a>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}
