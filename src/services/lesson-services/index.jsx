// lessons

import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api/lesson";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

// Get All Teachers
export const getAllLessons = () => {
  const newsUrl = `${BaseAuthUrl}`;

  return axios.get(newsUrl);
};

// Post => Create Lesson
export const createLesson = (lesson) => {
  const newsUrl = `${BaseAuthUrl}/add`;

  return axios.post(newsUrl, lesson, {
    headers: {
      "x-auth-token": AdminToken,
      "Content-Type": "application/json",
    },
  });
};

// Put => Update Lesson
export const updateLesson = (leId, lesson) => {
  const newsUrl = `${BaseAuthUrl}/${leId}`;

  return axios.put(newsUrl, lesson, {
    headers: {
      "x-auth-token": AdminToken,
      "Content-Type": "application/json",
    },
  });
};

// delete => delete Lesson
export const deleteLesson = (leId) => {
  const newsUrl = `${BaseAuthUrl}/${leId}`;

  return axios.delete(newsUrl);
};
