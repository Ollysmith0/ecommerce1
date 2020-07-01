import React from 'react';
import './Footer';
import './Footer.scss';

const Footer = () => {
    return(
        <>
            <footer>
                <div className="wrapper">
                    <div className="grid-layout">
                        <div className="logo">
                            <img src="https://cdn3.iconfinder.com/data/icons/ecommerce-shopping-4/64/x-33-512.png" alt="logo-ecommerce"/>
                        </div>
                        <div className="subscribes">
                            <h1 className="subscribes-title">newsletter</h1>
                            <p className="subscribes-desc">Subscribe for exclusive offers, special events and a good tall fish tale or two.</p>
                            <form action="#">
                                <input className="mail" type="email" placeholder="Email"/>
                                <button id="submit-btn" className="submit-sign-up" type="submit">sign up</button>
                                <div id="myModal" className="modal">
                                    <div className="modal-content">
                                        <span className="close">&times;</span>
                                        <p>Some text in the Modal..</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="Links">
                            <h1 className="Links-title">links</h1>
                            <ul>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h1 className="contact-title">
                                get in touch
                            </h1>
                            <p className="contact-desc">
                                Contact us  
                                <a className="my-mail" href="mailto:ollysmith0@gmail.com">
                                    ollysmith0@gmail.com
                                </a>
                            </p>
                            <div className="social-media-contact">
                                <ul className="social-items">
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                            <div className="address">
                                <p className="address-desc">
                                    p.o box 3805
                                </p>
                                <p className="address-desc">
                                    faytteville, ar.72702
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right">
                        <i className="far fa-copyright"></i>
                        <span className="copy-right-title"> 2020, <a href="#" className="site">Molly Jogger</a></span>
                        <span className="copy-right-desc">Site by <a href="#" className="desc">Olly Smith</a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;