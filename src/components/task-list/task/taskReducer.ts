import { TaskList, TaskType } from "@/types/global";

export enum TaskActionType {
  ADD,
  REMOVE,
  UPDATE,
  MOVE_TO_COLUMN,
}

export type TaskAction =
  | { type: TaskActionType.ADD; task: TaskType }
  | { type: TaskActionType.REMOVE; task: TaskType }
  | { type: TaskActionType.MOVE_TO_COLUMN; taskId: string; newColumnId: string }
  | { type: TaskActionType.UPDATE; task: TaskType };

export function taskReducer(tasks: TaskList, action: TaskAction) {
  switch (action.type) {
    case TaskActionType.ADD:
      return [...tasks, action.task];
    case TaskActionType.UPDATE:
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case TaskActionType.MOVE_TO_COLUMN:
      return tasks.map((task) =>
        task.id === action.taskId
          ? { ...task, columnId: action.newColumnId }
          : task
      );
    case TaskActionType.REMOVE:
      return tasks.filter((task) => task.id !== action.task.id);
    default:
      throw Error("Action not implemented for taskReducer : " + action);
  }
}
