import React from 'react';
import { Navbar, Header, Homepage, Newsletter, Analytics, HomeSubj, SectionThree } from './components';
import './App.css';

const App = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Homepage />
          <Analytics />
          <HomeSubj />
          <SectionThree />
          <Newsletter />
        </div>
      </div>

  );
};

export default App;
