// React
import React from 'react';
// Recoil
import { useRecoilState } from 'recoil';
import { daftarTugasFilterState } from '../recoil_state';
// MUI
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterTugas() {
  const [filter, setFilter] = useRecoilState(daftarTugasFilterState);

  return (
    <Container sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
      <FormControl size="small" sx={{ width: '25%' }}>
        <InputLabel>Filter</InputLabel>
        <Select
          label="Filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value={'semua'}>Semua</MenuItem>
          <MenuItem value={'belum'}>Belum Selesai</MenuItem>
          <MenuItem value={'selesai'}>Selesai</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
