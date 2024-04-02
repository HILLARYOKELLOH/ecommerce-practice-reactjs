import React, { useContext } from 'react';
import PRODUCTS from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
    const { cartItems, getAmount } = useContext(ShopContext);
    const totalAmount = getAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <h1>Your Cart Items</h1>
            <div className='cartItems'>
                {PRODUCTS.map(product => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                    return null;
                })}
            </div>
            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p>SubTotal: Ksh{totalAmount}</p>
                    <button>CheckOut</button>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            ) : (
                null // Render nothing when totalAmount is greater than 0
            )}
            {totalAmount <= 0 && <h1>The Cart is Empty</h1>}
        </div>
    );
}

export default Cart;
