import { TfiFullscreen } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button'
import ProductModel from "../ProductModel";
import { useState } from "react";

const ProductItem = () => {

    const [isOpenProductModel,setIsOpenProductModel] = useState(false);

    const viewProductDetails = (id) => {
        setIsOpenProductModel(true);
    }

    const closeProductModel = () => {
        setIsOpenProductModel(false);
    }

    return (
        <>
            <div className="item productItem">
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" 
                    className="w-100"/>

                    <span className="badge badge-primary">28%</span>
                    
                    <div className="actions">
                        <Button onClick={ () => viewProductDetails()}><TfiFullscreen/></Button>
                        <Button><CiHeart style={{ fontSize:'20px'}}/></Button>
                    </div>
                </div>
                    
                    <div className="info">
                        <h4> Weather's Original Caramel Hard Candies</h4>
                        <span className="text-success d-block">In Stock</span>
                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                        <div className="d-flex">
                            <span className="oldPrice">20.00</span>
                            <span className="newPrice text-danger ms-2">14.00</span>
                        </div>
                    </div>
            </div>
            {
                isOpenProductModel === true && <ProductModel closeProductModel={closeProductModel}/>
            }

            
        </>
    )
}

export default ProductItem