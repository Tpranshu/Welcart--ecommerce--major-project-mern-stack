import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({item}) => {
    return (
        <div className=" wow fadeInUp" data-wow-delay="0.1s">

            <div className="service-item">

                <div className="service-inner pb-5" style={{ height: 350 }}>

                    <img className="img-fluid w-100" src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} alt="product image" />



                    <div className="service-text px-5 pt-4">

                        <h5 className="text-uppercase">{item.name}</h5>
                        <p><del>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice} <sup>{item.discount}% OFF</sup></p>
                        <p>{item.stockQuantity} Left In Stock</p>

                    </div>

                    <Link className="btn btn-light px-3" to={`/product/${item.id}`}>{item.brand}
                        <i className="bi bi-chevron-double-right ms-1"></i>
                        <i className="bi bi-cart-check m-1"></i>

                    </Link>

                </div>

            </div>

        </div>
    )
}

export default SingleProduct
