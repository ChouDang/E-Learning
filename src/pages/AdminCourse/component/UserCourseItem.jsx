import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserJoined, actFetchUserSelector, actFetchUserWaiting, actGetCodeCourse } from '../../../redux/actions/AdminAction';
import * as ActionType from "../../../redux/actions/constants";
import { actCourseDelete } from '../../../redux/actions/UserAction';

import { Table } from 'antd';
import RegisterModal from './RegisterModal';
import { Link } from 'react-router-dom';

const UserCourseItem = (props) => {

    const columns = [
        {
            title: 'ID',
            width: 30,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
        },
        {
            title: 'Tên Khóa Học',
            width: 70,
            dataIndex: 'tenKhoaHoc',
            key: 'tenKhoaHoc',
            fixed: 'left',
        },
        {
            title: 'Mã Khóa Học',
            dataIndex: 'maKhoaHoc',
            key: 'maKhoaHoc',
            width: 50,
        },
        // {
        //     title: 'Hình Ảnh',
        //     dataIndex: 'hinhAnh',
        //     key: 'hinhAnh',
        //     width: 100,
        //     render: (dataSource) => <img
        //         alt="heheh"
        //         src={dataSource.hinhAnh}
        //         style={{ width: 200, height: 150 }}
        //     />

        // },
        {
            title: 'Lượt Xem',
            dataIndex: 'luotXem',
            key: 'luotXem',
            width: 50,
        },
        {
            title: 'Thao Tác',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (dataSource) => <div className="text-center">
                <button className="btn btn-danger mr-1"
                    onClick={() => {
                        if (
                            window.confirm("Bạn có muốn xoá khóa học " + dataSource.maKhoaHoc)
                        ) {
                            handleDeleteCourse(dataSource.maKhoaHoc);
                        }
                    }}>Xóa</button>
                <Link className="btn btn-success mr-1" to="/admincourse/update">Sửa</Link>
                {/* <button className="btn btn-success mr-1" onClick={() => {}}>Sửa</button> */}
                <button className="btn btn-success" onClick={() => {
                    //Edit
                    getCourseCode(dataSource.maKhoaHoc);
                }}>Ghi Danh</button>

            </div>

        },
    ];

    const { dataCourseList } = props;
    const dispatch = useDispatch();
    const handleDeleteCourse = (maKhoaHoc) => {
        dispatch(actCourseDelete(maKhoaHoc));

    };

    // modal Register course
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const handleShowRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);

    const getCourseCode = (courseCode) => {
        const code = {
            maKhoaHoc: courseCode,
        };
        handleShowRegisterModal();
        dispatch(actFetchUserSelector(code));
        dispatch(actFetchUserWaiting(code));
        dispatch(actFetchUserJoined(code));
        dispatch(actGetCodeCourse(courseCode))

    };


    const users = dataCourseList?.map((user, index) => {
        return (user = {
            ...user,
            id: index + 1,
        });
    });


    return (
        <Fragment>
            {users && (<Table
                columns={columns}
                dataSource={users}
            // scroll={{
            //     x: 1500,
            //     y: 300,
            // }}
            />)}
            <RegisterModal
                showRegisterModal={showRegisterModal}
                handleCloseRegisterModal={handleCloseRegisterModal} />
        </Fragment>
    )
}

export default UserCourseItem