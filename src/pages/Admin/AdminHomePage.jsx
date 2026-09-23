import React from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Profile from '../../components/User/Profile'

const AdminHomePage = () => {
  return (
    <>
      {/* <h1>this is admin homepage</h1> */}
      <div className="container-fluid my-3">
        <div className="row">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-9">
                <h2 className='bg-primary text-white text-center'>Profile</h2>
                <Profile />
            </div>
        </div>
      </div>
    </>
  )
}

export default AdminHomePage
