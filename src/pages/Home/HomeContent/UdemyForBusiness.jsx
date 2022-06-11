import React from 'react'
import "./styles/UdemyForBusiness.scss"
export const UdemyForBusiness = () => {
  return (
    <div className="udemyForBusiness">
      <div className="backgroundColorDiv"></div>
      <div className="contentDiv">
        <h2 className="heading">Dành cho Doanh Nghiệp</h2>
        <p className="about">
          Nhận quyền truy cập không giới hạn vào hơn 4.000 khóa học hàng đầu của Udemy cho nhóm của bạn.
        </p>
        <div className="startTeching button">Đăng ký ngay</div>
      </div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"
        alt="instructorImg"
        className="Img"
      ></img>
    </div>
  )
}
