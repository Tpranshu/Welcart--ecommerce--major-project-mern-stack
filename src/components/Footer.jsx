import React, { useState } from 'react'
import Newsletter from './Newsletter'
import { Link } from 'react-router-dom'

const Footer = () => {

    let [settingData, setSettingData] = useState({

        siteName: import.meta.env.VITE_APP_SITE_NAME,
        address: import.meta.env.VITE_APP_ADDRESS,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE,
        map1: import.meta.env.VITE_APP_MAP1,
        map2: import.meta.env.VITE_APP_MAP2,

    })

    return (
        <>
            {/* <h4 className='text-center'>this is footer component</h4> */}
            <Newsletter />

            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark footer py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">{settingData.siteName}</h5>
                            <p className='text-light text-justify' style={{ fontSize: 14 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam labore, beatae ex doloribus dicta error!</p>



                        </div>


                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Contact Us</h5>
                            <a href={settingData.map1} target='_blank' className="mb-2 text-light d-block mb-2" style={{ fontSize: 14 }} ><i className="fa fa-map-marker-alt text-light me-3"></i>{settingData.address}</a>

                            <a href={`mailto:${settingData.email}`} target='_blank' className="mb-2 text-light d-block mb-2" style={{ fontSize: 14 }} ><i className="bi bi-envelope text-light me-3"></i>{settingData.email}</a>

                            <a href={`tel:${settingData.phone}`} target='_blank' className="mb-2 text-light d-block mb-2" style={{ fontSize: 14 }} ><i className="bi bi-telephone text-light me-3"></i>{settingData.phone}</a>

                            <a href={`https://wa.me/${settingData.whatsapp}`} target='_blank' className="mb-2 text-light d-block mb-2" style={{ fontSize: 14 }} ><i className="bi bi-whatsapp text-light me-3"></i>{settingData.whatsapp}</a>



                            <div className="d-flex pt-3">
                                <a className="btn btn-square btn-light me-2" href={settingData.twitter}><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light me-2" href={settingData.facebook}><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light me-2" href={settingData.youtube}><i
                                    className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-light me-2" href={settingData.linkedin}><i
                                    className="fab fa-linkedin-in"></i></a>

                                <a className="btn btn-square btn-light me-2" href={settingData.instagram}><i
                                    className="fab fa-instagram"></i></a>


                            </div>
                        </div>



                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Quick Links</h5>
                            <Link className="btn btn-link text-light" to="/">Home</Link>
                            <Link className="btn btn-link text-light" to="/about">About Us</Link>
                            <Link className="btn btn-link text-light" to="/shop">Shop</Link>
                            <Link className="btn btn-link text-light" to="/features">Feature</Link>
                            <Link className="btn btn-link text-light" to="/faq">FAQ</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Other Links</h5>
                            <Link className="btn btn-link text-light" to="/contactus">Contact Us</Link>
                            <Link className="btn btn-link text-light" to="/privacy-policy">Privacy Policy</Link>
                            <Link className="btn btn-link text-light" to="/data-policy">Data Policy</Link>
                            <Link className="btn btn-link text-light" to="/refund-policy">Refund policy</Link>
                            <Link className="btn btn-link text-light" to="/shop">Shop</Link>
                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}


            {/* <!-- Copyright Start --> */}
            <div className="container-fluid text-body copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="fw-semi-bold" to="/">{settingData.siteName}</Link>, All Right Reserved.
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}
        </>
    )
}

export default Footer
