import React from 'react'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import Timeline from './Timeline.jsx'
import { Routes, Route } from 'react-router-dom';
import Button from './Button.jsx';
import { useState, useEffect } from 'react';


function Interface() {

  const logOut = () => {
    console.log("we have logged out");
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Timeline state={'allPosts'} />} />
        <Route path="/profile" element={<Timeline state={'profilePosts'} />} />
        <Route path="/upload" element={<h1>UPLOAD THING</h1>} />
      </Routes>
      <Button name={'Logout'} onClick={logOut}/>
      
      
    </div>

  )
  
}

export default Interface