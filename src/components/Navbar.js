import React, {useState, useEffect} from 'react';
import {  Link ,NavLink  } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import "./Navbar.css";

import { IconContext } from 'react-icons/lib';

const Navbar = () => {

    const [click, setClick] = useState(false)
    
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img style={{height:"30px"}} src={process.env.PUBLIC_URL + './images/logo.png'} alt="logo"></img> 
                    <div className="nombreNavbar">M.G. CONSTRUCCIONES</div>
                    </Link>

                    {/* this is for mobile */}
                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>

                    <ul className={click ? 'nav-menu activeMobile' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active" className="nav-links" onClick={closeMobileMenu}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Galeria" exact activeClassName="active" className="nav-links" onClick={closeMobileMenu}>Galeria</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/ComoTrabajamos" exact activeClassName="active" className="nav-links" onClick={closeMobileMenu}>¿Cómo trabajamos?</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/QuienesSomos" exact activeClassName="active" className="nav-links" onClick={closeMobileMenu}>¿Quiénes somos?</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contactanos" exact activeClassName="active"className="nav-links" onClick={closeMobileMenu}>Contactanos</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar