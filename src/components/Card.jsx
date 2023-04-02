import React from 'react'

const Card = (props) => {
  return (
    <>
      
      <div className='card'>
    
    {/* <img src={props.url} alt="" style={{height: '200px', width:'100%'}}/> */}
    <div className='card-desc'>
    <h6>{props.title}</h6>
    
    {/* <button >Read Now</button> */}
    </div>
    </div>
  
    </>
  )
}

export default Card
