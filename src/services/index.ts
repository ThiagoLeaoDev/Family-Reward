import axios from "axios";
import Cookies from "universal-cookie";

interface FamilyRewardRequest {
  endpoint: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
  headers?: any;
}

const cookies = new Cookies();
const token = cookies.get("auth.token");

export const api = axios.create({
  baseURL: "http://192.168.0.104:3333",
});

const backendRequest = async ({ endpoint, method, data, headers }: FamilyRewardRequest) => {
  const response = await api({
    method,
    url: `${endpoint}`,
    data,
    headers: headers || {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
  });
  return response?.data;
};

api.interceptors.request.use((config) => {
  return config;
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default backendRequest;
