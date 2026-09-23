import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const sliderOptions = {
    grabCursor: true,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },

    pagination: false,
    className: "mySwiper"
}


const ProductSlider = () => {
    return (
        <>
            <h1>this is product slider component</h1>

            {/* <!-- product slider Start --> */}
            <div className="container-fluid service pt-6 pb-6">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="display-6 text-uppercase mb-5">Reliable & High-Quality Welding Services</h1>
                    </div>

                    <div className="row g-4">
                        <Swiper {...sliderOptions} >

                            <SwiperSlide>
                                <div className=" wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-1.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Metal Works</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-2.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Steel welding</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className=" wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-3.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">pipe welding</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                <div className=" wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-4.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Custom welding</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>

                                <div className=" wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-5.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Steel welding</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide>

                                <div className=" wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-6.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Metal Work</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className=" wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-7.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Custom Welding</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide>

                                <div className=" wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="service-item">
                                        <div className="service-inner pb-5">
                                            <img className="img-fluid w-100" src="img/service-8.jpg" alt="" />
                                            <div className="service-text px-5 pt-4">
                                                <h5 className="text-uppercase">Pipe Welding</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.
                                                </p>
                                            </div>
                                            <a className="btn btn-light px-3" href="">Read More<i
                                                className="bi bi-chevron-double-right ms-1"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <!-- product slider End --> */}
        </>
    )
}

export default ProductSlider
