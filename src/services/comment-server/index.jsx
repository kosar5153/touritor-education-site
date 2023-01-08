import axios from "axios";

const CommentBaseUrl = "http://localhost:5000/api/comments";

// Get All Comments
export const getAllComments = () => {
  return axios.get(`${CommentBaseUrl}/`);
};

// send  Comment
export const sendComments = (comment) => {
  return axios.post(`${CommentBaseUrl}/send`, comment);
};

// send  Comment
export const answerComment = (comment) => {
  return axios.post(`${CommentBaseUrl}/answer`, comment);
};
