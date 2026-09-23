import React, { useState, useEffect } from 'react'

import AdminSideBar from '../../components/Admin/AdminSideBar'

import Profile from '../../components/User/Profile'

import { Link, useNavigate } from 'react-router-dom'

import TextValidators from '../../Validators/TextValidators'

import { useDispatch, useSelector } from 'react-redux'

import { getFaq, createFaq } from "../../redux/ActionCreators/FaqActionCreators"





const AdminFaqCreatePage = () => {

    // ab yaha create Faq ke liye form bnaege to form bnane ke liye kuch variable(state) define krege
    let [data, setData] = useState({
        question: "",
        answer: "",
        status: true,
    })

    let [errorMessage, setErrorMessage] = useState({
        question: "question field is mendatory",
        answer: "answer field is mendatory",
    })

    let [show, setShow] = useState(false)

    // ab ham yaha same data repeat na ho Faq ke form me to uska yaha logic bnaege and uske liye sabse phele state variable define krege
    // let [FaqStateData, setFaqStateData] = useState([])

    let FaqStateData = useSelector(state => state.FaqStateData) || []

    let dispatch = useDispatch()



    useEffect(() => {
        (() => {

            dispatch(getFaq())

            //   let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Faq`, {
            //     method: "GET",
            //     headers: {
            //       "content-type": "application/json"
            //     }
        })()

        //   response = await response.json()
        //   setFaqStateData(response)

    }, [dispatch])



    // npm i -g json-server  --> ye locally fake backend server use ke liye package hai
    // json-server data.json  --port 8000 --> command line
    // frontend --> port 4000
    // backend --> port 8000

    let navigate = useNavigate()



    function getInputData(e) {

        let { name, value } = e.target

        // let name = e.target.name
        // let value = name==="icon" ? e.target.files[0] : e.target.value  // real backend me ye line ka code use hoga
        // let value = name === "icon" ? "Faq/" + e.target.files[0].name : e.target.value

        setData({
            ...data,
            [name]: name === 'status' ? (value === "1" ? true : false) : value
        })

        // setErrorMessage({ ...errorMessage, [name]: name === "icon" ? ImageValidator(e) : TextValidators(e) })

        setErrorMessage({
            ...errorMessage,
            [name]: TextValidators(e)
        })

    }



    async function postData(e) {

        e.preventDefault()

        let error = Object.values(errorMessage).find(x => x !== "")

        if (error) {

            setShow(true)

        }

        else {

            let item = FaqStateData.find(
                x => x.question.toLocaleLowerCase() === data.question.toLocaleLowerCase()
            )

            if (item) {

                setShow(true)

                setErrorMessage({
                    ...errorMessage,
                    question: "Faq With Question is Already Exist"
                })

                return
            }



            dispatch(createFaq({ ...data }))

            // form data bheje jab backend se data me file imege ka concept hoga uske liye yaha code hai --
            // let formData = new formData()
            // formData.append("name", data.name)
            // formData.append("icon", data.icon)
            // formData.append("status", data.status)
            // dispatch(createFaq(formData))



            navigate("/admin/faq")

            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Faq`, {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json",
            //     },
            //     body: JSON.stringify({ ...data })
            // })
            // response = await response.json()
            // if (response) {
            //     navigate("/admin/Faq")
            // } else {
            //     alert("Interval error")
            // }

        }
    }



    return (
        <>
            {/* <h1>this is admin homepage</h1> */}
            <div className="container-fluid my-3">

                <div className="row">

                    <div className="col-md-3">

                        <AdminSideBar />

                    </div>

                    <div className="col-md-9">

                        <h4 className='bg-primary text-light text-center p-2'>

                            Create Faq

                            <Link to="/admin/faq">

                                <i className='bi bi-arrow-left text-light float-end'></i>

                            </Link>

                        </h4>

                        <form onSubmit={postData}>

                            <div className="row">

                                <div className="col-12 mb-3">

                                    <label>Question*</label>

                                    <input
                                        type="text"
                                        name='question'
                                        onChange={getInputData}
                                        placeholder='Question'
                                        className={`form-control ${show && errorMessage.question ? `border-danger` : `border-primary`}`}
                                    />

                                    {show && errorMessage.question ?

                                        <p className='text-danger text-capitalize'>

                                            {errorMessage.question}

                                        </p>

                                        : null}

                                </div>



                                <div className="col-12 mb-3">

                                    <label>Answers*</label>

                                    <textarea
                                        name='answer'
                                        rows={4}
                                        onChange={getInputData}
                                        placeholder='Answer'
                                        className={`form-control ${show && errorMessage.answer ? `border-danger` : `border-primary`}`}
                                    />

                                    {show && errorMessage.answer ?

                                        <p className='text-danger text-capitalize'>

                                            {errorMessage.answer}

                                        </p>

                                        : null}

                                </div>



                                {/* <div className="col-md-6 mb-3">
                                    <label>Icon*</label>
                                    <input
                                        type="text"
                                        name='icon'
                                        onChange={getInputData}
                                        className={`form-control ${show && errorMessage.icon ? `border-danger` : `border-primary`}`}
                                        placeholder='eg <i class="bi bi-list"></i>'
                                    />
                                    {show && errorMessage.icon ?
                                        <p className='text-danger text-capitalize'>
                                            {errorMessage.icon}
                                        </p>
                                        : null}
                                </div> */}



                                <div className="col-md-6 mb-3">

                                    <label>Status</label>

                                    <select
                                        name="status"
                                        onChange={getInputData}
                                        className='form-select border-primary'
                                    >

                                        <option value="1">Active</option>

                                        <option value="0">Inactive</option>

                                    </select>

                                </div>



                                <div className="col-12 mb-3">

                                    <button
                                        type="submit"
                                        className='btn btn-primary w-100'
                                    >

                                        Create

                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminFaqCreatePage
