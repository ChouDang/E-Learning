import React from 'react'
import "./styles/VideoAdDiv.scss"
export const VideoAdDiv = () => {
  return (
    <div className="videoAdDiv">
      <div className="videoDiv">
        <iframe
          title="Mohamad Alaloush's Story"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          src="https://www.youtube.com/embed/9JSYB59QmZw"
          width="560"
          height="315"
          frameborder="0"

        ></iframe>

      </div>
      <div className="content">
        <h2 className="heading">Thay đổi cuộc sống của bạn thông qua giáo dục</h2>
        <p className="about">
          bắt đầu sự nghiệp phát triển phần mềm bằng cách tham gia các khóa học trên Udemy. Bạn sẽ có thể làm gì?
        </p>
      </div>
    </div>
  )
}
