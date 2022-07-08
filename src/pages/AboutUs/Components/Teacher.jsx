import React from 'react'
import "./Teacher.scss"
export const Teacher = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h1>GIÁO VIÊN KINH NGHIỆM</h1>
          <h2>Đội ngũ giảng viên</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, expedita quisquam commodi mollitia quia minus qui incidunt, amet nobis dolorem officia deleniti doloremque vel? Quaerat delectus consequatur illo dolor provident, ab vel adipisci illum rerum molestias in fuga quas harum error vero unde? Quod expedita architecto facilis! Nobis, architecto temporibus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum eligendi autem! Eveniet, error. Aperiam voluptate nemo maxime, quasi laudantium natus mollitia dolore ut corrupti similique provident ullam iste facere.</p>
          <button className="teacher-btn">Tìm hiểu thêm</button>
        </div>
        <div className="col-7">
          <div className="content">
            <img
              className="teacherImg"
              src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/256/teacher-f.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <img
              className="teacherImg"
              src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg"
              alt=""
            />
          </div>
          <div className="content">
            <img
              className="teacherImg"
              src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/sites/34/2014/11/math-teacher.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <img
              className="teacherImg"
              src="https://img2.storyblok.com//f/64062/800x450/374dd06094/world-teachers-day.jpg"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  )
}
