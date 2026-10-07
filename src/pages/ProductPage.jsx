import { useEffect, useState } from 'react'
import Breadcrum from '../components/Breadcrum'
import { useDispatch, useSelector } from 'react-redux'
// import './ProductPage.css'
import { getProduct } from "../redux/ActionCreators/ProductActionCreators"
import { useParams } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'

// Import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/effect-cube';

const sliderOptions = {
  effect: 'cube',
  grabCursor: true,
  loop: true,

  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },

  pagination: false,
  modules: [EffectCube],
  className: "mySwiper"
}

// const sliderOptions = {
//   effect: 'cube',
//   grabCursor: true,
//   loop: true,
//   cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: false,
//   modules: [EffectCube],
//   className: "mySwiper"
// }

const ProductPage = () => {
  
  let { id } = useParams()
  let [data, setData] = useState({})
  let [relatedProducts, setRelatedProducts] = useState([])

  let [selected, setSelected] = useState({
    color: "",
    size: "",
    quantity: 1
  })

  let ProductStateData = useSelector(state => state.ProductStateData)
  let dispatch = useDispatch()

  useEffect(() => {
    (() => {
      dispatch(getProduct())
      if (ProductStateData.length) {
        let item = ProductStateData.find(x => x.id === id)
        if (item) {
          setData({ ...item })
          setRelatedProducts(ProductStateData.filter(x => x.maincategory === item.maincategory))
          setSelected({ ...selected, color: item.color[0], size: item.size[0] })

        } else {
          window.history.back()
        }

      }
    })()
  }, [ProductStateData.length, id])

  return (
    <>
      {/* <h1>this is product page</h1> */}
      <Breadcrum title={data.name ?? "Product"} />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-6">
            <Swiper
              {...sliderOptions}>
              {
                data.pic?.map((item, index) => {
                  return <SwiperSlide key={index}>
                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} height={500} width={500} alt="" />
                  </SwiperSlide>
                })
              }

            </Swiper>
          </div>
          <div className="col-md-6">
            <h5 className='bg-primary text-center p-2 text-light'>{data.name}</h5>
            <div className="table-responsive">
              <table className='table table-bordered'>
                <tbody>
                  <tr>
                    <th>Maincategory</th>
                    <td>{data.maincategory}</td>
                  </tr>

                  <tr>
                    <th>Subcategory</th>
                    <td>{data.subcategory}</td>
                  </tr>

                  <tr>
                    <th>Brand</th>
                    <td>{data.brand}</td>
                  </tr>


                  <tr>
                    <th>Price</th>
                    <td><del>&#8377;{data.basePrice}</del> &#8377;{data.finalPrice} {data.discount}% OFF</td>
                  </tr>

                  <tr>
                    <th>Stock</th>
                    <td>{data.stock ? `${data.stockQuantity} Left in stock` : `Out of stock`}</td>
                  </tr>

                  <tr>
                    <th>Color</th>
                    <td>
                      <div className="btn-group">
                        {
                          data.color?.map((item, index) => {
                            return <button onClick={() => setSelected({ ...selected, color: item })} key={index} className={`btn border-1 border-primary ${selected.color === item ? "btn-primary" : "btn-light"}`}>{item}</button>
                          })
                        }
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>Size</th>
                    <td>
                      <div className="btn-group">
                        {
                          data.size?.map((item, index) => {
                            return <button onClick={() => setSelected({ ...selected, size: item })} key={index} className={`btn border-1 border-primary ${selected.size === item ? "btn-primary" : "btn-light"}`}>{item}</button>
                          })
                        }
                      </div>
                    </td>
                  </tr>


                  <tr>
                    <th colSpan={2}>
                      <div className="row">
                        {
                          data.stock ? <div className="col-md-4">
                            <div className="btn-group w-100">
                              <button className='btn btn-primary' onClick={() => selected.quantity > 1 ? setSelected({ ...selected, quantity: selected.quantity - 1 }) : null}><i className='bi bi-dash'></i></button>
                              <h3 className='text-center' style={{ width: "40%" }}>{selected.quantity}</h3>
                              <button className='btn btn-primary' onClick={() => selected.quantity < data.stockQuantity ? setSelected({ ...selected, quantity: selected.quantity + 1 }) : null}><i className='bi bi-plus'></i></button>

                            </div>
                          </div> : null
                        }
                        <div className="col-md-8">
                          <div className="btn-group w-100">
                            {data.stock ? <button className='btn btn-primary'><i className='bi bi-cart-check'>Add to Cart</i></button> : null}
                            <button className='btn btn-secondary text-light'><i className='bi bi-heart-fill'>Add to Whislist</i></button>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>

                  <tr>
                    <th>Description</th>
                    <td><div dangerouslySetInnerHTML={{ __html: data.description }} /></td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>

        </div>

        <div className="mt-3">
          <ProductSlider title="Product" data={relatedProducts} />
        </div>

      </div>


    </>
  )
}

export default ProductPage
