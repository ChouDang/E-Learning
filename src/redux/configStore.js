import { configureStore } from '@reduxjs/toolkit'
import QuanLyKhoaHocReducer from './reducers/QuanLyKhoaHocReducer.jsx';
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer.jsx"

export const store = configureStore({
  reducer: {
    QuanLyNguoiDungReducer,
    QuanLyKhoaHocReducer


  }
});

