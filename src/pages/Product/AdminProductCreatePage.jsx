import React, { useState, useEffect, useRef } from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import { Link, useNavigate } from 'react-router-dom'
import TextValidators from '../../Validators/TextValidators'
import ImageValidator from "../../Validators/ImageValidator"
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from "../../redux/ActionCreators/ProductActionCreators"

import RichTextEditor from "../../rte/RichTextEditor"
import { createStructuredContent } from "../../rte/richTextEditorBridge"



import { createMaincategory, getMaincategory } from "../../redux/ActionCreators/MaincategoryActionCreators"
import { createSubcategory, getSubcategory } from "../../redux/ActionCreators/SubcategoryActionCreators"
import { createBrand, getBrand } from "../../redux/ActionCreators/BrandActionCreators"



const colors = ["Black", "White", "Blue", "Red", "Orange", "Gray", "Green", "Pink", "Yellow", "Purple", "Magenta", "N/A"]
const sizes = ["XXXL", "XXL", "XL", "L", "M", "S", "XS", "NB", "26", "28", "30", "32", "34", "36", "38", "40", "42", "N/A"]

const AdminProductCreatePage = () => {
    let editorRef = useRef(null)
    let [description, setDescription] = useState("")



    // ab yaha create Product ke liye form bnaege to form bnane ke liye kuch variable(state) define krege

    let [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: [],
        size: [],
        basePrice: '',
        finalPrice: '',
        discount: '',
        stock: true,
        stockQuantity: '',
        pic: [],
        status: true,

    })

    let [errorMessage, setErrorMessage] = useState({
        name: "name field is mendatory",
        color: "color field is mendatory",
        size: "size field is mendatory",
        basePrice: "basePrice field is mendatory",
        discount: "discount field is mendatory",
        stockQuantity: "stockQuantity field is mendatory",
        pic: "pic field is mendatory",
    })

    let [show, setShow] = useState(false)

    // ab ham yaha same data repeat na ho Product ke form me to uska yaha logic bnaege and uske liye sabse phele state variable define krege
    // let [ProductStateData, setProductStateData] = useState([])

    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)

    let dispatch = useDispatch()
    function getInputCheckbox(key, value) {
        let arr = data[key]
        if (arr.includes(value)) {
            arr = arr.filter(x => x !== value)
        }
        else {
            arr.push(value)
        }
        setData({ ...data, [key]: arr })
        setErrorMessage({ ...errorMessage, [key]: arr.length === 0 ? `Please select at least one ${key}` : "" })

    }


    useEffect(() => {

        (() => {
            dispatch(getMaincategory())

        })()

    }, [MaincategoryStateData.length])


    useEffect(() => {

        (() => {
            dispatch(getSubcategory())

        })()

    }, [SubcategoryStateData.length])

    useEffect(() => {

        (() => {
            dispatch(getBrand())

        })()

    }, [BrandStateData.length])


    let navigate = useNavigate()


    function getInputData(e) {
        let name = e.target.name
        // let value = name==="pic" ? e.target.files[0] : e.target.value  // real backend me ye line ka code use hoga
        let value = name === "pic" ? Array.from(e.target.files).map(file => "brand/" + file.name) : e.target.value

        setData({ ...data, [name]: name === 'status' || name === "stock" ? (value === "1" ? true : false) : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidator(e) : TextValidators(e) })


    }
    function syncDocument(documentModel, nextHtml) {
        const resolvedHtml = nextHtml !== undefined ? nextHtml : renderHTML(documentModel);
        setDescription(resolvedHtml)
    }


    async function postData(e) {

        e.preventDefault()

        let error = Object.values(errorMessage).find(x => x !== "")

        if (error) {

            setShow(true)
        }
        else {
            let bp = parseInt(data.basePrice)
            let d = parseInt(data.discount)
            let sc = parseInt(data.stockQuantity)

            let fp = parseInt(bp - (bp * d / 100))

            let items = {
                ...data,
                maincategory: data.maincategory || MaincategoryStateData[0].name,
                subcategory: data.subcategory || SubcategoryStateData[0].name,
                brand: data.brand || BrandStateData[0].name,
                basePrice: bp,
                discount: d,
                finalPrice: fp,
                stockQuantity: sc,
                description: description
            }
            // let item = ProductStateData.find(
            //     x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
            // )
            // if (item) {

            //     setShow(true)

            //     setErrorMessage({
            //         ...errorMessage,
            //         name: "Product With This Name is Already Exist"
            //     })

            //     return
            // }

            dispatch(createProduct({ ...items }))


            // form data bheje jab backend se data me file imege ka concept hoga uske liye yaha code hai --

            // let formData = new formData()
            // formData.append("name", data.name)
            // formData.append("maincategory", data.maincategory || MaincategoryStateData[0].id)
            // formData.append("subcategory", data.subcategory || SubcategoryStateData[0].id)
            // formData.append("brand", data.brand || BrandStateData[0].id)
            // formData.append("finalPrice", fp)
            // formData.append("stock", data.stock)
            // formData.append("stockQuantity", sc)
            // formData.append("description", description)

            
            // data.color?.forEach(item => {
            //     FormData.append("color", item)
            // })

            // data.size?.forEach(item => {
            //     FormData.append("size", item)
            // })

            // FormData.append('status', data.status)


            // formData.append("icon", data.icon)
            // formData.append("status", data.status)
            // dispatch(createProduct(formData))


            navigate("/admin/product")

            // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Product`, {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json",
            //     },
            //     body: JSON.stringify({ ...data })
            // })

            // response = await response.json()

            // if (response) {

            //     navigate("/admin/Product")

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
                            Create Product

                            <Link to="/admin/product">
                                <i className='bi bi-arrow-left text-light float-end'></i>
                            </Link>

                        </h4>

                        <form onSubmit={postData}>

                            <div className="row">

                                <div className="col-12 mb-3">

                                    <label>Name*</label>

                                    <input
                                        type="text"
                                        name='name'
                                        onChange={getInputData}
                                        placeholder='Full Name'
                                        className={`form-control ${show && errorMessage.name ? `border-danger` : `border-primary`}`}
                                    />

                                    {show && errorMessage.name ?
                                        <p className='text-danger text-capitalize'>
                                            {errorMessage.name}
                                        </p>
                                        : null}

                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">

                                    <label>Maincategory*</label>
                                    <select name="maincategory" onChange={getInputData} className='form-select border-primary'>
                                        {MaincategoryStateData.filter(x => x.status).map((item, index) => {
                                            return <option key={index}>{item.name}</option>
                                            // return <option key={index} value={item.id}>{item.name}</option>  // ye real backend jab use krege uske liye hai
                                        })}
                                    </select>

                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">

                                    <label>Subcategory*</label>
                                    <select name="subcategory" onChange={getInputData} className='form-select border-primary'>
                                        {SubcategoryStateData.filter(x => x.status).map((item, index) => {
                                            return <option key={index}>{item.name}</option>
                                            // return <option key={index} value={item.id}>{item.name}</option>  // ye real backend jab use krege uske liye hai
                                        })}
                                    </select>

                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">

                                    <label>Brand*</label>
                                    <select name="brand" onChange={getInputData} className='form-select border-primary'>
                                        {SubcategoryStateData.filter(x => x.status).map((item, index) => {
                                            return <option key={index}>{item.name}</option>
                                            // return <option key={index} value={item.id}>{item.name}</option>  // ye real backend jab use krege uske liye hai
                                        })}
                                    </select>

                                </div>

                                <div className="col-lg-3 col-md-6 mb-3">

                                    <label>Stock*</label>
                                    <select name="stock" onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">In stock</option>
                                        <option value="0">Out of stock</option>
                                    </select>

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>Base Price*</label>

                                    <input
                                        type="number"
                                        name='basePrice'
                                        onChange={getInputData}
                                        placeholder='Base Price'
                                        className={`form-control ${show && errorMessage.basePrice ? `border-danger` : `border-primary`}`}
                                    />

                                    {show && errorMessage.basePrice ?
                                        <p className='text-danger text-capitalize'>
                                            {errorMessage.basePrice}
                                        </p>
                                        : null}

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>Discount Price*</label>

                                    <input
                                        type="number"
                                        name='discount'
                                        onChange={getInputData}
                                        placeholder='Discount Price'
                                        className={`form-control ${show && errorMessage.discount ? `border-danger` : `border-primary`}`}
                                    />

                                    {show && errorMessage.discount ?
                                        <p className='text-danger text-capitalize'>
                                            {errorMessage.discount}
                                        </p>
                                        : null}

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label>Stock Quantity*</label>

                                    <input
                                        type="number"
                                        name='stockQuantity'
                                        onChange={getInputData}
                                        placeholder='Stock Quantity'
                                        className={`form-control ${show && errorMessage.stockQuantity ? `border-danger` : `border-primary`}`}
                                    />

                                    {show && errorMessage.stockQuantity ?
                                        <p className='text-danger text-capitalize'>
                                            {errorMessage.stockQuantity}
                                        </p>
                                        : null}

                                </div>

                                <div className="col-12 mb-3">
                                    <label>Colors*</label>
                                    <div className="row border border-primary mx-1 p-2">
                                        {
                                            colors.map((items, index) => {
                                                return <div className='col-xl-2 col-lg-3 col-sm-4 col-6' key={index}>
                                                    <input type="checkbox" id={items} onChange={() => getInputCheckbox("color", items)} checked={data.color?.includes(items)} />
                                                    <label className='ms-2' htmlFor={items}>{items}</label>
                                                </div>

                                            })
                                        }
                                    </div>
                                </div>
                                {show && errorMessage.color ?
                                    <p className='text-danger text-capitalize'>
                                        {errorMessage.color}
                                    </p>
                                    : null}


                                <div className="col-12 mb-3">
                                    <label>Size*</label>
                                    <div className="row border border-primary mx-1 p-2">
                                        {
                                            sizes.map((items, index) => {
                                                return <div className='col-xl-2 col-lg-3 col-sm-4 col-6' key={index}>
                                                    <input type="checkbox" id={items} onChange={() => getInputCheckbox("size", items)} checked={data.size?.includes(items)} />
                                                    <label className='ms-2' htmlFor={items}>{items}</label>
                                                </div>

                                            })
                                        }
                                    </div>
                                </div>
                                {show && errorMessage.size ?
                                    <p className='text-danger text-capitalize'>
                                        {errorMessage.size}
                                    </p>
                                    : null}

                                <div className='col-12 mb-3'>
                                    <label>Description</label>
                                    <RichTextEditor
                                        ref={editorRef}
                                        className="editor-host border border-primary"
                                        value={description}
                                        onChange={(nextHtml, editor) => syncDocument(editor.getJSON(), nextHtml)}
                                        style={{ minHeight: 380 }}
                                    />
                                </div>


                                <div className="col-md-6 mb-3">
                                    <label >Pic*</label>
                                    <input type="file" name='pic' multiple onChange={getInputData} className={`form-control ${show && errorMessage.pic ? `border-danger` : `border-primary`}`} />

                                    {show && errorMessage.pic ? errorMessage.pic?.split("|").map((error, index)=>{
                                        return <p className='text-danger text-capitalize' key={index} >{error}</p>
                                    }) : null}


                                </div>


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

export default AdminProductCreatePage
