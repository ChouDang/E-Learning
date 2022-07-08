import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { chiTietKhoaHocReducer, danhMucKhoaHocReduce, danhSachKhoaHocReducer, themKhoaHocReducer, dangKyKhoaHocReducer } from "./reducers/KhoaHocReduce.jsx"
import { dangNhapReducer, dangKyReducer, thongTinNguoiDungReducer } from "./reducers/UserReduce"
import { adminUserReducer, dangKyModalReducer, adminDanhSachKhoaHocReducer } from "./reducers/AdminReduce"
const rootReducer = combineReducers({
  //Child Reducer 
  // Khóa học
  danhMucKhoaHocReduce,
  danhSachKhoaHocReducer,
  chiTietKhoaHocReducer,
  themKhoaHocReducer,
  dangKyKhoaHocReducer,
  // User
  dangNhapReducer,
  dangKyReducer,
  thongTinNguoiDungReducer,
  //Admin reducer
  adminUserReducer,
  dangKyModalReducer,
  adminDanhSachKhoaHocReducer,
});


let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare)
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(rootReducer, composeCustom);