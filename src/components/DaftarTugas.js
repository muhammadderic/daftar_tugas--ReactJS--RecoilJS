// React
import React from 'react';
// MUI
import Container from '@mui/material/Container';
// Components
import InputTugas from './InputTugas.js';
import FilterTugas from './FilterTugas.js';
import StatistikTugas from './StatistikTugas.js';
import ItemTugas from './ItemTugas.js';

export default function DaftarTugas() {
  return (
    <Container>
      <StatistikTugas />
      <InputTugas />
      <FilterTugas />
      <ItemTugas />
    </Container>
  );
}
