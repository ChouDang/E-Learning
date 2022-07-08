import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { actDeleteUser, actGetUser, actGetUserInfo } from '../../../../redux/actions/UserAction';
import * as ActionType from "../../../../redux/actions/constants";
import { Table } from 'antd';


const User = (props) => {


    const columns = [
        {
            title: 'ID',
            width: 20,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Tài Khoản',
            width: 80,
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
            fixed: 'left',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
            width: 100,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            key: 'soDt',
            width: 100,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 100,
        },
        {
            title: 'Chức vụ',
            dataIndex: 'maLoaiNguoiDung',
            key: 'maLoaiNguoiDung',
            width: 100,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (dataSource) => <div>
                <button className="btn btn-danger mr-5"
                    onClick={() => {

                        // Delete confirm
                        if (
                            window.confirm("Bạn có muốn xoá tài khoản " + dataSource.taiKhoan)
                        ) {
                            handleDelete(dataSource.taiKhoan);
                        }
                    }}>Xóa</button>
                <button className="btn btn-success" onClick={() => {
                    //Edit
                    handleOpen();
                    handleUserInfo(dataSource);
                }}>Sữa</button>
            </div>

        },
    ];


    const dispatch = useDispatch()
    const { data } = props;
    // let data = useSelector((state) => state.adminUserReducer.listuser);
    let keyword = useSelector((state) => state.adminUserReducer.keyword);

    const handleOpen = () => dispatch({ type: ActionType.OPENMODAL });
    const handleUserInfo = (user) => {
        dispatch(actGetUserInfo(user));
    };


    const users = data?.map((user, index) => {
        return (user = {
            ...user,
            id: index + 1,
        });
    });


    const handleDelete = (taiKhoan) => {
        dispatch(actDeleteUser(taiKhoan));
    };

    let usersList = users?.filter(
        (user) =>
            user.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );


    return (
        <Fragment>
            {usersList && (<Table
                columns={columns}
                dataSource={usersList}
                scroll={{
                    x: 1500,
                    y: 300,
                }}
            />)}
        </Fragment>
    )
}

export default User