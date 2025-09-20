import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",  // Update this to your backend ya  frontend URL
  withCredentials: true,
});
