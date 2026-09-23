import React from 'react'
import Breadcrum from '../components/Breadcrum'
import About from "../components/About"
import Features from "../components/Features"
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonial"

const AboutPage = () => {
  return (
    <>
      {/* <h1>this is about page</h1> */}
      <Breadcrum title="about us"/>
      <About />
      <Features />
      <Banner />
      <Testimonial />
      

    </>
  )
}

export default AboutPage
