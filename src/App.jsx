import './App.css'
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
        <div className=' relative top-20'>
          <Routes >
             <Route path="/" element={<Home/>}/>
             <Route path="/services" element={<Services/>}/>
             <Route path="/gallery" element={<Gallery/>}/>
             <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
