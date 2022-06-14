import React from 'react'
import * as ActionType from "./constants"
import http from "../../util/setting"

// Lấy danh mục khóa học
export const actCourseCategoryGet = () => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get("QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .then((result) => {
        dispatch(actCourseCategorySuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

// Lấy danh sách tất cả khóa học
export const actCourseAllGet = () => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${ActionType.GROUP_NUMBER}`)
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

// Lấy danh sách khóa học theo danh mục
export const actCourseByCategoryGet = (category) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get(
        `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom${ActionType.GROUP_NUMBER}`
      )
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

// Lấy danh sách khóa học cho trang home
export const actCourseListHomeGet = () => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    api
      .get(
        `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=3&MaNhom=${ActionType.GROUP_NUMBER}`
      )
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

const actCourseRequest = () => {
  return {
    type: ActionType.COURSE_REQUEST,
  };
};

const actCourseCategorySuccess = (data) => {
  return {
    type: ActionType.COURSE_CATEGORY_SUCCESS,
    payload: data,
  };
};

const actCourseListSuccess = (data) => {
  return {
    type: ActionType.COURSE_LIST_SUCCESS,
    payload: data,
  };
};

const actCourseFailed = (error) => {
  return {
    type: ActionType.COURSE_FAILED,
    payload: error,
  };
};

