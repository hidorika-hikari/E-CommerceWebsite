import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from "@mui/material/Rating";
import Slider from 'react-slick';
import { useRef } from 'react';
import { MdClose } from "react-icons/md";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

const ProductModel = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var setting2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    var setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    return (
        <>
            
            <Dialog open={true} className="productModel" onClose={() => props.closeProductModel()}>
                <Button className='close_' onClick={() => props.closeProductModel()}><MdClose/></Button>
                <h4 className='mb-1 fw-bold'>All Natural Italian-Style Chicken Meatballs</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center me-4'>
                        <span>Brands</span>
                        <span className='ms-2'><b>Welch's</b></span>
                    </div>

                    <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>

                </div>

                <hr/>
                
                <div className='row mt-2 produceDetailsModel'>
                    <div className='col-md-5'>
                        <div className='productZoom'>
                            <Slider {...setting2} className='zoomSliderBig' ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg`}/>
                                </div>
                            </Slider>
                        </div>
                        <Slider {...setting} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' className='w-100'/>
                            </div>

                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' className='w-100'/>
                            </div>

                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' className='w-100'/>
                            </div>

                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' className='w-100'/>
                            </div>
                        </Slider>
                    </div>
                    <div className='col-md-7'>

                    </div>
                </div>
            </Dialog>
            
        </>
    )
}

export default ProductModel;