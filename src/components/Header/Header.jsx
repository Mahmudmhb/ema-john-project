import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'

const Header = () => {
    return (
        <nav>
            <div className="header-section">
                <img src={logo} alt="" />
               <div className="header-anhor">
                     <a href="/Home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Login">Login</a>
               </div>
            </div>
        </nav>
    );
};

export default Header;