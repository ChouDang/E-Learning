import * as ActionType from '../actions/constants';


// đăng nhập
const dangNhapInitialState = {
  loading: false,
  data: null,
  error: null,
}

export const dangNhapReducer = (state = dangNhapInitialState, action) => {
  switch (action.type) {
    case ActionType.AUTHSIGNIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state }
    case ActionType.AUTHSIGNIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state }
    case ActionType.AUTHSIGNIN_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state }
    default:
      return { ...state }
  }
}

// Đăng ký
const dangKyInitialState = {
  loading: false,
  data: null,
  error: null,
};

export const dangKyReducer = (state = dangKyInitialState, action) => {
  switch (action.type) {
    case ActionType.SIGNUP_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.SIGNUP_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.SIGNUP_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

// Thong tin người dùng

const thongTinNguoiDungInitialState = {
  loadingUser: false,
  dataUser: null,
  errorUser: null,

  loadingUpdate: false,
  dataUpdate: null,
  errorUpdate: null,

  loadingCancel: false,
  dataCancel: null,
  errorCancel: null,

  keyword: "",
};
export const thongTinNguoiDungReducer = (state = thongTinNguoiDungInitialState, action) => {
  switch (action.type) {
    // info userProfile
    case (ActionType.USER_PROFILE_REQUEST): {
      state.loadingUser = true;
      state.dataUser = null;
      state.errorUser = null;
      return { ...state }
    }
    case (ActionType.USER_PROFILE_SUCCESS): {
      state.loadingUser = false;
      state.dataUser = action.payload;
      state.errorUser = null;
      return { ...state }
    }
    case (ActionType.USER_PROFILE_FAILED): {
      state.loadingUser = false;
      state.dataUser = null;
      state.errorUser = action.payload;
      return { ...state }
    }
    // update profile
    case ActionType.UPDATE_PROFILE_REQUEST: {
      state.loadingUpdate = true;
      state.dataUpdate = null;
      state.errorUpdate = null;
      return { ...state }
    }
    case ActionType.UPDATE_PROFILE_SUCCESS: {
      state.loadingUpdate = false;
      state.dataUpdate = action.payload;
      state.errorUpdate = null;
      return { ...state }
    }
    case ActionType.UPDATE_PROFILE_FAILED: {
      state.loadingUpdate = false;
      state.dataUpdate = null;
      state.errorUpdate = action.payload;
      return { ...state }
    }
    // cancel course
    case ActionType.CANCEL_COURSE_REQUEST: {
      state.loadingCancel = true;
      state.dataCancel = null;
      state.errorCancel = null;
      return { ...state }
    }
    case ActionType.CANCEL_COURSE_SUCCESS: {
      state.loadingCancel = false;
      state.dataCancel = action.payload;
      state.errorCancel = null;
      return { ...state }
    }
    case ActionType.CANCEL_COURSE_FAILED: {
      state.loadingCancel = false;
      state.dataCancel = null;
      state.errorCancel = action.payload;
      return { ...state }
    }
    // get keyword
    case ActionType.GET_KEYWORD: {
      state.keyword = action.payload;
      return { ...state }
    }
    default: return { ...state }
  }
}



const adminUserinitialState = {
  loading: false,
  listuser: null,
  error: null,
  userInfo: null,
  open: false,
  keyword: "",
};
export const adminUserReducer = (state = adminUserinitialState, action) => {
  switch (action.type) {
    //GET USERLIST
    case ActionType.USERLIST_REQUEST:
      state.loading = true;
      state.listuser = null;
      state.error = null;
      return { ...state };
    case ActionType.USERLIST_SUCCESS:
      state.loading = false;
      state.listuser = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.USERLIST_FAILED:
      state.loading = false;
      state.listuser = null;
      state.error = action.payload;
      return { ...state };

    //SUBMIT USER
    case ActionType.ONSUBMIT_REQUEST:
      state.loading = true;
      state.error = null;
      return { ...state };
    case ActionType.ONSUBMIT_SUCCESS:
      state.loading = false;

      let userList = [...state.listuser.items];
      if (action.payload.taiKhoan) {
        const index = userList.findIndex(
          (user) => user.taiKhoan === action.payload.taiKhoan
        );
        if (index !== -1) {
          userList[index] = action.payload;
        } else {
          // ADD
          const userNew = { ...action.payload };
          userList.push(userNew);
        }
      }
      state.listuser.items = userList;
      state.error = null;
      return { ...state };
    case ActionType.ONSUBMIT_FAILED:
      state.loading = false;
      state.error = action.payload;
      return { ...state };

    //GETUSERINFO
    case ActionType.GETUSERINFO_REQUEST:
      state.userInfo = action.payload;
      return { ...state };

    //MODAL
    case ActionType.OPENMODAL:
      state.open = true;
      return { ...state };
    case ActionType.CLOSEMODAL:
      state.open = false;
      return { ...state };

    // SEARCH
    case ActionType.GETKEYWORD:
      state.keyword = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

