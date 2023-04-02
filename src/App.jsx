import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import PostPage from './components/PostPage'
// import Login from './components/Login'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import About from './components/About'



function App() {

  return (
    <>
    <Router>
  <Navbar/>
  <Routes>

    <Route exact path='/' element={<LandingPage/>}/>
    <Route exact path='/posts/post/:postId' element= {<PostPage/>}/>
    {/* <Route exact path='/login' element={<Login/>}/> */}
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path='/signUp' element={<SignUp/>}/>
    <Route exact path='/about' element={<About/>}/>
  </Routes>
  </Router>
    </>
  )
}

export default App
