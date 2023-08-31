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
  baseURL: "http://localhost:3333",
});

const backendRequest = async ({ endpoint, method, data, headers }: FamilyRewardRequest) => {
  const response = await api({
    method,
    url: `http://localhost:3333${endpoint}`,
    data,
    headers: headers || {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
  });
  return response?.data;
};

api.interceptors.request.use((config) => {
  console.log(config);

  return config;
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default backendRequest;
