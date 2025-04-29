"use client";
import Board from "@/components/task-list/board/Board";
import { getItemFromStorage, saveToStorage } from "@/lib/localstorage";
import { columnKey, ColumnList, taskKey, TaskList } from "@/types/global";
import { useEffect, useState } from "react";

export default function BoardPage() {

  // Local state just to preload data for components
  // The Board component will manage the state and interactivity
  // This is just the drawback when the render depends on the local storage data
  const [columns, setColumns] = useState<ColumnList | undefined>(undefined);
  const [tasks, setTasks] = useState<TaskList | undefined>(undefined);

  // Local storage is available only after the first render, just a lazy way to store data for the portfolio
  useEffect(() => {
    const defaultcolumns: ColumnList = [
      { id: "1", name: "TODO" },
      { id: "2", name: "In progress" },
    ];

    function initcolumns() {
      const columnData = getItemFromStorage(columnKey);
      if (columnData) {
        setColumns(columnData);
      } else {
        saveToStorage(columnKey, defaultcolumns);
        setColumns(defaultcolumns);
      }
    }

    initcolumns();
  }, []);

  useEffect(() => {
    const defaultTaskList: TaskList = [
      { id: "1", title: "title 1", description: "task 1", columnId: "1" },
      { id: "2", title: "title 2", description: "task 2", columnId: "2" },
      { id: "3", title: "title 3", description: "task 3", columnId: "1" },
      { id: "4", title: "title 4", description: "task 4", columnId: "2" },
    ];
    function initTaskList() {
      const taskData = getItemFromStorage(taskKey);
      if (taskData) {
        setTasks(taskData);
      } else {
        saveToStorage(taskKey, defaultTaskList);
        setTasks(defaultTaskList);
      }
    }

    initTaskList();
  }, []);

  if (!columns || !tasks) {
    return "Loading data...";
  }

  return (
    <>
      <div>
        Board page
        <br />
        <Board columns={columns} tasks={tasks}/>
      </div>
    </>
  );
}
