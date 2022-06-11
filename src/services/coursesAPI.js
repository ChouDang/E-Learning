import http from '../util/setting.js';


const coursesAPI = {
    getCourses: () =>{
        return http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc")
    },

    getCoursesByCategory: (category) =>{

        const params ={
            maDanhMuc: category,
            maNhom: "GP01"
        }
        
        return http.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", { params })
    }
}
export default coursesAPI
// Các sử dụng
// import coursesAPI from "src/services/coursesAPI/courses"
//  const {data} = await coursesAPI.getCourses()