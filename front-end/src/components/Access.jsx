import "./Access.css";
import { useState } from "react";

function Access() {
  /* Three States made in total
    State 1: Identify whether user is signed in or not
    State 2: Holds the login info as an object
    State 3: Holds the sign up info as an object
    */

  let [access, setAccess] = useState(true);
  let [loginInfo, setLogin] = useState({});
  let [signUpInfo, setSignUp] = useState({});

  /* This function simply switches between logged in state or not */
  const handleClick = (click) => {
    setAccess((state) => !state);
  };

  /* This currently has no function, but it is used to pick user avatar */
  const chooseAvi = (avi) => {
    switch (avi.target.id) {
      case "av-1":
        break;
      case "av-2":
        break;
      case "av-3":
        break;
      case "av-4":
        break;
      case "av-5":
        break;
      case "av-6":
        break;
      default:
    }
  };

  /* LoginSubmitBtn function will set the loginInfo state to the login Object */
  let loginSubmitBtn = (e) => {
    e.preventDefault();
    let userInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    setLogin({ username: userInput.value, password: passwordInput.value });

    /* This FormData is what will be used to make requests? */
    let loginData = new FormData();
    loginData.append("username", loginInfo.username);
    loginData.append("password", loginInfo.password);
  };

  /* SignUpSubmit function will set the signUpInfo state to the sign up Object */
  let signUpSubmit = (e) => {
    console.log("Submit Pressed");
    let userInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let confirmInput = document.getElementById("passConfirm");
    let parentInput = document.getElementById("parentEmail");
    let pronounsInput = document.getElementById("pronouns");
    let birthdayInput = document.getElementById("birthday");
    let bioInput = document.getElementById("bio");

    setSignUp({
      username: userInput.value,
      password: passwordInput.value,
      passConfirm: confirmInput.value,
      parentEmail: parentInput.value,
      pronouns: pronounsInput.value,
      birthday: birthdayInput.value,
      bio: bioInput.value,
    });

    /* This FormData is what will be used to make requests? */
    let signUpData = new FormData();
    signUpData.append("username", signUpInfo.username);
    signUpData.append("password", signUpInfo.password);
    signUpData.append("confirmPassword", signUpInfo.passConfirm);
    signUpData.append("parentEmail", signUpInfo.parentEmail);
    signUpData.append("pronouns", signUpInfo.pronouns);
    signUpData.append("birthday", signUpInfo.birthday);
    signUpData.append("bio", signUpInfo.bio);
  };

  /* For some reason if you console.log() the info States when you submit, it doesn't update immediately */
  return (
    <div className="access">
      {
        access ? (
          <div className="login-div">
            <form id="loginForm">
              <input
                htmlFor="username"
                id="username"
                type="text"
                placeholder="username"
              />
              <input
                htmlFor="password"
                id="password"
                type="password"
                placeholder="password"
              />
            </form>
            <button onClick={loginSubmitBtn}>Login</button>
            <button onClick={handleClick} id="access-sign-up">
              Sign Up
            </button>
          </div>
        ) : (
          //   <div class="login-content">

          //   <div class="login-form-container">
          //     <input
          //     htmlFor='username'
          //     id='username'
          //     type='text'
          //     placeholder='Username'
          //     class='signup-input'
          //     />
          //     <input
          //     htmlFor='password'
          //     id='password'
          //     type='password'
          //     placeholder='Password'
          //     class='signup-input'
          //     />
          //   </div>

          //   <div class="form-footer">
          //     <h1 class="h1 navbar-button" onClick={loginSubmitBtn}>Login</h1>
          //     <h1 class="h1 navbar-button" onClick={handleClick} id='access-sign-up'>Sign Up</h1>
          //   </div>

          // </div>

          <div className="signup-div">
            <form id="signUpForm">
              <div className="enter-info">
                <input
                  htmlFor="username"
                  id="username"
                  type="text"
                  placeholder="create username"
                />

                <input
                  htmlFor="password"
                  id="password"
                  type="password"
                  placeholder="create password"
                />

                <input
                  htmlFor="confirm password"
                  id="passConfirm"
                  type="password"
                  placeholder="confirm password"
                />

                <input
                  htmlFor="parent email"
                  id="parentEmail"
                  type="text"
                  placeholder="parent email"
                />

                <input
                  htmlFor="pronouns"
                  id="pronouns"
                  type="text"
                  placeholder="pronouns"
                />

                <input
                  htmlFor="birthday"
                  id="birthday"
                  type="date"
                  placeholder="confirm password"
                />
              </div>

              <div className="bio-avatar">
                <div id="av-1" className="avatar" onClick={chooseAvi}></div>
                <div id="av-2" className="avatar" onClick={chooseAvi}></div>
                <div id="av-3" className="avatar" onClick={chooseAvi}></div>
                <div id="av-4" className="avatar" onClick={chooseAvi}></div>
                <div id="av-5" className="avatar" onClick={chooseAvi}></div>
                <div id="av-6" className="avatar" onClick={chooseAvi}></div>
                <textarea
                  id="bio"
                  placeholder="Please tell us about yourself! :)"
                  rows="5"
                  cols="30"
                ></textarea>
              </div>
            </form>

            <button onClick={signUpSubmit}>Sign Up</button>

            <button onClick={handleClick} id="access-return-login">
              {" "}
              Return to Login
            </button>
          </div>
        )

        //   <div class="signup-content">

        //   <div class="form-container">
        //     <div class="form-container-left">
        //       <h2 class="h2">Enter your info</h2>
        //       <input type="text" class="signup-input" id='username' placeholder="Create Username">
        //       <input type="password" class="signup-input" id='password' placeholder="Create Password">
        //       <input type="password" class="signup-input" id='passConfirm' placeholder="Confirm Password">
        //       <input type="text" class="signup-input" id='parentEmail' placeholder="Parent's Email Address">
        //       <input type="text" class="signup-input" id='pronouns' placeholder="Pronouns">
        //       <input type="date" class="signup-input" id='birthday' >
        //       <p class="tiny-text">You must be under 13 to register!</p>
        //     </div>
        //     <div class="form-container-right">
        //       <h2 class="h2">Choose an avatar</h2>
        //       <div class="profile-icon-container">
        //         <img src="../profiles/red.profile.png" id='av-1' class="profile-img" onClick={chooseAvi}>
        //         <img src="../profiles/orange.profile.png" id='av-2' class="profile-img" onClick={chooseAvi}>
        //         <img src="../profiles/yellow.profile.png" id='av-3' class="profile-img" onClick={chooseAvi}>
        //         <img src="../profiles/green.profile.png" id='av-4' class="profile-img" onClick={chooseAvi}>
        //         <img src="../profiles/blue.profile.png" id='av-5' class="profile-img" onClick={chooseAvi}>
        //         <img src="../profiles/purple.profile.png" id='av-6' class="profile-img" onClick={chooseAvi}>
        //       </div>
        //       <textarea class="signup-input" id="bio"
        //         placeholder="Tell us about yourself! Any and all data you'd like to share :)" rows="5" cols="30"></textarea>
        //     </div>
        //   </div>

        //   <div class="form-footer">
        //       <h1 class="h1 navbar-button" id='access-return-login' onClick={handleClick}>Back to Login</h1>
        //       <h1 class="h1 navbar-button" id='access-return-login' onClick={handleClick}>Register</h1>
        //   </div>

        // </div>
      }
    </div>
  );
}

export default Access;
