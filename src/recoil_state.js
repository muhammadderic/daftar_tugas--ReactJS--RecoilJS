import { atom, selector } from 'recoil';

export const daftarTugasState = atom({
  key: 'daftarTugasState',
  default: [],
});

export const daftarTugasFilterState = atom({
  key: 'daftarTugasFilterState',
  default: 'semua',
});

export const filteredDaftarTugasState = selector({
  key: 'filteredDaftarTugasState',
  get: ({ get }) => {
    const filter = get(daftarTugasFilterState);
    const daftar = get(daftarTugasState);

    switch (filter) {
      case 'selesai':
        return daftar.filter((item) => item.isCompleted);
      case 'belum':
        return daftar.filter((item) => !item.isCompleted);
      default:
        return daftar;
    }
  },
});
