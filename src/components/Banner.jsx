import React from 'react'

const Banner = () => {
    return (
        <>

            <div className="container-fluid feature mt-6 mb-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-0 justify-content-end">
                        <div className="col-lg-6 pt-5">
                            <div className="mt-5">
                                <h1 className="display-6 text-white text-uppercase mb-4 wow fadeIn" data-wow-delay="0.3s">Experience Reliable Service, Quality Solutions, and Support You Can Always Trust</h1>
                                <p className="text-light mb-4 wow fadeIn text-justify" data-wow-delay="0.4s">We are committed to delivering reliable, high-quality solutions designed around your needs. With a focus on innovation, transparency, and customer satisfaction, we combine expertise with modern technology to create meaningful results. Our dedicated approach ensures smooth service, timely support, and long-term value that helps your business grow with confidence.</p>
                                <div className="row g-4 pt-2 mb-4">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                        <div className="flex-column text-center border border-5 border-primary p-5" style={{height: 200}}>
                                            <h1 className="text-white" data-toggle="counter-up">10000+</h1>
                                            <p className="text-white text-uppercase mb-0">Satisfied Customers</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="flex-column text-center border border-5 border-primary p-5" style={{height: 200}}>
                                            <h1 className="text-white" data-toggle="counter-up">100+</h1>
                                            <p className="text-white text-uppercase mb-0">Top Brands</p>
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
