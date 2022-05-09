import React from "react";

export default function Post(prop) {
  console.log(prop);

  return (
    <div className="postContainer">
      <div className="userRow">
        <img src={prop.post.userImg} className="userImg" alt="userImage"></img>
        <h3 className="username">Username</h3>
      </div>
      <img
        src={prop.post.postImg}
        height={500}
        width={600}
        alt="postImage"
        className="postImg"
      ></img>
      <div className="captionContainer">
        {/* <h4 className='captionUserName'>Username</h4> */}
        <p className="caption">{prop.post.caption}</p>
      </div>
    </div>
  );
}

/* <div class="post-container">
<div class="tab-container">
  <div class="username-tab">
    <img src={prop.post.userImg} class='profile-img' alt='userImage'></img>
    <p class="username-tab-text h2">Username</p>
  </div>
  <div class="delete-tab">
    <p class="delete-button">X</p>
  </div>
</div>
<div class="post-body">
  <img src={prop.post.postImg} height={500} width={600} alt='postImage' class='post-img'></img>
  <p class="post-bio">{prop.post.caption}</p>
  <p class="timestamp">Posted on {timestamp}</p>
</div>
</div> */
