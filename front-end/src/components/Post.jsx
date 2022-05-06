import React from 'react';

export default function Post(prop) {
  
  console.log(prop)

  return (
    <div className='postContainer'>
      <div className='userRow'>
        <img src={prop.post.userImg} className='userImg' alt='userImage'></img>
        <h3 className='username'>Username</h3>
      </div>
      <img src={prop.post.postImg} height={500} width={600} alt='postImage'className='postImg'></img>
      <div className='captionContainer'>
        {/* <h4 className='captionUserName'>Username</h4> */}
        <p className='caption'>{prop.post.caption}</p>
      </div>
    </div>
  );
}
