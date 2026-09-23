import React from 'react'
import Breadcrum from '../components/Breadcrum'
import Features from "../components/Features"
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonial"
import Faq from '../components/Faq'

const AboutPage = () => {
  return (
    <>
      {/* <h1>this is faq page</h1> */}
      <Breadcrum title="faqs"/>
      <Faq />
      <Features />
      <Banner />
      <Testimonial />
      

    </>
  )
}

export default AboutPage
