import './Rating.css';

import React, { useState } from 'react'

const Rating = () => {
    const[rating,setRating] = useState(0);
    const[hover,setHover] = useState(0);

    console.log(rating)

    let arr = new Array(5).fill(0);
    console.log(arr);

  return (
   
   <div className='ratz'>

       <h1>Rating</h1>
       <p>Can you review my website design || 👇🏻 ⭐</p>

       {arr.map((currValue,index)=>(

        <span
           
          className={index<rating || index<hover?"color":"uncolor"}
          onClick={()=>setRating(index+1)}
          onMouseEnter={()=>setHover(index+1)}
          onMouseLeave={()=>setHover(0)}
        >&#8902; </span>
        
    

       ))}

       <div className='n1'>{rating}/5</div>

   </div>

  )
}

export default Rating