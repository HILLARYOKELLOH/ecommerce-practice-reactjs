import React from 'react';
import {PRODUCTS} from '../../products'
import Product from './product';
export const shop=()=>{
    return(
<div className='shop'>
    <div className='ShopTitle'>

        <h1>These are my products</h1>
        <div className='products'>{PRODUCTS.map((product)=>(<Product data={product}/>))}</div>
    </div>
    
</div>
    );
};
export default shop;