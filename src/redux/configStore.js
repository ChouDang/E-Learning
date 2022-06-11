import QuanLyKhoaHocReducer from './reducers/QuanLyKhoaHocReducer.jsx';
import QuanLyNguoiDungReducer from "./reducers/QuanLyNguoiDungReducer.jsx"
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  QuanLyNguoiDungReducer,
  QuanLyKhoaHocReducer
});


let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducer, composeCustom);