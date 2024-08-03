import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Phasmophobia</li>
                <li>Valorant</li>
                <li>Shop</li>
            </ul>
            <div className='nav-login-cart'>
                <img src={cart_icon} alt="Cart" />
                <button>Login</button>
            </div>
        </div>
    );
}

export default Navbar;
