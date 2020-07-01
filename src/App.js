import React from 'react';
import Home from './Component/Home.jsx';
import Login from './Component/LoginPage/Login.jsx';
import Contact from './Component/ContactPage/Contact.jsx';
import About from './Component/AboutPage/About.jsx';
import Register from './Component/RegisterPage/Register.jsx';
import Forgot from './Component/ForgotPassword/Forgot.jsx';
import Error from './Component/Error.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/forgot" component={Forgot} exact></Route>
        <Route component={Error} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
