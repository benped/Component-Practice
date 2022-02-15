import React from 'react';
import logo from '../../images/logo.png';

function Logo() {
    return(
        <header className="container">
        <div className="row">
        <img className="col-md-3 offset-md-3" src={logo} alt="Task Manger Logo" id="logo" width="500px"/>
        </div>

    </header>
    )
};

export default Logo;