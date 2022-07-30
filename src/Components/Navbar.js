import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const sunMoon = props.accessColors ? "🌜":"🌞"
    const colorsAccessed = props.accessColors ? " accessed" : ""
  return (
    <div>
        <nav className={"navbar center navbar-expand-lg navbar-light bg-light" + colorsAccessed}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><p className='navTitle'>{"amrei " + sunMoon}</p></a>
                <button className="navbar-toggler" onClick={props.toggleNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to="/Home"><p>Home</p></Link> 
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link" to="/Products"><p>Products</p></Link>
                        </li>
                        <li>
                            <div 
                                className="toggler" 
                            >
                                <h5 className="toggler--label">🌞</h5>
                                <div 
                                    className="toggler--slider"
                                    onClick={props.changeColors}
                                >
                                    <div className="toggler--slider--circle"></div>
                                </div>
                                <h5 className="toggler--label">🌜</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar