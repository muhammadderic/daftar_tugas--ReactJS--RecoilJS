// React
import React from 'react';
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// Components
import DaftarTugas from './components/DaftarTugas.js';

export default function App() {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          width: '75%',
          p: 3,
          borderRadius: 3,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color="primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Daftar Tugas
          <DaftarTugas />
        </Typography>
      </Box>
    </Container>
  );
}
