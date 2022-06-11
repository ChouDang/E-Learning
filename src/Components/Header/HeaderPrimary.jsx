import React from 'react'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import './headerPrimary.scss'
export const HeaderPrimary = () => {
  return (
    <div>

      <div className="headerPrimary">
        <div className="left part">
          <div className="udemyLogo">
            <img src="..//logoTNT.png" className="logo" alt="logo"></img>
          </div>
          <div className="categoriesDiv">
            <h1 className="categories">Danh mục</h1>
          </div>
        </div>
        <div className="mid part">
          <div className="searchIcon">
            <SearchOutlined />
          </div>
          <input className="searchBar" placeholder="Search for anything"></input>
        </div>
        <div className="right part">
          <div className="businessDiv">
            <h1 className="business">Khóa học</h1>
          </div>
          <div className="teachDiv">
            <h1 className="teach">Thông tin</h1>
          </div>
          <div className="cartDiv">
            <ShoppingCartOutlined />
          </div>
          <div className="login button">Đăng nhập</div>
          <div className="signup button">Đăng ký</div>
        </div>
      </div>
    </div >
  )
}
