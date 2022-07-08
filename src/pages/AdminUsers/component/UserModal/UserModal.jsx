import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as ActionType from "../../../../redux/actions/constants";
import { actAddUser, actUpdateUser } from '../../../../redux/actions/UserAction';
import "./UserModal.scss"

import { CopyOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import { Modal } from 'antd';
import { Input } from 'antd';


const { Option } = Select;


const UserModal = (props) => {
    const dispatch = useDispatch()

    const open = useSelector((state) => state.adminUserReducer.open);
    const user = useSelector((state) => state.adminUserReducer.userInfo);

    const handleOpen = () => dispatch({ type: ActionType.OPENMODAL });
    const handleClose = () => dispatch({ type: ActionType.CLOSEMODAL });

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
    });

    useEffect(() => {
        if (user) {
            setState({
                taiKhoan: user.taiKhoan,
                matKhau: "",
                hoTen: user.hoTen,
                soDT: user.soDT,
                maLoaiNguoiDung: user.maLoaiNguoiDung,
                maNhom: "GP04",
                email: user.email,
            });
        } else {
            setState({
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maLoaiNguoiDung: "",
                maNhom: "",
                email: "",
            });
        }
    }, [user])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (user !== null) {
            return dispatch(actUpdateUser(state)), handleClose();
        }
        return dispatch(actAddUser(state)), handleClose();
    };


    return (
        <Fragment>
            <Modal title={user ? "Sửa Người Dùng" : "Thêm Người Dùng"} visible={open} onCancel={handleClose} onOk={handleSubmit}>
                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">Tài Khoản</p>
                    {user ? (
                        <Input
                            name="taiKhoan"
                            placeholder="Tài Khoản"
                            style={{ height: 32 }}
                            disabled
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    ) : (
                        <Input
                            name="taiKhoan"
                            style={{ height: 32 }}
                            placeholder="Tài Khoản"
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    )}
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">Mật khẩu</p>
                    {user ? (
                        <Input
                            name="matKhau"
                            placeholder="Mật Khẩu"
                            style={{ height: 32 }}
                            type="password"
                            disabled
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    ) : (
                        <Input
                            name="matKhau"
                            style={{ height: 32 }}
                            placeholder="Mật Khẩu"
                            type="password"
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    )}
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">Họ tên</p>
                    <Input
                        name="hoTen"
                        style={{ height: 32 }}
                        placeholder="Họ tên"
                        value={state.taiKhoan}
                        onChange={handleChange} />
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">Số điện thoại</p>
                    <Input
                        name="soDT"
                        style={{ height: 32 }}
                        placeholder="Số điện thoại"
                        value={state.taiKhoan}
                        onChange={handleChange} />
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">Email</p>
                    <Input
                        name="email"
                        style={{ height: 32 }}
                        placeholder="Email"
                        value={state.taiKhoan}
                        onChange={handleChange} />
                </div>

                <div className="adminInfo-item">
                    <div className="row ">
                        <div className="col-7 d-flex" style={{ width: 240 }}>
                            <p className="adminInfo-item-title" style={{ width: 140 }}>Mã loại người dùng</p>

                            <select
                                defaultValue="GV"
                                value={state.maLoaiNguoiDung}
                                name="maLoaiNguoiDung"
                                style={{ height: 32 }}
                                onChange={handleChange}>
                                <option value="GV">Giáo vụ</option>
                                <option value="HV">Học viên</option>
                            </select>

                        </div>
                        <div className="col-5 d-flex">
                            <p className="adminInfo-item-title">Mã nhóm</p>

                            <select
                                defaultValue="GP01"
                                value={state.maLoaiNguoiDung}
                                name="maNhom"
                                style={{ height: 32 }}
                                onChange={handleChange}>
                                <option value="GV">Giáo vụ</option>
                                <option value="HV">Học viên</option>
                            </select>

                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

export default UserModal