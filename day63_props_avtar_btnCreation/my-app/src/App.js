import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Card1 from './component/Card1';
import Carouseal from './component/Carouseal';

// function Button(){
//   return (
//     <button> i Am button</button>
//   )
// }



function App() {
  return (
     <>
        <Button text="this is btn for livewire" bgc="yellow" txtc="black" textsize="30px" />      
         <Card1/>
        <Button text="this is vaibhav"  bgc="blue" txtc="yellow" textsize="50px"/>
        <Button text="this is hemant"  bgc="green" txtc="blue" textsize="25px"/>

   
     </>
  );
}

export default App;
