import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//예약화면으로 이동하기 위한 버튼
//방의 번호, 출발일, 도착일을 매개변수로 받아 예약페이지에 정보를 넘겨줌.
export default function BasicButtons({idx, startDate, endDate}) {
    const navigate = useNavigate()
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => { navigate(`/Checkout/${idx}?startDate=${startDate}&endDate=${endDate}`) }}>예약하러 가기</Button>
    </Stack>
  );
}