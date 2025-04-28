import Column from "@/components/task-list/column/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { BoardContext } from "./BoardContext";
import { ColumnType } from "@/types/global";
import { useBoardData } from "@/components/task-list/board/useBoardData";

export default function Board() {
  const { columns, updateTask, moveTask, getTasksByColumn } = useBoardData();

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    moveTask(active.id as string, over.id as string);
  }

  return (
    <div className="flex gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        <BoardContext.Provider value={{ updateTask: updateTask }}>
          {columns.map((column: ColumnType) => (
            <Column
              key={column.id}
              column={column}
              taskList={getTasksByColumn(column.id)}
            />
          ))}
        </BoardContext.Provider>
      </DndContext>
    </div>
  );
}
