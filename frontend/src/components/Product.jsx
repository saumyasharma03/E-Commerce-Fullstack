import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductHd from './ProductHd';
import ProductDisplay from './ProductDisplay';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
const Product = () => {
    const { all_products } = useContext(ShopContext);
    const { productId } = useParams();

    // Debugging output
    console.log('productId:', productId);
    console.log('all_products:', all_products);

    const product = all_products.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <section className='max_padd_container py-28'>
            <div>
                <ProductHd product={product} />
                <ProductDisplay product={product} />
                <ProductDescription />
                <RelatedProducts />
            </div>
        </section>
    );
};

export default Product;
