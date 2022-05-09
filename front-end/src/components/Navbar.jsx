/* Simple Navbar that will sit at the top of the page with the title/logo sitting to left and 'Login' Or 'Sign Up' button sitting to the right
 */
import "./NavBar.css";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const logOut = () => {
    console.log("we have logged out");
  };

  return (
    <div className="navbar-div">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
        <Button name="Logout" onClick={logOut} />
      </nav>
    </div>
  );
}
export default Navbar;

/* <nav>
<Link to="/" class="h1 navbar-button">Home</Link>
<Link to="/profile" class="h1 navbar-button">Profile</Link>
<Link to="/upload" class="h1 button navbar-button">Upload</Link>
<p name='Logout' onClick={ logOut } class="h1 navbar-button">Button</p>
</nav> */
