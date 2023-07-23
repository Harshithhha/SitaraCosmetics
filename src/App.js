import './App.css';
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom";
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Hair from './routes/Hair';
import Dental from './routes/Dental';
import Laser from './routes/Laser';
import Skin from './routes/Skin';
import PermanentMakeup from './routes/PermanentMakeup';
function App() {
  
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Skin" element={<Skin/>}/>
        <Route path="/Laser" element={<Laser/>}/>
        <Route path="/Dental" element={<Dental/>}/>
        <Route path="/Hair" element={<Hair/>}/>
        <Route path="/SemipermanentMakeup" element={<PermanentMakeup/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
