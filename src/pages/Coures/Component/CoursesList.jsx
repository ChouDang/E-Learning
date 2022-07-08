import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd';
import { CoursesCard } from "./CoursesCard"
import { CourseCategory } from './CourseCategory';
import { actCourseAllGet, actCourseByCategoryGet, actCourseCategoryGet } from '../../../redux/actions/KhoaHocActions';
import "./style/CoursesList.scss"

export const CoursesList = () => {
  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory] = useState("All");


  // danh sach khoa hoc
  useEffect(() => {
    dispatch(actCourseCategoryGet())
  }, [])
  // Lấy danh sách tất cả khóa học và khóa học theo danh mục
  useEffect(() => {
    if (selectCategory != "All") {
      dispatch(actCourseByCategoryGet(selectCategory))
    } else {
      dispatch(actCourseAllGet())
    }
  }, [selectCategory])

  const dataCourseCategory = useSelector(state => state.danhMucKhoaHocReduce.dataCourseCategory)


  const dataCourseList = useSelector(state => state.danhSachKhoaHocReducer.dataCourseList)


  // hàm render pagination sau khi lấy được danh sách khóa học
  const renderPagination = () => {
    if (!dataCourseList) {
      return;
    }
    // const pages = Math.ceil(dataCourseList?.length / 6);

    const totalPages = Math.ceil(dataCourseList?.length);
    return (
      <Pagination
        style={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          alignItems: "center"
        }}
        current={page}
        total={totalPages}
        onChange={handleChangePage}
      />
    );
  };

  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    // console.log(event);
    // bắt buộc phải có event?
    setPage(event)
    window.scroll(0, 0);
  };

  // hàm thay đổi danh sách render theo trang
  let courseList = null;
  const renderCourseList = () => {
    window.scroll(0, 0);
    const firstItem = (page - 1) * 6;
    const lastItem = firstItem + 6;
    courseList = dataCourseList?.slice(firstItem, lastItem);
    return courseList?.map((course) => (
      <div className="courseList" key={course.maKhoaHoc}>
        <CoursesCard courseInfo={course} />
      </div>
    ));
  };

  return (
    <Fragment>
      <section className="courseCategory">
        {dataCourseCategory && (
          <CourseCategory
            courseCategory={dataCourseCategory}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            setPage={setPage}
          />
        )}
      </section>
      <section className="courseCategoryList">
        {dataCourseCategory && renderCourseList()}
      </section>
      {renderPagination()}
    </Fragment>
  )
}
