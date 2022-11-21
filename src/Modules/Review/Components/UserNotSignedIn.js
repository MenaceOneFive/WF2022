import Paper from "@mui/material/Paper";

export const UserNotSignedIn = () => {
    //여기에 로그인 요청
    return (<div className="write-review-container">
        <Paper  elevation={10}>
            <div className="not-logged-in">
               로그인이 필요합니다
            </div>
        </Paper>
    </div>)
}