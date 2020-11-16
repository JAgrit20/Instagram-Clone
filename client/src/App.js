import React,{useEffect,createContext,userReducer} from 'react';
import './App.css';
import NavBar from './components/navbar'
import {BrowserRouter, Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/home'
import SignIn from './components/screens/login'
import Signup from './components/screens/signUp'
import Profile from './components/screens/profile'
import CreatePost from './components/screens/createpost'
import  {reducer,initialState} from './reducer/userReducer'
const UserContext = createContext()

const Routing =()=>{
  const History = useHistory();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      History.push('/')
      }
      else{
        History.push('/login')
      }
    
  })
  return(
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/profile">
    <Profile/>
    </Route>
    <Route path="/SignIn">
    <SignIn/>
    </Route>
    <Route path="/SignUp">
    <Signup/>
    </Route>
    <Route path="/create">
    <CreatePost/>
    </Route>
    </Switch>

  )
}
function App() {
const [state,dispatch] = userReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
   
    <NavBar></NavBar>
    <Routing/>


   </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;
