// React
import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function InputTugas() {
  return (
    <Container sx={{ mt: 3 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex' }}
      >
        <TextField label="Deskripsi" fullWidth variant="outlined" />
        <Button variant="contained">Add</Button>
      </Box>
    </Container>
  );
}
