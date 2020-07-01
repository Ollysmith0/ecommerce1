import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Register.scss';

const Register = () => {
    return(
    <>
        <Header />
            <div className="container-register">
                <div className="container-register">
                    <h1 className="register-title">
                        create account
                    </h1>
                    <div className="input-row">
                        <label htmlFor="first-name" className="first-name-title">first name</label>
                        <input type="text" id="first-name"/>
                    </div>
                    <div className="input-row">
                        <label htmlFor="last-name" className="last-name-title">last name</label>
                        <input type="text" id="last-name"/>
                    </div>
                    <div className="input-row">
                        <label htmlFor="email" className="email-title">email</label>
                        <input type="text" id="email"/>
                    </div>
                    <div className="input-row">
                        <label htmlFor="pass" className="pass-title">password</label>
                        <input type="password" id="pass"/>
                    </div>
                    <div className="submit">
                        <button className="sign-in" type="submit">sign in</button>
                        <a className="return" href="#">Return to Store</a>
                    </div>
                </div>
            </div>
        <Footer />
    </>
    )
}

export default Register;