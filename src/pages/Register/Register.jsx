import React, { Fragment, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { LockOutlined, UserOutlined, LockFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupUserSchema } from "../../UserValidation/UserValidation"
import "./Register.scss"
import { actSignUp } from '../../redux/actions/UserAction';
import RegisterFormInput from './RegisterFormInput';

const Register = (props) => {

  const error = useSelector((state) => state.dangKyReducer.error);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAlert = () => {
    return (
      error && (<><p className="text-danger mt-3 text-center">{error.response.data}</p>
      </>)
    )
  }

  const handleOnSubmit = (value, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      dispatch(actSignUp(value, props.history));
    }, 1000);
  };

  return (
    <Fragment>
      <section className="register">
        <div className="register-layout">
          <div className="register-layout-content">
            <div className="register-layout-content-icon"><LockFilled className="register-form-layout-icon" /></div>

            <h1 className="register-layout-content-title">Đăng ký</h1>
            {/* Validation formik */}
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                email: "",
                hoTen: "",
                soDT: "",
                maNhom: "",
              }}
              onSubmit={handleOnSubmit}
              validationSchema={signupUserSchema}
            >
              {(props) => (

                <Form>
                  <section className="form-layout">
                    <div className="form-layout-content">
                      <div className="form-layout-content-item">
                        <Field
                          className="form-layout-content-item-input form-control font-weight-normal"
                          id="taikhoan"
                          placeholder="Tài khoản"
                          name="taiKhoan"
                        />
                        <p className="text-danger"><ErrorMessage name="taiKhoan" /></p>
                      </div>

                      <div className="form-layout-content-item">
                        <Field
                          className="form-layout-content-item-input form-control font-weight-normal"
                          id="matkhau"
                          type="password"
                          placeholder="Mật Khẩu"
                          name="matKhau"
                        />
                        <p className="text-danger"><ErrorMessage name="matKhau" /></p>
                      </div>

                      <div className="form-layout-content-item">
                        <Field
                          className="form-layout-content-item-input form-control font-weight-normal"
                          id="email"
                          placeholder="Địa chỉ Email"
                          name="email"
                        />
                        <p className="text-danger"><ErrorMessage name="email" /></p>
                      </div>

                      <div className="form-layout-content-item">
                        <Field
                          className="form-layout-content-item-input form-control font-weight-normal"
                          id="hoten"
                          placeholder="Họ tên"
                          name="hoTen"
                        />
                        <p className="text-danger"><ErrorMessage name="hoTen" /></p>

                      </div>

                      <div className="form-layout-content-item">
                        <Field
                          className="form-layout-content-item-input form-control font-weight-normal"
                          id="sdt"
                          placeholder="Số điện thoại"
                          name="soDT"
                        />
                        <p className="text-danger"><ErrorMessage name="soDT" /></p>
                      </div>

                      <div className="form-layout-content-item">
                        <Field
                          className="form-layout-content-item-input form-control font-weight-normal"
                          id="manhom"
                          placeholder="Mã Nhóm"
                          name="maNhom"
                        />
                        <p className="text-danger"><ErrorMessage name="maNhom" /></p>
                      </div>
                    </div>

                    <div>
                      <Button type="primary" htmlType="submit" onClick={handleOpen}
                        disabled={props.isSubmitting}
                        className="register-layout-content-button">
                        {props.isSubmitting ? "Đang tải" : "Đăng Ký"}
                      </Button>
                      {error && handleAlert()}
                    </div>
                    <div className="text-center">
                      <Link to="/login">
                        Bạn đã có tài khoản? Đăng nhập
                      </Link>
                    </div>
                  </section>



                </Form>
              )}
            </Formik>


          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Register