import React from 'react'
import { http } from '../../util/setting'
import { getCourseCatalog, getCourseList } from '../reducers/QuanLyKhoaHocReducer'
// api số 2
export const LayDanhMucKhoaHoc = () => {
  return async dispatch => {
    try {
      let result = await http.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      //Data trả về result.data.content
      const action = getCourseCatalog(result.data.content)
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
  }
}
// api số 1
export const LayDanhSachKhoaHoc = () => {
  return async dispatch => {
    try {
      let result = await http.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      //Data trả về result.data.content
      const action = getCourseList(result.data.content)
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
  }
}



