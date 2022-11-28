import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import Box from '@mui/material/Box';
import "./calendar.css"

const SearchCalendar = ({setStart, setArrive}) => {

  const [start, setInnerStart] = useState(new Date());
  const [arrive, setInnerArrive] = useState(new Date());

  return (
    <>
    <div className="col-1"><span className="calendar-icon"></span></div>
    <div className="col-4">
      <DatePicker className="start" selected={start} locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(start => {setStart(start); setInnerStart(start);})}
        selectsStart
        minDate={new Date()}
        startDate={start}
        endDate={arrive} />
      </div>
      <div className="col-1">
        <Box component="span" className="calendar-split-span">~</Box>
      </div>
      
      <div className="col-4">
      <DatePicker className="arrive" selected={arrive} locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(arrive => {setArrive(arrive); setInnerArrive(arrive)})}
        selectsEnd
        startDate={arrive}
        minDate={start} />
      </div>
      <div className="col-2"></div>
    </>
      
      
   
  )

}

export default SearchCalendar;

/**
 * 출발 날짜와 도착 날짜간 반응성을 연결시키기 위해 한 컴포넌트에서 시작, 도착을 표현하게 제작했습니다.
 * 먼저 사용자는 출발 날짜를 누르면 현재 날짜에 색칠된 달력이 뜨게 됩니다.
 * 그다음 출발 날짜를 선택하고 도착 날짜를 누르면 출발일 이전의 날짜들은 비활성화 된 상태로 달력이 뜹니다.
 * 사용자는 커서를 캘린더에 올리면 연하게 색칠되는 효과를 통해 여행 기간을 한 눈에 알아보기 쉽게 하였습니다.
 */