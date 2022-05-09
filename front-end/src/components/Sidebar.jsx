import React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";

export default function Sidebar(props) {
  const [profile, setProfile] = useState({});
  const [loginState, setLoginState] = useState("directory");

  useEffect(() => {
    setProfile(props.profile);
    setLoginState(props.loginState);
  }, [props]);

  const handleChange = "stuff happens here";

  if (loginState === "directory") {
    return (
      <div className="side-bar">
        <div className="scroll">
          <div className="search-and-go">
            <input
              className="search-bar"
              type="text"
              placeholder="Find Friends"
              onChange={handleChange}
              value=""
            />
            <button className="go-button">GO!</button>
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

      /* <div class="sidebar">
<div class="sidebar-user-info">
  <img src={prop.post.userImg} class='profile-img' alt='userImage'></img>
  <div class="h2">Username</div>
  <div class="sidebar-user-info-container">
    <p class="tiny-text"><b>Birthday:</b> <span>12/20/03</span></p>
    <p class="tiny-text"><b>Pronouns:</b> <span>he/him</span></p>
  </div>
</div>

<div class="search-and-go">
  <input class="search-bar" type="text" placeholder="Find Friends" onChange={handleChange} value=""/>
  <button class="go-button">
    GO!</button>
</div>

<div class="profile-box">
  <div class="h2">All the Instagram Kidz:</div>
  <div class="scroll-container">
    <ul>
      <li class="item">person</li>
      <li class="item">person</li>
      <li class="item">person</li>
      <li class="item">person</li>
      <li class="item">person</li>
      <li class="item">person</li>
      <li class="item">person</li>
      <li class="item">person</li>
    </ul>
  </div>
</div>
</div> */
    );
  }

  if (loginState === "bio") {
    return (
      <div className="side-bar">
        <div className="scroll">
          <div className="search-and-go">
            <input
              className="search-bar"
              type="text"
              placeholder="Find Friends"
              onChange={handleChange}
              value=""
            />
            <button className="go-button">GO!</button>
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

      /* <div class="sidebar">
<img src={prop.post.userImg} class="profile-img" alt="userImage"></img>
<h2>Username</h2>
<div class="sidebar-user-info-container">
  <p class="tiny-text">Birthday:</p>
  <p class="tiny-text">My birthday data</p>
  <p class="tiny-text">Pronouns:</p>
  <p class="tiny-text">My pronoun data</p>
</div>
<div class="sidebar-user-info-container">
  <button>edit</button>
  <button>submit</button>

  </button>
  <p class="bio">Bio</p>
  <input type="text" class="signup-input" placeholder="Edit Bio">
</div> */
    );
  }
}
