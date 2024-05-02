import './App.css'
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import Booknow from './pages/Booknow';
import RestoreScroll from './component/RestoreScroll';

import {  useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function App() {
 
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    
         <BrowserRouter>
        <RestoreScroll />
      <div className='h-screen overflow-x-hidden'>
        <Navbar />
        <div className='relative top-14 md:top-20 pt-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booknow" element={<Booknow />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
 
  )
}

export default App
