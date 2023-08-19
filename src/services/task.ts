import backendRequest from "./";
import { Task } from "../interfaces/tasks";

export const readOneTask = (id: string): Promise<Task> => {
  console.log(id);
  return backendRequest({
    endpoint: `/tasks/${id}`,
    method: "get",
  });
};
