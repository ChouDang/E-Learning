
import { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./Login.scss"
import React, { useState } from "react";
import { LockOutlined, UserOutlined, LockFilled } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { actSignIn } from '../../redux/actions/UserAction';
import { Link, useHistory } from "react-router-dom";




const Login = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.dangNhapReducer.error)

  const [account, setAccount] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnChange = (event) => {
    const { id, value } = event.target;

    setAccount({
      ...account,
      [id]: value,
    });
    console.log('account', account);

  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    dispatch(actSignIn(account, props.history));
    console.log("run", event);
  }

  const handleAlert = (error) => {
    return (
      <><p className="text-danger mt-3 text-center">{error.response.data}</p>
      </>
    )
  }


  return (
    <Fragment>
      <Form
        name="normal_login"
        className="login-form"
        // onSubmit={handleSubmit}
        onFinish={handleSubmit}
      >
        <div className="login-form-layout">
          <div className="login-form-layout-icon-bg">
            <LockFilled className="login-form-layout-icon" />
          </div>
          <h1 className="login-form-layout-title">Đăng nhập</h1>

          <Form.Item

            name="taiKhoan"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tài khoản!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" id="taiKhoan"
              onChange={handleOnChange} />
          </Form.Item>

          <Form.Item
            name="matKhau"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
              id="matKhau"
              onChange={handleOnChange}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Ghi nhớ</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Quên mật khẩu
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleOpen}
              className="login-form-button">
              Đăng nhập
            </Button>
            hoặc  <Link to="/register" >Đăng ký ngay!</Link>
            {error && handleAlert(error)}

          </Form.Item>
          <section className="login-form-layout-footer">Copyright © Your Website 2022</section>
        </div>
      </Form>
    </Fragment>
  )
};

export default Login