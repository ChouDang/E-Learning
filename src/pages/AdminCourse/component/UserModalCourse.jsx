import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Modal } from 'antd';
import { useParams } from "react-router-dom";
import { actCourseCategoryGet } from '../../../redux/actions/KhoaHocActions';
import { actCourseAdd, actGetAllUser } from '../../../redux/actions/UserAction';

const UserModalCourse = (props) => {
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

    const handleUpdateCourse = () => { };



    return (
        <Fragment>


        </Fragment>
    )
}

export default UserModalCourse