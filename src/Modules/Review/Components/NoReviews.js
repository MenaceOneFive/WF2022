import Paper from "@mui/material/Paper";
import '../css/ReviewSection.css'

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