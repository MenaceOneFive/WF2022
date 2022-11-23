import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import bootstrap from "./bootstrap.css"
import seoul from './seoul.jpg';
import jeju from './jeju.jpg';
import osaka from './osaka.jpg';
import fukuoka from './fukuoka.jpg';
import cityData from '../../Data/cityData';


const cityImages = [seoul, jeju, osaka, fukuoka];

export const TourGuide = () => {

  const city = cityData.map((data, i) => data.city);
  const cityeng = cityData.map((data, i) => data.cityeng);
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => { setIndex(selectedIndex); };

  return (
    <>
      <Carousel fade activeIndex={index} onSelect={handleSelect} style={{...bootstrap, width: 800, height: 400}}>
        {cityImages.map( (item, i) => { return (
          <Carousel.Item key={i}>
            <a href={`/CityDetail/${cityeng[i]}`}>
              <img src={item} className={"city-img"} width={800} height={400}/>
              <Carousel.Caption>
                <h3>{city[i]}</h3>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        )})}
      </Carousel>
    </>
  )
}