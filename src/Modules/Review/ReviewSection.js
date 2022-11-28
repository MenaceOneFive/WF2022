import {WriteReview} from "./Components/WriteReview";
import {ReadReviewsFromStorage} from "./Components/ReadReviewsFromStorage";
import './css/ReviewSection.css'

/**
 * Product(호텔) 페이지에서 리뷰를 렌더링하는 컴포넌트
 * @param idx
 * @returns {JSX.Element}
 * @constructor
 */
export const ReviewSection = ({idx}) => {
    return (
        <div>
            <ReadReviewsFromStorage idx={idx}/>
            <WriteReview idx={idx} />
        </div>
    )
}

