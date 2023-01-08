// employes

import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api/employee";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

// Get All Employes
export const getAllEmployes = () => {
  const newsUrl = `${BaseAuthUrl}/getall`;

  return axios.get(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Delet Employe
export const deleteEmploy = (EmpId) => {
  const newsUrl = `${BaseAuthUrl}/${EmpId}`;

  return axios.delete(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Add or Signup Employe
export const addEmploy = (newEmploy) => {
  const newsUrl = `http://localhost:5000/api/auth/employee/register`;

  return axios.post(newsUrl, newEmploy, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

//  login Employe
export const loginEmploy = (employ) => {
  const newsUrl = `http://localhost:5000/api/auth/employee/login`;

  return axios.post(newsUrl, employ);
};

//  get Employe - admin by id
export const getEmployById = (id, adminStorageToken) => {
  const newsUrl = `http://localhost:5000/api/employee/${id}`;

  return axios.get(newsUrl, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": adminStorageToken,
    },
  });
};
