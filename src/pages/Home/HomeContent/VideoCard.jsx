import React from 'react'
import "./styles/VideoCard.scss"
import { StarFilled } from '@ant-design/icons';

export const VideoCard = (props) => {
  return (
    <div className="videoCard">
      <img className="courseImg" src={props.imgSrc} alt="courseImg"></img>
      <div className="handlehed">
        <h3>{props.courseTitle}</h3>
        <p>{props.instructor}</p>
        <div className="ratingDiv">
          <span className="rating">{props.rating}</span>
          <span className="stars">
            <StarFilled />
          </span>
          <span className="noOfStudents">{props.noOfStudents}</span>
        </div>
        <h1 className="price">{props.price}</h1>
        <div className="bestsellerBadge">Bestseller</div>
      </div>
    </div>
  );
}


