import React from 'react';
import {Link} from 'react-router-dom';

const login =()=>{

return (<>
<div className="MyCard">
<div className="card auth-card">
   <h2> Instagram</h2>
   <input type="text" placeholder="email" /> 
   <input type="text" placeholder="password" /> 
   <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action">Login ➡
   
  </button>
  <h5> <Link to="/SignUp" >Don't have an account? </Link> </h5> 
    </div>
  </div>
</>
)
}

export default login