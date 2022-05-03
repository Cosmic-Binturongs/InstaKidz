import React from 'react'

export default function Post(prop) {
  
  return (
    <div className='postContainer'>
      <div className='userRow'>
        <img src='userImg.png' className='userImg'></img>
        <h3 className='username'>Username</h3>
      </div>
      <img src='postImg.png' className='postImg'></img>
      <div className='captionContainer'>
        <h4 className='captionUserName'>Username</h4>
        <p className='caption'>OMG I had suchhhh a good time in Tahiti and like WOW, the drinks are bomb. Everything is super cheap and I totes feel more cultured. 😵🍹👌👹🤯</p>
      </div>
    </div>
  )
}
