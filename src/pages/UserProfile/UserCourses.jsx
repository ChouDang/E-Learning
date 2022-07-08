import React, { useEffect, useState } from 'react'
import "./styles/UserCourses.scss"
import { useDispatch, useSelector } from "react-redux";
import { actCancelCourse } from "../../redux/actions/UserAction";

import { Avatar, List } from 'antd';


const UserCourses = (props) => {
  const { user } = props;
  const dispatch = useDispatch()

  let keyword = useSelector((state) => state.thongTinNguoiDungReducer.keyword);
  const courseList = user?.chiTietKhoaHocGhiDanh.filter(
    (course) =>
      course.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  );
  console.log('courseList', courseList);
  // const renderCourses = () => {
  //   return courseList?.map((course, index) => {
  //     const courseInfo = {
  //       maKhoaHoc: course.maKhoaHoc,
  //       taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
  //     };
  //     return (
  //       <>
  //         <List key={index}
  //           itemLayout="horizontal"
  //           dataSource={courseList}
  //           pagination={{
  //             pageSize: 2,
  //           }}
  //           renderItem={(courseList) => (
  //             <List.Item>
  //               <List.Item.Meta
  //                 avatar={<Avatar src={courseList.hinhAnh} />}
  //                 title={<a href="https://ant.design">{courseList.tenKhoaHoc}</a>}
  //                 description={courseList.moTa}
  //               />
  //               <button className="btn btn-danger"
  //                 onClick={() => {
  //                   dispatch(actCancelCourse(courseInfo));
  //                 }}>hủy</button>
  //             </List.Item>
  //           )}
  //         />
  //       </>)
  //   })
  // }



  const renderCourses = () => {
    return (
      <>
        <List
          itemLayout="horizontal"
          dataSource={courseList}
          pagination={{
            pageSize: 2,
          }}
          renderItem={(course) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={course.hinhAnh} />}
                title={<a href="https://ant.design">{course.tenKhoaHoc}</a>}
                description={course.moTa}
              />
              <button className="btn btn-danger"
                onClick={() => {
                  dispatch(actCancelCourse({
                    maKhoaHoc: course.maKhoaHoc,
                    taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
                  }));
                }}>hủy</button>
            </List.Item>
          )}
        />
      </>)
  }

  return (
    <div>{renderCourses()}</div>
  );
}
export default UserCourses