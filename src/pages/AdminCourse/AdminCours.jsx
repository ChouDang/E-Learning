import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { actGetKeyword, actCourseSearch } from '../../redux/actions/UserAction';
import * as ActionType from "../../redux/actions/constants";

import { UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';


import { Input } from 'antd';
import UserModalCourse from './component/UserModalCourse';
import UserCourseItem from './component/UserCourseItem';
import { actCourseAllGet } from '../../redux/actions/KhoaHocActions';
import { Link } from 'react-router-dom';



const { Search } = Input;


const AdminCours = () => {

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch({ type: ActionType.OPENMODAL })
    }

    useEffect(() => {
        dispatch(actCourseAllGet())
    }, [])

    const dataCourseList = useSelector(
        (state) => state.adminDanhSachKhoaHocReducer.dataCourseList
    );


    const [keyword, setKeyword] = useState("");

    const handleSearch = () => {
        if (!keyword) {
            dispatch(actCourseAllGet());
        } else {
            dispatch(actCourseSearch(keyword));
        }
    };

    const handleOnChange = (event) => {
        const { value } = event.target;
        dispatch(actGetKeyword(value))
    }


    return (
        <Fragment>
            <section className="">
                <Link to="/admincourse/add">
                    <Button type="primary"
                        icon={<UserAddOutlined />}>
                        Thêm Khóa Học
                    </Button>
                </Link>
                <UserModalCourse />

                <div className="search-box">
                    <Search
                        className="mt-3 mb-3"
                        placeholder="Tìm khóa học..."
                        allowClear
                        enterButton="Tìm kiếm"
                        size="default"
                        onChange={handleOnChange}
                        onSearch={handleSearch}
                    />
                </div>
                {dataCourseList && (<UserCourseItem dataCourseList={dataCourseList} />)}
            </section>
        </Fragment>
    )
}

export default AdminCours