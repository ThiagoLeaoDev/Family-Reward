import React, { FC } from "react";
import { ToastOptions, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const defaultToastOptions: ToastOptions = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const Toast: FC = () => {
  return <ToastContainer {...defaultToastOptions} />;
};
