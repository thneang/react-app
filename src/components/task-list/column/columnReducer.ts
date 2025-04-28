import { ColumnType } from "@/types/global";

export enum ColumnActionType {
  ADD,
  REMOVE,
  UPDATE,
  INITIALIZE,
}

export type ColumnAction =
  | { type: ColumnActionType.ADD; column: ColumnType }
  | { type: ColumnActionType.REMOVE; id: string }
  | { type: ColumnActionType.UPDATE; column: ColumnType }
  | { type: ColumnActionType.INITIALIZE; columns: ColumnType[] };

export function columnReducer(columns: ColumnType[], action: ColumnAction) {
  switch (action.type) {
    case ColumnActionType.ADD:
      return [...columns, action.column];
    case ColumnActionType.REMOVE:
      return columns.filter((column: ColumnType) => column.id !== action.id);
    case ColumnActionType.UPDATE:
      return columns.map((columns) =>
        columns.id === action.column.id ? action.column : columns
      );
    case ColumnActionType.INITIALIZE:
      return [...action.columns];
    default:
      throw Error("Action not implemented for columnReducer : " + action);
  }
}
