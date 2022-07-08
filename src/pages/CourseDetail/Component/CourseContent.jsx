import React from 'react'
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { actRegisterCourse } from "../../../redux/actions/KhoaHocActions"
import './CourseConten.scss'

export const CourseContent = (props) => {

  const { courseDetailData, setOpenModal } = props;
  console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegisterCourse = () => {
    if (!localStorage.getItem("UserClient")) {
      history.push("/login")
    }
    const courseInfo = {
      maKhoaHoc: courseDetailData && courseDetailData.maKhoaHoc,
      taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
    };
    dispatch(actRegisterCourse((courseInfo)));
    setOpenModal(true)
  };

  return (
    <Fragment>
      <section className="course-content">
        <div className="container">

          <div className="course-content-right">
            <img src={courseDetailData.hinhAnh} alt="courseDetailData.hinhAnh" />
          </div>

          <div className="course-content-left">
            <h1 className="course-content-left-title"> {courseDetailData.tenKhoaHoc}</h1>
            <p className="course-content-left-content"> {courseDetailData.moTa}</p>
            <div className="course-content-left-info">
              <div className="course-content-left-teach">
                <div>
                  <p>Giảng viên</p>
                  <p style={{ color: '#0e1133', fontWeight: 600 }}>{courseDetailData.nguoiTao?.hoTen}</p>
                </div>
              </div>
              <div className="course-content-left-studen">
                <p>Học viên</p>
                <p style={{ color: '#0e1133', fontWeight: 600 }}>{courseDetailData.soLuongHocVien}</p>
              </div>
              <div className="course-content-left-date">
                <p>Ngày cập nhật</p>
                <p style={{ color: '#0e1133', fontWeight: 600 }}>{courseDetailData.ngayTao}</p>
              </div>
            </div>

            <button
              onClick={() => {
                handleRegisterCourse();
              }} className="course-content-left-btn">Đăng ký</button>
          </div>




        </div>
      </section>
    </Fragment>
  )
}
