import Access from "../components/Access.js"


export default {
  title: "Access",
  component: Access,
}

const Template = (args) => <Access {...args} />

const helloWorld = () => { console.log("hello world")}

//first story -- Login
export const LoginAccess = Template.bind({})
LoginAccess.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "LoginAccess",
  //className: ""
}

//first story -- Login
export const SignUpAccess = Template.bind({})
SignUpAccess.args = {
  //add props as arguments to story
  onClick: helloWorld,
  name: "SignUpAccess",
  //className: ""
}