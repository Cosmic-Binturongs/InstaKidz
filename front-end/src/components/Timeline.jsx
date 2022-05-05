/* The Timeline component will be rendering all the Post component back to back, and the navbar will be sitting at the top of the viewport, this component should be worked on after Post component is created
 */

import React from 'react'
import Navbar from './Navbar.js'
import Post from './Post.jsx'

function Timeline(props) {
  //functions go hyah


  return (
    <div className='timeline'>
      <Navbar />
      <div className='Post'>
        {props.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Timeline

