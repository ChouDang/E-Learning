import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { Route, Redirect, Link } from "react-router-dom";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import "./AdminTemplate.scss"
import { Layout, Menu } from 'antd';


const { Header, Sider, Content } = Layout;


const AdminTemplate = (props) => {

    const { Component, ...restProps } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    }

    const handleCheckout = () => {
        localStorage.removeItem("AdminClient");
    };


    const checkLogin = () => {
        return (
            <>
                <div className="userControll">
                    <Link to="/" onClick={handleCheckout}><LogoutOutlined className="userLogout" onClick={handleCheckout} /></Link>
                </div>
            </>
        )

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    if (localStorage.getItem("AdminClient")) {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" ><img src="..//logoTNT.png" className="logo-content" alt="logo"></img></div>
                    {/* <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                                link: <Link to='/' />
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    /> */}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span>Quản Trị</span>
                            <Link to="/dashboard" />
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>Quản lý người dùng</span>
                            <Link to="/adminusers" />
                        </Menu.Item>
                        <Menu.Item key="3">
                            <VideoCameraOutlined />
                            <span>Quản lý khóa học</span>
                            <Link to="/admincourse" />
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background header-custom"
                        style={{
                            padding: 0,
                            backgroundColor: '#fff'

                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        {checkLogin()}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Route
                            {...restProps}
                            render={(propsRoute) => {
                                //props.location, props.history, props.match
                                return (
                                    <Fragment >
                                        <Component {...propsRoute} />
                                    </Fragment>
                                );
                            }} />
                    </Content>
                </Layout>
            </Layout>

        )
    }
    return (
        <Redirect to="/" />
    );
}

export default AdminTemplate