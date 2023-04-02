import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const firebase = useFirebase();
  const handleClick = ()=>{

    const container = document.getElementById('login-container');
    const inputs = document.getElementsByTagName('input');

    if(container.style.top === '-600px') container.style.top = '50px';
    else container.style.top ='-600px'
  }
  
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const loginUser =  (e)=>{
    e.preventDefault();

    firebase.signIn(email, password).then((result)=>{
      navigate('/home');
      const container = document.getElementById('login-container');
      container.style.top = '-600px'

    }).catch((e)=>{
      alert('invalid user details');
    })
    


  }

  const logOutUser= ()=>{
    firebase.logOut();
    navigate('/')    
  }
  
  const signInGoogle = ()=>{
    firebase.googleSignup();
    const container = document.getElementById('login-container');
    container.style.top = '-600px';

    navigate('/home');
    
  }
  return (
    <>
    <nav>

        <Link to='/' id='brand'>EarthLog</Link>
      <ul>
        {location.pathname !== '/home' && firebase.user && <li><Link to='/home'>Home</Link></li>}
        <li><Link to='/about'>About</Link></li>
        {/* <li><a href="#contact-us">Contact Us</a></li> */}

      </ul>
      {firebase.user && <button id='logOut' onClick={logOutUser} >Log Out</button>}

      {!firebase.user && <button id='login' onClick={handleClick}>Login</button>}

    </nav>

    <div id='login-container'>
    <div className='login'>
            <h4>Login Here</h4>
            <form id='form' autoComplete='on'>
    
            <table>
                <tbody>
                    
                <tr><td><label htmlFor='email'>Email</label></td></tr>
                <tr>
                    <td><input type='email' name='email' id='email' onChange={(e)=> setEmail(e.target.value)}/></td>
                </tr>
                <tr><td><label htmlFor="password">Password</label></td></tr>
                <tr>
                    <td><input type='password' name='password' id='password' onChange={(e)=> setPassword(e.target.value)}/></td>
                </tr>
               
                </tbody>
            </table>
            
                     <button type='submit' onClick={loginUser}>Login</button>                
            </form>
            <button className= "google" onClick={signInGoogle}>Sign In with Google</button>
        </div>
    </div>
</>
  )
}

export default Navbar
