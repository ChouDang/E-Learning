import * as ActionType from "./constants/index"
import { http } from "../../util/setting"

// Đăng Nhập
export const actSignIn = (account, history) => {
  return (dispatch) => {
    dispatch(actSignInRequest());
    http
      .post("QuanLyNguoiDung/DangNhap", account)
      .then((result) => {
        console.log(result);
        if (result.data.maLoaiNguoiDung === "GV") {
          return (
            dispatch(actSignInSuccess(result.data)),
            localStorage.setItem("AdminClient", JSON.stringify(result.data)),
            setTimeout(() => {
              history.push("/dashboard");
            }, 1000)
          );
        }
        dispatch(actSignInSuccess(result.data));
        localStorage.setItem("UserClient", JSON.stringify(result.data));
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((error) => {
        dispatch(actSignInFailed(error));
        console.log(error);
      });
  };
};

const actSignInRequest = () => {
  return {
    type: ActionType.AUTHSIGNIN_REQUEST,
  };
};

const actSignInSuccess = (data) => {
  return {
    type: ActionType.AUTHSIGNIN_SUCCESS,
    payload: data,
  };
};

const actSignInFailed = (error) => {
  return {
    type: ActionType.AUTHSIGNIN_FAILED,
    payload: error,
  };
};


// Đăng ký

export const actSignUp = (user, history) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    http
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        dispatch(actSignUpSuccess(result.data));
        history.replace("/");
      })
      .catch((err) => {
        dispatch(actSignUpFailed(err));
      });
  };
};

const actSignUpRequest = () => {
  return {
    type: ActionType.SIGNUP_REQUEST,
  };
};

const actSignUpSuccess = (data) => {
  return {
    type: ActionType.SIGNUP_SUCCESS,
    payload: data,
  };
};

const actSignUpFailed = (err) => {
  return {
    type: ActionType.SIGNUP_FAILED,
    payload: err,
  };
};

// thông tin user và khóa học

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
export const actCancelCourse = (maKhoaHoc, taiKhoan) => {
  return (dispatch) => {
    dispatch(actCancelCourseRequest());
    http
      .post("QuanLyKhoaHoc/HuyGhiDanh", maKhoaHoc, taiKhoan)
      .then((result) => {
        dispatch(actCancelCourseSuccess(result.data));
        alert(result.data);
        dispatch(actUserProfile(taiKhoan));
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





// actGetUserPagination
export const actGetUser = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());
    http
      .get(
        "QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP04&page=1&pageSize=100"
      )
      .then((result) => {
        dispatch(actGetUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetUserFailed(err));
      });
  };
};

export const actGetAllUser = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());

    http
      .get(
        "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
      )
      .then((result) => {
        dispatch(actGetUserSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetUserFailed(error));
      });
  };
};

const actGetUserRequest = () => {
  return {
    type: ActionType.USERLIST_REQUEST,
  };
};
const actGetUserSuccess = (data) => {
  return {
    type: ActionType.USERLIST_SUCCESS,
    payload: data,
  };
};
const actGetUserFailed = (err) => {
  return {
    type: ActionType.USERLIST_FAILED,
    payload: err,
  };
};

// actAddUser
export const actAddUser = (user) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    http
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
        console.log(result.data);
        alert("Thêm thành công!");
        // Load lại data sau khi thêm
        dispatch(actGetUser());
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(actAddUserFailed(error));
      });
  };
};
const actAddUserRequest = () => {
  return {
    type: ActionType.ONSUBMIT_REQUEST,
  };
};
const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ONSUBMIT_SUCCESS,
    payload: data,
  };
};
const actAddUserFailed = (error) => {
  return {
    type: ActionType.ONSUBMIT_FAILED,
    payload: error,
  };
};

// actDeleteUSer
export const actDeleteUser = (taiKhoan) => {
  return (dispatch) => {
    http
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((result) => {
        alert(result.data);
        dispatch(actGetUser());
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
};

// actUserInfo
export const actGetUserInfo = (user) => {
  return {
    type: ActionType.GETUSERINFO_REQUEST,
    payload: user,
  };
};

// actUpdateUser
export const actUpdateUser = (user) => {
  console.log("user", user);
  return (dispatch) => {
    dispatch(actUpdateUserRequest());
    http
      .put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user)
      .then((result) => {
        alert("Cap Nhat Thanh Cong");
        console.log("result", result.data);
        dispatch(actUpdateUserSuccess(result.data));
      })
      .catch((err) => {
        console.log("err", err.response);
        dispatch(actUpdateUserFailed(err.response.data));
      });
  };
};
const actUpdateUserRequest = () => {
  return {
    type: ActionType.ONSUBMIT_REQUEST,
  };
};
const actUpdateUserSuccess = (data) => {
  return {
    type: ActionType.ONSUBMIT_SUCCESS,
    payload: data,
  };
};
const actUpdateUserFailed = (error) => {
  return {
    type: ActionType.ONSUBMIT_FAILED,
    payload: error,
  };
};




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



export const actCourseSearch = (tenKhoaHoc) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    http
      .get(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${ActionType.GROUP_NUMBER}`
      )
      .then((result) => {
        dispatch(actCourseListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

export const actCourseDelete = (maKhoaHoc) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    http
      .delete(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`
      )
      .then((result) => {
        dispatch(actCourseAllGet());
      })
      .catch((error) => {
        dispatch(actCourseFailed(error));
      });
  };
};

export const actCourseAdd = (data, form) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    console.log(form.get("file"), form.get("tenKhoaHoc"));

    http
      .post(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
        data
      )
      .then(() => {
        dispatch(actCourseImageAdd(form));
        console.log("Add course success");
        dispatch(actCourseAllGet());
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(actCourseFailed(error));
      });
  };
};

const actCourseImageAdd = (form) => {
  return (dispatch) => {
    dispatch(actCourseRequest());

    http
      .post(
        `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,
        form
      )
      .then(() => {
        console.log("Add image success");
      })
      .catch((error) => {
        console.log(error.response.data);
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
