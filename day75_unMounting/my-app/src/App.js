import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import Timer from './component/Timer';
function App() {
  const [showTimer, setShowTimer]=useState(true);
  return (
    <div className="App">


    {showTimer && <Timer/>}

   <button onClick={()=>setShowTimer(!showTimer)} >TOGGLE TIMER</button>



    </div>
    
  );
}

export default App;
