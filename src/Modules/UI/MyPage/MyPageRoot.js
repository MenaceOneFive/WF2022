import {useFBAuth} from "../../FirebaseWrapper/FBAuth";
import './css/MyPage.css'
import {useOrderHistory} from "./Components/UseOrderHistory";
import {OrderContainer} from "./Components/OrderContainer";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

export const MyPageRoot = () => {
    const [auth, isSignIn] = useFBAuth()
    const [orders, loading] = useOrderHistory(isSignIn ? auth.currentUser.uid : "")
    if (!isSignIn) {
        return (
            <>
                <p>로그인이 필요합니다</p>
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

