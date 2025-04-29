"use client";
import Board from "@/components/task-list/board/Board";
import { StorageKey, useStorageInitialisation } from "@/lib/localstorage";
import { ColumnList, TaskList } from "@/types/global";
import {  useState } from "react";

export default function BoardPage() {
  // Local state just to preload data for components
  // The Board component will manage the state and interactivity
  // This is just the drawback when the render depends on the local storage data
  const [columns, setColumns] = useState<ColumnList>([]);
  const [tasks, setTasks] = useState<TaskList>([]);
  
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
  useStorageInitialisation(StorageKey.COLUMNS, defaultcolumns, setColumns);
  useStorageInitialisation(StorageKey.TASKS, defaultTaskList, setTasks);

  if (!columns || !tasks) {
    return "Loading data...";
  }

  return (
    <>
      <div>
        Board page
        <br />
        <Board columns={columns} tasks={tasks} />
      </div>
    </>
  );
}
