import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ContainerCard from './components/ContainerCard';
import Carouseal from './components/Carouseal';
import imggg from './images (1).jpg';
import loggoo from './logo.png'
function App() {
  return (
    <div className="App">
      <Navbar img={loggoo}/>
       <Carouseal/>
      <ContainerCard/>
    </div>
  );
}

export default App;
