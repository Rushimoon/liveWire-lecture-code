import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ContainerCard from './components/ContainerCard';

function App() {
  return (
    <div className="App">
      <Navbar img="https://images.indianexpress.com/2021/01/myntra.png?w=640"/>
      <ContainerCard/>
    </div>
  );
}

export default App;
