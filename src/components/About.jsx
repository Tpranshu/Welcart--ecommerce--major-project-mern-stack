import React from 'react'

const About = () => {
    return (
        <>
            {/* <h1>this is about component</h1> */}

            {/* <!-- About Start --> */}
            <div className="container-fluid pt-6 pb-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid w-100" src="img/about.jpg"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-6 text-uppercase mb-4">Ultimate Welding and Quality Metal Solutions</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
                                iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                                quis, fringilla risus. Pellentesque eu consequat augue.</p>
                            <div className="row g-5 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="fa fa-users-cog fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">Certified Expert & Team</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-xl-square bg-light me-3">
                                            <i className="fa fa-tachometer-alt fa-2x text-primary"></i>
                                        </div>
                                        <h5 className="lh-base text-uppercase mb-0">Fast & Reliable Services</h5>
                                    </div>
                                </div>
                            </div>
                            <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum
                            </p>
                            <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum
                            </p>
                            <p><i className="fa fa-check-square text-primary me-3"></i>Many variations of passages of lorem ipsum
                            </p>
                            <div className="border border-5 border-primary p-4 text-center mt-4">
                                <h4 className="lh-base text-uppercase mb-0">We’re Good in All Metal Works Using Quality Welding Tools</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
}

export default About
