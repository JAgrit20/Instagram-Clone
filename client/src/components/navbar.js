import React from 'react';

const NavBar = () =>{
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left" style={{color:"black"}}>Instagram</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/SignIn">Login</a></li>
            <li><a href="/SignUp">Sign Up</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar