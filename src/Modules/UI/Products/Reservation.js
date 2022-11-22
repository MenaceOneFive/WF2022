import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function BasicButtons({idx}) {
    const navigate = useNavigate()
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => { navigate(`/Checkout/${idx}?startDate=${"1970-01-01"}&endDate=${"2022-11-18"}`) }}>예약하러 가기</Button>
    </Stack>
  );
}