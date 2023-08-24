function Button(props){
    console.log(props)
    // const myStyles={
        
    //     fontSize:"30px",
    //     backgroundColor:"blue",
    //     height:"500px",
    //     border:"5px solid grey",
      
    // }
    const MyStyle={
    colour:props.txtc,
    fontSize:props.textsize,
    backgroundColor:props.bgc,
    height:"200px",
    border:"5px solid grey"


    }
    return (
      <button style={MyStyle} >{props.text}</button>
    )
  }

export default Button ;