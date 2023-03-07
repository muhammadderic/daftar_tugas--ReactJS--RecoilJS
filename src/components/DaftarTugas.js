// React
import React from 'react';
// Recoil
import { useRecoilValue } from 'recoil';
import { filteredDaftarTugasState } from '../recoil_state';
// MUI
import Container from '@mui/material/Container';
// Components
import InputTugas from './InputTugas.js';
import FilterTugas from './FilterTugas.js';
import StatistikTugas from './StatistikTugas.js';
import ItemTugas from './ItemTugas.js';

export default function DaftarTugas() {
  const daftar = useRecoilValue(filteredDaftarTugasState);

  return (
    <Container>
      <StatistikTugas />
      <InputTugas />
      <FilterTugas />
      <ItemTugas daftar={daftar} />
    </Container>
  );
}
