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
      sx={{ width: 300}}
      renderInput={ (params) => <TextField {...params} label={`${searchBoxName}`} />}
      onChange={(event, value) => {setPort(value.value)}}
    />
  );
};