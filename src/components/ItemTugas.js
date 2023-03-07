// React
import React from 'react';
// Recoil
import { useRecoilState } from 'recoil';
import { daftarTugasState } from '../recoil_state';
// MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';

export default function ItemTugas() {
  const [daftarTugas, setDaftarTugas] = useRecoilState(daftarTugasState);

  return (
    <TableContainer component={Paper} sx={{ m: 2 }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              DESKRIPSI
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              STATUS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {daftarTugas.map((tugas) => (
            <TableRow
              key={tugas.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Input
                  disableUnderline
                  value={tugas.description}
                  // onChange={(e) => setS(e.targe.value)}
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
