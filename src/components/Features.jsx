import React from 'react'

const Features = () => {
    return (
        <>
            <h1>this is features component</h1>


            {/* <!-- Features Start --> */}
            <div className="container-fluid pt-6 pb-6">
                <div className="container pt-4">
                    <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                                    <i className="fa fa-hammer fa-2x text-white"></i>
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase mb-3">Quality Welding</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                                    <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"><b className="bg-white pe-3">Read More</b> <i
                                            className="bi bi-arrow-right bg-white ps-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.4s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                                    <i className="fa fa-dollar-sign fa-2x text-white"></i>
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase">Affordable Pricing</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                                    <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"><b className="bg-white pe-3">Read More</b> <i
                                            className="bi bi-arrow-right bg-white ps-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                                    <i className="fa fa-check-double fa-2x text-white"></i>
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase">Best Welder</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                                    <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"><b className="bg-white pe-3">Read More</b> <i
                                            className="bi bi-arrow-right bg-white ps-3"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.6s">
                            <div className="feature-item border h-100">
                                <div className="feature-icon btn-xxl-square bg-primary mb-4 mt-n4">
                                    <i className="fa fa-tools fa-2x text-white"></i>
                                </div>
                                <div className="p-5 pt-0">
                                    <h5 className="text-uppercase">Quality Tools</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                                    <a className="position-relative text-body text-uppercase small d-flex justify-content-between"
                                        href="#"><b className="bg-white pe-3">Read More</b> <i
                                            className="bi bi-arrow-right bg-white ps-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features End --> */}
        </>
    )
}

export default Features
