import React from 'react'
import "./styles/FeatureCard.scss"
export const FeatureCard = (props) => {
  return (
    <div className="featureCard">
      <div className="iconDiv"></div>
      {/* {props.icon} */}
      <div className="aboutDiv">
        <h4>{props.heading}</h4>
        <p>{props.para}</p>
      </div>
    </div>
  )
}
