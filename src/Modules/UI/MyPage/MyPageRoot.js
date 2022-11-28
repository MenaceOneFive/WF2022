import {useFBAuth} from "../../FirebaseWrapper/FBAuth";
import './css/MyPage.css'
import {useOrderHistory} from "./Components/UseOrderHistory";
import {OrderContainer} from "./Components/OrderContainer";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

/**
 * 마이페이지의 로딩과 로그인 여부를 검증하는 컴포넌트
 * 검증을 통과하면 Order Container를 호출
 * @returns {JSX.Element}
 * @constructor
 */
export const MyPageRoot = () => {
    const [auth, isSignIn] = useFBAuth()
    const [orders, loading] = useOrderHistory(isSignIn ? auth.currentUser.uid : "")
    if (!isSignIn) {
        return (
            <>
                <div className="need_login">
                <p>로그인이 필요합니다</p>
                </div>
            </>
        )
    }
    return (
        <div className="container">
            <article>
                <Typography gutterBottom variant="h5" component="div">예약내역</Typography>
                <Divider variant="middle" />
                <br/>
                <OrderContainer orders={orders} loading={loading}/>
            </article>
            <aside></aside>
        </div>

    )

}

