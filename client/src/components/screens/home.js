import React from 'react';

const Home =()=>{

return (
    <div className="home">
        <div className="card home-card">
            <h5>Jagrit</h5>
            <div className="card-image">
                <img src="https://images.unsplash.com/photo-1541874760634-a0da8ee7415b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=334&q=80"/>
         </div>
         <div className="card-content">
         <i class="material-icons" style={{color:"red"}}>favorite</i>
             <h6>title</h6>
             <p>This is an amazing post</p>
             <input type="text" placeholder="add comments here"/>
         </div>
      
    </div>

    <div className="card home-card">
            <h5>Jagrit</h5>
            <div className="card-image">
                <img src="https://images.unsplash.com/photo-1541874760634-a0da8ee7415b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc1MjQyfQ&auto=format&fit=crop&w=334&q=80"/>
         </div>
         <div className="card-content">
             <h6>title</h6>
             <p>This is an amazing post</p>
             <input type="text" placeholder="add comments here"/>
         </div>
      
    </div>

    
    </div>
)
}

export default Home