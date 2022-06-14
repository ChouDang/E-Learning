import * as ActionType from "../actions/constants";

const adminUserInitialState = {
  loading: false,
  listuser: null,
  error: null,
  userInfo: null,
  open: false,
  keyword: "",
};
export const adminUserReducer = (state = adminUserInitialState, action) => {
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

// dang ky Modal 

const dangKyModalInitialState = {
  loadingUserSelector: false,
  dataUserSelector: null,
  errorUserSeletor: null,

  loadingUserWaiting: false,
  dataUserWaiting: null,
  errorUserWaiting: null,

  loadingUserJoined: false,
  dataUserJoined: null,
  errorUserJoined: null,

  courseCode: "",
};
export const dangKyModalReducer = (state = dangKyModalInitialState, action) => {
  // userSelector
  switch (action.type) {
    case ActionType.USER_SELECTOR_REQUEST: {
      state.loadingUserSelector = true;
      state.dataUserSelector = null;
      state.errorUserSeletor = null;
      return { ...state };
    }
    case ActionType.USER_SELECTOR_SUCCESS: {
      state.loadingUserSelector = false;
      state.dataUserSelector = action.payload;
      state.errorUserSeletor = null;
      return { ...state };
    }
    case ActionType.USER_SELECTOR_FAILED: {
      state.loadingUserSelector = false;
      state.dataUserSelector = null;
      state.errorUserSeletor = action.payload;
      return { ...state };
    }

    // user waiting
    case ActionType.USER_WAITING_REQUEST: {
      state.loadingUserWaiting = true;
      state.dataUserWaiting = null;
      state.errorUserWaiting = null;
      return { ...state };
    }
    case ActionType.USER_WAITING_SUCCESS: {
      state.loadingUserWaiting = false;
      state.dataUserWaiting = action.payload;
      state.errorUserWaiting = null;
      return { ...state };
    }
    case ActionType.USER_WAITING_FAILED: {
      state.loadingUserWaiting = false;
      state.dataUserWaiting = null;
      state.errorUserWaiting = action.payload;
      return { ...state };
    }

    // user joied
    case ActionType.USER_JOINED_REQUEST: {
      state.loadingUserJoined = true;
      state.dataUserJoined = null;
      state.errorUserJoined = null;
      return { ...state };
    }
    case ActionType.USER_JOINED_SUCCESS: {
      state.loadingUserJoined = false;
      state.dataUserJoined = action.payload;
      state.errorUserJoined = null;
      return { ...state };
    }
    case ActionType.USER_JOINED_FAILED: {
      state.loadingUserJoined = false;
      state.dataUserJoined = null;
      state.errorUserJoined = action.payload;
      return { ...state };
    }

    // get code course
    case ActionType.GET_CODECOURSE: {
      state.courseCode = action.payload;
      return { ...state };
    }

    // admin register course
    case ActionType.ADMIN_REGISTER_COURSE_REQUEST: {
      state.loading = true;
      state.registerData = null;
      state.registerError = null;
      return { ...state };
    }
    case ActionType.ADMIN_REGISTER_COURSE_SUCCESS: {
      state.loading = false;
      state.registerData = action.payload;
      state.registerError = null;
      return { ...state };
    }
    case ActionType.ADMIN_REGISTER_COURSE_FAILED: {
      state.loading = false;
      state.registerData = null;
      state.registerError = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

// admin danh sach khoa hoc

const initialStateCourse = {
  loading: false,
  dataCourseList: null,
  error: null
}

export const adminDanhSachKhoaHocReducer = (state = initialStateCourse, action) => {
  switch (action.type) {
    case ActionType.COURSE_REQUEST: {
      const newState = { ...state, loading: true };
      state = newState;
      return { ...state }
    }

    case ActionType.COURSE_LIST_SUCCESS: {
      const newState = { ...state, loading: false, dataCourseList: action.payload };
      state = newState;
      return { ...state }
    }

    case ActionType.COURSE_FAILED: {
      const newState = { ...state, loading: false, error: action.payload };
      state = newState;
      return { ...state }
    }

    default:
      return state
  }
}


