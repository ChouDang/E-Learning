import React from 'react'
import "./styles/VideoCard.scss"
export const VideoCard = (props) => {
  return (
    <div className="videoCard">
      <img className="courseImg" src={props.imgSrc} alt="courseImg"></img>
      <h3>{props.courseTitle}</h3>
      <p>{props.instructor}</p>
      <div className="ratingDiv">
        <span className="rating">{props.rating}</span>
        <span className="stars">
          <p>icon rating</p>
        </span>
        <span className="noOfStudents">{props.noOfStudents}</span>
      </div>
      <h3 className="price">{props.price}</h3>
      <div className="bestsellerBadge">Bestseller</div>
    </div>
  );
}


