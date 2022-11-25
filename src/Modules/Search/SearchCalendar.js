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