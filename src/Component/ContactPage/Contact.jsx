import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Contact.scss';

const Contact = () => {
    return(
        <>
            <Header />
                <div className="wrapper">
                    <div className="container-contact">
                        <h1 className="contact-title">
                            contact
                        </h1>
                        <p className="contact-desc">
                        Use the form below to contact us with any questions or comments you may have. 
                        </p>
                        <div className="input-row">
                            <label htmlFor="name" className="name-title">name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="email" className="email-title">email</label>
                            <input type="text" id="email"/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="phone" className="phone-title">phone</label>
                            <input type="number" id="phone"/>
                        </div>
                        <div className="input-row">
                            <label htmlFor="comment" className="comment-title">comment</label>
                            <textarea rows="10" cols="70" id="comment"/>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Contact;