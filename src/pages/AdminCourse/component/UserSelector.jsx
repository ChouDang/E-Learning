import React, { Fragment, useState } from 'react'
import { useDispatch } from "react-redux";
import { AutoComplete, Input } from 'antd';
import { actAdminRegisterCourse } from '../../../redux/actions/AdminAction';



const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });



const UserSelector = (props) => {
    const dispatch = useDispatch();
    const { dataUserSelector, courseCode } = props;
    const userList = dataUserSelector?.map((user, index) => {
        return {
            label: user.taiKhoan,
            key: index,
        };
    });

    const courseInfo = {
        maKhoaHoc: courseCode,
        taiKhoan: ''
    }
    console.log(userList)

    const [options, setOptions] = useState([]);

    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    return (
        <Fragment>
            <p >Chọn người dùng</p>
            <div className="row">
                <div className="col-8">

                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{
                            width: "100%",
                        }}
                        options={userList}
                        onSelect={onSelect}
                        onSearch={handleSearch}
                    >
                        {/* <Input.Search size="large" placeholder="input here" enterButton /> */}
                        {/* <CaretDownOutlined placeholder="input here" enterButton /> */}
                    </AutoComplete>

                </div>
                <div className="col-4" style={{ textAlign: 'center' }}><button onClick={() => {
                    dispatch(actAdminRegisterCourse(courseInfo));
                }} className="btn btn-success">Ghi danh</button></div>
            </div>

        </Fragment>
    )
}

export default UserSelector