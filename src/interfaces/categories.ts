import { Task } from "./tasks";

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface ReadAllTasks {
  category_id: string;
  name: string;
  tasks: Task[];
}
