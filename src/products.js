import React, { useContext } from 'react';
import { ShopContext } from './Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum/Breadcrum';
import ProductDisplay from './ProductDisplay/ProductDisplay';
import DescriptionBox from './DescriptionBox/DescriptionBox';
import RelatedProducts from './RelatedProducts/RelatedProducts';



const Products = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId))
    return (  
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
}
 
export default Products;