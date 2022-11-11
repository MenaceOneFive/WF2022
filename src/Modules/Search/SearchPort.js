import React, { useState } from 'react';
import mydata from './data.json';

const SearchPort = ({setPort = f => f}) => {

  const [port, setInnerPort] = useState("");
  const onChange = (e) => { setPort(e.target.value); setInnerPort(e.target.value); };

  const items = mydata.filter((data) => {
    if (data.code.toLocaleLowerCase().includes(port.toLocaleLowerCase()) || data.name.includes(port) || data.country.includes(port))
      return data
    else
      return 0
  })

  return (
    <>
      <input type="text" value={port} onChange={onChange} />
      <div>
        <ul>
          {items.map((data, i) => <li key={i} >{data.name}, {data.code}, {data.country}</li>)}
        </ul>
      </div>
    </>
  )

}

export default SearchPort;