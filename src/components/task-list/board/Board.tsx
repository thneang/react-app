import Column from "@/components/task-list/column/Column";
import { ColumnDispatchContext } from "@/components/task-list/column/ColumnContext";
import { columnReducer } from "@/components/task-list/column/columnReducer";
import { TaskDispatchContext } from "@/components/task-list/task/TaskContext";
import {
  TaskActionType,
  taskReducer,
} from "@/components/task-list/task/taskReducer";
import { addColumn } from "@/lib/clients/boardClient";
import { StorageKey, useStorage } from "@/lib/localstorage";
import { ColumnList, TaskList } from "@/types/global";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
interface BoardProps {
  columns: ColumnList;
  tasks: TaskList;
}

export default function Board(props: BoardProps) {
  // Use a normal reducer if a database is used
  const [columns, dispatchColumns] = useStorage(
    columnReducer,
    props.columns,
    StorageKey.COLUMNS
  );
  const [tasks, dispatchTasks] = useStorage(
    taskReducer,
    props.tasks,
    StorageKey.TASKS
  );

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

  return (
    <div className="relative z-0 flex gap-4 flex-wrap">
      <DndContext onDragEnd={handleDragEnd}>
        <ColumnDispatchContext value={dispatchColumns}>
          <TaskDispatchContext value={dispatchTasks}>
            {renderColumnList()}
          </TaskDispatchContext>
        </ColumnDispatchContext>
      </DndContext>
      <div className="flex bg-column-color rounded-md h-[45px] justify-center items-center animate-floating-2 ">
        <button
          onClick={() => addColumn(dispatchColumns)}
          className="p-2 h-full w-full text-sm column-hover-color rounded-lg whitespace-nowrap "
        >
          + Ajouter une colonne
        </button>
      </div>
    </div>
  );
}
