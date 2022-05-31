import { createSlice } from '@reduxjs/toolkit'
import { Token, USER_LOGIN } from "../../util/setting"
import { DANG_KY_ACTION, DANG_NHAP_ACTION } from "../types";
const initialState = {
  userLogin: {},
  userRegister: {},
  userLoginHistoryList: {}
}

const QuanLyNguoiDungReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log(action);
      state.userLogin = action.payload;
    },
    userRegister: (state, action) => {
      state.userRegister = action.formDataDangKy;
    }
  }
});

export const { dangNhap, dangKi } = QuanLyNguoiDungReducer.actions

export default QuanLyNguoiDungReducer.reducer

