
import './App.css';
import NavBar from './components/navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/home'
import SignIn from './components/screens/login'
import Signup from './components/screens/signUp'
import Profile from './components/screens/profile'


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Route path="/">
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
  
   </BrowserRouter>
  );
}

export default App;
