import React, { Fragment } from 'react'
import { Button, Col, Row, Statistic } from 'antd';
import { Progress } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';


const DashBoard = () => {
    return (
        <Fragment>
            <section className="text-center">
                <Row gutter={16}>
                    <Col span={24}>
                        <div className="card">
                            <div className="card-header">
                                <h5>Tiến độ phát triển</h5>
                            </div>
                            <div className="card-body row">
                                <div className="col-4">
                                    <p className="card-text">Tăng trưởng học viên</p>
                                    <Statistic
                                        title="Active"
                                        value={8.88}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    />
                                </div>
                                <div className="col-4"><p className="card-text">Tăng trưởng giản viên</p>
                                    <Statistic
                                        title="Active"
                                        value={16.98}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    /></div>
                                <div className="col-4"><p class="card-text">Tăng trưởng khóa học</p>
                                    <Statistic
                                        title="Active"
                                        value={5.7}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<ArrowUpOutlined />}
                                        suffix="%"
                                    /></div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12} className="mt-5">
                        <Statistic title="Người dùng" value={349} />
                    </Col>
                    <Col span={12} className="mt-5">
                        <Statistic title="Khóa học" value={39} />
                    </Col>
                    <Col span={12} className="mt-5" >
                        <Progress
                            type="circle"
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={58}
                        />
                        <p className="mt-5">Người dùng chờ duyện</p>
                    </Col>
                    <Col span={12} className="mt-5">
                        <Progress
                            type="circle"
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={80}
                        />
                        <p className="mt-5">Khóa học chờ duyện</p>
                    </Col>

                </Row>
            </section>
        </Fragment>
    )
}

export default DashBoard