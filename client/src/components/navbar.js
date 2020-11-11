import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left" style={{color:"black"}}>Instagram</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/SignIn">Login</Link></li>
            <li><Link to="/SignUp">Sign Up</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar