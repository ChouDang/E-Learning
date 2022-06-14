
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HeaderPrimary } from './HeaderPrimary'


const Header = (props) => {
  return (
    <Fragment>
      <HeaderPrimary />
    </Fragment>
  )
}

export default Header