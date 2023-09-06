import React from 'react'

function Postsitem(props) {
 
 const Box_style={
    border:"1px solid red",
    color:"black",

 }
 
    return (
    <div style={Box_style} >
      <h1>{props.title}</h1>
      <h2>{props.id}</h2>
      <h3>{props.body}</h3>
    </div>
  )
}
export default  Postsitem;