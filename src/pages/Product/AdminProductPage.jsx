import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Profile from '../../components/User/Profile'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import DataTable from 'datatables.net-dt'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, deleteProduct } from "../../redux/ActionCreators/ProductActionCreators"




const AdminProductPage = () => {
  // ham Productcreate page se bnaya hua data yaha Product page me display krwaege
  let [data, setData] = useState([])

  let ProductStatData = useSelector(state => state.ProductStateData)
  let dispatch = useDispatch()

  // json-server data.json --watch --port 8000


  // ab yaha delete krne ke logic likhege
  // npm i sweetalert2
  // import Swal from "sweetalert2"
  /*

  {
    let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Product/${id}`),{
    method: "DELETE",
    headers: {
            "Content-type": "application/json"
    }}
    
    response = await response.json()
    setData(data.filter(x => x.id !== id))
  
  }
  
  
  */
  function deleteRecord(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure you want to delete that record?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {

      if (result.isConfirmed) {
        dispatch(deleteProduct({ id: id }))






        //   let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Product/${id}`, {
        //     method: "DELETE",
        //     headers: {
        //       "Content-type": "application/json"
        //     }
        //   })

        //   response = await response.json()
        setData(data.filter(x => x.id !== id))



        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success"

        })
      }
      else if (result.dismiss === Swal.DismissReason.cancel)
        /* Read more about handling dismissals below */
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your data file is safe :)",
          icon: "error"
        });
    });
  }


  useEffect(() => {
    let time = (() => {

      dispatch(getProduct())
      if (ProductStatData?.length) {
        setData(ProductStatData)

        let time = setTimeout(() => {
          new DataTable("#myTable")

        }, 500);
        return time
      }





      // let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Product`, {
      //   method: "GET",
      //   headers: {
      //     "content-type": "application/json"
      //   }
      // })

      // response = await response.json()
      // setData(response)





      // new DataTable("#myTable")  // ye asynchronous table and data aa rha hai to isliye table me data show nhi ho rha hai issey synchronous bnana padega



    })()

    return () => clearInterval(time)


  }, [ProductStatData.length])


  return (
    <>
      {/* <h1>this is admin homepage</h1> */}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-9">
            <h2 className='bg-primary text-light text-center p-2'>Product

              <Link to="/admin/product/create"><i className='bi bi-plus text-light float-end' ></i></Link>

            </h2>

            <div className="table-responsive">

              <table className='table table-bordered' id='myTable'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Maincategory</th>
                    <th>Subcategory</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Base Price</th>
                    <th>Discount</th>
                    <th>Final Price</th>
                    <th>Stock</th>
                    <th>Stock Quantity</th>
                    <th>Pic</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.maincategory.name ?? item.maincategory}</td>
                      <td>{item.subcategory.name ?? item.subcategory}</td>
                      <td>{item.brand.name ?? item.brand}</td>
                      <td>
                        <div style={{ width: 120 }}>
                          {item.color?.join(", ")}

                        </div>
                      </td>

                      <td>
                        <div style={{ width: 120 }}>
                          {item.size?.join(", ")}

                        </div>
                      </td>
                      <td>&#8377;{item.basePrice}</td>
                      <td>{item.discount}% OFF</td>
                      <td>&#8377;{item.finalPrice}</td>
                      <td>{item.stock ? "In stock" : "Out of stock"}</td>
                      <td>{item.stockQuantity}</td>
                      <td>
                        <div style={{ width: 430 }}>
                          {
                            item.pic?.map((pic, index) => {
                              return <a key={index} href={`${import.meta.env.VITE_APP_IMAGE_SERVER}${pic}`} target='_blank'>
                                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${pic}`} height={70} width={80} className='m-1' alt="Category Image" />
                              </a>

                            })
                          }


                        </div>
                      </td>

                      {/* <td>{item.pic}</td> ab yaha real pic ko display krna hai isi jagha */}
                      {/* <td>
                        <a href={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                          <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={70} width={80} alt="Category Image" />
                        </a>
                      </td> */}
                      <td>{item.status ? "Active" : "Inactive"}</td>
                      <td>
                        <Link to={`/admin/product/update/${item.id}`} className='btn btn-primary'>
                          <i className='bi bi-pencil-square'></i>
                        </Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={() => deleteRecord(item.id)}>
                          <i className='bi bi-trash'></i>
                        </button>
                      </td>

                    </tr>

                  })}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProductPage
