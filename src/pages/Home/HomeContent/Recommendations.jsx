import React from 'react'
import { RecommendedVideos } from './RecommendedVideos'
import "./styles/Recommendations.scss"

export const Recommendations = () => {
  return (
    <div className="recommendationsDiv">
      <div className="recommendations">
        <h3>Tuyển chọn các khóa học lớn nhất thế giới</h3>
        <p>
          Chọn từ 155.999 khóa học video trực tuyến với các phần bổ sung mới được xuất bản hàng tháng
        </p>
        <h2>Chủ đề được quan tâm</h2>
        <RecommendedVideos />
      </div>
    </div>
  )
}
