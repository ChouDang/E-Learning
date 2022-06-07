import React from 'react'
import { FeatureCard } from './FeatureCard'
import "./styles/Feature2.scss"
export const Feature2 = () => {
  return (
    <div className="featureDiv2">
      <FeatureCard

        heading={"Go at your own pace"}
        para={"Enjoy lifetime access to courses on Udemy’s website and app"}
      />
      <FeatureCard

        heading={"Learn from industry experts"}
        para={"Select from top instructors around the world"}
      />
      <FeatureCard
        // icon={<VideoLibraryIcon className="icon" />}
        heading={"Find video courses on almost any topic"}
        para={"Build your library for your career and personal growth"}
      />
    </div>
  )
}
