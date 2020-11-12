import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Login =()=>{
  const history = useHistory()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  
  // const history = useHistory();
  const postData = () =>{
    fetch("/signup",{
      method : "post",
      header:{"Content-Type": "application/json"},
      body: JSON.stringify({
        email,
        password,
      })
    }).then(res=>res.json())
    .then(data =>{
     if(data.error){
       M.toast({html: data.error,classes:"#f44336 red"})
     }
     else{
       M.toast({html:"signnedIn success", classes:"#1de9b6 teal accent-3"})
       history.push("/")
     }
    }).catch(err =>{
      console.log(err)
    })
  }
return <>
<div className="MyCard">
<div className="card auth-card">
   <h2> Instagram</h2>
   <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> 
   <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} /> 
   <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" name="action"
   onClick={()=>postData()}>Login ➡
  </button>
  <h5> <Link to="/SignUp" >Don't have an account? </Link> </h5> 
    </div>
  </div>
</>

}

export default Login