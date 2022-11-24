import { useState } from 'react';
import SearchCalendar from './SearchCalendar';
import SearchPort from './SearchPort';
import "../UI/grid.min.css"
import "./flight.css"

const Flight = () => {

  const [startPort, setStartPort] = useState("");
  const [arrivePort, setArrivePort] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [arriveDate, setArriveDate] = useState(new Date());
  const addZero = (i) => { return i < 10 ? '0'+i : ''+i };

  return (
    <>
      <div className="line"></div>

      <div className="container">
          <div className="flight-book">
              <div className="row">
                  <div className="col-6">
                      <h1>항공권 예매</h1>
                  </div>
              </div>
          </div>
      </div>
      

    
      <div className="container">
        <div className="flight-book-card">
          <div className="row">
            <div className="col-12">
              
                <div className="row">
                    <div className="col-2">
                            <div className="round-trip">
                                <h2>왕복</h2>
                            </div>
                    </div>
                </div>

                <div className="select">  
                  <div className="row">
                    <div className="col-1"></div>
                        <div className="col-5">
                            <div className="destination-select">
                              <SearchPort className="select-box" setPort={ (startp) => setStartPort(startp) } searchBoxName="출발공항" />
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="departure-select">
                              <SearchPort className="select-box" setPort={ (arrivep) => setArrivePort(arrivep) } searchBoxName="도착공항" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="search-calendar">
                <div className="row">
                      <div className="col-1"></div>
                        <SearchCalendar setStart={ (startd) => setStartDate(startd) } setArrive={ (arrived) => setArriveDate(arrived)} />
                  </div>
                </div>


                   
                      <button variant="contained" className="go-air-ticket-reservation" onClick={() => window.open(
                        `https://www.skyscanner.co.kr/transport/flights/${startPort}/${arrivePort}/${startDate.getFullYear()}${addZero(startDate.getMonth() + 1)}${addZero(startDate.getDate())}/${arriveDate.getFullYear()}${addZero(arriveDate.getMonth() + 1)}${addZero(arriveDate.getDate())}/?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=1`
                        , '_blank')}>항공권 검색</button>
                    
                      
                
               
              </div>       
        </div>
        
        </div>
                    
    </>
  )
}

export default Flight;