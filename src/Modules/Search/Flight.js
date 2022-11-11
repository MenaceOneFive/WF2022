import { useState } from 'react';
import SearchCalendar from './SearchCalendar';
import TestSearch from './TestSearch';

const Flight = () => {

  const [startPort, setStartPort] = useState("");
  const [arrivePort, setArrivePort] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [arriveDate, setArriveDate] = useState(new Date());
  const addZero = (i) => { return i < 10 ? '0'+i : ''+i };

  return (
    <>
      <TestSearch setPort={ (startp) => setStartPort(startp) } />
      <TestSearch setPort={ (arrivep) => setArrivePort(arrivep) } />
      <SearchCalendar setStart={ (startd) => setStartDate(startd) } setArrive={ (arrived) => setArriveDate(arrived)} />
      <button onClick={() => window.open(
        `https://www.skyscanner.co.kr/transport/flights/${startPort}/${arrivePort}/${startDate.getFullYear()}${addZero(startDate.getMonth() + 1)}${addZero(startDate.getDate())}/${arriveDate.getFullYear()}${addZero(arriveDate.getMonth() + 1)}${addZero(arriveDate.getDate())}/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1`
        , '_blank')}>검색하기</button>
    </>
  )
}

export default Flight;