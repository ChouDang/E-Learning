import React from 'react'
import { VideoCard } from './VideoCard'
import "./styles/RecommendedVideos.scss"
export const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      < VideoCard courseTitle={"Microsoft Excel - Excel from Beginner to Advanced"}
        imgSrc={"https://4.bp.blogspot.com/-qkTIHGWs7jM/W_E5EtIStFI/AAAAAAAAB3w/DF5U_N5YkC84CCvXs_c_KDKsw43q32-VQCLcBGAs/s1600/excel%2B2013.jpg"}
        instructor={"Kyle Pew, Office Newb LLC"}
        rating={4.6}
        noOfStudents={"(166,042)"}
        price={"6$"} />
      <VideoCard
        courseTitle={
          "Cisco CCNA 200-301 – The Complete Guide to Getting Certified"
        }
        imgSrc={"https://ape-360.com/wp-content/uploads/2019/07/CCNA-200-301.jpg"}
        instructor={"Neil Anderson"}
        rating={4.8}
        noOfStudents={"(25,489)"}
        price={"12$"}
      />
      <VideoCard
        courseTitle={
          "Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
        }
        imgSrc={"https://codelearn.io/Upload/Blog/giai-cuu-dong-do-nat-css-voi-phuong-phap-sass-63723033229.8101.jpg"}
        instructor={"Jonas Schmedtmann"}
        rating={4.8}
        noOfStudents={"(25,064)"}
        price={"8$"}
      />
    </div>
  )
}
