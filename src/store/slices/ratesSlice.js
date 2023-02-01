import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    { name: 'Manual tour booking', value: 11, id: 1 },
    { name: 'Package tours', value: 3, id: 2 },
    { name: 'Hotels', value: 1, id: 3 },
  ],
};

const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
});

export default ratesSlice.reducer;
