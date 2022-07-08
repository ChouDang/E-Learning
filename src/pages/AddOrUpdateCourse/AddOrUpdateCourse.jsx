import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal } from 'antd';
import { useParams } from "react-router-dom";
import { actCourseCategoryGet } from "../../redux/actions/KhoaHocActions";
import { actCourseAdd, actGetAllUser } from "../../redux/actions/UserAction";
import { Input } from 'antd';





const AddOrUpdateCourse = () => {
    const dispatch = useDispatch();

    let { action } = useParams();

    useEffect(() => {
        dispatch(actCourseCategoryGet());

        dispatch(actGetAllUser());
    }, []);



    const courseCategory = useSelector(
        (state) => state.danhMucKhoaHocReduce.dataCourseCategory
    );
    const listUser = useSelector((state) => state.adminUserReducer.listuser);

    const [courseDetail, setCourseDetail] = useState({
        maKhoaHoc: null,
        tenKhoaHoc: null,
        biDanh: null,
        moTa: null,
        luotXem: 0,
        danhGia: 0,
        hinhAnh: null,
        maNhom: "GP01",
        ngayTao: null,
        maDanhMucKhoaHoc: null,
        taiKhoanNguoiTao: null,
    });

    const [imgSrc, setImgSrc] = useState(null);

    let formData = new FormData();
    const [file, setFile] = useState(null);

    const handleChangeInput = (e) => {
        const { value, name } = e.target;
        console.log(name, value);
        setCourseDetail({
            ...courseDetail,
            [name]: value,
        });
    };


    const handleChangeImage = (e) => {
        let file = e.target.files[0];
        setFile(file);
        setCourseDetail({ ...courseDetail, hinhAnh: file.name });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            setImgSrc(e.target.result);
        };
    };


    const handleAddCourse = () => {
        formData.append("file", file, file.name);
        formData.append("tenKhoaHoc", courseDetail.tenKhoaHoc);
        dispatch(actCourseAdd(courseDetail, formData));

    };

    const handleUpdateCourse = () => {

    };



    return (
        <Fragment>
            <section>
                <div className="action-course">
                    <div className="titile"><h1>
                        {action === "add" ? "Thêm Khóa Học" : "Chỉnh Sửa Khóa Học"}
                    </h1></div>
                    <div className="content">
                        <form >

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Mã khóa học</p>
                                <Input
                                    name="maKhoaHoc"
                                    style={{ height: 32 }}
                                    placeholder="Mã Khóa Học"
                                    value={courseDetail.maKhoaHoc ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Tên Khóa Học</p>
                                <Input
                                    name="tenKhoaHoc"
                                    style={{ height: 32 }}
                                    placeholder="Tên Khóa Học"
                                    value={courseDetail.tenKhoaHoc ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Bí danh</p>
                                <Input
                                    name="biDanh"
                                    style={{ height: 32 }}
                                    placeholder="Bí danh"
                                    value={courseDetail.biDanh ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Ngày tạo</p>
                                <Input
                                    name="ngayTao"
                                    style={{ height: 32 }}
                                    placeholder="Ngày Tạo"
                                    value={courseDetail.ngayTao ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <div className="row " style={{ minWidth: 800 }}>
                                    <div className="col-6 d-flex" style={{ width: 240 }}>
                                        <p className="adminInfo-item-title" style={{ width: 140 }}>Danh mục khóa học</p>

                                        <select
                                            value={courseDetail.maDanhMucKhoaHoc ?? ""}
                                            name="maDanhMucKhoaHoc"
                                            style={{ height: 32 }}
                                            onChange={handleChangeInput}>
                                            {courseCategory &&
                                                courseCategory?.map((category) => (
                                                    <Fragment>
                                                        <option
                                                            key={category.maDanhMuc}
                                                            value={category.maDanhMuc}>
                                                            {category.tenDanhMuc}</option>
                                                    </Fragment>
                                                ))}
                                        </select>

                                    </div>

                                    <div className="col-6 d-flex">
                                        <p className="adminInfo-item-title">Người Tạo</p>

                                        <select
                                            value={courseDetail.taiKhoanNguoiTao ?? ""}
                                            name="taiKhoanNguoiTao"
                                            style={{ height: 32 }}
                                            onChange={handleChangeInput}>
                                            {listUser && listUser?.filter((user) => user.maLoaiNguoiDung === "GV").map((user) => (
                                                <Fragment>
                                                    <option
                                                        key={user.taiKhoan}
                                                        value={user.taiKhoan}>
                                                        {user.taiKhoan}</option>
                                                </Fragment>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Mô Tả</p>
                                <Input
                                    name="moTa"
                                    style={{ height: 32 }}
                                    placeholder="Mô Tả"
                                    value={courseDetail.moTa ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Hình ảnh</p>
                                <Input
                                    name="moTa"
                                    style={{ height: 32 }}
                                    placeholder="Mô Tả"
                                    value={courseDetail.moTa ?? ""}
                                    onChange={handleChangeInput} />
                            </div>


                            <div className="adminInfo-item">
                                <input type="file" accept="image/*" onChange={handleChangeImage} />
                                <div style={{ width: 150, height: 150 }}>{courseDetail.hinhAnh && (
                                    <img
                                        src={imgSrc}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "block",
                                            objectFit: "cover",
                                        }}
                                    />
                                )}</div>
                            </div>

                            <div className="adminInfo-item">
                                <button className="btn btn-success" onClick={action === "add" ? handleAddCourse : handleUpdateCourse}>{action === "add" ? "Thêm" : "Lưu"}</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AddOrUpdateCourse