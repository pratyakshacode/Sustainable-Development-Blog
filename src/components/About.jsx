import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';

const About = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const firebase = useFirebase();

  const createContact = (e)=>{
    e.preventDefault();
   firebase.createContact(name, email, phone, msg).then((result)=>{
    alert("We will contact you soon")
   }).catch((e)=>{
    alert("Some Error Occurred")
   })
   
  }
  return (
    <>
      <div id='about-container'> 

      <h1 >About Us</h1>
      <div id='about-description'>

        <p>Hello There! Me and my friends support the sustainable development. Here we share the idea and thoughts about how you can achive the sustainable development and make our future bright as your inspiration. These all comes from the thought of creating somthing new that can help in the sustainable development</p> 
        
        <p> Sustainability tells us that how we can achieve our goals by the optimal use of available resources so that the future generation can also use those resources and the existence of this planet will be continued.</p> 

        <p> 
        It is the blog for making our world futuristic and create a new generation that can understand the importance of the available resources and will not waste the available resources. We are having the skills in the technical feild and use them to make the bright future so that we can make the new things help the people in any way.
        </p> 

        <div id='contact-container'>
            <h1>Wants to contact us ?</h1>
            <div id="contactform">

                <form onSubmit={createContact}>

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} required/>
                    <label htmlFor="number" >Phone Number</label>
                    <input type="text" name="phone" id="phone" onChange={(e)=> setPhone(e.target.value)} required/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5" onChange={(e)=> setMsg(e.target.value)} required></textarea>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
