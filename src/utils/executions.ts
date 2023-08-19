import { useQuery } from "react-query";

import { readExecutionsByStatus } from "../services/execution";
import { ExecutionTask } from "../interfaces/executions";

import { MoneyFormatter } from "./dataFormatter";

export const CountApprovedExecutions = (userId: string) => {
  const { data: approvedExecutions } = useQuery("approvedExecutions", () => readExecutionsByStatus("approved", userId));
  return approvedExecutions?.length;
};

export const ExecutionsEarninigs = (userId: string) => {
  const { data: approvedExecutions } = useQuery("approvedExecutions", () => readExecutionsByStatus("approved", userId));

  const earnings = approvedExecutions?.reduce((acc: any, execution: ExecutionTask) => {
    return acc + Number(execution.task.value);
  }, 0);

  return MoneyFormatter(earnings);
};

export const CountPendingExecutions = (userId: string) => {
  const { data: pendingExecutions } = useQuery("pendingExecutions", () => readExecutionsByStatus("waiting", userId));
  return pendingExecutions?.length;
};

export const CountPossibleEarnings = (userId: string) => {
  const { data: pendingExecutions } = useQuery("pendingExecutions", () => readExecutionsByStatus("waiting", userId));

  const earnings = pendingExecutions?.reduce((acc: any, execution: ExecutionTask) => {
    return acc + Number(execution.task.value);
  }, 0);

  return MoneyFormatter(earnings);
};
