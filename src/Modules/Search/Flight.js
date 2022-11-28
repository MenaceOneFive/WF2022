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

/**
 * 현재 컴포넌트는 항공권 검색 페이지를 종합하여 다루는 컴포넌트 입니다.
 * 검색에는 SearchPort, SearchCalendar 컴포넌트가 사용되었습니다.
 * 이 컴포넌트는 하위 컴포넌트로 환경변수를 설정하는 함수를 매개변수로 넘깁니다.
 * 사용자는 검색하고자 하는 공항과 일정을 입력하면 하위 컴포넌트에서 반응하고 결과를 적용하여 매개변수로 받은 함수를 작동시킵니다.
 * 검색하기 버튼을 누르면 페이지는 변경된 환경변수들을 종합하고 가공하여 실제 항공권 검색이 가능한 사이트로 넘깁니다.
 * 원래는 항공권 데이터를 직접 화면에 뿌려주고 싶었으나, GDS에서 실시간 항공권 데이터를 받아오려면 금전적 계약을 해야 하고, SkyScanner 등 에서 제공되는 API를 사용하려면 회사 소속이여야 하기에 부득이하게 이러한 방법으로 구성하였습니다.
 */