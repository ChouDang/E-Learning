import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import React from 'react'
import { Fragment, useEffect } from 'react'
import { Route } from "react-router-dom";
import "./LoginTemplate.scss"
const LoginTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment >
            <Header />
            <div className='sliderLogin'>
              <Component {...propsRoute} />
            </div>
            <Footer />
          </Fragment>
        )
      }} />
  )
}

export default LoginTemplate