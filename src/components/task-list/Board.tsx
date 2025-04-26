import Column from "@/components/task-list/Column";
import { ColumnType, TaskType } from "@/types/global";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { TaskContext } from "./TaskContext";
import { useEffect, useState } from "react";

function useBoard() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const [columnList, setColumnList] = useState<ColumnType[]>([]);

  
  const columnKey = "columnList";
  const taskKey = "taskList";

  useEffect(() => {
    const defaultTaskList: TaskType[] = [
      { id: "1", title: "title 1", description: "task 1", columnId: "1" },
      { id: "2", title: "title 2", description: "task 2", columnId: "2" },
      { id: "3", title: "title 3", description: "task 3", columnId: "1" },
      { id: "4", title: "title 4", description: "task 4", columnId: "2" },
    ];
    
    const defaultColumnList: ColumnType[] = [
      { id: "1", name: "TODO" },
      { id: "2", name: "In progress" },
    ];
    function initTaskList() {
      const taskListStored = localStorage.getItem(taskKey);
      if (taskListStored) {
        setTaskList(JSON.parse(taskListStored));
      } else {
        localStorage.setItem(taskKey, JSON.stringify(defaultTaskList));
        setTaskList(defaultTaskList);
      }
    }
  
    function initColumnList() {
      const columnListStored = localStorage.getItem(columnKey);
      if (columnListStored) {
        setColumnList(JSON.parse(columnListStored));
      } else {
  
        localStorage.setItem(columnKey, JSON.stringify(defaultColumnList));
        setColumnList(defaultColumnList);
      }
    }

    initTaskList();
    initColumnList();
  }, []);

  useEffect(() => {
    localStorage.setItem(taskKey, JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(columnKey, JSON.stringify(columnList));
  }, [columnList]);

  function updateTask(id: string, updates: Partial<TaskType>) {
    setTaskList((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }

  function moveTask(taskId: string, newColumnId: string) {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, columnId: newColumnId } : task
      )
    );
  }

  function getTasksByColumn(columnId: string) {
    return taskList.filter((task) => task.columnId === columnId);
  }

  function addColumn() {
    setColumnList([]);
  }

  return {
    taskList,
    columnList,
    updateTask,
    moveTask,
    getTasksByColumn,
    addColumn,
  };
}

export default function Board() {
  const { columnList, updateTask, moveTask, getTasksByColumn } = useBoard();

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    moveTask(active.id as string, over.id as string);
  }

  return (
    <div className="flex gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        <TaskContext.Provider value={{ handleUpdateTask: updateTask }}>
          {columnList.map((column) => (
            <Column
              key={column.id}
              column={column}
              taskList={getTasksByColumn(column.id)}
            />
          ))}
        </TaskContext.Provider>
      </DndContext>
    </div>
  );
}
