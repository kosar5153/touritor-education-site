import axios from "axios";

const CourseBaseUrl = "http://localhost:5000/api/course";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

// Get All Course
export const getAllCourse = () => {
  return axios.get(`${CourseBaseUrl}/getall`);
};

// Get All Course
export const getOneCourse = (courseId) => {
  return axios.get(`${CourseBaseUrl}/${courseId}`);
};

// Post Course => Create one Course

export const createCourse = (course) => {
  return axios.post(CourseBaseUrl, course, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Update Course

export const updateCourse = (courseId, course) => {
  return axios.put(`${CourseBaseUrl}/${courseId}`, course, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Delete Course

export const deleteCourse = (courseId) => {
  return axios.delete(`${CourseBaseUrl}/${courseId}`, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": AdminToken,
    },
  });
};

// Add course to student
export const addCourseToStudent = (course, studentId) => {
  return axios.post(
    `${CourseBaseUrl}/addStudentToCourse/${studentId}`,
    course,
    {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": AdminToken,
      },
    }
  );
};

// remove course to student
export const removeCourseToStudent = (course, studentId) => {
  return axios.post(
    `${CourseBaseUrl}/removeStudentFromCourse/${studentId}`,
    course,
    {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": AdminToken,
      },
    }
  );
};

// like course
export const likeCourse = (course) => {
  return axios.post(`${CourseBaseUrl}/like`, course);
};

// dislike course
export const dislikeCourse = (course) => {
  return axios.post(`http://localhost:5000/api/course/dislike`, course);
};

// likeCount course
export const likeCountCourse = (courseId) => {
  return axios.get(`${CourseBaseUrl}/likeCount/${courseId}`);
};
