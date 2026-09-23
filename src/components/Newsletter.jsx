import React from 'react'

const Newsletter = () => {
    return (
        <>
            {/* <h1>this is newletter component</h1> */}
            <hr />

            {/* <!-- Newsletter Start --> */}
            <div className="container-fluid newsletter mt-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="container pb-5">
                    <div className="bg-white p-5 mb-5">
                        <div className="row g-5">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                                <h1 className="display-6 text-uppercase mb-4">Newsletter</h1>
                                <div className="d-flex">
                                    <i className="far fa-envelope-open fa-3x text-primary me-4"></i>
                                    <p className="fs-5 fst-italic mb-0">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore lorem ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control border-0 bg-light" id="mail" placeholder="Your Email" />
                                    <label htmlFor="mail">Your Email</label>
                                </div>
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter Start --> */}

        </>
    )
}

export default Newsletter
