import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './css/product.css'
//이미지 슬라이더
const Carousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true
    }
    //room의 img를 매개 변수로 받아 map함수를 이용하여 슬라이더에 적용
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