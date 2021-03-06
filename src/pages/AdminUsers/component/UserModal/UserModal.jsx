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
            <Modal title={user ? "S???a Ng?????i D??ng" : "Th??m Ng?????i D??ng"} visible={open} onCancel={handleClose} onOk={handleSubmit}>
                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">T??i Kho???n</p>
                    {user ? (
                        <Input
                            name="taiKhoan"
                            placeholder="T??i Kho???n"
                            style={{ height: 32 }}
                            disabled
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    ) : (
                        <Input
                            name="taiKhoan"
                            style={{ height: 32 }}
                            placeholder="T??i Kho???n"
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    )}
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">M???t kh???u</p>
                    {user ? (
                        <Input
                            name="matKhau"
                            placeholder="M???t Kh???u"
                            style={{ height: 32 }}
                            type="password"
                            disabled
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    ) : (
                        <Input
                            name="matKhau"
                            style={{ height: 32 }}
                            placeholder="M???t Kh???u"
                            type="password"
                            value={state.taiKhoan}
                            onChange={handleChange} />
                    )}
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">H??? t??n</p>
                    <Input
                        name="hoTen"
                        style={{ height: 32 }}
                        placeholder="H??? t??n"
                        value={state.taiKhoan}
                        onChange={handleChange} />
                </div>

                <div className="adminInfo-item">
                    <p className="adminInfo-item-title">S??? ??i???n tho???i</p>
                    <Input
                        name="soDT"
                        style={{ height: 32 }}
                        placeholder="S??? ??i???n tho???i"
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
                            <p className="adminInfo-item-title" style={{ width: 140 }}>M?? lo???i ng?????i d??ng</p>

                            <select
                                defaultValue="GV"
                                value={state.maLoaiNguoiDung}
                                name="maLoaiNguoiDung"
                                style={{ height: 32 }}
                                onChange={handleChange}>
                                <option value="GV">Gi??o v???</option>
                                <option value="HV">H???c vi??n</option>
                            </select>

                        </div>
                        <div className="col-5 d-flex">
                            <p className="adminInfo-item-title">M?? nh??m</p>

                            <select
                                defaultValue="GP01"
                                value={state.maLoaiNguoiDung}
                                name="maNhom"
                                style={{ height: 32 }}
                                onChange={handleChange}>
                                <option value="GV">Gi??o v???</option>
                                <option value="HV">H???c vi??n</option>
                            </select>

                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    )
}

export default UserModal