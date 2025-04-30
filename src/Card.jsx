import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='cardcontainer'>
       <div className='cardNum'>
        {props.num || "0"}
       </div>
       <div style={{border:"1px solid #0649E7",width:"213px"}}></div>
       <div className='carddesc'>
        {props.desc || "klhvlksdhfljdkfh"}
       </div>
    </div>
  )
}

export default Card
