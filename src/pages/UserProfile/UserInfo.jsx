import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { useDispatch } from "react-redux";
import { actUpdateProfile } from '../../redux/actions/UserAction';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "./styles/UserInfo.scss"

const UserInfo = (props) => {

  const { user } = props;
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP04",
    email: "",
  })

  useEffect(() => {
    if (user) {
      setUserProfile({
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        hoTen: user.hoTen,
        soDT: user.soDT,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        maNhom: user.maNhom,
        email: user.email,
      });
    }
  }, [user])

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    })
  };

  const handleUpdate = (user) => {
    dispatch(actUpdateProfile(user));
  };


  return (
    <Fragment>
      <div className="userInfo-item">
        <p>Họ và Tên: </p>
        <Input className="userInfo-item-input"
          name="hoTen"
          value={userProfile.hoTen}
          onChange={handleOnChange}
          size="default"
          placeholder="Họ và Tên" />
      </div>

      <div className="userInfo-item">
        <p>Số Điện Thoại: </p>
        <Input className="userInfo-item-input"
          name="SoDT"
          value={userProfile.soDT}
          onChange={handleOnChange}
          size="default"
          placeholder="Số Điện Thoại" />
      </div>

      <div className="userInfo-item">
        <p>Email: </p>
        <Input className="userInfo-item-input"
          size="default"
          name="email"
          value={userProfile.email}
          onChange={handleOnChange}
          placeholder="Email" />
      </div>
      <div className="userInfo-item">
        <p>Mật Khẩu:  </p>
        <Input className="userInfo-item-input"
          name="matKhau"
          value={userProfile.matKhau}
          onChange={handleOnChange}
          size="default"
          type="password"
          placeholder="Mật Khẩu" />
      </div>

      <button onClick={handleUpdate(userProfile)} className="userInfo-btn button mt-4" >
        Cập Nhật
      </button>
    </Fragment >
  )
}

export default UserInfo