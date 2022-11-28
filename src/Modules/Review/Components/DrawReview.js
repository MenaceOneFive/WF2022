import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";

/**
 * 개별 리뷰를 렌더링하는 컴포넌트
 * @param review
 * @returns {JSX.Element}
 * @constructor
 */
export const DrawReview = ({review}) => {
    if (review === undefined)
        return (<></>)
    return (
        <div className="read-review-container">
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    <div className="use-avatar" style={{display:"flex"}}>
                        <Avatar sx={{bgcolor: deepOrange[500], marginRight:5}}>{review.uid.substring(0, 3)}</Avatar>
                        <Typography sx={{fontSize: 20}} color="text.secondary" gutterBottom>
                            {review.uid}
                        </Typography>
                    </div>
                    {/*<Typography  color="text.secondary" gutterBottom>*/}
                    {/*    평점 : {review.stars}*/}
                    {/*</Typography>*/}
                    <Typography  color="text.secondary">
                        리뷰 : {review.review}
                    </Typography>
                </CardContent>
            </Card>
        </div>)

}