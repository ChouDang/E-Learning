import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // Api 2
  getCourseCatalog: [],
  // Api 1
  getCourseList: [],
}

const QuanLyKhoaHocReducer = createSlice({
  name: "course",
  initialState,
  reducers: {
    getCourseCatalog: (state, action) => {
      state.getCourseCatalog = action.getCourseCatalog.filter(item => item.subTypeJobs.length > 0)

    },
    getCourseList: (state, action) => {
      state.getCourseList = action.getCourseList
    }
  }
});

export const { getCourseCatalog, getCourseList } = QuanLyKhoaHocReducer.actions

export default QuanLyKhoaHocReducer.reducer

