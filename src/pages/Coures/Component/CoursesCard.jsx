import React, { Fragment } from "react";
import { Card, Rate } from 'antd'
import { Link, Link as RouterLink } from "react-router-dom";
import CourseDetail from "../../CourseDetail/CourseDetail"
import "./style/CoursesCard.scss"
export const CoursesCard = (props) => {
  const { courseInfo } = props;

  return (
    <Fragment>
      <div className='coursecard'>
        {/* component={CourseDetail} */}
        <Link
          to={`/course-detail/${courseInfo.maKhoaHoc}`}>
          <Card
            className="card-course"
            cover={<img style={{ height: '150px', objectFit: 'cover', display: "block", width: `100%`, flexShrink: 0 }} alt="example" src={courseInfo.hinhAnh === "https://elearning0706.cybersoft.edu.vn/hinhanh/loi-500.png" || courseInfo.hinhAnh === "https://elearning0706.cybersoft.edu.vn/hinhanh/the-chant-of-metta.jpeg" ? `https://hongduc.vn/wp-content/uploads/2021/02/hoc-tai-nha.jpg` : courseInfo.hinhAnh} />}
          >
            <h6 style={{ fontSize: 20, color: `#0f7c90`, textAlign: "center", alignItems: "center", padding: `12px 0` }} >{courseInfo.tenKhoaHoc}</h6>
            <h6>{courseInfo.nguoiTao.hoTen}</h6>
            <h6>$9.99</h6>
            <div className='rating'>
              <Rate disabled width='2' allowHalf value="5" />
            </div>
          </Card>
        </Link>
      </div>
    </Fragment>
  )
}
