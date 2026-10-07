import React from 'react'
import { Link } from 'react-router-dom'
import SingleProduct from './SingleProduct'
const Products = ({ data }) => {
    return (
        <>

            <div className="container-fluid service pt-6 pb-6">

                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="display-6 text-uppercase mb-5">checkout our Latest Products</h1>
                    </div>

                    <div className="row g-4">

                        {

                            data?.map((item, index) => {

                                return <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                                    <SingleProduct item={item} />
                                </div>

                            })

                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default Products
