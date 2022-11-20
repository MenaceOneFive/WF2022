import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './css/product.css'

const Carousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade:true
    }

    return(
        <div className="carousel">
            <Slider {...settings}>
                <div>
                    <img src={images[0]} />
                </div>
                <div>
                    <img src={images[1]} />
                </div>
                <div>
                    <img src={images[2]} />
                </div>
                <div>
                    <img src={images[3]} />
                </div>
                <div>
                    <img src={images[4]} />
                </div>
            </Slider>
        </div>
    )
}
export default Carousel;