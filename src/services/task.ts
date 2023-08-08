import backendRequest from "./";
import { Task } from "../interfaces/tasks";

export const readOneTask = (id: string): Promise<Task> => {
  return backendRequest({
    endpoint: `/tasks/${id}`,
    method: "get",
  });
};
