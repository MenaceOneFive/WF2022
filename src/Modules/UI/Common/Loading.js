import CircularProgress from "@mui/material/CircularProgress";
import './css/Loading.css'

export const Loading = () => {
    return (<div className="container">
        <article>
            <div className={"loading"}>
                <CircularProgress/>
                <p>로딩 중 </p>
            </div>
        </article>
    </div>)
}