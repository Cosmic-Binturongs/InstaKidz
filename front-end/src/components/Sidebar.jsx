import React from "react";
import "./Sidebar.css";


export default function Sidebar() {
  const handleChange = "stuff happens here"

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

};