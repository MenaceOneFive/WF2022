import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
//숙소의 이름을 보여줌
export default function DenseAppBar({name}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbarbg">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}