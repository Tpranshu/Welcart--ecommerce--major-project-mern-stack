import React, { useState } from 'react'
import Breadcrum from '../../components/Breadcrum'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    let [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    })

    let [errorMessage, setErrorMessage] = useState("")

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrorMessage("")

    }

    async function postData(e) {
        e.preventDefault()
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }

        })

        response = await response.json()

        let item = response.find(x => x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() && x.password === data.password)
        if (item) {




        } else {
            setErrorMessage("Username or Password is Invalid")
        }

    }



    return (
        <>
            <Breadcrum title="Login To Your Account" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-10 m-auto">
                        <h5 className='btn-primary text-light text-center p-2'>Login to Your Account</h5>
                        <form onSubmit={postData}>


                            <div className="md-3">
                                <label >Username*</label>
                                <input type="text" name='username' onChange={getInputData} className={`form-control ${errorMessage ? `border-danger` : `border-primary`}`} placeholder='Enter Username' />
                                {errorMessage ? <p className='text-danger text-capitalize'>{errorMessage}</p> : null}


                            </div>

                           

                            <div className="md-3">
                                <label >Password*</label>
                                <input type="password" name='password' onChange={getInputData} className={`form-control ${errorMessage ? `border-danger` : `border-primary`}`} placeholder='Password' />


                            </div>



                            <div className="col-12 mb-3 p-2">
                                <button type='submit' className='btn btn-primary w-100'>Login</button>

                            </div>



                        </form>

                        <div className="mb-3">
                            <Link to="#">Forget Password</Link>
                            <Link to="/login">Doesn't Have an Account? signup</Link>
                        </div>
                        {/* hello */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage
