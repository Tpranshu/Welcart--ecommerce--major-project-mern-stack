
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SingleProduct from './SingleProduct';

const sliderOptions = {

    grabCursor: true,

    loop: false,

    slidesPerView: 1,

    spaceBetween: 10,

    breakpoints: {

        640: {

            slidesPerView: 1,

            spaceBetween: 10,

        },

        768: {

            slidesPerView: 2,

            spaceBetween: 10,

        },

        1024: {

            slidesPerView: 3,

            spaceBetween: 10,

        },

        1200: {

            slidesPerView: 4,

            spaceBetween: 10,

        },

    },

    pagination: false,

    className: "mySwiper"

}



const ProductSlider = ({ title, data }) => {

    console.log("Product Data:", data);

    return (

        <>

            {/* <h1>this is product slider component</h1> */}

            {/* <!-- product slider Start --> */}
            <div className="container-fluid service pt-6 pb-6">

                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        {
                            title === "Product"?
                            <h1 className="display-6 text-uppercase mb-5">Others Realted Products</h1>:
                            <h1 className="display-6 text-uppercase mb-5">Latest Product For {title}</h1>
                        }
                    </div>

                    <div className="row g-4">

                        <Swiper {...sliderOptions}>

                            {

                                data?.map((item, index) => {

                                    return <SwiperSlide key={item._id || index}>

                                       <SingleProduct item={item} />

                                    </SwiperSlide>

                                })

                            }

                        </Swiper>

                    </div>

                </div>

            </div>

            {/* <!-- product slider End --> */}

        </>

    )

}

export default ProductSlider