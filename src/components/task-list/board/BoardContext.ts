import { TaskType } from "@/types/global";
import React from "react";

export type BoardContextType = {
  updateTask: (taskId: string, updates: Partial<TaskType>) => void;
  // addTask: (task: TaskType) => void;
  // deleteTask: (task: TaskType) => void;
  // addColumn: (column: ColumnType) => void;
  // updateColumn: (column: ColumnType) => void;
  // deleteColumn: (column: ColumnType) => void;
};

export const BoardContext = React.createContext<BoardContextType | undefined>(
  undefined
);

function useBoardContext() {
  const currentContext = React.useContext(BoardContext);
  if (currentContext == undefined) {
    throw new Error("boardContext within it's context provider");
  }
  return currentContext;
}
export { useBoardContext };
