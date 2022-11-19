import {Alert, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import '../css/GuestCount.css'

export const GuestCount = ({adult, juvenile}) => {
    const count = [0, 1, 2, 3, 4, 5, 6]
    const [alertMsg, setAlertMsg] = useState("")
    return (
        <div className="guest-count">
            <FormControl>
                <InputLabel id="demo-simple-select-label">성인</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={adult.adultCount}
                    label="Age"
                    onChange={(v) => {
                        const tmp = v.target.value
                        const msg = validateCount(tmp, juvenile.juvenileCount)
                        if (msg.length === 0) {
                            adult.setAdultCount(tmp)
                            setAlertMsg("")
                        } else {
                            setAlertMsg(msg)
                        }
                    }}
                >
                    {count.map(
                        (item, idx) => {
                            return (<MenuItem key={idx} value={item}>{item}</MenuItem>)

                        }
                    )}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-label">어린이</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={juvenile.juvenileCount}
                    label="Age"
                    onChange={(v) => {
                        const tmp = v.target.value
                        const msg = validateCount(adult.adultCount, tmp)
                        if (msg.length === 0) {
                            juvenile.setJuvenileCount(tmp)
                            setAlertMsg("")
                        } else {
                            setAlertMsg(msg)
                        }
                    }}
                >
                    {count.map(
                        (item, idx) => {
                            return (<MenuItem key={idx} value={item}>{item}</MenuItem>)
                        }
                    )}
                </Select>
            </FormControl>
            {
                alertMsg !== "" ?
                    (<div className='date-alert-dialog'>
                        <Alert severity="warning">{alertMsg}</Alert>
                    </div>) : <></>
            }
        </div>
    )
}

const validateCount = (adult, juvenile) => {
    if(adult === 0 && juvenile !== 0)
    {
        return THERE_IS_NO_ADULT
    }
    if (adult + juvenile <= 6) {
        return ""
    }
    if(adult + juvenile > 6)
    {
        return GUEST_COUNT_EXCEEDED
    }
}
const GUEST_COUNT_EXCEEDED = "투숙객 정원을 초과했습니다."
const GUEST_COUNT_EMPTY = "투숙객 인원을 입력해 주세요"
const THERE_IS_NO_ADULT = "미성년자는 보호자가 필요합니다."