import React, { Fragment } from 'react'
import { CoursesList } from './Component/CoursesList'

const Courses = () => {
  return (
    <Fragment>
      <div className="container my-4">
        <CoursesList />
      </div>
    </Fragment>
  )
}

export default Courses