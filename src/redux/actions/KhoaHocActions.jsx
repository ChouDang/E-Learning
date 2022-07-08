import React from 'react'
import * as ActionType from "./constants"
import { http } from "../../util/setting"
import axios from 'axios';

// Lấy danh mục khóa học
export const actCourseCategoryGet = () => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    http
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

    http
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
    http
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
    http
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

// lấy chi tiết khóa học

export const actCourseDetailGet = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    http
      .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
      .then((result) => dispatch(actCourseDetailSuccess(result.data)))
      .catch((error) => dispatch(actCourseFailed(error)));
  };
};

// thêm khóa học

export const actCourseAddToCart = (khoaHoc) => {
  return (dispatch) =>
    dispatch({
      type: ActionType.COURSE_ADD_TO_CART,
      payload: khoaHoc,
    });
};

// Đăng ký khóa học
export const actRegisterCourse = (courseInfo) => {
  return (dispatch) => {
    dispatch(actRegisterCourseRequest());
    http
      .post("QuanLyKhoaHoc/DangKyKhoaHoc", courseInfo)
      .then((result) => {
        dispatch(actRegisterCourseSuccess(result.data));
        console.log(result.data);
      })
      .catch((error) => {
        dispatch(actRegisterCourseFailed(error));
        console.log(error);
      });
  };
};


const actCourseRequest = () => {
  return {
    type: ActionType.COURSE_REQUEST,
  };
};

const actCourseDetailSuccess = (data) => {
  return {
    type: ActionType.COURSE_DETAIL_SUCCESS,
    payload: data,
  };
};
const actCourseFailed = (error) => {
  return {
    type: ActionType.COURSE_FAILED,
    payload: error,
  };
};

const actRegisterCourseRequest = () => {
  return {
    type: ActionType.REGISTER_COURSE_REQUEST,
  };
};
const actRegisterCourseSuccess = (data) => {
  return {
    type: ActionType.REGISTER_COURSE_SUCCESS,
    payload: data,
  };
};
const actRegisterCourseFailed = (error) => {
  return {
    type: ActionType.REGISTER_COURSE_FAILED,
    payload: error,
  };
};


// const actCourseRequest = () => {
//   return {
//     type: ActionType.COURSE_REQUEST,
//   };
// };

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

// const actCourseFailed = (error) => {
//   return {
//     type: ActionType.COURSE_FAILED,
//     payload: error,
//   };
// };

