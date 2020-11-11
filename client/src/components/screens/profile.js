import React from 'react';

const Profile =()=>{

return (
    <div  style={{width: '600px',margin:"0px auto"}}>
        <div style={{display:"flex",justifyContent:"space-around", margin:"22px 5px", borderBottom:"1px solid"}}>
            <div>
                <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <h4 style={{margin: "6px 20px"}}>angila</h4>
                </div>
               
               
            <div style={{display:"flex",justifyContent:"space-around" ,width:"88%"}}>
                <h6>40 post</h6>
                <h6>40 followers</h6>
                <h6>40 following</h6>

            </div>
           
        </div>
        <div className="gallery">
        <img className = "items"  src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
        <img className = "items"  src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
        <img className = "items"  src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
        <img className = "items"  src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
             
        </div>
    </div>
)
}

export default Profile