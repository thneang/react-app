export interface TaskType {
  id: string;
  title: string;
  description: string;
  columnId: string;
}

export interface ColumnType {
  id: string;
  name: string;
}

export type ColumnList = ColumnType[];
export type TaskList = TaskType[];

export enum Tag {
  FRONT = "FRONT",
  BACK = "BACK",
  DEVOPS = "DEVOPS",
}
