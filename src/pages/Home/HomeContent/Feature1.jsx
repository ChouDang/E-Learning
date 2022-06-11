import React from 'react'
import "./styles/Feature1.scss"
import { ApartmentOutlined } from '@ant-design/icons';
import { FeatureCard } from './FeatureCard'
export const Feature1 = () => {
  return (
    <div className="featureDiv1">
      <FeatureCard
        icon={<ApartmentOutlined className="icon" />}
        heading={"130.000 khóa học trực tuyến"}
        para={"Tận hưởng nhiều chủ đề mới"}
      />
      <FeatureCard
        icon={<ApartmentOutlined className="icon" />}
        heading={"Hướng dẫn của chuyên gia"}
        para={"Tìm người hướng dẫn phù hợp với bạn"}
      />
      <FeatureCard
        icon={<ApartmentOutlined className="icon" />}
        heading={"Truy cập mọi nơi"}
        para={"Học theo lịch trình của bạn"}
      />
    </div>
  )
}
