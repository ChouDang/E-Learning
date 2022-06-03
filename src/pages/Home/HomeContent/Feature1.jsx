import React from 'react'
import "./styles/Feature1.scss"
export const Feature1 = () => {
  return (
    <div className="featureDiv1">
      <div className="featureDiv1-item">
        <h1>130,000 online courses</h1>
        <p>Enjoy a variety of fresh topics</p>
      </div>
      <div className="featureDiv1-item">
        <h1>Expert instruction</h1>
        <p>Find the right instructor for you</p>
      </div>
      <div className="featureDiv1-item">
        <h1>Lifetime access</h1>
        <p>Learn on your schedule</p>
      </div>
      {/* <FeatureCard
      icon={<OndemandVideoIcon className="icon" />}
      heading={"130,000 online courses"}
      para={"Enjoy a variety of fresh topics"}
    />
    <FeatureCard
      icon={<StarsIcon className="icon" />}
      heading={"Expert instruction"}
      para={"Find the right instructor for you"}
    />
    <FeatureCard
      icon={<AllInclusiveIcon className="icon" />}
      heading={"Lifetime access"}
      para={"Learn on your schedule"}
    /> */}
    </div>
  )
}
