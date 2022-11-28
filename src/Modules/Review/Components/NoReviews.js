import Paper from "@mui/material/Paper";
import '../css/ReviewSection.css'

/**
 * 방에 대한 리뷰가 없는 경우에 대한 PlaceHolder
 * @returns {JSX.Element}
 * @constructor
 */
export const NoReviews = () => {
    return (
        <div className="read-review-container">
            <Paper id="no-review">
               <div>
                   {"아직 작성된 리뷰가 없습니다."}
               </div>
            </Paper>
        </div>
    )
}