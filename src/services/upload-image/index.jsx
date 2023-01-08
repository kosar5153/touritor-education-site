import axios from "axios";

const BaseAuthUrl = "http://localhost:5000/api/upload";

export const uploadImage = (img) => {
  const newsUrl = `${BaseAuthUrl}/image`;

  return axios.post(newsUrl, img, {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  });
};
