import React from 'react'
import "./styles/BecomeInstructor.scss"
export const BecomeInstructor = () => {
  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading">Become an instructor</h2>
        <p className="about">
          Top instructors from around the world teach millions of students on
          Udemy. We provide the tools and skills to teach what you love.{" "}
        </p>
        <button className="startTeching button">Start teaching today</button>
      </div>
    </div>
  )
}
