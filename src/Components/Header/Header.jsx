
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { QuanLyNguoiDungReducer } from "../../redux/configStore"

const Header = (props) => {
  const { QuanLyNguoiDungReducer } = useSelector(result => result.QuanLyNguoiDungReducer)


  return (
    <Fragment>
      <header id="header" className="">
        <main className="">
          <nav className="">

            <div className="container">
              <NavLink className="" type="E-learning" to="/" >E-learning</NavLink>


              <div className="">
                <input className="" type="text" placeholder="Find services" />
                <button className=""   >Search</button>
              </div>

              <button
                className="navbar-toggler ml-2"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              > btn</button>

              <div id="" className="">
                {/* renderlogin ở đây */}
              </div>
            </div>
          </nav>

          <div className="">
            <div className="">
              {/* render chi tiết công việc ở đây */}
            </div>
          </div>

          <div className="">
            <a href="#" title="Back to top">
              <i className="fa fa-angle-up"></i>
            </a>
          </div>
        </main>
      </header>
    </Fragment>
  )
}

export default Header