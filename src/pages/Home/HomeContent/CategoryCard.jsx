import React from 'react'
import "./styles/CategoryCard.scss"
export const CategoryCard = (props) => {
  return (
    <div className="categoryCard">
      <img
        src={props.imgSrc}
        alt={props.title + " img"}
        className="categoryImg"
      ></img>
      <h3 className="categoryTitle">{props.title}</h3>
    </div>
  )
}
