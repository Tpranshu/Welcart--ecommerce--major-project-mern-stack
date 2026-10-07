import React, { useEffect } from 'react'
import About from '../components/About'
import Features from '../components/Features'
import Banner from '../components/Banner'
import ProductSlider from '../components/ProductSlider'
import Products from '../components/Products'
import Testimonial from '../components/Testimonial'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { getProduct } from "../redux/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../redux/ActionCreators/MaincategoryActionCreators"
import Faq from '../components/Faq'



const HomePage = () => {
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let ProductStateData = useSelector(state => state.ProductStateData)

    let dispatch = useDispatch()

    useEffect(() => {
        (
            () => {
                dispatch(getMaincategory())
            }
        )()

    }, [MaincategoryStateData.length])



    useEffect(() => {
        (
            () => {
                dispatch(getProduct())
            }
        )()

    }, [ProductStateData.length])

    return (
        <>
            {/* <h4>this is home page</h4> */}

            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0 mb-6 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1">
                            <img className="img-fluid" src="../../public/img/banner1.jpg" style={{ height: 600 }} alt="Image" />
                        </button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1" aria-label="Slide 2">
                            <img className="img-fluid" src="../../public/img/banner4.jpg" style={{ height: 600 }} alt="Image" />
                        </button>
                        <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2" aria-label="Slide 3">
                            <img className="img-fluid" src="../../public/img/banner5.jpg" style={{ height: 600 }} alt="Image" />
                        </button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="../../public/img/banner1.jpg" style={{ height: 600 }} alt="Image" />
                            <div className="carousel-caption">
                                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">Quality Products, Better Everyday Living
                                </h1>
                                <Link to="/shop/?mc=Male" className="btn btn-primary py-3 px-4">Explore More</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="../../public/img/banner4.jpg" style={{ height: 600 }} alt="Image" />
                            <div className="carousel-caption">
                                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">Discover More, Shop With Confidence
                                </h1>
                                <Link to="/shop/?mc=Female" className="btn btn-primary py-3 px-4">Explore More</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="../../public/img/banner5.jpg" style={{ height: 600 }} alt="Image" />
                            <div className="carousel-caption">
                                <h1 className="display-1 text-uppercase text-white mb-4 animated zoomIn">Everything You Need, All Together
                                </h1>
                                <Link to="/shop/?mc=Kids" className="btn btn-primary py-3 px-4">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Carousel End --> */}



            {/* yaha per about component */}
            <About />
            {/* yaha per features component */}
            <Features />
            {/* yaha per banner component */}
            <Banner />

            {/* yaha per product slider component */}
            {
                MaincategoryStateData?.filter(x => x.status).map((item, index) => {
                    return <ProductSlider
                        key={index}
                        title={item.name}
                        // data={ProductStateData.filter(x => x.status && x.maincategory === item.name)}
                        data={ProductStateData}
                    />
                })
            }
            <Faq />

            {/* yaha per products component */}
            <Products data={ProductStateData.filter(x => x.status).slice(0, 24)} />
            {/* yaha per testimonial component */}
            <Testimonial />
        </>
    )
}

export default HomePage
