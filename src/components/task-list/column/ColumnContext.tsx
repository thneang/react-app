import { ColumnAction } from "@/components/task-list/column/columnReducer";
import { ColumnList } from "@/types/global";
import { createContext, Dispatch, useContext } from "react";

export const ColumnContext = createContext<ColumnList | undefined>(undefined);
export const ColumnDispatchContext = createContext<
  Dispatch<ColumnAction> | undefined
>(undefined);

export function useColumnContext() {
  const context = useContext(ColumnContext);
  if (context === undefined) {
    throw new Error("You must use ColumnContext within its provider");
  }
  return context;
}

export function useColumnDispatchContext() {
  const context = useContext(ColumnDispatchContext);
  if (context === undefined) {
    throw new Error("You must use ColumnDispatchContext within its provider");
  }
  return context;
}
