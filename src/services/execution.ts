import backendRequest from "./";
import { Execution } from "../interfaces/executions";

export const createExecution = (data: Execution): Promise<Execution> => {
  return backendRequest({
    endpoint: "/executions",
    method: "post",
    data,
  });
};
