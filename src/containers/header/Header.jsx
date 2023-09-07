import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import logo from '../../assets/logo1.png'

const Header = () => {
  const headerStyle = {
    fontSize: '72px',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    display: 'inline-block',
    color: 'transparent',
    background: 'linear-gradient(90deg, rgba(29,221,199,1) 0%, rgba(24,179,185,1) 35%, rgba(24, 150,185,1) 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  return (
    <div className="edubahamas__header section__padding" id="home">
      <div className="edubahamas__header-content">
        <h1 style={headerStyle}>
          Embrace Learning with EduBahamas
        </h1>
        <p>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.</p>
        <div className="edubahamas__header-content-input">
          <input type="email" placeholder="Type Your Email..." />
          <button type="button">Get Started</button>
        </div>
        {/* <div className="edubahamas__header-content-people">
          <img src={people} />
          <p>Lorem Impsum. Lorem Ipsum.</p>
        </div> */}
      </div>
      <div className="edubahamas__header-image">
          <img src={ai} />
        </div>
    </div>
  );
};

export default Header