import React, { useEffect, useState } from 'react'

const Profile = () => {
  let [data, setData] = useState({})

  useEffect(() => {
    (async () => {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      setData(response)

    })()

  }, [])

  return (
    <>
      <table className='table table-bordered table-striped'>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>

          <tr>
            <th>User Name</th>
            <td>{data.username}</td>
          </tr>

          <tr>
            <th>Email Address</th>
            <td>{data.email}</td>
          </tr>

          <tr>
            <th>Phone</th>
            <td>{data.phone}</td>
          </tr>

          <tr>
            <th>Role</th>
            <td>{data.role}</td>
          </tr>



        </tbody>
      </table>
    </>
  )
}

export default Profile
