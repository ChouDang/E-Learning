import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { actCancelCourse } from '../../../redux/actions/AdminAction';



function createData(number, account, name, confirmation) {
    return { number, account, name, confirmation };
}

const UserJoined = (props) => {

    const columns = [
        {
            title: 'Tài Khoan',
            width: 50,
            dataIndex: 'account',
            key: 'account',
            fixed: 'left',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            width: 50,
        },
        {
            title: 'Thao Tác',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (dataSource) => <div className="text-center">
                <button className="btn btn-danger" onClick={() => {
                    const courseInfo = {
                        maKhoaHoc: courseCode,
                        taiKhoan: dataSource.account,
                    };
                    if (
                        window.confirm("Bạn có muốn xoá")
                    ) {
                        dispatch(actCancelCourse(courseInfo));
                    }
                }}>Xóa</button>
            </div>

        },
    ];

    const { dataUserJoined, courseCode } = props;
    const dispatch = useDispatch();
    const rows =
        dataUserJoined?.map((user, index) => {
            return createData(index, user.taiKhoan, user.hoTen)
        });

    console.log("userjoined", rows)
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <Fragment>
            <section>
                <div className="row">
                    <p>Học viên đã tham gia khóa học</p>
                </div>
                <div>{dataUserJoined && (<Table
                    columns={columns}
                    dataSource={rows}
                    pagination={{
                        pageSize: 2,
                    }}
                />)}</div>
            </section>
        </Fragment>
    )
}

export default UserJoined