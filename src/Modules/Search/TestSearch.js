import React from 'react';
import Select from 'react-select';
import mydata from './airportData.json';

const TestSearch = ({setPort = f => f}) => {

  return (
    <Select options={mydata} onChange={(choice) => setPort(choice.value)}/>
  )
}

export default TestSearch;