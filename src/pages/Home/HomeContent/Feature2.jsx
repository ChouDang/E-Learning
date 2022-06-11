import React from 'react'
import { FeatureCard } from './FeatureCard'
import { ApartmentOutlined, CustomerServiceOutlined, DashboardOutlined } from '@ant-design/icons';
import "./styles/Feature2.scss"
export const Feature2 = () => {
  return (
    <div className="featureDiv2">
      <FeatureCard
        icon={<DashboardOutlined className="icon" />}

        heading={"Đi theo tốc độ của riêng bạn"}
        para={"Tận hưởng quyền truy cập vào các khóa học trên trang web và ứng dụng của TNT-Learning"}
      />
      <FeatureCard
        icon={<ApartmentOutlined className="icon" />}

        heading={"Học hỏi từ các chuyên gia trong ngành"}
        para={"Chọn từ những người hướng dẫn hàng đầu trên khắp thế giới"}
      />
      <FeatureCard
        icon={<CustomerServiceOutlined className="icon" />}
        heading={"Tìm các khóa học video về hầu hết mọi chủ đề"}
        para={"Xây dựng thư viện của bạn để phát triển sự nghiệp và cá nhân của bạn"}
      />
    </div>
  )
}
