import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 100,
      fontWeight: "bold",
      color: "red"
    }}
    spin
  />
);

export default function Loading() {
  return (
    <div style={{ display: "flex" }}>
      <Spin indicator={antIcon} />
    </div>

  )
}
