// React
import React, { useState } from 'react';
// Recoil
import { useSetRecoilState } from 'recoil';
import { daftarTugasState } from '../recoil_state';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

// Generate unique ID
let id = 0;
function getId() {
  return id++;
}

export default function InputTugas() {
  const [inputValue, setInputValue] = useState('');
  const setDaftarTugas = useSetRecoilState(daftarTugasState);

  const addTugas = () => {
    setDaftarTugas((oldDaftarTugas) => [
      ...oldDaftarTugas,
      {
        id: getId(),
        description: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex' }}
      >
        <TextField
          label="Deskripsi"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={addTugas}>
          Add
        </Button>
      </Box>
    </Container>
  );
}
