// React
import React from 'react';
// MUI
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StatistikTugas() {
  return (
    <Container sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <TableContainer component={Paper} sx={{ m: 2 }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableBody>
            {/* {rows.map((row) => ( */}
            <TableRow
              key={1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Kategory
              </TableCell>
              <TableCell align="right">12</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
