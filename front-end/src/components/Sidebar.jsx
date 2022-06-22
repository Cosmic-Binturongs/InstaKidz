import React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";



export default function Sidebar(props) {

  const [profile, setProfile] = useState({});
  const [loginState, setLoginState] = useState('directory');

  useEffect(() => {
    setProfile(props.profile);
    setLoginState(props.loginState);
  },[props])

  const handleChange = "stuff happens here"


  if (loginState === 'directory') {
    return (
      <div className="side-bar">
        <div className="scroll">
          
          <div className="search-and-go">
            <input className="search-bar" type="text"
              placeholder="Find Friends"
              onChange={handleChange}
              value="" />
            <button className="go-button">
              GO!</button>
          </div>
          
          <h2>All the IG kidz:</h2>
          <ul>
            <li className="item">person</li>
            <li className="item">person</li>
            <li className="item">person</li>
            <li className="item">person</li>
            <li className="item">person</li>
            <li className="item">person</li>
            <li className="item">person</li>
            <li className="item">person</li>
          </ul>
        </div>
      </div>
    );  
  }
  
    if (loginState === 'bio') {
      return (
        <div className="side-bar">
          <div className="scroll">
            
            <div className="search-and-go">
              <input className="search-bar" type="text"
                placeholder="Find Friends"
                onChange={handleChange}
                value="" />
              <button className="go-button">
                GO!</button>
            </div>
            
            <h2>PostInstructions!:</h2>
            <ul>
              <li className="item">first do this</li>
              <li className="item">then this</li>
              <li className="item">step 3</li>
              <li className="item">step 4</li>
              <li className="item">step 5</li>
            </ul>
          </div>
        </div>
      );  
      }
    
  

};