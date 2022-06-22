import api from "./ApiConfig.jsx";
import Cookies from "js-cookie";
import axios from "axios";
//authentication
export const CheckAuthenticated = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};
//not sure if account correlates to user_profile or projects
//set to projects for now
export const Login = async credentials => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };
  try {
    const response = await api.post("/login", credentials, config);
    if (response.data.success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
export const Logout = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };
  const body = JSON.stringify({
    withCredentials: true,
  });
  try {
    const response = await axios.post(
      "http://localhost:8000/logout",
      body,
      config
    );
    if (response.data.success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
export const SignUp = async credentials => {
  const config = {
    headers: {
      method: "POST",
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
      // credentials: "include",
      // "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };
  console.log(config);
  try {
    const response = await api.post("/sign-up/", credentials, config);
    return response;
  } catch (error) {
    console.error(error);
  }
};