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

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export default function ItemTugas({ daftar }) {
  const [daftarTugas, setDaftarTugas] = useRecoilState(daftarTugasState);

  const toggleItemCompletion = (tugas) => {
    const index = daftarTugas.findIndex((listItem) => listItem === tugas);
    const newList = replaceItemAtIndex(daftarTugas, index, {
      ...tugas,
      isCompleted: !tugas.isCompleted,
    });

    setDaftarTugas(newList);
  };

  return (
    // <div>
    //   {daftar.map((tugas) => (
    //     <div>
    //       <input
    //         type="text"
    //         value={tugas.description}
    //         onChange={(e) => setDaftarTugas(e.target.value)}
    //       />
    //       <input
    //         type="checkbox"
    //         checked={tugas.isComplete}
    //         onChange={() => toggleItemCompletion(tugas.id)}
    //       />
    //       <button>X</button>
    //     </div>
    //   ))}
    // </div>
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
          {daftar.map((tugas) => (
            <TableRow key={tugas.id}>
              <TableCell scope="row">
                <Input disableUnderline value={tugas.description} />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={tugas.isCompleted}
                  key={tugas.id}
                  onChange={() => toggleItemCompletion(tugas)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
