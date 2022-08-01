import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import React from "react"
import Home from './Pages/Home';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Cart from './Components/Cart';
import Confetti from 'react-confetti'

function App() {
  const [accessColors, setAccessColors] = React.useState(false)
  const [navToggled, setNavToggled] = React.useState(false)
  const { open, purchased } = useSelector(store => store.cart)

  function toggleNav(){
    setNavToggled(prevState => !prevState)
    console.log(`navToggled set to: ${navToggled}`)
  }

  function changeColors(){
    setAccessColors(prevState => !prevState)
    console.log(accessColors)
  }
  


  return (
    <div className='App'>
      {purchased === true && <Confetti width={window.innerWidth} height={window.innerHeight}/> }
      <nav>
        <Navbar 
        changeColors={changeColors} 
        accessColors={accessColors}
        toggleNav={toggleNav}
        />
      </nav>
      <AnimatePresence>
          {open && <Cart/>}  
      </AnimatePresence>
      <div>
        <img src={require('./assets/sailor.gif')} alt='sailor moon' className='sailorPixel'></img>
      </div>

      <Routes>
          <Route path='/products' element={<Products accessColors={accessColors} navToggled={navToggled}/>} />
          <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
