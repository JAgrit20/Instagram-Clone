import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup =()=>{
  const history = useHistory()
  const [name,setName] = useState("")
  const [password,setPasword] = useState("")
  const [email,setEmail] = useState("")
// const history = useHistory();
const postData = () =>{
  fetch("",{
    method : "post",
    header:{"Content-Type": "application/json"},
    body: JSON.stringify({
      name,
      password,
      email,

    })

  }).then(res=>res.json())
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
            onChange={(e)=>setPasword(e.target.value)}
            />  {/* <input type="password" placeholder="Confirm password" value={password} onChange={(e)=>setpassword(e.target.value)} />  */}
   <button className="btn waves-effect waves-light #1565c0 blue darken-3" onClick={()=>postData()}>Signup ➡
  
  </button>
  <h5> <Link to="/SignIn" >Already have an account? </Link> </h5> 
    </div>
  </div>
</>
}

export default Signup