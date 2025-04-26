import { getItemFromStorage, saveToStorage } from "@/lib/localstorage";
import { TaskType } from "@/types/global";
import { useEffect, useState } from "react";

export function useTaskData() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const taskKey = "taskList";

  useEffect(() => {
    const defaultTaskList: TaskType[] = [
      { id: "1", title: "title 1", description: "task 1", columnId: "1" },
      { id: "2", title: "title 2", description: "task 2", columnId: "2" },
      { id: "3", title: "title 3", description: "task 3", columnId: "1" },
      { id: "4", title: "title 4", description: "task 4", columnId: "2" },
    ];
    function initTaskList() {
      const taskData = getItemFromStorage(taskKey);
      if (taskData) {
        setTaskList(taskData);
      } else {
        saveToStorage(taskKey, defaultTaskList);
        setTaskList(defaultTaskList);
      }
    }

    initTaskList();
  }, []);

  useEffect(() => {
    saveToStorage(taskKey, taskList);
  }, [taskList]);

  function updateTask(id: string, updates: Partial<TaskType>) {
    setTaskList((prev: TaskType[]) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }

  function moveTask(taskId: string, newColumnId: string) {
    setTaskList((prev: TaskType[]) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, columnId: newColumnId } : task
      )
    );
  }

  function getTasksByColumn(columnId: string) {
    return taskList.filter((task: TaskType) => task.columnId === columnId);
  }

  function addTask(task: TaskType) {
    setTaskList([...taskList, task]);
  }

  function deleteTask(task: TaskType) {
    setTaskList(
      taskList.filter((currentTask: TaskType) => currentTask.id !== task.id)
    );
  }

  return {
    taskList,
    setTaskList,
    updateTask,
    moveTask,
    getTasksByColumn,
    addTask,
    deleteTask,
  };
}
