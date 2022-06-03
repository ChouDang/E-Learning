import React from 'react'
import { RecommendedVideos } from './RecommendedVideos'
import "./styles/Recommendations.scss"

export const Recommendations = () => {
  return (
    <div className="recommendationsDiv">
      <div className="recommendations">
        <h3>The world's largest selection of courses</h3>
        <p>
          Choose from 130,000 online video courses with new additions published
          every month
        </p>
        <h2>Students are viewing</h2>
        <RecommendedVideos />
      </div>
    </div>
  )
}
