import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeBanner = () => {
    const images = [
        "https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg",
        "https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg",
        "https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg",
        "https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg"
    ];

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
        >
            {images.map((src, index) => (
            <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index}`} className="w-100" />
            </SwiperSlide>
            ))}
        </Swiper>
            </div>
        </div>
    );
};

export default HomeBanner;
