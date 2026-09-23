import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-house-check'></i>
                    <span className='ms-3'>Home</span>
                </Link>

                <Link to="/admin/maincategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-list'></i>
                    <span className='ms-3'>Maincategory</span>
                </Link>

                <Link to="/admin/subcategory" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-list-check'></i>
                    <span className='ms-3'>Subcategory</span>
                </Link>

                <Link to="/admin/brand" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-tag'></i>
                    <span className='ms-3'>Brand</span>
                </Link>

                <Link to="/admin/product" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-view-list'></i>
                    <span className='ms-3'>Product</span>
                </Link>

                <Link to="/admin/feature" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-star'></i>
                    <span className='ms-3'>Feature</span>
                </Link>

                <Link to="/admin/faq" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-question-diamond'></i>
                    <span className='ms-3'>Faq</span>
                </Link>

                <Link to="/admin/setting" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-gear'></i>
                    <span className='ms-3'>Setting</span>
                </Link>

                <Link to="/admin/newsletter" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-envelope'></i>
                    <span className='ms-3'>Newsletter</span>
                </Link>

                <Link to="/admin/contactus" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-telephone'></i>
                    <span className='ms-3'>Contact Us</span>
                </Link>

                <Link to="/admin/checkouts" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-bag-check'></i>
                    <span className='ms-3'>Checkouts</span>
                </Link>

                <Link to="/admin/user" className="list-group-item list-group-item-action active mb-1" aria-current="true">
                    <i className='fs-5 bi bi-people'></i>
                    <span className='ms-3'>User</span>
                </Link>

            </div>
        </>
    )
}

export default AdminSideBar
