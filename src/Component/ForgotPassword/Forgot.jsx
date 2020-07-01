import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Forgot.scss';

const Forgot = () => {
    return(
    <>
        <Header />
            <div>Hello</div>
            <div className="container-forgot">
                <h1 className="forgot-title">login</h1>
                <h3 className="reset-pass">reset your password</h3>
                <p className="forgot-desc">We will send you an email to reset your password.</p>
                <form action="#">
                    <label htmlFor="forgot-input" className="email-title">Email</label>
                    <input id="forgot-input" type="email" placeholder="" />
                    <div className="submit-obj">
                        <button className="submit" type="submit">submit</button>
                        <a className="Cancel" href="/login">Cancel</a>
                    </div>
                </form>
            </div>
        <Footer />
    </>
    )
}

export default Forgot;