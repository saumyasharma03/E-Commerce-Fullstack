import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Product from './Product';
const ProductHd = (props) => {
    
    const { product } = props;

    return (
        <div className='flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize'>
            Home <FaArrowRight /> Shop <FaArrowRight /> {product.category} <FaArrowRight /> {product.name}
        </div>
            )
}

            export default ProductHd