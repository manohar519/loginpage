import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import MiniDrawer from './Page/HomePage';


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/"  element={<LoginPage/>} />
          <Route path="/hom"  element={<MiniDrawer/>} />
      </Routes>
 
    </div>
  );
}

export default App;
