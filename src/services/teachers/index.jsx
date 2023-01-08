// teachers

import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api/employee";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

// Get All Teachers
export const getAllTeachers = () => {
  const newsUrl = `${BaseAuthUrl}/getallteachers`;

  return axios.get(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Get  Teacher by Id
export const getTeacherById = (id) => {
  const newsUrl = `${BaseAuthUrl}/${id}`;

  return axios.get(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
