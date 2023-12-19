import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
