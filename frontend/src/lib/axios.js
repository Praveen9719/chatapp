import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chatapp-backend-x0w0.onrender.com",  // Update this to your backend ya  frontend URL
  withCredentials: true,
});
