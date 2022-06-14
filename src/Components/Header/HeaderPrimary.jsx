import React from 'react'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import './headerPrimary.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const HeaderPrimary = () => {

  const themKhoaHocReducer = useSelector((state) => state.themKhoaHocReducer);
  const { courseListInCart } = themKhoaHocReducer;

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
        <div className="mid part">
          <div className="searchIcon">
            <SearchOutlined />
          </div>
          <input className="searchBar" placeholder="Search for anything"></input>
        </div>
        <div className="right part">
          <div className="businessDiv">
            <a href="#topCategories"><h1 className="business">Danh Mục</h1></a>
          </div>
          <div className="teachDiv">
            <Link to="./info" ><h1 className="teach">Thông tin</h1></Link>
          </div>
          <div className="cartDiv">
            <Link to="/cart">
              <Badge
                style={{ backgroundColor: "#FF9F3E" }}
                title="Your Cart"
                count={courseListInCart.length}
                showZero
              >
                <ShoppingCartOutlined className='icon-custom' size="50" />
              </Badge>
            </Link>
          </div>
          <Link to="/login" ><div className="login button">Đăng nhập</div></Link>
        </div>
      </div>
    </div >
  )
}
