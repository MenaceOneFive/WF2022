import Paper from "@mui/material/Paper";

/**
 * 로그인되어 있지 않은 경우 댓글 작성란을 채워 넣기 위한 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */
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