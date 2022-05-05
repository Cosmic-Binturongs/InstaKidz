import Navbar from "../components/Navbar.js"


export default {
  title: "Navbar",
  component: Navbar,
}

const Template = (args) => <Navbar {...args} />

const helloWorld = () => { console.log("hello world")}

//first story -- Login
export const LoginNavBar = Template.bind({})
LoginNavBar.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "LoginNavBar",
  //className: ""
}

//first story -- Login
export const LoginSuccess = Template.bind({})
LoginSuccess.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "LoginSuccess",
  //className: ""
}