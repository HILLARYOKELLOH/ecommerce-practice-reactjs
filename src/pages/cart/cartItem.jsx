import React,{useContext} from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, image } = props.data || {};
    const { cartItems,addToCart,removeFromCart,cartUpdate} = useContext(ShopContext);

    return (
        <div className='cartItem'>
            <img src={image} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>ksh {price}</p>
                <div className="countHandler">
<button onClick={()=>removeFromCart(id)}> - </button>
<input value={cartItems[id]} onChange={(e)=>cartUpdate(Number(e.target.value),id)}></input>
<button onClick={()=>addToCart(id)}> + </button>

                </div>
            </div>
        </div>
    );
}

export default CartItem;
