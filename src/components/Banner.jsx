import React from 'react'

const Banner = () => {
    return (
        <>
            <h1>this is banner component</h1>

            {/* <!-- banner Start --> */}
            <div className="container-fluid feature mt-6 mb-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-0 justify-content-end">
                        <div className="col-lg-6 pt-5">
                            <div className="mt-5">
                                <h1 className="display-6 text-white text-uppercase mb-4 wow fadeIn" data-wow-delay="0.3s">Why You should Choose Our welding Services</h1>
                                <p className="text-light mb-4 wow fadeIn" data-wow-delay="0.4s">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                                    tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu
                                    consequat augue.</p>
                                <div className="row g-4 pt-2 mb-4">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                        <div className="flex-column text-center border border-5 border-primary p-5">
                                            <h1 className="text-white" data-toggle="counter-up">9999</h1>
                                            <p className="text-white text-uppercase mb-0">Satisfied Clients</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="flex-column text-center border border-5 border-primary p-5">
                                            <h1 className="text-white" data-toggle="counter-up">9999</h1>
                                            <p className="text-white text-uppercase mb-0">Complete Projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-5 border-primary border-bottom-0 p-5">
                                    <div className="experience mb-4 wow fadeIn" data-wow-delay="0.6s">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-white text-uppercase">Experience</span>
                                            <span className="text-white">90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="experience wow fadeIn" data-wow-delay="0.7s">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span className="text-white text-uppercase">Work Done</span>
                                            <span className="text-white">95%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- banner End --> */}
        </>
    )
}

export default Banner
