import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFaq } from "../redux/ActionCreators/FaqActionCreators"
import SingleProduct from './SingleProduct'

const Faq = () => {
  let FaqStateData = useSelector(state => state.FaqStateData)
  let dispatch = useDispatch()


  useEffect(() => {
    (() => {
      dispatch(getFaq())

    })()
  }, [FaqStateData.length])

  return (
    <>
      {/* <h1>this is faq component</h1> */}
      <div className="container-fluid service pt-6 pb-6">

        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <h1 className="display-6 text-uppercase mb-5">frequently asked questions</h1>
          </div>

          <div className="row g-4">

            <div className="accordion" id="accordionExample">
              {
                FaqStateData.filter(x => x.status).map((item, index) => {
                  return <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="true" aria-controls={item.id}>
                        {item.question}
                      </button>
                      
                    </h2>
                    <div id={item.id} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                })
              }

            </div>


          </div>

        </div>

      </div>
    </>
  )
}

export default Faq
