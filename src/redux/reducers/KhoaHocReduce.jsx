import * as ActionType from '../actions/constants';


//danhMucKhoaHocReduce
const initialStateCategory = {
  loading: false,
  dataCourseCategory: null,
  error: null,
}
export const danhMucKhoaHocReduce = (state = initialStateCategory, action) => {
  switch (action.type) {

    case ActionType.COURSE_REQUEST: {
      const newState = { ...state, loading: true };
      state = newState;
      return { ...state }
    }

    case ActionType.COURSE_CATEGORY_SUCCESS: {
      const newState = { ...state, loading: false, dataCourseCategory: action.payload };
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

// danhSachKhoaHocReducer
const initialStateCourse = {
  loading: false,
  dataCourseList: null,
  error: null
}

export const danhSachKhoaHocReducer = (state = initialStateCourse, action) => {
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


//  chi tiet khoa hoc
const courseDetalInitialState = {
  loading: false,
  courseDetailData: null,
  error: null
}

export const chiTietKhoaHocReducer = (state = courseDetalInitialState, action) => {
  switch (action.type) {

    case ActionType.COURSE_REQUEST: {
      const newState = { ...state, loading: true };
      state = newState;
      return { ...state }
    }

    case ActionType.COURSE_DETAIL_SUCCESS: {
      const newState = { ...state, loading: false, courseDetailData: action.payload };
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

// them khoa hoc
const cartInitialState = {
  courseListInCart: [],
}

export const themKhoaHocReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ActionType.COURSE_ADD_TO_CART: {
      const idx = state.courseListInCart.findIndex(course => course.maKhoaHoc === action.payload.maKhoaHoc);
      if (idx !== -1) {
        return { ...state }
      }
      const newCourseListInCart = [...state.courseListInCart, action.payload];
      console.log(newCourseListInCart);
      const newState = { ...state, courseListInCart: newCourseListInCart };
      state = newState;
      return { ...state }
    }
    default:
      return state
  }
}

// dang ky khoa hoc
const registerInitialState = {
  loading: false,
  registerData: null,
  registerError: null,
}
export const dangKyKhoaHocReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case ActionType.REGISTER_COURSE_REQUEST: {
      state.loading = true;
      state.registerData = null;
      state.registerError = null;
      return { ...state }
    }
    case ActionType.REGISTER_COURSE_SUCCESS: {
      state.loading = false;
      state.registerData = action.payload;
      state.registerError = null;
      return { ...state }
    }
    case ActionType.REGISTER_COURSE_FAILED: {
      state.loading = false;
      state.registerData = null;
      state.registerError = action.payload;
      return { ...state }
    }
    default: return { ...state }
  }

}
