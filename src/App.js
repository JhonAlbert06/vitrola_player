import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";                                         
        


function App() {
  return (
    <div className="App row-12 justify-content-md-center">
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
