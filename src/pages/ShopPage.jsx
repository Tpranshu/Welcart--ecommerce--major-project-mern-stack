import React, { useEffect, useState } from 'react'
import Breadcrum from '../components/Breadcrum'

import { getProduct } from "../redux/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../redux/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../redux/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../redux/ActionCreators/BrandActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import SingleProduct from '../components/SingleProduct'


const colors = ["Black", "White", "Blue", "Red", "Orange", "Gray", "Green", "Pink", "Yellow", "Purple", "Magenta", "N/A"]
const sizes = ["XXXL", "XXL", "XL", "L", "M", "S", "XS", "NB", "26", "28", "30", "32", "34", "36", "38", "40", "42", "N/A"]

const ShopPage = () => {
  let [data, setData] = useState([])
  let [selected, setSelected] = useState({
    maincategory: [],
    subcategory: [],
    brand: [],
    product: [],
    colors: [],
    sizes: []

  })
  let [sortFilter, setSortFilter] = useState("1")
  let [search, setSearch] = useState("")

  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
  let ProductStateData = useSelector(state => state.ProductStateData)

  let dispatch = useDispatch()

  function getSelected(key, value) {
    let arr = selected[key]
    if (arr.includes(value)) {
      arr = arr.filter(x => x !== value)

    } else {
      arr.push(value)
    }
    setSelected({ ...selected, [key]: arr })


    applySelectedFilter({ ...selected, [key]: arr })
  }

  function applySelectedFilter(selected) {
    let data = ProductStateData.filter(x => x.status && (
      (selected.maincategory?.length === 0 || selected.maincategory?.includes(x.maincategory)) &&
      (selected.subcategory?.length === 0 || selected.subcategory?.includes(x.subcategory)) &&
      (selected.brand?.length === 0 || selected.brand?.includes(x.brand)) &&
      (selected.color?.length === 0 || (new Set(selected.color).intersection(new Set(x.color)).size > 0)) &&
      (selected.size?.length === 0 || (new Set(selected.size).intersection(new Set(x.size)).size > 0))

    ))
    // setData(data)
    applySelectedFilter(sortFilter, data)

  }
  function applySearchFilter(e) {
    let data = ProductStateData.filter(x => x.status && (
      (x.name?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase())) &&
      (x.maincategory?.toLocaleLowerCase() === search.toLocaleLowerCase()) &&
      (x.subcategory?.toLocaleLowerCase() === search.toLocaleLowerCase()) &&
      (x.brand?.toLocaleLowerCase() === search.toLocaleLowerCase()) &&
      (x.description?.toLocaleLowerCase() === search.toLocaleLowerCase())
    ))
    applySortFilter(sortFilter, data)


  }


  function applySortFilter(sortFilter, data) {
    if (sortFilter === "1") {
      data = data.sort((x, y) => y.id?.localeCompare(x.id))
    } else if (sortFilter === "2") {
      data = data.sort((x, y) => y.finalPrice - x.finalPrice)
    } else if (sortFilter === "3") {
      data = data.sort((x, y) => x.finalPrice - y.finalPrice)

    } else {
      data = data.sort((x, y) => y.discount - x.discount)
    }
    setData([...data])
    setSortFilter(sortFilter)


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

  useEffect(() => {
    (() => {
      dispatch(getProduct())
      if (ProductStateData.length) {
        setData(ProductStateData.filter(x => x.status))
      }

    })()
  }, [ProductStateData.length])



  return (
    <>
      {/* <h1>this is shop page</h1> */}
      <Breadcrum title="Shop" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Maincategory</li>
              {
                MaincategoryStateData.filter(x => x.status).map((item, index) => {
                  return <li className="list-group-item" key={index} onClick={() => getSelected('maincategory', item.name)}>{item.name}
                    {selected["maincategory"].includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                  </li>
                })
              }

            </ul>


            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Subcategory</li>
              {
                SubcategoryStateData.filter(x => x.status).map((item, index) => {
                  return <li className="list-group-item" key={index} onClick={() => getSelected('subcategory', item.name)}>{item.name}
                    {selected["subcategory"].includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                  </li>
                })
              }

            </ul>

            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Brand</li>
              {
                BrandStateData.filter(x => x.status).map((item, index) => {
                  return <li className="list-group-item" key={index} onClick={() => getSelected('brand', item.name)}>{item.name}
                    {selected["brand"].includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                  </li>
                })
              }

            </ul>

            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Product</li>
              {
                ProductStateData.filter(x => x.status).map((item, index) => {
                  return <li className="list-group-item" key={index} onClick={() => getSelected('product', item.name)}>{item.name}
                    {selected["product"].includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                  </li>
                })
              }

            </ul>



            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Colors</li>
              {
                colors.map((item, index) => {
                  return <li className="list-group-item" key={index} onClick={() => getSelected('colors', item)}>{item}
                    {selected["colors"].includes(item) ? <i className='bi bi-check float-end'></i> : null}
                  </li>
                })
              }

            </ul>


            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Sizes</li>
              {
                sizes.map((item, index) => {
                  return <li className="list-group-item" key={index} onClick={() => getSelected('sizes', item)}>{item}
                    {selected["sizes"].includes(item) ? <i className='bi bi-check float-end'></i> : null}
                  </li>
                })
              }

            </ul>
          </div>
          <div className="col-md-9">

            <div className="row">
              <div className="col-md-9 mb-3">
                <form onSubmit={(e) => {
                  e.preventDefault()
                  applySearchFilter()

                }}>

                  <div className="btn-group">
                    <input type="search" name='search' onChange={(e) => setSearch(e.target.value)} placeholder='Search Products By Name, Category, Brand Etc' />

                    <button className='btn btn-primary '>Search</button>
                  </div>

                </form>
              </div>
              <div className="col-md-3 mb-3">
                <select name="sort" onClick={(e) => applySortFilter(e.target.value, data)} className='form-select border-primary'>
                  <option value="1">Latest</option>
                  <option value="2">Price : High To Low</option>
                  <option value="3">Price : Low To High</option>
                  <option value="4">Discount</option>
                </select>



              </div>
            </div>


            <div className="container-fluid service pb-6">

              <div className="container">

                <div className="row g-4">

                  {

                    data?.map((item, index) => {

                      return <div className='col-md-4 col-sm-6' key={index}>
                        <SingleProduct item={item} />
                      </div>

                    })

                  }
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default ShopPage
