import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Card1 from './component/Card1';
import Carouseal from './component/Carouseal';
import Avtar from './component/Avtar'

// function Button(){
//   return (
//     <button> i Am button</button>
//   )
// }
const arr=[
   {
      src:"https://www.hindustantimes.com/ht-img/img/2023/08/22/550x309/salman_1692692562776_1692692569693.jpg", 
      name:"salman bhai",
      dob:"25/6/1992", 
      rounded:"50%",
      height:"150px",
      width:"200px"
   },
   {
      name:"Sanju baba", 
      src:"https://i.pinimg.com/550x/02/4e/7d/024e7d4897d2e175df36dabce0ae31b2.jpg",
      dob:"29/07/9887",
      rounded:"10%",
      height:"200px",
      width:"250px"
   },
   {
      name:"kira advanui" ,
      src:"https://static.toiimg.com/thumb/msid-89218532,width-400,resizemode-4/89218532.jpg",
      dob:"12/327/9887",
      rounded:"100%",
      height:"250px",
      width:"250px"
   }
]

let finaldata=arr.map((el)=>{
   return(
      <Avtar src={el.src} name={el.name} dob={el.dob}/>
   )
})
console.log(finaldata)
function App() {
  return (
     <>
        {/* <Button text="this is btn for livewire" bgc="yellow" txtc="black" textsize="30px" />      
         <Card1/>
        <Button text="this is vaibhav"  bgc="blue" txtc="yellow" textsize="50px"/>
        <Button text="this is hemant"  bgc="green" txtc="blue" textsize="25px"/> */}
       {/* <Avtar src="https://www.hindustantimes.com/ht-img/img/2023/08/22/550x309/salman_1692692562776_1692692569693.jpg" 
            name="salman bhai"
            dob="25/6/1992" 
            rounded="50%"
            height="150px"
            width="200px"
      /> 
      <Avtar name="Sanju baba" 
      src="https://i.pinimg.com/550x/02/4e/7d/024e7d4897d2e175df36dabce0ae31b2.jpg"
      dob="29/07/9887"
      rounded="10%"
      height="200px"
      width="250px"

      />
     <Avtar 
      name="kira advanui" 
      src="https://static.toiimg.com/thumb/msid-89218532,width-400,resizemode-4/89218532.jpg"
      dob="12/327/9887"
      rounded="100%"
      height="250px"
      width="250px" /> */}
       

       {finaldata}
     
     </>
     
  );
}

export default App;
