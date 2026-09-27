import React from 'react'



const About = () => {
    return (
        <>

            <div className="container-fluid pt-6 pb-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid w-100" src="../../public/img/banner11.jpg" />
                            </div>
                            <div className="about-img">
                                <img className="img-fluid w-100" src="../../public/img/banner11.jpg" />
                            </div>
                            <div className="about-img">
                                <img className="img-fluid w-100" src="../../public/img/banner11.jpg" />
                            </div>

                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-6 text-uppercase mb-4">Building Better Experiences Through Innovation</h1>
                            <p className="mb-4 text-justify">We create meaningful digital experiences by combining innovative ideas, modern technology, and thoughtful design to deliver lasting value for every customer.</p>
                            <div className="row g-5 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="bi bi-bookmark-check fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">100% Genuine Product</h5>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="bi bi-person-hearts fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">10000+ Satisfied Customers</h5>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="bi bi-arrow-clockwise fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">15 Days Refund Policy</h5>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="bi bi-headset fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">24/7 customer care support</h5>
                                    </div>
                                </div>

                                {/* <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="fa fa-tachometer-alt fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">Fast & Reliable Services</h5>
                                    </div>
                                </div> */}

                            </div>

                            <p><i className="fa fa-check-square text-primary me-3"></i>We focus on delivering reliable, high-quality solutions every time.  </p>
                            <p><i className="fa fa-check-square text-primary me-3"></i>Your needs guide everything we create and deliver. </p>
                            <p><i className="fa fa-check-square text-primary me-3"></i>We use modern ideas to solve real-world challenges. </p>
                            <div className="border border-5 border-primary p-4 text-center mt-4">
                                <h4 className="lh-base text-uppercase mb-0 text-center">Empowering your journey with innovative solutions, trusted service, and experiences designed around your needs.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
