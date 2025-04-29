import { TaskAction } from "@/components/task-list/task/taskReducer";
import { TaskList } from "@/types/global";
import { createContext, Dispatch, useContext } from "react";

export const TaskContext = createContext<TaskList | undefined>(undefined);
export const TaskDispatchContext = createContext<
  Dispatch<TaskAction> | undefined
>(undefined);

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("You must use TaskContext within its provider");
  }
  return context;
}

export function useTaskDispatchContext() {
  const context = useContext(TaskDispatchContext);
  if (context === undefined) {
    throw new Error("You must use TaskDispatchContext within its provider");
  }
  return context;
}
