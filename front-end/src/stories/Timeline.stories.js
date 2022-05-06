import Timeline from "../components/Timeline.jsx"

export default {
  title: "Timeline",
  component: Timeline,
}

const Template = (args) => <Timeline {...args} />

const yourPostArr = [
  {
    userImg: "",
    postImg: "",
    caption: 'soccer shmoccer I like orange slices'
  },
  {
    userImg: "",
    postImg: "",
    caption: 'who wants to buy moms ipad?'
  }
]

const allPostArr = [
  {
    userImg: "",
    postImg: "https://i.redd.it/oepz8q6lopy41.png",
    caption: 'me at my dads place!'
  },
  {
    userImg: "",
    postImg: "https://i.redd.it/aux2xebclus61.jpg",
    caption: 'roblox is the best!'
  },
  {
    userImg: "",
    postImg: "https://preview.redd.it/wm95xwfs3b201.jpg?auto=webp&s=4133378fdfe00d000631a7410023bf3d978339cc",
    caption: 'soccer shmoccer I like orange slices'
  },
  {
    userImg: "",
    postImg: "https://www.unlv.edu/sites/default/files/styles/1920_width/public/releases/main-images/ipad.jpg?itok=8vfunVci",
    caption: 'who wants to buy moms ipad?'
  },
]

//first story -- Login
export const YourPosts = Template.bind({})
YourPosts.args = {
  //add props as arguments to storu
  posts: yourPostArr
}

//first story -- Login
export const AllPosts = Template.bind({})
AllPosts.args = {
  //add props as arguments to story
  posts: allPostArr 
}