import axios from "axios";

interface FamilyRewardRequest {
  endpoint: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
  headers?: any;
}

const backendRequest = async ({ endpoint, method, data, headers }: FamilyRewardRequest) => {
  const response = await axios({
    method,
    url: `http://localhost:3333${endpoint}`,
    data,
    headers: headers || {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  return response?.data;
};

export default backendRequest;
