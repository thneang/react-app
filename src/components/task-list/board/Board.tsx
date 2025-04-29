import Column from "@/components/task-list/column/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {

  columnKey,
  ColumnList,
  taskKey,
  TaskList,
} from "@/types/global";
import { useEffect, useReducer } from "react";
import { saveToStorage } from "@/lib/localstorage";
import { columnReducer } from "@/components/task-list/column/columnReducer";
import { TaskActionType, taskReducer } from "@/components/task-list/task/taskReducer";
import { ColumnContext, ColumnDispatchContext } from "@/components/task-list/column/ColumnContext";
import { TaskContext, TaskDispatchContext } from "@/components/task-list/task/TaskContext";
interface BoardProps {
  columns: ColumnList;
  tasks: TaskList;
}

export default function Board(props: BoardProps) {
  const [columns, dispatchColumns] = useReducer(columnReducer, props.columns);
  const [tasks, dispatchTasks] = useReducer(taskReducer, props.tasks);
  
  useEffect(() => {
    saveToStorage(columnKey, columns);
  }, [columns]);
  useEffect(() => {
    saveToStorage(taskKey, tasks);
  }, [tasks]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    dispatchTasks({
      type: TaskActionType.MOVE_TO_COLUMN,
      taskId: active.id as string,
      newColumnId: over.id as string,
    });
  }

  const ColumnList = () =>
    columns.map((column) => (
      <Column
        key={column.id}
        column={column}
        tasks={tasks.filter((task) => task.columnId == column.id)}
      />
    ));


  return (
    <div className="flex gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        <ColumnContext.Provider value={columns}>
        <ColumnDispatchContext value={dispatchColumns}>
        <TaskContext value={tasks}>
          <TaskDispatchContext value={dispatchTasks}>
            {ColumnList()}
          </TaskDispatchContext>

        </TaskContext>
        </ColumnDispatchContext>

        </ColumnContext.Provider>
      </DndContext>
    </div>
  );
}
