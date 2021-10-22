import { configureStore } from '@reduxjs/toolkit';
import BmiReducer from '../features/BmiSlice';

export const store = configureStore({
  reducer: {
    bmi: BmiReducer,
  },
});