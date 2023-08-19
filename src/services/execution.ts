import backendRequest from "./";
import { Execution, ExecutionTask } from "../interfaces/executions";

export const createExecution = (data: Execution): Promise<Execution> => {
  return backendRequest({
    endpoint: "/executions",
    method: "post",
    data,
  });
};

export const readExecutionsByStatus = (status: string, id: string): Promise<ExecutionTask[]> => {
  return backendRequest({
    endpoint: `/executions/${status}/${id}`,
    method: "get",
  });
};
