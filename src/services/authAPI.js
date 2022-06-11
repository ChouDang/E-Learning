import http from '../util/setting.js';

const authAPI = {
    login: (values) => {
        return http.post("/QuanLyNguoiDung/DangNhap", values);
    },
    register: (values) => {
        return http.post("/QuanLyNguoiDung/DangKy", values)
    }
}
export default authAPI;