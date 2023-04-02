import React from 'react';
import happyEarth from '../images/happyEarth.png'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
import sustain from '../images/sustain.png'
import Card from './Card';

const LandingPage = () => {

  const navigate = useNavigate();
  const firebase = useFirebase();

  const handleClick = ()=>{
    if(firebase.user) navigate('/home');
    else navigate('/signUp');
  }
  return (
  <>
    <div className='landing-page-main'>  

        <div className='landing-page-first'>
          
            <h1>Sustainable Goals</h1>
            <h5>Let's Goal For the Earth and Nature To Win The Game Of Sustainable Development</h5>
            <h4>Let's Brighten The Future</h4>
            {/* <p>This is the blog show you the magics of the code as this blog is also a magical thing, Haha..  Just joking ..</p> */}
            <button onClick={handleClick}>Start Your Journey With Us</button>
        </div>


        {/* second division start */}
        <div className='landing-page-second'>
          <div id='landing-page-second-img'><img src={sustain} alt="" /></div>
        </div>
    </div>
    <section id="landing-page-topic">

      <h1>How Can We Relate The Sustainability With Us ?</h1>
      <p>Sustainable goals are the goals which realize us that how we can use the resources by also conserving them and sustaining them by the different techniques.</p>
      <p>It tells us about that how we can imagine our world in the future and leads us towards the healthy and a matured future. It gives us an idea that how we can create the different things so that we will never have the starvation of resources that are actually really important for our livelihood.</p>

    </section>
    </>
  )
}

export default LandingPage
