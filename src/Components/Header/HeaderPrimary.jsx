import React from 'react'
import './headerPrimary.scss'
export const HeaderPrimary = () => {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src="..//logo.jpg" className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <p className="icon">icon</p>
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        <div className="businessDiv">
          <span className="business">Udemy for Business</span>
        </div>
        <div className="teachDiv">
          <span className="teach">Teach on Udemy</span>
        </div>
        <div className="cartDiv">
          <p className="icon">icon</p>
        </div>
        <div className="login button">Log In</div>
        <div className="signup button">Sign up</div>
      </div>
    </div>
  )
}
