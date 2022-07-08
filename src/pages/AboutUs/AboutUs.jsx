import React, { Fragment } from 'react'

import { Teacher } from './Components/Teacher'
import "./AboutUs.scss"
const AboutUs = () => {
  return (
    <Fragment >
      <div className="container">
        <section className="teacherBg">
          <Teacher />
        </section>

      </div>
    </Fragment>
  )
}

export default AboutUs