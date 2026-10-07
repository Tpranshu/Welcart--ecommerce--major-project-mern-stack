import React from 'react'
// Import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const sliderOptions = {
    effect: 'cube',
    grabCursor: true,
    loop: true,

    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    pagination: false,
    modules: [EffectCube],
    className: "mySwiper"
}

const Testimonial = () => {


    return (
        <>
            <h1>this is testimonial component</h1>

            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid pt-6 pb-6">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="display-6 text-uppercase mb-5">What They are Talking About Our Welding Work</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="testimonial-img">
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src="img/testimonial-1.jpg" alt="" />
                                </div>
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src="img/testimonial-2.jpg" alt="" />
                                </div>
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src="img/testimonial-3.jpg" alt="" />
                                </div>
                                <div className="animated flip infinite">
                                    <img className="img-fluid" src="img/testimonial-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s" >
                            {/* <div className=""> */}
                            <Swiper
                                    {...sliderOptions}
                            >
                                <SwiperSlide>
                                    <div className="testimonial-item" style={{ backgroundColor: "lightgray", height: 300, padding: 30 }}>

                                        <div className="d-flex align-items-center mb-4">
                                            <img className="img-fluid" src="img/testimonial-1.jpg" alt="" />
                                            <div className="ms-3">
                                                <div className="mb-2">
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                </div>
                                                <h5 className="text-uppercase">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                            lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-item" style={{ backgroundColor: "lightgray", height: 300, padding: 30 }}>
                                        <div className="d-flex align-items-center mb-4">
                                            <img className="img-fluid" src="img/testimonial-2.jpg" alt="" />
                                            <div className="ms-3">
                                                <div className="mb-2">
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                </div>
                                                <h5 className="text-uppercase">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                            lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-item" style={{ backgroundColor: "lightgray", height: 300, padding: 30 }}>
                                        <div className="d-flex align-items-center mb-4">
                                            <img className="img-fluid" src="img/testimonial-3.jpg" alt="" />
                                            <div className="ms-3">
                                                <div className="mb-2">
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                </div>
                                                <h5 className="text-uppercase">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                            lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-item" style={{ backgroundColor: "lightgray", height: 300, padding: 30 }}>
                                        <div className="d-flex align-items-center mb-4">
                                            <img className="img-fluid" src="img/testimonial-4.jpg" alt="" />
                                            <div className="ms-3">
                                                <div className="mb-2">
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                    <i className="far fa-star text-primary"></i>
                                                </div>
                                                <h5 className="text-uppercase">Client Name</h5>
                                                <span>Profession</span>
                                            </div>
                                        </div>
                                        <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore
                                            lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.
                                        </p>
                                    </div>
                                </SwiperSlide>

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div >
            {/* <!-- Testimonial End --> */}

        </>
    )
}

export default Testimonial
