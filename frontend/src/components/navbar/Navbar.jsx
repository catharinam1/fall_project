import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link as Linker } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import logo from '../../assets/Untitled.png'

const Menu = () => (
  <>
  <Linker className=" hover:before:w-0 hover:cursor-pointer" to="/#">
    <p><a href="">Home</a></p>
  </Linker>

  <p><Link to="about" smooth={true} duration={500}>About EduBahamas</Link></p>
  <Linker className=" hover:before:w-0 hover:cursor-pointer" to="/subjects">
    <p><a href="">Subjects</a></p>
  </Linker>
  <Linker className=" hover:before:w-0 hover:cursor-pointer" to="/quizzes">
    <p><a href="#features">Quizzes</a></p>
  </Linker>
  <Linker className=" hover:before:w-0 hover:cursor-pointer" to="/pastpapers">
    <p><a href="#blog">Past Papers</a></p>
  </Linker>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="edubahamas__navbar">
      <div className="edubahamas__navbar-links">

        <div className="edubahamas__navbar-links-logo">
          <h1 className="logo">EduBahamas</h1>
        </div>
        <div className="edubahamas__navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="edubahamas__navbar-sign">
        <Linker to="/signIn">
          <button type="button" className="bg-transparent hover:cursor-pointer hover:text-[#5F9EA0] hover:bg-transparent w-full w-full">Sign In</button>
        </Linker>
        <Linker to="/register">
          <button className="bg-blue-600 w-full" type="button">Register</button>
        </Linker>
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