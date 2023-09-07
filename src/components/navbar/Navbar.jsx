import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Untitled.png'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About EduBahamas</a></p>
  <p><a href="#possibility">Subjects</a></p>
  <p><a href="#features">Quizzes</a></p>
  <p><a href="#blog">Past Papers</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="edubahamas__navbar">
      <div className="edubahamas__navbar-links">

        {/* <div className="edubahamas__navbar-links-logo">
          <img src={logo} />
        </div> */}
        <div className="edubahamas__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="edubahamas__navbar-sign">
        <Link to="/signIn">
          <button type="button" className="button_style">Sign In</button>
        </Link>
        <Link to="/register">
          <button type="button" className="button_style2">Register</button>
        </Link>
      </div>
      <div className="edubahamas__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        } 
        {toggleMenu && (
          <div className="edubahamas__navbar-menu-container scale-up-center">
            <div className="edubahamas__navbar-menu-container-links">
              <Menu/>
              <div className="edubahamas__navbar-menu-container-links-sign">
                <p>Sign In</p>
                <button type="button">Register Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;