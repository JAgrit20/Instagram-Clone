import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup =()=>{
  const history = useHistory()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
// const history = useHistory();
const postData = () =>{
//   function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//  }
//   if(validateEmail(email)){
//     M.toast({html: "Invalid Email",classes:"#f44336 red"})
//     return;
//   }
  fetch("/signup",{
    method : "post",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
      name,
      email,
      password,
    })
  })
  .then(res=>res.json())
  .then(data =>{
   if(data.error){
     M.toast({html: data.error,classes:"#f44336 red"})
   }
   else{
     M.toast({html: data.message, classes:"#1de9b6 teal accent-3"})
     history.push("/login")
   }
  }).catch(err =>{
    console.log(err)
  })
}

return <>
<div className="MyCard">
<div className="card auth-card">
   <h2> Instagram</h2>
   <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /> 
   <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
   <button className="btn waves-effect waves-light #1565c0 blue darken-3" onClick={()=>postData()}>Signup ➡
  </button>
  <h5> <Link to="/SignIn" >Already have an account? </Link> </h5>
    </div>
  </div>
</>
}

export default Signup