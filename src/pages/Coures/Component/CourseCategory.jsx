import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./style/CourseCategory.scss"


export const CourseCategory = (props) => {
  const { courseCategory, selectCategory, setSelectCategory, setPage } = props;
  let categories = null;
  if (courseCategory) {
    categories = [
      {
        maDanhMuc: 'All',
        tenDanhMuc: 'Tất cả'
      },
      ...courseCategory
    ];
  }

  const handleChange = (event) => {
    setSelectCategory(event.target.value);
    setPage(1);
  }

  return (
    <Fragment>
      <section className="courseCategory">
        <select defaultValue={selectCategory}
          onChange={handleChange}
          style={{
            width: 200,
          }}
        >
          {categories?.map(category => (
            <option key={category.maDanhMuc} value={category.maDanhMuc} onChange={handleChange}> {category.tenDanhMuc}</option>
          ))}
        </select>
      </section>
    </Fragment>
  )
}
