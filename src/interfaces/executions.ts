import { Task } from "./tasks";

export interface Execution {
  before_image: string;
  after_image: string;
  status: string;
  executed_by: string;
  task_executed: string;
}

export interface ExecutionTask extends Execution {
  task: Task;
}
