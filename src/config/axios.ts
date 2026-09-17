import axios from "axios";
import { ENV } from "./env";

export const axiosInstance = axios.create({
  baseURL: ENV.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
