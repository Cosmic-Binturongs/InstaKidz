import React from 'react';

export default function Post(prop) {
  return (
    <div className='postContainer'>
      <div className='userRow'>
        <img src={prop.userImg} className='userImg'></img>
        <h3 className='username'>Username</h3>
      </div>
      <img src={prop.postImg} className='postImg'></img>
      <div className='captionContainer'>
        <h4 className='captionUserName'>Username</h4>
        <p className='caption'>{prop.caption}</p>
      </div>
    </div>
  );
}
