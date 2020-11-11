import React from 'react';
import {Link} from 'react-router-dom';

const Signup =()=>{

return <>
<div className="MyCard">
<div className="card auth-card">
   <h2> Instagram</h2>
   <input type="text" placeholder="Name" /> 
   <input type="text" placeholder="email" /> 
   <input type="password" placeholder="password" /> 
   <input type="password" placeholder="Confirm password" /> 
   <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action">Signup ➡
  
  </button>
  <h5> <Link to="/SignIn" >Already have an account? </Link> </h5> 
    </div>
  </div>
</>
}

export default Signup