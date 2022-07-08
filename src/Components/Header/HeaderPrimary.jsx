import React, { useState } from 'react';
import { SearchOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import './headerPrimary.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;


export const HeaderPrimary = (props) => {
  const { history } = props;

  const handleCheckout = () => {
    localStorage.removeItem("UserClient") || JSON.parse(localStorage.getItem("AdminClient"));
  };

  const checkLogin = () => {
    if (localStorage.getItem("UserClient") === null) {
      return (
        <Link to="/login" ><div className="login button">Đăng nhập</div></Link>)
    } else {
      const nameUser = JSON.parse(localStorage.getItem("UserClient")) || JSON.parse(localStorage.getItem("AdminClient"));
      console.log(nameUser);
      return (
        <>
          <div className="userControll">
            <Link to="/user-profiles/0" ><UserOutlined className="userImg" /><h1 className="userImg-title">{`${nameUser.taiKhoan}`}</h1></Link>
            <Link to="/" onClick={() => {
              localStorage.removeItem("UserClient") || JSON.parse(localStorage.getItem("AdminClient"));
            }} ><LogoutOutlined className="userLogout" onClick={handleCheckout} /></Link>
          </div>
        </>
      )
    }
  }




  return (
    <div>
      <div className="headerline"></div>
      <div className="headerPrimary">
        <div className="left part">
          <div className="udemyLogo">
            <Link to="/">
              <img src="..//logoTNT.png" className="logo" alt="logo"></img>
            </Link>
          </div>
        </div>
        {/* <div className="mid part">
          <div className="searchIcon">
            <SearchOutlined />
          </div>
          <input className="searchBar" placeholder="Search for anything"></input>
        </div> */}
        <div className="right part">
          <div className="businessDiv">
            <Link to="/courses" ><h1 className="business">Danh mục</h1></Link>
          </div>
          <div className="teachDiv">
            <Link to="/aboutus" ><h1 className="teach">Thông tin</h1></Link>
          </div>
          {/* <Link to="/login" ><div className="login button">Đăng nhập</div></Link> */}
          <div>{checkLogin()}</div>

        </div>
      </div>
    </div >
  )
}
