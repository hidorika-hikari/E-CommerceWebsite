import HomeBanner from "../../Components/HomeBanner/index";
import Button from '@mui/material/Button'
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";

const Home =() => {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return(
        <>
            <HomeBanner/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="cursor"></img>
                            {/* <img src={} className="cursor"></img> */}
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-content-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLER</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <Button className="viewAllBtn ms-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={{Navigation}}
                                    className="mySwiper">
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>
                                
                            </div>

                            <div className="d-flex align-content-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>

                                <Button className="viewAllBtn ms-auto">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={{Navigation}}
                                    className="mySwiper">
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                </Swiper>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;