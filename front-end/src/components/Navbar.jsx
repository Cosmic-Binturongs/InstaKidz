/* Simple Navbar that will sit at the top of the page with the title/logo sitting to left and 'Login' Or 'Sign Up' button sitting to the right
 */
import "./NavBar.css";
import Button from "./Button.jsx";

function Navbar() {
  const func = () => {
    console.log("hello world");
  };

  return (
    <div className="navbar-div">
      <h2>Slothstagram</h2>
      <Button className="LogOut-Button" name="Log Out" onClick={func} />
      <Button className="Profile-Button" name="Profile" OnClick={func} />
      <Button className="Upload-Button" name="Upload" onClick={func} />
      <Button className="Home-Button" name="Home" onClick={func} />
    </div>
  );
}

export default Navbar;
