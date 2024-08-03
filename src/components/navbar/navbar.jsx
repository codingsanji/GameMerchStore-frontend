import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart.png';

const Navbar = ({ currentPage }) => {
    const menuItems = ['Home', 'Phasmophobia', 'Valorant', 'Shop'];

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>

            <ul className="nav-menu">
                {menuItems.map(item => (
                    <li
                        key={item}
                        className={currentPage === item ? 'active' : ''}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="Cart" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
