import { TaskType } from "@/types/global";
import { createContext, useContext } from "react";

export type BoardContextType = {
  updateTask: (taskId: string, updates: Partial<TaskType>) => void;
};

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);

function useBoardContext() {
  const currentContext = useContext(BoardContext);
  if (currentContext == undefined) {
    throw new Error("boardContext within it's context provider");
  }
  return currentContext;
}
export { useBoardContext };
