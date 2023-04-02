import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import Home from '../components/Home';

const SignUp = () => {

  const navigate = useNavigate();
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loggedUserIn = (e)=>{
    e.preventDefault();
    firebase.createUser(email, password);

    
  }

  const googleSignIn = ()=>{

    firebase.googleSignup();
  }

  if(firebase.user){
    return(
      <Home/>
    )
  } else 
  return (
    <div className='signup-container'>
      <div className='signup'>
            <h4>Sign Up</h4>
            <form id='signup-form' autoComplete='on'>
    
            <table>
                <tbody>
                <tr><td><label htmlFor='name'>Name</label></td></tr>
                <tr>
                    <td><input type='text' name='name' id='name' /></td>
                </tr>
                <tr><td><label htmlFor='email'>Email</label></td></tr>
                <tr>
                    <td><input type='email' name='email' id='email' onChange={(e)=> setEmail(e.target.value)}/></td>
                </tr>
                <tr><td><label htmlFor="password">Password</label></td></tr>
                <tr>
                    <td><input type='password' name='password' id='password' onChange={(e)=> setPassword(e.target.value)} /></td>
                </tr>
               
                </tbody>
            </table>
            
                    <button type='submit' onClick={loggedUserIn} id='signup-btn'>SignUp</button>  
                
            </form>
            <button className='google' onClick={googleSignIn}>Sign Up with Google</button>
        </div>
    </div>
  )
}

export default SignUp
