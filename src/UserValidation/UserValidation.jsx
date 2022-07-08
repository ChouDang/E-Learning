import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required('Vui lòng nhập tài khoản!'),
  matKhau: yup.string().required('Mật khẩu từ 4 đến 8 ký tự').min(4).max(8),
  hoTen: yup.string().required('Vui lòng nhập họ tên'),
  soDT: yup.string().required('Vui lòng nhập số điện thoại').matches(/^[0-9]+$/),
  email: yup.string().required('Vui lòng nhập Email').email("Nhập đúng định dạng Email"),
  maNhom: yup.string().required('Vui lòng nhập mã nhóm'),
})