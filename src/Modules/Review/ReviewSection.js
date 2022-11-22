import {WriteReview} from "./Components/WriteReview";
import {ReadReviewsFromStorage} from "./Components/ReadReviewsFromStorage";
import './css/ReviewSection.css'
export const ReviewSection = ({idx}) => {
    return (
        <div>
            <ReadReviewsFromStorage idx={idx}/>
            <WriteReview idx={idx} />
        </div>
    )
}

