import react from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Besoin from './pages/Besoin';
import Projets from './pages/Projets';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/responsive.css';
import './assets/styles/global.css';


function App(){
  return (
    <Router>
      <Header/>
       <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="besoin" element={<Besoin/>}/>
        <Route path="projets" element={<Projets/>}/>
      </Routes>
      <Footer/> 
    </Router>
  )
}
export default App;