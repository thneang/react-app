import Column from "@/components/task-list/Column";
import { ColumnType, TaskType } from "@/types/global";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { TaskContext } from "./TaskContext";
import { useState } from "react";

interface BoardProps {
  columnList: ColumnType[];
  taskList: TaskType[];
}

export default function Board(props: BoardProps) {
  const [taskList, setTaskList] = useState(props.taskList);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }
    const taskId = active.id as string;
    const newColumnId = over.id as TaskType["columnId"];
    setTaskList(() =>
      taskList.map((task: TaskType) =>
        taskId === task.id
          ? {
              ...task,
              columnId: newColumnId,
            }
          : task
      )
    );
  }

  function handleUpdateTask(id: string, updates: Partial<TaskType>) {
    setTaskList(function (prevTasks) {
      return prevTasks.map(function (task) {
        if (task.id === id) {
          console.log(updates);
          return { ...task, ...updates };
        }
        return task;
      });
    });
  }

  function getTaskListOfColumn(column: ColumnType, taskList: TaskType[]) {
    return taskList.filter((task: TaskType) => task.columnId === column.id);
  }
  const stepList = props.columnList.map((column: ColumnType) => (
    <Column
      key={column.id}
      column={column}
      taskList={getTaskListOfColumn(column, taskList)}
    />
  ));

  return (
    <>
      <div className="flex gap-4">
        <DndContext onDragEnd={handleDragEnd}>
          <TaskContext.Provider value={{ handleUpdateTask }}>
            {stepList}
          </TaskContext.Provider>
        </DndContext>
      </div>
    </>
  );
}
