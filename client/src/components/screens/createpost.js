import React from 'react';
const createPost = ()=>{
    return (
    <>
   <div className="card input-filled" 
   style={{margin:"20px 250px 250px", maxwidth:"500px",padding:"20px",textAlign:"center"}}>
   <input type="text" placeholder="title"/>
<input type="text" placeholder="body"/>
<div className="file-field input-field">
        <div className="btn  #1565c0 blue darken-3">
            <span>Upload Image</span>
            <input type="file"/>
     
        </div>
        <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
    </div>
        
        </div>
        <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action">Submit Post ➡
   
  </button>
   </div>
    </>

    )
}

export default createPost

{/* <div className="card input-filled">

    <div className="file-field input-field">
        <div className="btn">
            <span>File</span>
            <input type="file">
        </div>
    <div className="file-path-wrapper">
        <input className="file-path validate" type="text">
    </div>
</div>

</div> */}
