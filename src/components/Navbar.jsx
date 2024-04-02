import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
export const navbar=()=>{
    return(
    <div className='navbar'>
    <div className='links'>
        <Link to='/'>shop</Link>
        <Link to='/cart'><ShoppingCart size={32}></ShoppingCart></Link>

        </div>
    </div>
    );
};
export default navbar;

