'use client';
import Column from "@/components/task-list/column/Column";
import {
  ColumnContext,
  ColumnDispatchContext,
} from "@/components/task-list/column/ColumnContext";
import { columnReducer } from "@/components/task-list/column/columnReducer";
import {
  TaskContext,
  TaskDispatchContext,
} from "@/components/task-list/task/TaskContext";
import {
  TaskActionType,
  taskReducer,
} from "@/components/task-list/task/taskReducer";
import { StorageKey, useStorage } from "@/lib/localstorage";
import { ColumnList, TaskList } from "@/types/global";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
interface BoardProps {
  columns: ColumnList;
  tasks: TaskList;
}

export default function Board(props: BoardProps) {
  // Use a normal reducer if a database is used
  const [columns, dispatchColumns] = useStorage(columnReducer, props.columns, StorageKey.COLUMNS);
  const [tasks, dispatchTasks] = useStorage(taskReducer, props.tasks, StorageKey.TASKS);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    dispatchTasks({
      type: TaskActionType.MOVE_TO_COLUMN,
      taskId: active.id as string,
      newColumnId: over.id as string,
    });
  }

  function renderColumnList() {
    return columns.map((column) => (
      <Column
        key={column.id}
        column={column}
        tasks={tasks.filter((task) => task.columnId == column.id)}
      />
    ));
  }

  function renderAddColumn() {
    return <div></div>;
  }

  return (
    <div className="flex gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        <ColumnContext.Provider value={columns}>
          <ColumnDispatchContext value={dispatchColumns}>
            <TaskContext value={tasks}>
              <TaskDispatchContext value={dispatchTasks}>
                {renderColumnList()}
                {renderAddColumn()}
              </TaskDispatchContext>
            </TaskContext>
          </ColumnDispatchContext>
        </ColumnContext.Provider>
      </DndContext>
    </div>
  );
}
