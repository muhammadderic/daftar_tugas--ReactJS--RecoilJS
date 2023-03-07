// React
import React from 'react';
// MUI
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterTugas() {
  return (
    <Container sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
      <FormControl size="small" sx={{ width: '25%' }}>
        <InputLabel>Filter</InputLabel>
        <Select label="Filter">
          <MenuItem>Semua</MenuItem>
          <MenuItem>Belum Selesai</MenuItem>
          <MenuItem>Selesai</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
