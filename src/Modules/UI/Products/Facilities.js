import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({facility}) {
  return (
    facility.map((object, idx)=>{
        return(
            <TableContainer key={idx}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>{object.head}</TableHead>
                        <TableBody>
                        {object.items.map((item, i) =>{
                            return(
                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{item}</TableCell>
                            </TableRow>
                            )
                         })
                        }
                        </TableBody>
                </Table>
            </TableContainer>
        )
    })
  );
}
/*
    <TableContainer>
        {facility.map((object, idx)=>{
            <Table sx={{ minWidth: 650 }} aria-label="simple table" key={idx}>
                <TableHead>{object.head}</TableHead>
                    <TableBody>
                        {object.items.map((item, i) =>{
                            return(
                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{item}</TableCell>
                            </TableRow>
                            )
                         })
                        }
                    </TableBody>
            </Table>
        }
    )}
    </TableContainer>
*/