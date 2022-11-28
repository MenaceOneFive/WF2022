import {useState} from "react";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {Alert, TextField} from "@mui/material";
import {getDiff} from "./Diff";
import '../css/DatePicker.css'

/**
 * 날짜 검증을 담당하는 컴포넌트
 * @param start
 * @param end
 * @returns {JSX.Element}
 * @constructor
 */
export const DatePickers = ({start, end}) => {
    const startDate = start.startDate
    const endDate = end.endDate
    const [diff, setDiff] = useState(endDate.diff(startDate, 'day'))
    const [alertMsg, setAlertMsg] = useState("")
    const today = dayjs()
    today.second(0).valueOf()
    today.hour(0).valueOf()
    today.second(0).valueOf()

    const onChangeStartDate = (nv) => {
        const tmp = dayjs(nv.toString())
        tmp.hour(0).valueOf()
        tmp.minute(0).valueOf()
        tmp.second(0).valueOf()
        if(today.subtract(1, 'day').isAfter(tmp)){
            setAlertMsg("예약일자를 다시 확인하세요")
            return
        }
        if (tmp.isBefore(endDate.hour(1).valueOf())) {
            const diff = getDiff(endDate, tmp)
            if (diff < 30) {
                start.setStartDate(tmp)
                setDiff(diff)
                setAlertMsg("")
            } else {
                setAlertMsg("장기 예약은 문의 바랍니다.")
            }
        } else {
            setAlertMsg("다시 선택하세요")
        }
    }

    const onChangeEndDate = (nv) => {
        const tmp = dayjs(nv.toString())
        tmp.hour(0).valueOf()
        tmp.minute(0).valueOf()
        tmp.second(30).valueOf()
        // if(getDiff(dayjs(), endDate)>0) {
        if(today.isAfter(tmp)) {
            setAlertMsg("예약일자를 다시 확인하세요")
            return
        }
        if (tmp.isAfter(startDate)) {
            const diff = getDiff(tmp, start.startDate)
            if (diff < 30) {
                tmp.second(0).valueOf()
                end.setEndDate(tmp)
                setDiff(diff)
                setAlertMsg("")
            } else {
                setAlertMsg("장기 예약은 문의 바랍니다.")
            }
        } else {
            setAlertMsg("다시 선택하세요")
        }
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="select-date">
                <DesktopDatePicker
                    sx={{width: 650, paddingLeft: 20}}
                    label="입실일"
                    inputFormat="YYYY-MM-DD"
                    value={startDate}
                    onChange={onChangeStartDate}
                    renderInput={(params) => <TextField {...params} />}/>
                <div style={{width: "10%", textAlign: "center"}}><h3>{String.fromCodePoint(8594)}</h3></div>
                <DesktopDatePicker
                    sx={{width: 650}}
                    label="퇴실일"
                    inputFormat="YYYY-MM-DD"
                    value={endDate}
                    onChange={onChangeEndDate}
                    renderInput={(params) => <TextField {...params} />}/>
            </div>
            {
                alertMsg !== "" ?
                    (<div className='date-alert-dialog'>
                        <Alert severity="warning">{alertMsg}</Alert>
                    </div>) : <></>
            }
        </LocalizationProvider>
    )
}