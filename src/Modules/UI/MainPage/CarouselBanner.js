import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import bootstrap from "./bootstrap.css"

const items = [
    "https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/001/234/358/small/modern-blue-halftone-banner-background.jpg",
    "https://cemhri.org/wp-content/uploads/2018/04/Home-Four-Banner-Background-Image.png",

];

export const DrawBanner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel fade activeIndex={index} onSelect={handleSelect} style={{...bootstrap, width: 800, height: 400}}>
                {
                    items.map(
                        (item, i) => {
                            return (

                                <Carousel.Item key={i}>
                                    <a href={`/Product/${i}`}>
                                        <img src={item} className={"d-block w-100"} width={800} height={400}/>
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </a>
                                </Carousel.Item>
                            )
                        }
                    )
                }
            </Carousel>
        </div>
    )
}