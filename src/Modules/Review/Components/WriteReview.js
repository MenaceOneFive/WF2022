import {useFBAuth} from "../../FirebaseWrapper/FBAuth";
import {useState} from "react";
import {Review} from "../../../Classes/Review";
import {WriteReviewToStorage} from "./WriteReviewToStorage";
import {UserNotSignedIn} from "./UserNotSignedIn";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {deepOrange} from "@mui/material/colors";
import Paper from "@mui/material/Paper";

export const WriteReview = ({idx}) => {
    const [auth, isSignIn] = useFBAuth()
    const [innerText, setInnerText] = useState("")
    const SetText = (e) => setInnerText(e.target.value)
    const user = auth.currentUser

    const uploadReview = () => {
        const review = new Review();
        review.stars = 3
        review.uid = user.displayName
        review.review = innerText
        WriteReviewToStorage(idx, review)
    }
    if (user != null) {
        return (
            <>
                <div className="write-review-container">
                    <Paper elevation={10} >
                        <div>
                            <Avatar sx={{bgcolor: deepOrange[500]}}>{user.displayName.substring(0, 3)}</Avatar>
                            {user.displayName}
                        </div>
                        <div>
                            <textarea  value={innerText} onChange={SetText}/>
                            <Button sx={{width: "10%"}} variant="contained" onClick={uploadReview}>작성하기</Button>
                        </div>
                       </Paper>
                </div>
            </>
        )
    }
    return <UserNotSignedIn/>
}