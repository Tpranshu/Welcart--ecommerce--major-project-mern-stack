import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getSetting } from "../redux/ActionCreators/SettingActionCreators"

const Navbar = () => {
    let [settingData, setSettingData] = useState({

        siteName: import.meta.env.VITE_APP_SITE_NAME,
        address: import.meta.env.VITE_APP_ADDRESS,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE,
        map1: import.meta.env.VITE_APP_MAP1,
        map2: import.meta.env.VITE_APP_MAP2,

    })
    let SettingStateData = useSelector(state => state.SettingStateData)
    let dispatch = useDispatch()

    let navigate = useNavigate()

    // useEffect(() => {
    //     (() => {
    //         dispatch(getSetting())
    //         if (SettingStateData.length) {

    //             let item = {}
    //             Object.keys(settingData).forEach(key => item[key] = SettingStateData[0][key] || settingData[key])
    //             setSettingData({ ...item })

    //         }
    //     })()

    // }, [SettingStateData.length])

    function logout(){
        localStorage.clear()
        navigate("/login")

    }



    useEffect(() => {

        (() => {

            dispatch(getSetting())

            if (SettingStateData.length) {

                let item = {}

                Object.keys(settingData).forEach(key => {
                    item[key] = SettingStateData[0][key] || settingData[key]
                })

                item.siteName = SettingStateData[0].siteName?.trim()
                    ? SettingStateData[0].siteName
                    : import.meta.env.VITE_APP_SITE_NAME

                setSettingData({ ...item })

            }

        })()

    }, [SettingStateData.length])



    return (
        <>
            {/* <h4>this is navbar component</h4> */}

            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-primary text-white wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-3">
                    <div className="d-flex align-items-center">
                        <Link to="/" className='d-none d-lg-inline-block'>
                            <h2 className="text-white fw-bold m-0">{settingData.siteName}</h2>
                        </Link>


                        <Link to="/shop" className='d-inline-block d-lg-none'>
                            <h4 className="text-white fw-bold m-0">shop now</h4>
                        </Link>



                        <div className="ms-auto d-flex align-items-center">

                            <a className="ms-4 text-light" href={`${settingData.map1}`} target='_blank'>
                                <i className="bi bi-geo-alt me-1"></i>
                                <span className='d-none d-lg-inline-block' >{settingData.address}</span>
                            </a>


                            <a className="ms-4 text-light" href={`mailto:${settingData.email}`} target='_blank'>
                                <i className="bi bi-envelope me-1"></i>
                                <span className='d-none d-lg-inline-block' >{settingData.email}</span>
                            </a>


                            <a className="ms-4 text-light" href={`tel:${settingData.phone}`} target='_blank'>
                                <i className="bi bi-telephone me-1"></i>
                                <span className='d-none d-lg-inline-block' >{settingData.phone}</span>
                            </a>


                            <a className="ms-4 text-light" href={`https://wa.me/${settingData.whatsapp}`} target='_blank'>
                                <i className="bi bi-whatsapp me-1"></i>
                                <span className='d-none d-lg-inline-block' >{settingData.whatsapp}</span>
                            </a>

                            <div className="ms-3 d-flex">

                                <a className="btn btn-sm-square btn-light text-primary ms-2" href={settingData.facebook} target='_blank'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a className="btn btn-sm-square btn-light text-primary ms-2" href={settingData.twitter} target='_blank'>
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a className="btn btn-sm-square btn-light text-primary ms-2" href={settingData.instagram} target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a className="btn btn-sm-square btn-light text-primary ms-2" href={settingData.linkedin} target='_blank'>
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a className="btn btn-sm-square btn-light text-primary ms-2" href={settingData.youtube} target='_blank'>
                                    <i className="fab fa-youtube"></i>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid bg-white sticky-top wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                        <Link to="/" className="navbar-brand d-lg-none">
                            <h1 className="fw-bold m-0">{settingData.siteName}</h1>
                        </Link>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">

                                <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link ">About</NavLink>
                                <NavLink to="/shop" className="nav-item nav-link ">Shop</NavLink>
                                <NavLink to="/feature" className="nav-item nav-link ">Features</NavLink>
                                <NavLink to="/faq" className="nav-item nav-link ">FAQ</NavLink>
                                <NavLink to="/testimonial" className="nav-item nav-link ">Testimonial</NavLink>
                                <NavLink to="/contactus" className="nav-item nav-link ">Contact Us</NavLink>

                                {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}

                                {
                                    localStorage.getItem("login") ?
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{localStorage.getItem("name")}</a>
                                            <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">

                                                {
                                                    localStorage.getItem("role")!=="Buyer"? <Link to="/admin" className="dropdown-item">Dashboard</Link>: null
                                                }

                                                <Link to="/profile?option=Profile" className="dropdown-item">Profile</Link>
                                                <Link to="/profile?option=Orders" className="dropdown-item">Orders</Link>
                                                <Link to="/profile?option=Wishlist" className="dropdown-item">Wishlist</Link>
                                                <Link to="/profile?option=Address" className="dropdown-item">Address</Link>
                                                <Link to="/cart" className="dropdown-item">Cart</Link>
                                                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                                <button onClick={logout} className='dropdown-item' >logout</button>

                                            </div>
                                        </div> : null
                                }
                            </div>
                            <div className="ms-auto d-none d-lg-block">
                                {
                                    !localStorage.getItem("login") ?
                                        <Link to="/login" className="btn btn-primary py-2 px-3">Login</Link> :
                                        <button onClick={logout} className="btn btn-primary py-2 px-3">Logout</button>

                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Navbar
