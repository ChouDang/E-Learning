import React, { Fragment, useState } from 'react'
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { actAdminRegisterCourse } from '../../../redux/actions/AdminAction';

function createData(number, account, name, confirmation) {
    return { number, account, name, confirmation };
}

const UserWaiting = (props) => {

    const columns = [
        {
            title: 'Tài khoản',
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
            render: (dataSource) => <div>
                <button className="btn btn-danger mr-5"
                    onClick={() => {

                        // Delete confirm
                        if (
                            window.confirm("Bạn có muốn xoá")
                        ) {
                            // handleDeleteCourse(dataSource.taiKhoan);
                            alert("xóa")
                        }
                    }}>Xóa</button>
                <button className="btn btn-success" onClick={() => {
                    //Edit
                    const courseInfo = {
                        maKhoaHoc: courseCode,
                        taiKhoan: dataSource.account,
                    };
                    dispatch(actAdminRegisterCourse(courseInfo));

                }}>Xác nhận</button>
            </div>

        },
    ];

    const dispatch = useDispatch();
    const { dataUserWaiting, courseCode } = props;
    const rows =
        dataUserWaiting?.map((user, index) => {
            return createData(index, user.taiKhoan, user.hoTen)
        });

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    console.log("rows", rows);

    return (
        <Fragment>
            <section>
                <div className="row">
                    <p>Học viên chờ xác thực</p>
                </div>
                <div>  {dataUserWaiting && (<Table
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

export default UserWaiting