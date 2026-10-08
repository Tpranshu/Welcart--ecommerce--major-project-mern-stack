import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Profile from '../../components/User/Profile'
import UpdateProfile from '../../components/User/UpdateProfile'
import Whislist from '../../components/User/Whislist'
import Orders from '../../components/User/Orders'
import Address from '../../components/User/Address'

const ProfilePage = () => {
    let [option, setOption] = useState("Profile")
    let [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        (() => {
            setOption(searchParams.get("option") ?? "Profile")
        })()
    }, [searchParams])
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className={`list-group-item mb-1 ${option === "Profile" ? "active" : ""}`} onClick={() => setSearchParams({ option: "Profile" })}>Profile</li>

                            <li className={`list-group-item mb-1 ${option === "Update Profile" ? "active" : ""}`} onClick={() => setSearchParams({ option: "Update Profile" })}>Update Profile</li>

                            <li className={`list-group-item mb-1 ${option === "Whislist" ? "active" : ""}`} onClick={() => setSearchParams({ option: "Whislist" })}>Whislist</li>

                            <li className={`list-group-item mb-1 ${option === "Orders" ? "active" : ""}`} onClick={() => setSearchParams({ option: "Orders" })}>Orders</li>

                            <li className={`list-group-item mb-1 ${option === "Address" ? "active" : ""}`} onClick={() => setSearchParams({ option: "Address" })}>Address</li>
                        </ul>

                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>{option}</h5>
                        {option === "Profile" ? <Profile /> : null}
                        {option === "Profile" ? <UpdateProfile /> : null}
                        {option === "Profile" ? <Whislist /> : null}
                        {option === "Profile" ? <Orders /> : null}
                        {option === "Profile" ? <Address /> : null}

                    </div>

                </div>
            </div>

        </>
    )
}

export default ProfilePage
