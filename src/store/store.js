import { configureStore } from '@reduxjs/toolkit';

import commentsSlice from './slices/commentsSlice.js';
import ratesSlice from './slices/ratesSlice.js';

export const store = configureStore({
  reducer: {
    commentsSlice,
    ratesSlice,
  },
});
