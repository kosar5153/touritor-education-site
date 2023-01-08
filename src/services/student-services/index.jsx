// students

import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api/student";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

// Get All students
export const getAllStudens = () => {
  const newsUrl = `${BaseAuthUrl}/getall`;

  return axios.get(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Get student by id
export const getStudentById = (id) => {
  const newsUrl = `${BaseAuthUrl}/${id}`;

  return axios.get(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Get student by id
export const updateStudent = (stId, user) => {
  const newsUrl = `${BaseAuthUrl}/${stId}`;

  return axios.put(newsUrl, user, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": AdminToken,
    },
  });
};

// Delete student by id
export const deleteStudent = (id) => {
  const newsUrl = `${BaseAuthUrl}/${id}`;

  return axios.delete(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
