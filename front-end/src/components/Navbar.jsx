/* Simple Navbar that will sit at the top of the page with the title/logo sitting to left and 'Login' Or 'Sign Up' button sitting to the right
 */
import "./NavBar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-div">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
        <Button name='Logout' onClick={ } className={ }/> 
      </nav>
    </div>
  );
}
export default Navbar;