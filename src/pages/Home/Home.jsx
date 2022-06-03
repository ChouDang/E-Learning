import React, { Fragment } from 'react'
import { AdImage } from './HomeContent/AdImage'
import { BecomeInstructor } from './HomeContent/BecomeInstructor'
import { Feature1 } from './HomeContent/Feature1'
import { Feature2 } from './HomeContent/Feature2'
import { FillerDiv } from './HomeContent/FillerDiv'
import { Recommendations } from './HomeContent/Recommendations'
import { TopCategories } from './HomeContent/TopCategories'
import { TrustedCompanies } from './HomeContent/TrustedCompanies'
import { UdemyForBusiness } from './HomeContent/UdemyForBusiness'
import { VideoAdDiv } from './HomeContent/VideoAdDiv'


export default function Home(props) {
  return (
    <Fragment >
      <AdImage />
      <Feature1 />
      <Recommendations />
      <Feature2 />
      <FillerDiv />
      <TopCategories />
      <BecomeInstructor />
      <TrustedCompanies />
      <UdemyForBusiness />
      <VideoAdDiv />
    </Fragment>
  )
}