import React, { useEffect } from 'react'


import { getFeature } from "../redux/ActionCreators/FeatureActionCreators"
import { useDispatch, useSelector } from 'react-redux'

const Features = () => {
    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (
            () => {
                dispatch(getFeature())
            }
        )()

    }, [FeatureStateData.length])


    return (
        <>

            <div className="container-fluid pt-6">
                <div className="container pt-4">
                    <div className="row g-0 feature-row wow fadeIn" data-wow-delay="0.1s">
                        {
                            FeatureStateData.filter(x => x.status)?.map((item, index) => {
                                return <div key={index} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">


                                    <div className="btn-xxl-square bg-primary mb-4 mt-n4 ms-5">
                                    <span className='text-light fs-1' dangerouslySetInnerHTML={{__html:item.icon}} />
                                    </div>
                                    <div className="p-5 pt-0">
                                        <h5 className="text-uppercase mb-3">{item.name}</h5>
                                        <p className='text-justify'>{item.shortDescription}</p>
                                       
                                    </div>


                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
