import axios from "axios";

const NewsBaseUrl = "http://localhost:5000/api/news";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

// Get All News
export const getAllNews = () => {
  const newsUrl = `${NewsBaseUrl}`;
  return axios.get(newsUrl);
};

// Get One News By Id
export const getNewsById = (newsId) => {
  const newsUrl = `${NewsBaseUrl}/${newsId}`;
  return axios.get(newsUrl);
};

// Get One News By categuty
export const getNewsByCateguty = (categuty) => {
  const newsUrl = `${NewsBaseUrl}/category/${categuty}`;
  return axios.get(newsUrl);
};

// Add One News
export const createNews = (news) => {
  const newsUrl = `${NewsBaseUrl}`;
  return axios.post(newsUrl, news, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Update One News By Id
export const updateNews = (newsId, news) => {
  const newsUrl = `${NewsBaseUrl}/${newsId}`;
  return axios.put(newsUrl, news, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};

// Delete One News By Id
export const deleteNews = (newsId) => {
  const newsUrl = `${NewsBaseUrl}/${newsId}`;
  return axios.delete(newsUrl, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
