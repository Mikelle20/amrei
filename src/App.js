import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import React from "react"
import Home from './Pages/Home';

function App() {
  const [accessColors, setAccessColors] = React.useState(false)
  const [navToggled, setNavToggled] = React.useState(false)

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
      <nav>
        <Navbar 
        changeColors={changeColors} 
        accessColors={accessColors}
        toggleNav={toggleNav}
        />
      </nav>
      

      <Routes>
          <Route path='/products' element={<Products accessColors={accessColors} navToggled={navToggled}/>} />
          <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
