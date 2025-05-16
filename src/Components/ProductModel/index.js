import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Rating from "@mui/material/Rating";
import Slider from 'react-slick';
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext, useRef } from 'react';
import { MdClose } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../QuantityDrop';
import { MyContext } from '../../App';

const ProductModel = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

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
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <>
            
            <Dialog open={true} className="productModel" onClose={()=> context.setIsOpenProductModel(false)}>
                <Button className='close_' onClick={()=> context.setIsOpenProductModel(false)}><MdClose/></Button>
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
                        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>23%</div>
                                <Slider {...setting2} className='zoomSliderBig' ref={zoomSliderBig}>
                                    <div className='item'>
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg`}/>
                                    </div>

                                    <div className='item'>
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47-768x691.jpg`}/>
                                    </div>

                                    <div className='item'>
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35-768x691.jpg`}/>
                                    </div>

                                    <div className='item'>
                                        <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg`}/>
                                    </div>
                                </Slider>
                        </div>
                        <Slider {...setting} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' 
                                className='w-100' onClick={() => goto(0)}/>
                            </div>

                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' 
                                className='w-100' onClick={() => goto(1)}/>
                            </div>

                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' 
                                className='w-100' onClick={() => goto(2)}/>
                            </div>

                            <div className='item'>
                                <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg' 
                                className='w-100' onClick={() => goto(3)}/>
                            </div>
                        </Slider>
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg me-2'>9.35</span>
                            <span className='newPrice text-danger lg'>7.35</span>
                        </div>
                        
                        <span className='badge bg-success'>IN STOCK</span>

                        <p className='mt-2'>Vivamus adipiscing nisl ut dolor dignissim semper. 
                            Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu 
                            ad litora torquent</p>
                        <div className='d-flex align-items-center'>
                            <QuantityBox/>
                            <Button className='btn-blue btn-lg btn-big bth-round'> Add to Cart</Button>
                        </div>

                        <div className='d-flex align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant='outlined'>
                            <IoIosHeartEmpty/> &nbsp; ADD TO WISHLIST</Button>
                        <Button className='btn-round btn-sml' variant='outlined'>
                            <MdCompareArrows/> &nbsp; COMPARE</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
            
        </>
    )
}

export default ProductModel;