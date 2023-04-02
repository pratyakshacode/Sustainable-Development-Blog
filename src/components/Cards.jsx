import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';

const Cards = (props) => {

  const [url, setUrl] = useState("");
  const firebase = useFirebase();
  const navigate = useNavigate();


  useEffect(()=>{
    firebase.getImageUrl(props.imageUrl).then((url)=>setUrl(url));
    console.log('running')
    console.log(props)
  },[])
  return (
  <>
  <div className='cards'>
    
    <img src={url} alt="" style={{height: '200px', width:'100%'}}/>
    <div className='cards-desc'>
    <h6>{props.title}</h6>
    
    <button onClick={()=> navigate(`/posts/post/${props.id}`)}>Read Now</button>
    </div>
    </div>
  
  </>
    )
}

export default Cards
