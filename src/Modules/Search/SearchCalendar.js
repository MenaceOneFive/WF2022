import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const SearchCalendar = ({setStart, setArrive}) => {

  const [start, setInnerStart] = useState(new Date());
  const [arrive, setInnerArrive] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <span className="calendar_label-span">일자</span>
      <DatePicker selected={start} locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(start => {setStart(start); setInnerStart(start);})}
        selectsStart
        minDate={new Date()}
        startDate={start}
        endDate={arrive} />
      <span className="calendar_split-span">~</span>
      <DatePicker selected={arrive} locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(arrive => {setArrive(arrive); setInnerArrive(arrive)})}
        selectsEnd
        startDate={arrive}
        minDate={start} />
    </div>
  )

}

export default SearchCalendar;