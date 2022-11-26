import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function BasicButtons({idx, startDate, endDate}) {
    const navigate = useNavigate()
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => { navigate(`/Checkout/${idx}?startDate=${startDate}&endDate=${endDate}`) }}>예약하러 가기</Button>
    </Stack>
  );
}