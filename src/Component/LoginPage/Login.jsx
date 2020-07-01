import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Login.scss';

const Login = () => {
    return(
    <div className="page-login">
        <Header />
        <div className="container-login">
            <h1 className="Login-title">Login</h1>
            <form action="">
                <div className="input-row">
                    <label className="label-title" htmlFor="Email">Email</label>
                    <input type="email" id="Email" />
                </div>
                <div className="input-row">
                    <label className="label-title" htmlFor="pass">Password</label>
                    <input type="text" id="pass"/>
                    <a id="recovery" href="/forgot">Forgot your password?</a>
                </div>
                <div className="submit">
                    <button className="sign-in" type="submit">sign in</button>
                    <a className="return" href="/">Return to Home</a>
                    <a className="create" href="/register">Create account</a>
                </div>
            </form>
        </div>
        <Footer />
    </div>
    )
}

export default Login;