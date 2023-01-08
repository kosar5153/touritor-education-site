// Register

import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api";

// User Register
export const userRegister = (user) => {
  const newsUrl = `${BaseAuthUrl}/auth/register`;

  return axios.post(newsUrl, user);
};

// User Login
export const userLogin = (user) => {
  const newsUrl = `${BaseAuthUrl}/auth/login`;

  return axios.post(newsUrl, user);
};

// User FordetPass
export const userFordetPass = (email) => {
  const newsUrl = `${BaseAuthUrl}/forgetpassword`;

  return axios.post(newsUrl, email);
};
