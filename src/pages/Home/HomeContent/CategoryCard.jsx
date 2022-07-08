import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./styles/CategoryCard.scss"
export const CategoryCard = (props) => {
  return (
    <Fragment >
      <div className="categoryCard">
        <Link to="/courses">
          <img
            src={props.imgSrc}
            alt={props.title + " img"}
            className="categoryImg"
          ></img>
        </Link>
        <h3 className="categoryTitle">{props.title}</h3>

      </div>
    </Fragment>
  )
}
