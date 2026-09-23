import React from 'react'
import Breadcrum from '../components/Breadcrum'
import About from "../components/About"
import Features from "../components/Features"
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonial"

const FeaturesPage = () => {
  return (
    <>
      {/* <h1>this is features page</h1> */}
      <Breadcrum title="our features"/>
      <Features />
      <Banner />
      <Testimonial />
      

    </>
  )
}

export default FeaturesPage
