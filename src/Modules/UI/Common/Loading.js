import CircularProgress from "@mui/material/CircularProgress";
import './css/Loading.css'

/**
 * 프로젝트 내에서 공유하는 로딩화면
 * @returns {JSX.Element}
 * @constructor
 */
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