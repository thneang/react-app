import { ColumnList, TaskList } from "@/types/global";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function saveToStorage(key: string, object: unknown) {
  if (object == undefined) {
    throw new Error("Unexpected undefined value while saving in local storage");
  }
  localStorage.setItem(key, JSON.stringify(object));
}

export function getItemFromStorage(key: string) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export enum StorageKey {
  COLUMNS = "columns",
  TASKS = "tasks",
}

export function useStorage<StateType>(key: StorageKey, state: StateType) {
  useEffect(() => {
    saveToStorage(key, state);
  }, [key, state]);
}

const defaultcolumns: ColumnList = [
  { id: "1", name: "TODO" },
  { id: "2", name: "In progress" },
];
const defaultTaskList: TaskList = [
  { id: "1", title: "title 1", description: "task 1", columnId: "1" },
  { id: "2", title: "title 2", description: "task 2", columnId: "2" },
  { id: "3", title: "title 3", description: "task 3", columnId: "1" },
  { id: "4", title: "title 4", description: "task 4", columnId: "2" },
];

// Local state just to preload the initial data for components
// The Board component will hold the real state and interactivity
// useEffect usage is the drawback when the render depends on the local storage
export function useStorageInitialisation() {
  const [columns, setColumns] = useState<ColumnList>(defaultcolumns);
  const [tasks, setTasks] = useState<TaskList>(defaultTaskList);
  useEffect(() => {
    function init<StateType>(
      key: StorageKey,
      defaultData: StateType,
      setState: Dispatch<SetStateAction<StateType>>
    ) {
      const dataStored = getItemFromStorage(StorageKey.COLUMNS);
      if (dataStored) {
        setState(dataStored);
      } else {
        saveToStorage(key, defaultData);
        setState(defaultData);
      }
    }
    init(StorageKey.COLUMNS, defaultcolumns, setColumns);
    init(StorageKey.TASKS, defaultTaskList, setTasks);
  }, []);
  return [columns, tasks] as const;
}
