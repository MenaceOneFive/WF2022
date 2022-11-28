import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import airportData from './airportData.json';

export default function SearchPort({setPort = f => f, searchBoxName}) {
  return (
    <Autocomplete
      disablePortal
      id="search-cityport"
      options={airportData}
      renderInput={ (params) => <TextField {...params} label={`${searchBoxName}`} />}
      onChange={(event, value) => {setPort(value.value)}}
    />
  );
};

/**
 * 미리 저장되어 있는 전 세계 공항 데이터를 기반으로 하여
 * 사용자는 공항의 일부(예를 들어 인천국제공항 이면 '인천')만 검색하면 해당 단어를 포함하는 공항이 필터링 되어
 * 미리보기에 나타나게 됩니다. 이후 원하는 공항을 선택하면 매개함수로 넘겨받은 환경변수설정함수를 작동하여
 * 상위 컴포넌트에서 검색결과에 현재 선택한 공항을 반영하게 됩니다.
 */