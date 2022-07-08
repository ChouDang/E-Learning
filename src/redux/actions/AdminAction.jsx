import React from 'react'
import * as ActionType from "./constants"
import { http } from "../../util/setting"
import axios from 'axios';


// action fetch user Selector
export const actFetchUserSelector = (codeCourse) => {
    return (dispatch) => {
        dispatch(actUserSelectorRequest());
        http
            .post("QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh", codeCourse)
            .then((result) => {
                dispatch(actUserSelectorSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserSelectorFailed(error));
            });
    };
};
const actUserSelectorRequest = () => {
    return {
        type: ActionType.USER_SELECTOR_REQUEST,
    };
};
const actUserSelectorSuccess = (data) => {
    return {
        type: ActionType.USER_SELECTOR_SUCCESS,
        payload: data,
    };
};
const actUserSelectorFailed = (error) => {
    return {
        type: ActionType.USER_SELECTOR_FAILED,
        payload: error,
    };
};

// action fetch list user waiting
export const actFetchUserWaiting = (codeCourse) => {
    return (dispatch) => {
        dispatch(actUserWaitingRequest());
        http
            .post("QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", codeCourse)
            .then((result) => {
                dispatch(actUserWaitingSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserWaitingFailed(error));
            });
    };
};
const actUserWaitingRequest = () => {
    return {
        type: ActionType.USER_WAITING_REQUEST,
    };
};
const actUserWaitingSuccess = (data) => {
    return {
        type: ActionType.USER_WAITING_SUCCESS,
        payload: data,
    };
};
const actUserWaitingFailed = (error) => {
    return {
        type: ActionType.USER_WAITING_FAILED,
        payload: error,
    };
};


// action fetch list user Joined
export const actFetchUserJoined = (codeCourse) => {
    return (dispatch) => {
        dispatch(actUserJoinedRequest());
        http
            .post("QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", codeCourse)
            .then((result) => {
                dispatch(actUserJoinedSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserJoinedFailed(error));
            });
    };
};
const actUserJoinedRequest = () => {
    return {
        type: ActionType.USER_JOINED_REQUEST,
    };
};
const actUserJoinedSuccess = (data) => {
    return {
        type: ActionType.USER_JOINED_SUCCESS,
        payload: data,
    };
};
const actUserJoinedFailed = (error) => {
    return {
        type: ActionType.USER_JOINED_FAILED,
        payload: error,
    };
};

// get code course
export const actGetCodeCourse = (courseCode) => {
    return {
        type: ActionType.GET_CODECOURSE,
        payload: courseCode,
    };
};


// action register course
export const actAdminRegisterCourse = (courseInfo) => {
    return (dispatch) => {
        dispatch(actAdminRegisterCourseRequest());
        http
            .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", courseInfo)
            .then((result) => {
                dispatch(actAdminRegisterCourseSuccess(result.data));
                alert('Xác nhận thành công!')
            })
            .catch((error) => {
                dispatch(actAdminRegisterCourseFailed(error));
                console.log(error);
            });
    };
};
const actAdminRegisterCourseRequest = () => {
    return {
        type: ActionType.ADMIN_REGISTER_COURSE_REQUEST,
    };
};
const actAdminRegisterCourseSuccess = (data) => {
    return {
        type: ActionType.ADMIN_REGISTER_COURSE_SUCCESS,
        payload: data,
    };
};
const actAdminRegisterCourseFailed = (error) => {
    return {
        type: ActionType.ADMIN_REGISTER_COURSE_FAILED,
        payload: error,
    };
};








// info user and list course
export const actUserProfile = (account) => {
    return (dispatch) => {
        dispatch(actUserProfileRequest());
        http
            .post("QuanLyNguoiDung/ThongTinTaiKhoan", account)
            .then((result) => {
                dispatch(actUserProfileSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUserProfileFailed(error));
            });
    };
};
const actUserProfileRequest = () => {
    return {
        type: ActionType.USER_PROFILE_REQUEST,
    };
};
const actUserProfileSuccess = (data) => {
    return {
        type: ActionType.USER_PROFILE_SUCCESS,
        payload: data,
    };
};
const actUserProfileFailed = (error) => {
    return {
        type: ActionType.USER_PROFILE_FAILED,
        payload: error,
    };
};

// update Profile
export const actUpdateProfile = (user) => {
    return (dispatch) => {
        dispatch(actUpdateProfileRequest());
        http
            .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
            .then((result) => {
                dispatch(actUpdateProfileSuccess(result.data));
            })
            .catch((error) => {
                dispatch(actUpdateProfileFailed(error));
            });
    };
};
const actUpdateProfileRequest = () => {
    return {
        type: ActionType.UPDATE_PROFILE_REQUEST,
    };
};
const actUpdateProfileSuccess = (data) => {
    return {
        type: ActionType.UPDATE_PROFILE_SUCCESS,
        payload: data,
    };
};
const actUpdateProfileFailed = (error) => {
    return {
        type: ActionType.UPDATE_PROFILE_FAILED,
        payload: error,
    };
};

// Cancel course
export const actCancelCourse = (courseInfo) => {
    return (dispatch) => {
        dispatch(actCancelCourseRequest());
        http
            .post("QuanLyKhoaHoc/HuyGhiDanh", courseInfo)
            .then((result) => {
                dispatch(actCancelCourseSuccess(result.data));
                alert(result.data);
                dispatch(actUserProfile(courseInfo.taiKhoan));
            })
            .catch((error) => {
                dispatch(actCancelCourseFailed(error));
            });
    };
};
const actCancelCourseRequest = () => {
    return {
        type: ActionType.CANCEL_COURSE_REQUEST,
    };
};
const actCancelCourseSuccess = (data) => {
    return {
        type: ActionType.CANCEL_COURSE_SUCCESS,
        payload: data,
    };
};
const actCancelCourseFailed = (error) => {
    return {
        type: ActionType.CANCEL_COURSE_FAILED,
        payload: error,
    };
};

// get Keyword
export const actGetKeyword = (keyword) => {
    return {
        type: ActionType.GET_KEYWORD,
        payload: keyword,
    };
};







export const actCourseSearch = (value) => {
    return (dispatch) => {
        dispatch(actCourseRequest());

        http
            .get(
                `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01`
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
