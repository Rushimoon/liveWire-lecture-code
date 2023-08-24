function Avtar({src,name,dob,width, height,rounded}){
//     console.log(props)
//    const {src,name,dob}=props;
//    console.log(src,name,dob)

const Style={
    width:width,
    height:height,
    borderRadius:rounded
}
return(

 <div>
      <img style={Style} src={src} alt="hero img" />
      <h2>{name}</h2>
      <h3>{dob}</h3>


 </div>

)


}
 export default Avtar;