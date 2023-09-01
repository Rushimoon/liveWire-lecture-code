import React from 'react'

export default function Card(props) {
 
    const CardStyle={
        width:"250px",
        height:"350px",
        border:"1px solid red",
    }
    const imgstyle={
        width:"100px",
        height:"150px"
    }
 return (
 
 
   <div style={CardStyle}>
        <img style={imgstyle} src={props.img} alt="" />
        <h1>{props.productName}</h1>
        <h2>{props.productPrice}</h2>

    </div>
  )
}
