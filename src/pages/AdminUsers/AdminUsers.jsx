import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { actGetAllUser, actGetKeyword, actGetUser, actGetUserInfo } from '../../redux/actions/UserAction';
import * as ActionType from "../../redux/actions/constants";

import { UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import UserModal from './component/UserModal/UserModal';
import User from './component/User/User';
import { Input } from 'antd';

const { Search } = Input;


const AdminUsers = () => {

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch({ type: ActionType.OPENMODAL })
    }

    const resetUserEdit = () => {
        dispatch(actGetUserInfo(null))
    }

    let data = useSelector((state) => state.adminUserReducer.listuser);


    const handleOnChange = (event) => {
        let { value } = event.target;
        console.log(value);
        // dispatch(actGetKeyword(value));
    };

    // Call Api get User
    useEffect(() => {
        dispatch(actGetAllUser());
    }, []);



    const handleOnSearch = (value) => {
        console.log(value)
        dispatch(actGetKeyword(value));
    }

    return (
        <Fragment>
            <section className="">
                <Button type="primary"
                    icon={<UserAddOutlined />}
                    onClick={() => {
                        resetUserEdit();
                        handleOpen();
                    }}>
                    Thêm Người Dùng
                </Button>
                <UserModal />

                <div className="search-box">

                    {/* <SearchIcon sx={{ marginLeft: "20px" }} /> */}
                    {/* <input
                        className="admin-search"
                        style={{
                            display: "inline-block",
                            width: `100%`,
                            height: `100%`,
                            padding: '10px',
                            fontWeight: '700',
                            lineHeight: '20px',
                            fontSize: "20px"
                        }}
                        type="text"
                        placeholder="Tìm người dùng..."
                        onChange={handleOnChange}
                    /> */}

                    <Search
                        className="mt-3 mb-3"
                        placeholder="Tìm Ngươi dùng"
                        allowClear
                        enterButton="Tìm kiếm"
                        size="default"
                        onChange={handleOnChange}
                        onSearch={handleOnSearch}
                    />
                </div>
                {/* {data && (<User users={users} />)} */}
                {data ? (<User data={data} />) : ""}
                {/* <User data={data} /> */}
            </section>
        </Fragment>
    )
}

export default AdminUsers