import { toast } from "react-toastify";

export const toastifuySuccess = (message) => {
  return toast.success(`${message}`, {
    position: "top-right",
    closeOnClick: true,
    autoClose: 1000,
  });
};

export const toastifuyErr = (message) => {
  return toast.error(`${message}`, {
    position: "top-right",
    closeOnClick: true,
    autoClose: 3000,
  });
};
