import React, { useContext } from 'react';
import './shop.css';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, image } = props.data;
    const { addToCart,cartItems } = useContext(ShopContext);
const cartItemAmount=cartItems[id];
    return (
        <div className='product'>
            <img src={image} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>ksh {price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
        </div>
    );
}

export default Product;
