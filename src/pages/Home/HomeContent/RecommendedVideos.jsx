import React from 'react'
import { VideoCard } from './VideoCard'
import "./styles/RecommendedVideos.scss"
export const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      < VideoCard courseTitle={'ReactJS'}
        imgSrc={"https://patterns.dev/img/reactjs/react-logo@3x.svg"}
        instructor={"Kyle Pew, Office Newb LLC"}
        rating={4.9}
        noOfStudents={"(166,042)"}
        price={"9.9$"} />
      <VideoCard
        courseTitle={
          "NodeJS(SQL,ExpressJS)"
        }
        imgSrc={"https://resources.stdio.vn/content/article/gioi-thieu-va-cai-dat-node-js/thumbnail-hd/blob-1599795169826@1280x720.jpg"}
        instructor={"Neil Anderson"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        price={"9.8$"}
      />
      <VideoCard
        courseTitle={
          "SCSS"
        }
        imgSrc={"https://codelearn.io/Upload/Blog/giai-cuu-dong-do-nat-css-voi-phuong-phap-sass-63723033229.8101.jpg"}
        instructor={"Jonas Schmedtmann"}
        rating={4.8}
        noOfStudents={"(25,064)"}
        price={"9.7$"}
      />

    </div>
  )
}
