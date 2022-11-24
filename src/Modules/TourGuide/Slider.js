import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import  "./css/slider.css"

const Carousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true
    }

    return (
        <div className="slide-container">
            <div className="carousel">
                <Slider {...settings}>
                    {images.map(
                        (item, idx) => {
                            return (
                                <div key={idx} className="place_imgwrap">
                                    <img src={item} className="place_img"/>
                                </div>
                            )
                        }
                    )}
                </Slider>
            </div>
        </div>
    )
}
export default Carousel;