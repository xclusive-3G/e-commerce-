//import React, { useState, useEffect } from 'react';
//import Card from './Components/Card';
import NavBar from './Navigation/NavBar';
import Products from './Products/Products'
// import Recommended from './Recommend/Recommended';
import Subnav from './Navigation/Subnav';

const App: React.FC = () => {

  return (
    <div className="w-full h-screen">
      <NavBar/>
      <Subnav/>
      <Products/>      
     
      
      {/* <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        aria-label={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button> */}
      
    </div>
  );
};

export default App;
