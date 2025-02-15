import axios from "axios";
const backendUrl = "http://localhost:5000";

export const axiosInstance = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,
});