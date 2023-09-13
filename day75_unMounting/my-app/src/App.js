import logo from './logo.svg';
import './App.css';
import{useState} from 'react';
import Timer from './component/Timer';
import UseReff from './component/UseReff';
function App() {
  const [showTimer, setShowTimer]=useState(true);
  return (
    <div className="App">


   <UseReff/>
    </div>
    
  );
}

export default App;
