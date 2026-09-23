import React, { useState, useEffect } from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Profile from '../../components/User/Profile'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TextValidators from '../../Validators/TextValidators'

import { getFeature, updateFeature, deleteFeature } from "../../redux/ActionCreators/FeatureActionCreators"
import { useSelector, useDispatch } from 'react-redux'

const AdminFeatureUpdatePage = () => {

    let { id } = useParams()

    let [data, setData] = useState({
        name: "",
        icon: "",
        shortDescription: "",
        status: true,
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "name field is mendatory",
        icon: "icon field is mendatory",
        shortDescription: "shortDescription field is mendatory",
    })


    let [show, setShow] = useState(false)
    let navigate = useNavigate()


    // ab ham yaha same data repeat na ho Feature ke form me to uska yaha logic bnaege and uske liye sabse phele state variable define krege
    // let [FeatureStateData, setFeatureStateData] = useState([])
    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Feature`, {
            //     method: "GET",
            //     headers: {
            //         "content-type": "application/json"
            //     }
            // })

            // response = await response.json()

            dispatch(getFeature())

            if (FeatureStateData.length) {

                let item = FeatureStateData.find(x => x.id === id)
                if (item) {
                    setData({ ...data, ...item })
                    // setFeatureStateData(response)
                } else {
                    navigate("/admin/feature")
                }
            }

        })()

    }, [FeatureStateData.length])


    // npm i -g json-server  --> ye locally fake backend server use ke liye package hai
    // json-server data.json  --port 8000 --> command line
    // frontend --> port 4000
    // backend --> port 8000

    // npm i datatables.net-dt




    function getInputData(e) {

        let { name, value } = e.target
        // let name = e.target.name
        // let value = name==="icon" ? e.target.files[0] : e.target.value  // real backend me ye line ka code use hoga
        // let value = name === "icon" ? "feature/" + e.target.files[0].name : e.target.value

        setData({ ...data, [name]: name === 'status' ? (value === "1" ? true : false) : value })
        // setErrorMessage({ ...errorMessage, [name]: name === "icon" ? ImageValidator(e) : TextValidators(e) })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })


    }


    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error) {
            setShow(true)
        }
        else {

            let item = FeatureStateData.find(x => x.id !== id && x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, name: "Feature With This Name is Already Exist" })
                return
            }

            dispatch(updateFeature({ ...data }))




            // let formData = new formData()
            // formData.append("_id", data._id)
            // formData.append("name", data.name)
            // formData.append("pic", data.pic)
            // formData.append("status", data.status)
            // dispatch(createFeature(formData))


            navigate("/admin/feature")



            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Feature/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "content-type": "application/json",
            //     },
            //     body: JSON.stringify({ ...data })
            // })

            // response = await response.json()

            // if (response) {
            //     navigate("/admin/Feature")

            // } else {
            //     alert("Interval error")
            // }


        }

    }


    return (
        <>
            {/* <h1>this is admin upadte page</h1> */}
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSideBar />
                    </div>
                    <div className="col-md-9">
                        <h4 className='bg-primary text-light text-center p-2'>Update Feature

                            <Link to="/admin/feature"><i className='bi bi-arrow-left text-light float-end' ></i></Link>

                        </h4>

                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label >Name*</label>
                                    <input type="text" name='name' onChange={getInputData} placeholder='Full Name' className={`form-control ${show && errorMessage.name ? `border-danger` : `border-primary`}`} />

                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}


                                </div>

                                <div className="col-12 mb-3">
                                    <label >Short Description*</label>
                                    <textarea name='shortDescription' value={data.shortDescription} rows={4} onChange={getInputData} placeholder='Full Name' className={`form-control ${show && errorMessage.shortDescription ? `border-danger` : `border-primary`}`} />

                                    {show && errorMessage.shortDescription ? <p className='text-danger text-capitalize'>{errorMessage.shortDescription}</p> : null}


                                </div>



                                <div className="col-md-6 mb-3">
                                    <label >Icon*</label>
                                    <input type="text" name='icon' value={data.icon} onChange={getInputData} className={`form-control ${show && errorMessage.icon ? `border-danger` : `border-primary`}`} placeholder='eg <i class="bi bi-list"></i>' />

                                    {show && errorMessage.icon ? <p className='text-danger text-capitalize'>{errorMessage.icon}</p> : null}


                                </div>
                                <div className="col-md-6 mb-3">
                                    <label >Status*</label>
                                    <select name="status" value={data.status ? "1" : "0"} onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>

                                    </select>

                                </div>

                                <div className="col-12 mb-3">
                                    <button type="submit" className='btn btn-primary w-100'>Update</button>
                                </div>



                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminFeatureUpdatePage
