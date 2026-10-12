import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextValidators from '../../Validators/TextValidators'

const UpdateProfile = ({setSearchParams}) => {

  let [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  })
  let [errorMessage, setErrorMessage] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
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


    } else {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          ...data
        })

      })
      response = await response.json()
      setSearchParams({option: "Profile"})


      let item = response.find(x => x.id!==data.id && (x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase()))
      if (item) {
        setErrorMessage({
          ...errorMessage,
          username: item.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() ? "Username Already taken" : ""
        })

        setErrorMessage({
          ...errorMessage,
          email: item.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase() ? "Email Already taken" : ""
        })

        setShow(true)
        return



      }

    }


  }


  useEffect(() => {
    (async () => {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      setData({ ...data, ...response })

    })()

  }, [])


  return (
    <>
      {/* <h1>this is update profile</h1> */}
      <div className="my-3">
        <form onSubmit={postData}>
          <div className="row">
            <div className="col-md-6 md-3">
              <label >Name*</label>
              <input type="text" name='name' value={data.name} onChange={getInputData} className={`form-control ${show && errorMessage.name ? `border-danger` : `border-primary`}`} placeholder='Full Name' />
              {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}

            </div>

            <div className="col-md-6 md-3">
              <label >Phone Number*</label>
              <input type="text" name='phone' value={data.phone} onChange={getInputData} className={`form-control ${show && errorMessage.phone ? `border-danger` : `border-primary`}`} placeholder='Phone Number' />
              {show && errorMessage.phone ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}


            </div>


            <div className="col-md-6 md-3">
              <label >Username*</label>
              <input type="text" name='username' value={data.username} onChange={getInputData} className={`form-control ${show && errorMessage.phone ? `border-danger` : `border-primary`}`} placeholder='Enter Username' />
              {show && errorMessage.username ? <p className='text-danger text-capitalize'>{errorMessage.username}</p> : null}


            </div>

            <div className="col-md-6 md-3">
              <label >Email Address*</label>
              <input type="text" name='email' value={data.email} onChange={getInputData} className={`form-control ${show && errorMessage.email ? `border-danger` : `border-primary`}`} placeholder='Email Address' />
              {show && errorMessage.email ? <p className='text-danger text-capitalize'>{errorMessage.email}</p> : null}


            </div>


            <div className="col-12 mb-3 p-2">
              <button type='submit' className='btn btn-primary w-100'>Update</button>

            </div>


          </div>
        </form>
      </div>


    </>
  )
}

export default UpdateProfile
