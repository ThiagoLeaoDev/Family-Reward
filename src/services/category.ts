import backendRequest from "./";
import { ReadAllTasks, Category } from "../interfaces/categories";

export const readAllTasks = (): Promise<ReadAllTasks[]> => {
  return backendRequest({
    endpoint: "/categories/tasks",
    method: "get",
  });
};

export const readOneCategory = (id: string): Promise<Category> => {
  return backendRequest({
    endpoint: `/categories/${id}`,
    method: "get",
  });
};
