import React, { useState, useEffect } from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Profile from '../../components/User/Profile'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TextValidators from '../../Validators/TextValidators'
import ImageValidator from '../../Validators/ImageValidator'

import { getMaincategory, updateMaincategory, deleteMaincategory } from "../../redux/ActionCreators/MaincategoryActionCreators"
import { useSelector, useDispatch } from 'react-redux'

const AdminMaincategoryUpdatePage = () => {

    let { id } = useParams()

    let [data, setData] = useState({
        name: "",
        pic: "",
        status: true,
    })

    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: "",
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()


    // ab ham yaha same data repeat na ho maincategory ke form me to uska yaha logic bnaege and uske liye sabse phele state variable define krege
    // let [MaincategoryStateData, setMaincategoryStateData] = useState([])
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
            //     method: "GET",
            //     headers: {
            //         "content-type": "application/json"
            //     }
            // })

            // response = await response.json()

            dispatch(getMaincategory())

            if (MaincategoryStateData.length) {

                let item = MaincategoryStateData.find(x => x.id === id)
                if (item) {
                    setData({ ...data, ...item })
                    // setMaincategoryStateData(response)
                } else {
                    navigate("/admin/maincategory")
                }
            }

        })()

    }, [MaincategoryStateData.length])


    // npm i -g json-server  --> ye locally fake backend server use ke liye package hai
    // json-server data.json  --port 8000 --> command line
    // frontend --> port 4000
    // backend --> port 8000

    // npm i datatables.net-dt



    function getInputData(e) {
        let name = e.target.name
        // let value = name==="pic" ? e.target.files[0] : e.target.value  // real backend me ye line ka code use hoga
        let value = name === "pic" ? "maincategory/" + e.target.files[0].name : e.target.value

        setData({ ...data, [name]: name === 'status' ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidator(e) : TextValidators(e) })


    }

    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error) {
            setShow(true)
        }
        else {

            let item = MaincategoryStateData.find(x => x.id !== id && x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage({ ...errorMessage, name: "Maincategory With This Name is Already Exist" })
                return
            }

            dispatch(updateMaincategory({ ...data }))



            
            // let formData = new formData()
            // formData.append("_id", data._id)
            // formData.append("name", data.name)
            // formData.append("pic", data.pic)
            // formData.append("status", data.status)
            // dispatch(createMaincategory(formData))


            navigate("/admin/maincategory")



            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {
            //     method: "PUT",
            //     headers: {
            //         "content-type": "application/json",
            //     },
            //     body: JSON.stringify({ ...data })
            // })

            // response = await response.json()

            // if (response) {
            //     navigate("/admin/maincategory")

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
                        <h4 className='bg-primary text-light text-center p-2'>Update Maincategory

                            <Link to="/admin/maincategory"><i className='bi bi-arrow-left text-light float-end' ></i></Link>

                        </h4>

                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label >Name*</label>
                                    <input type="text" name='name' onChange={getInputData} placeholder='Full Name' className={`form-control ${show && errorMessage.name ? `border-danger` : `border-primary`}`} />

                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}


                                </div>

                                <div className="col-md-6 mb-3">
                                    <label >Pic</label>
                                    <input type="file" name='pic' onChange={getInputData} className={`form-control ${show && errorMessage.pic ? `border-danger` : `border-primary`}`} />

                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}


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

export default AdminMaincategoryUpdatePage
