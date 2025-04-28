import {
  ColumnAction,
} from "@/components/task-list/column/columnReducer";
import { useColumnData } from "@/components/task-list/column/useColumnData";
import { ColumnType } from "@/types/global";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
} from "react";

export const ColumnContext = createContext<ColumnType[] | undefined>(undefined);
export const ColumnDispatchContext = createContext<
  Dispatch<ColumnAction> | undefined
>(undefined);

export function ColumnContextProvicer({ children }: PropsWithChildren) {
  const [columns, dispatch] = useColumnData();
  return (
    <ColumnContext.Provider value={columns}>
      <ColumnDispatchContext.Provider value={dispatch}>
        {children}
      </ColumnDispatchContext.Provider>
    </ColumnContext.Provider>
  );
}

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
