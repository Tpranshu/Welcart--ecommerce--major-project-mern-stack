
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCart, } from '../../redux/ActionCreators/CartActionCreators'
import Breadcrum from '../Breadcrum'

const CheckoutPage = () => {
    let [data, setData] = useState([])
    let [subtotal, setSubtotal] = useState(0)
    let [shipping, setShipping] = useState(0)
    let [total, setTotal] = useState(0)

    let CartStateData = useSelector(state => state.CartStateData)
    let dispatch = useDispatch()

    function calculate(cart) {
        let subtotal = 0
        cart.forEach(x => {
            subtotal += Number(x.total) || 0

        });
        if (subtotal > 0 && subtotal < 1000) {
            setShipping(150)
            setTotal(subtotal + 150)

        }
        else {
            setShipping(0)
            setTotal(subtotal)
        }
        setSubtotal(subtotal)
    }

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    useEffect(() => {
        if (CartStateData.length) {
            let cart = CartStateData.filter(x => x.user === localStorage.getItem("userid"))
            setData(cart)
            calculate(cart)
        }
        else {
            setData([])
            calculate([])
        }
    }, [CartStateData])

    return (
        <>
            <Breadcrum title="Place Order" />
            <div className="container my-3">
                <h5 className='bg-primary text-center text-light p-2'>Items In Your Cart</h5>
                {
                    data.length ?
                        <>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Brand</th>
                                            <th>Color</th>
                                            <th>Size</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item, index) => {
                                                return <tr key={item.id || index}>
                                                    <td>{item.product}</td>
                                                    <td>{item.brand?.name || item.brand}</td>
                                                    <td>{item.color}</td>
                                                    <td>{item.size}</td>
                                                    <td>&#8377;{item.finalPrice}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>&#8377;{item.total}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="row">
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-6">
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th>Subtotal</th>
                                                <th>&#8377;{subtotal}</th>
                                            </tr>

                                            <tr>
                                                <th>Shipping</th>
                                                <th>&#8377;{shipping}</th>
                                            </tr>

                                            <tr>
                                                <th>Total</th>
                                                <th>&#8377;{total}</th>
                                            </tr>

                                            <tr>
                                                <td colSpan={2}>
                                                    <button type="button" className='btn btn-primary w-100'>Place Order</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </>

                        :
                        <div className='card p-5'>
                            <h4 className='text-center'>no items in Cart</h4>
                            <Link to="/shop" className="btn btn-primary w-25 m-auto">Shop Now</Link>
                        </div>
                }

            </div>
        </>
    )
}

export default CheckoutPage
