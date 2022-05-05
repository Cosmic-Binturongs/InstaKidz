/* We need buttons to reflect props ...
    - Login (landing page)
    - Sign up (landing page)
    - New Post (timeline page)
    - Log Out (timeline page)
    - View User Post (timeline page)
*/

//import "./Button.css";

function Button(props) {
  return (
    <div className={props.className}>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

export default Button;
