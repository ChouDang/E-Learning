
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HeaderPopup } from './HeaderPopup'
import { HeaderPrimary } from './HeaderPrimary'


const Header = (props) => {
  const { QuanLyNguoiDungReducer } = useSelector(result => result.QuanLyNguoiDungReducer)


  return (
    <Fragment>
      <HeaderPopup />
      <HeaderPrimary />
    </Fragment>
  )
}

export default Header