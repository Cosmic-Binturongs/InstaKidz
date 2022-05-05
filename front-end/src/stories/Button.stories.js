import Button from "../components/Button.js"


export default {
  title: "Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

const helloWorld = () => { console.log("hello world") }

const goodbyeWorld = () => {console.log("goodbye cruel world") }

//first story -- login
export const LoginNavBar = Template.bind({})
LoginNavBar.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "LoginNavBar",
  //className: ""
}

export const LoginAccess = Template.bind({})
LoginAccess.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "LoginAccess",
  //className: ""
}

//second story -- logout
export const Logout = Template.bind({})
Logout.args = {
  //add props as arguments to story
  onClick: goodbyeWorld,
  name: "Logout",
  //className: ""
}

export const SignUpAccess = Template.bind({})
SignUpAccess.args = {
  //add props as arguments to story
  onClick: goodbyeWorld,
  name: "SignUpAccess",
  //className: ""


}

export const SignOut = Template.bind({})
SignOut.args = {
  //add props as arguments to story
  onClick: goodbyeWorld,
  name: "SignOut"


}

export const ViewUserProfile = Template.bind({})
ViewUserProfile.args = {
  //add props as arguments to story
  onClick: goodbyeWorld,
  name: "ViewUserProfile"


}

export const NewPost = Template.bind({})
NewPost.args = {
  //add props as arguments to story
  onClick: goodbyeWorld,
  name: "NewPost"


}

export const Logo = Template.bind({})
Logo.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "Logo",
  //className: ""
}