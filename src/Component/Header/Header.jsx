import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <div className="header-top">
                <div className="menu">
                    <div className="search">
                        <form action="#">
                            <i className="fas fa-search"></i>
                            <input type="text" className="search-input" placeholder="Search"/>
                        </form>
                        <nav className="dropdown-menu">
                            <a href="#" className="menu-mini">
                                <i id="menu-icon" className="fas fa-bars"></i>
                                <span className="menu-title">Menu</span>
                                <ul className="sub-menu">
                                    <Link to="/"><li className="Shop"><a href="/home">Home</a></li></Link>
                                    <Link to="/about"><li><a href="/about">About</a></li></Link>
                                    <Link to="/contact"><li><a href="/contact">Contact</a></li></Link>
                                    <Link to="/login"><li><a href="/login">Login</a></li></Link>
                                    <Link to="/register"><li className="last-item"><a href="/register">Create account</a></li></Link>
                                </ul>
                            </a>
                        </nav>
                    </div>
                    <div className="authentication">
                        <a href="/login" className="login">Login</a>
                        <a href="/register" className="create-acc">Create account</a>
                        <div className="cart">
                            <a className="cart-items" href="/cart">
                                <span><i className="fas fa-shopping-cart"></i></span>
                                <span>0</span>
                                <span>Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="logo left-items">
                    <img src="https://cdn3.iconfinder.com/data/icons/ecommerce-shopping-4/64/x-33-512.png" alt="logo" />
                </div>
                <div className="shopping__cart right-items">
                    <span><a href="/">HOME</a></span>
                    <span><a href="/about">ABOUT</a></span>
                    <span><a className="last-nav" href="/contact">CONTACT</a></span>
                </div>
            </div>
        </header>
    )
}

export default Header;