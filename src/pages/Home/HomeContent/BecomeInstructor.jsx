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
        <h2 className="heading">Trở thành người hướng dẫn chia sẽ kinh nghiệm của bạn</h2>
        <p className="about">
          Các giảng viên hàng đầu từ khắp nơi trên thế giới dạy hàng triệu sinh viên trên Udemy. Chúng tôi cung cấp các công cụ và kỹ năng để dạy những gì bạn yêu thích.{" "}
        </p>
        <button className="startTeching button">Bắt đầu dạy hôm nay</button>
      </div>
    </div>
  )
}
