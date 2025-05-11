import React from "react";
import Slider from "react-slick";

const HomeBanner =() => {
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoPlay:true
      };
    
    return(
        <>
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://dgbvgo13heod7.cloudfront.net/2025/banners/wk19/2061-16x9-women-startpage-wk19.jpg" className="w-100"/>
                </div>
            </Slider>
        </div>
        </>
    )
}

export default HomeBanner;