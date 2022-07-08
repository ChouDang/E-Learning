import React, { Fragment } from 'react'
import { Input } from "antd";

const RegisterFormInput = (props) => {
  return (
    <Fragment><Input
      id="taikhoan"
      name="taiKhoan"
      placeholder="Tài khoản"
      fullWidth >
    </Input></Fragment>
  )
}

export default RegisterFormInput