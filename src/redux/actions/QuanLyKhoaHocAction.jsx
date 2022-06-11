import React from 'react'
import coursesAPI from "../services/coursesAPI";
import {GET_COURSES_SUCCESS, GET_COURSES_FAILURE, GET_COURSES_REQUEST} from '../actions/constants/KhoaHoc.jsx'
// api số 2
export const LayDanhMucKhoaHoc = (category) => {
   return async (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
    try {
      const { data } = await coursesAPI.getCoursesByCategory(category);
      dispatch({ type: GET_COURSES_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}
// api số 1
export const LayDanhSachKhoaHoc = (listcource) => {
 return async (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
    try {
      const { data } = await coursesAPI.getCourse(listcource);
      dispatch({ type: GET_COURSES_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}



