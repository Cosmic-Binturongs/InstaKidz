import React from 'react'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'
import Timeline from './Timeline.jsx'
import { Routes, Route } from 'react-router-dom';
import Button from './Button.jsx';



function Interface() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Timeline state={'allPosts'} />} />
        <Route path="/profile" element={<Timeline state={'profilePosts'} />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Button name={''} onClick={ } className={ } />
      
      
    </div>

  )
  
}

export default Interface