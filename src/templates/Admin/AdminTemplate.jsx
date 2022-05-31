import React, { Fragment, useEffect } from 'react'


function AdminTemplate(props) {
  const { Component, ...restProps } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="realative" id="AdminTemplate" >
            <Fragment >
              <div>Đây là admin tem</div>
            </Fragment>
          </div>
        )
      }}
    />
  )
}



export default AdminTemplate
