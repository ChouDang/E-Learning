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
                        {action === "add" ? "Th??m Kh??a H???c" : "Ch???nh S???a Kh??a H???c"}
                    </h1></div>
                    <div className="content">
                        <form >

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">M?? kh??a h???c</p>
                                <Input
                                    name="maKhoaHoc"
                                    style={{ height: 32 }}
                                    placeholder="M?? Kh??a H???c"
                                    value={courseDetail.maKhoaHoc ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">T??n Kh??a H???c</p>
                                <Input
                                    name="tenKhoaHoc"
                                    style={{ height: 32 }}
                                    placeholder="T??n Kh??a H???c"
                                    value={courseDetail.tenKhoaHoc ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">B?? danh</p>
                                <Input
                                    name="biDanh"
                                    style={{ height: 32 }}
                                    placeholder="B?? danh"
                                    value={courseDetail.biDanh ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">Ng??y t???o</p>
                                <Input
                                    name="ngayTao"
                                    style={{ height: 32 }}
                                    placeholder="Ng??y T???o"
                                    value={courseDetail.ngayTao ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <div className="row " style={{ minWidth: 800 }}>
                                    <div className="col-6 d-flex" style={{ width: 240 }}>
                                        <p className="adminInfo-item-title" style={{ width: 140 }}>Danh m???c kh??a h???c</p>

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
                                        <p className="adminInfo-item-title">Ng?????i T???o</p>

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
                                <p className="adminInfo-item-title">M?? T???</p>
                                <Input
                                    name="moTa"
                                    style={{ height: 32 }}
                                    placeholder="M?? T???"
                                    value={courseDetail.moTa ?? ""}
                                    onChange={handleChangeInput} />
                            </div>

                            <div className="adminInfo-item">
                                <p className="adminInfo-item-title">H??nh ???nh</p>
                                <Input
                                    name="moTa"
                                    style={{ height: 32 }}
                                    placeholder="M?? T???"
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
                                <button className="btn btn-success" onClick={action === "add" ? handleAddCourse : handleUpdateCourse}>{action === "add" ? "Th??m" : "L??u"}</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default AddOrUpdateCourse