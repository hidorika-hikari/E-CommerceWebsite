import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {
    return(
        <section className="HomeCat">
            <div className="container">
                <Swiper
                    slidesPerView={10}
                    spaceBetween={20}
                    navigation={false}
                    slidesPerGroup={1}
                    pagination={{
                        clickable: true,
                        }}
                    modules={{Navigation}}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item text">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"/>

                            <h6>Red Apple</h6>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

export default HomeCat;