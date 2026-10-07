import React, { useState } from 'react'
import Breadcrum from '../../components/Breadcrum'
import TextValidators from '../../Validators/TextValidators'
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name field is mendatory",
        username: "username field is mendatory",
        email: "email field is mendatory",
        phone: "phone field is mendatory",
        password: "password field is mendatory",
        cpassword: "cpassword field is mendatory",
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })

    }

    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error) {
            setShow(true)

        } else if (data.password !== data.cpassword) {
            setShow(true)
            setErrorMessage({ ...errorMessage, password: "Password and Confirm Password Doesn't Matched" })
        } else {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`,{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    role: "Buyer",
                    status: true
                })

            })
            response = await response.json()

            navigate("/login")

            let item = response.find(x => x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase())
            if (item) {
                setErrorMessage({ ...errorMessage, 
                    username: item.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() ? "Username Already taken" : "" })

                setErrorMessage({ ...errorMessage, 
                    email: item.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase() ? "Email Already taken" : "" })

                setShow(true)
                return



            }

        }


    }
    return (
        <>
            <Breadcrum title="Create Your Account" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-10 m-auto">
                        <h5 className='btn-primary text-light text-center p-2'>Provide Following Details to Create Your Account</h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-md-6 md-3">
                                    <label >Name*</label>
                                    <input type="text" name='name' onChange={getInputData} className={`form-control ${show && errorMessage.name ? `border-danger` : `border-primary`}`} placeholder='Full Name' />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}

                                </div>

                                <div className="col-md-6 md-3">
                                    <label >Phone Number*</label>
                                    <input type="text" name='phone' onChange={getInputData} className={`form-control ${show && errorMessage.phone ? `border-danger` : `border-primary`}`} placeholder='Phone Number' />
                                    {show && errorMessage.phone ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}


                                </div>


                                <div className="col-md-6 md-3">
                                    <label >Username*</label>
                                    <input type="text" name='username' onChange={getInputData} className={`form-control ${show && errorMessage.phone ? `border-danger` : `border-primary`}`} placeholder='Enter Username' />
                                    {show && errorMessage.username ? <p className='text-danger text-capitalize'>{errorMessage.username}</p> : null}


                                </div>

                                <div className="col-md-6 md-3">
                                    <label >Email Address*</label>
                                    <input type="text" name='email' onChange={getInputData} className={`form-control ${show && errorMessage.email ? `border-danger` : `border-primary`}`} placeholder='Email Address' />
                                    {show && errorMessage.email ? <p className='text-danger text-capitalize'>{errorMessage.email}</p> : null}


                                </div>

                                <div className="col-md-6 md-3">
                                    <label >Password*</label>
                                    <input type="password" name='password' onChange={getInputData} className={`form-control ${show && errorMessage.password ? `border-danger` : `border-primary`}`} placeholder='Password' />
                                    {show && errorMessage.password ? <p className='text-danger text-capitalize'>{errorMessage.password}</p> : null}


                                </div>

                                <div className="col-md-6 md-3">
                                    <label >Confirm Password*</label>
                                    <input type="text" name='cpassword' onChange={getInputData} className={`form-control ${show && errorMessage.cpassword ? `border-danger` : `border-primary`}`} placeholder='Confirm Password' />


                                </div>

                                <div className="col-12 mb-3 p-2">
                                    <button type='submit' className='btn btn-primary w-100'>Signup</button>

                                </div>


                            </div>
                        </form>

                        <div className="mb-3">
                            <Link to="/login">Already have an Account?login</Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SignupPage
