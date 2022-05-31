import { configureStore } from '@reduxjs/toolkit'
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer.jsx"
export const store = configureStore({
  reducer: {
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,

  }
});

