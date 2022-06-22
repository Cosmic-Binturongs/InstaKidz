import { useState, useEffect, useRef } from 'react';
import getCookie from '../get-cookie.js';
import './Upload.css';

function Upload() {
  // let [uploadInfo, setUpload] =  useState({})
  const image = useRef(null);

    //fetch cookie function
    let csrfToken = null
    const fetchCookie = () => {
        fetch('http://localhost:8000/csrf-cookie/', { credentials: 'include' })
        .then( response => { 
            csrfToken = getCookie('csrftoken') 
            console.log(csrfToken)
        })

    // Sending form data
    let data = new FormData()
        data.append("username", "admin")
        data.append("password", "admin")

    let options = {
            method: 'POST',
            headers: { "X-CSRFToken": csrfToken },
            credentials: 'include',
            body: data
    }

    fetch('http://localhost:8000/login/', options)
    .then( response => { 
        csrfToken = getCookie('csrftoken') 
        console.log(csrfToken)
    })
  }
    
  useEffect(() => {
    fetchCookie();
  })


  let handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('caption', e.target.caption.value)
        formData.append('image', image.current)
      //will this require us carry the state of the user?
        formData.append('user', 2)
        formData.append('csrfmiddlewaretoken', csrfToken)

        let options = {
            method: 'POST',
            headers: {'X-CSRFToken': csrfToken },
            credentials: 'include',
            body: formData
        }

        fetch('http://localhost:8000/photo/', options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }


    return (
      <div className="uploadDiv">
      <form onSubmit={handleSubmit} ref={image}>
        <input id="image-input" type="file" name="photo" className="style-this"/>
        <input id='img-caption' type='text' name='caption' placeholder='Caption'/>
        <input type='submit'/>
      </form>
      <br/>
      <h1>Add Memory</h1>
      <p>Click to upload image</p>
      <p>(5MB Maximum, JPEG and PNG supported)</p>
      <p className="h1">Upload Image</p>
      </div> 
    )
}
export default Upload;