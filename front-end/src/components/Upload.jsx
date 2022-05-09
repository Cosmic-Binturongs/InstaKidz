import { useState, useEffect } from "react";
import getCookie from "../get-cookie.js";

function Upload({ session }) {
  //let [uploadInfo, setUpload] =  useState({})

  let csrfToken = null;
  const fetchCookie = () => {
    fetch("http://localhost:8000/csrf-cookie/", {
      credentials: "include",
    }).then((response) => {
      csrfToken = getCookie("csrftoken");
      console.log(csrfToken);
    });

    // Sending form data
    let data = new FormData();
    data.append("username", "admin");
    data.append("password", "admin");

    let options = {
      method: "POST",
      headers: { "X-CSRFToken": csrfToken },
      credentials: "include",
      body: data,
    };

    fetch("http://localhost:8000/login/", options).then((response) => {
      csrfToken = getCookie("csrftoken");
      console.log(csrfToken);
    });
  };

  useEffect(() => {
    fetchCookie();
  }, []);

  let image = document.getElementById("img-input");

  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("caption", e.target.caption.value);
    formData.append("image", image);
    formData.append("user", 1);
    formData.append("csrfmiddlewaretoken", csrfToken);

    let options = {
      method: "POST",
      headers: { "X-CSRFToken": csrfToken },
      credentials: "include",
      body: formData,
    };

    fetch("http://localhost:8000/photo/", options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="uploadDiv">
      <h2>Upload Image Page</h2>
      <form onSubmit={handleSubmit}>
        <input id="img-input" type="file" name="photo" />

        <input
          id="img-caaption"
          type="text"
          name="caption"
          placeholder="Caption"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
export default Upload;
