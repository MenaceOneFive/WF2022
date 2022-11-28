import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import {Link} from 'react-router-dom';
import bootstrap from "./bootstrap.css"
import seoul from './seoul.jpg';
import jeju from './jeju.jpg';
import osaka from './osaka.jpg';
import fukuoka from './fukuoka.jpg';
import cityData from '../../Data/cityData';
import "./css/tour.css";


const cityImages = [seoul, jeju, osaka, fukuoka];

export const TourGuide = () => {

  const city = cityData.map((data, i) => data.city);
  const cityeng = cityData.map((data, i) => data.cityeng);
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => { setIndex(selectedIndex); };

  return (
    <>
      <Carousel className="tour_slider" fade activeIndex={index} onSelect={handleSelect} style={{...bootstrap, width: 1000, height: 400}}>
        {cityImages.map( (item, i) => { return (
          <Carousel.Item key={i}>
            <Link to={`/CityDetail/${cityeng[i]}`}>
              <img src={item} className={"city-img"} width={1000} height={400}/>
              <Carousel.Caption>
                <h3>{city[i]}</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        )})}
      </Carousel>
    </>
  )
}

/**
 * 현재 모든 여행지에 대한 데이터를 구비하기에는 한계가 존재하여 국내 2곳, 해외 2곳으로 데이터를 사용하였습니다.
 * 사용자는 이미지 패널을 보며 원하는 여행지를 선택할 수 있고 양 옆의 넘기기 버튼을 통해 다른 여행지를 볼 수 있습니다.
 */