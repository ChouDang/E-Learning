import Footer from '../../Components/Footer/Footer';
import { Fragment, useEffect } from 'react'
import { Route } from "react-router-dom";
import Header from "../../Components/Header/Header"


export const HomeTemplate = (props) => {
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
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }} />
  )
}
