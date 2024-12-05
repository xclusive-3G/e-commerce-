import NavBar from './Navigation/NavBar';
import Products from './Products/Products'
// import Recommended from './Recommend/Recommended';
import Subnav from './Navigation/Subnav';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';

const App: React.FC = () => {
  
  return (
    <div className="w-auto ">
      
      <NavBar/>
      <Subnav/>
      <Products/>     
    </div>
  );
};

export default App;
