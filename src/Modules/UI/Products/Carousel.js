import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './css/product.css'

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
                                <div key={idx}>
                                    <img  src={item}/>
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