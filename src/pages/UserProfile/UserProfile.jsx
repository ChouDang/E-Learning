import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actUserProfile } from '../../redux/actions/UserAction';
import UserInfo from "./UserInfo";
import SearchCourse from "./SearchCourse";
import UserCourses from "./UserCourses"
import { Radio, Tabs } from 'antd';
const { TabPane } = Tabs;



const UserProfile = (props) => {
    const { id } = props.match.params;
    const [value, setValue] = useState(Number(id));
    const dispatch = useDispatch();
    const user = useSelector(state => state.thongTinNguoiDungReducer.dataUser)

    useEffect(() => {
        const accountUser = {
            taiKhoan: JSON.parse(localStorage.getItem("UserClient")).taiKhoan,
        }
        dispatch(actUserProfile((accountUser)));
        console.log(user);
    }, []);

    const onChange = (key) => {
        console.log(key);
    };

    return !localStorage.getItem("UserClient") ? (<Redirect to="/" />)
        : (
            <><section className="userInfo container" style={{ height: `calc(100vh)` }}>
                <div className="userInfo-title mt-4" style={{ textAlign: "center", alignItems: "center" }}>
                    <h1>{user && user.hoTen}</h1>
                </div>
                <div className="userInfo-content" >
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="left"
                        onChange={onChange}
                        style={{
                            height: 220,
                        }}
                    >
                        <TabPane tab="Thông Tin Cá Nhân" key="1">
                            <UserInfo user={user} />
                        </TabPane>
                        <TabPane tab="Khóa Học Của Tôi" key="2">
                            <SearchCourse />
                            <UserCourses user={user} />
                        </TabPane>
                    </Tabs>
                </div>
            </section>
            </>
        )
}

export default UserProfile