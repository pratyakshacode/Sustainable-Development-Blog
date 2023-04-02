import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFirebase } from '../context/Firebase'

const PostPage = (props) => {

  const firebase = useFirebase();
  const param = useParams();

  const[url, setUrl] = useState("")
  const [obj, setObj] = useState("");
  useEffect(()=>{
  
    firebase.getPosts(param.postId).then((element)=>{
      console.log(typeof element.data());
      const data = element.data();
      setObj(data);
      firebase.getImageUrl(data.imageUrl).then((url)=> setUrl(url));
    })
    
  },[])
  return (
    <div className='post-container'>
      <h1 className='post-major-heading'>{obj.title}</h1>
    <section className='post-home-section'>

        <div className='post-img-div'><img src={url} alt='this is the image' style={{height: '100%', width:"100%"}}/></div>
        <div className="post-desc-div">{obj.desc}</div>
        
    </section>
    <footer>@Copy-right Reserved - Dream feel</footer>
    </div>
  )
}

export default PostPage
