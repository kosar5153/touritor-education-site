import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api";

export const getAllAdminCourses = () => {
  return axios.post(baseUrl);
};
