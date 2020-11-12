import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
const CreatePost = ()=>{
    const [title,setTitle] = useState("") 
    const [body,setBody] = useState("")
     const [pic,setImage] =useState("")

     const postDetails = () =>{
         const data = new FormData()
         data.append("file",pic)
         data.append("upload_preset","Insta-clone")
         data.append("cloud_name","jags")
         fetch("https://api.cloudinary.com/v1_1/jags/pic/upload",{method:"post",
        body:data}).then(res =>res.json())
        .then(data =>{
            console.log(data)
        })
        .catch(err =>{
            console.log(err)
        })

     }
    return (
    <>
   <div className="card input-filled" 
   style={{margin:"20px 250px 250px", maxwidth:"500px",padding:"20px",textAlign:"center"}}>
   <input type="text" placeholder="title" value={title} onChange={(e)=>{ setTitle(e.target.value)}}/>
<input type="text" placeholder="body" value ={body} onChange={(e)=>{ setBody(e.target.value)}}/>
<div className="file-field input-field">
        <div className="btn  #1565c0 blue darken-3">
            <span>Upload Image</span>
            <input type="file" value ={pic}onChange={(e)=>setImage(e.target.files[0])}/>
     
        </div>
        <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
    </div>
        
        </div>
        <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action">Submit Post ➡
   
  </button>
   </div>
    </>

    )
}

export default CreatePost


