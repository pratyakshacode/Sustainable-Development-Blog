import React, { useState , useEffect} from 'react'
import { useFirebase } from '../context/Firebase';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import {useNavigate} from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
  const firebase = useFirebase();
  const [post, setPost] = useState([]);

  useEffect(()=>{

    firebase.getCards().then((posts)=>{

      // while(post.length == 0) return (<h2>Loading ... </h2>)
      setPost(posts.docs);
      
    })
    
  },[])

  const handleSubmit = ()=>{
    console.log('clicked')
  
  }

  if(!firebase.user){
    return (
      <LandingPage/>
    )
  }

  return (
    <>
      <section id='home-main'>

        <div className='home-main-div' id='home-main-1'>
            <div id='inside-1'>
              <h3>Quick Access</h3>
              <ul>
              {post.map((element)=>{
              return <li key={Math.random()}>{element.data().title}</li>
            })}
              </ul>
              
            </div>
         

        

        </div>
        <div className='home-main-div' id='home-main-2'>
        <div id='head-line'><h2>Blog Posts</h2></div>
        <section id='home-cards'>
          
            {post.map((element)=>{
              return <Cards key={Math.random()} id={element.id}{...element.data()}/>
            })}
          
        </section>

        </div>
      </section>
    </>
  )
}

export default Home
