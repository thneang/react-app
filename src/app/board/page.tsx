'use client'
import Board from "@/components/task-list/board/Board";
import {
  useStorageInitialisation
} from "@/lib/localstorage";

export default function BoardPage() {
  
  const [columns, tasks] = useStorageInitialisation();

  if (!columns || !tasks) {
    return "Loading data...";
  }

  return (
    <>
      <div>
        <Board columns={columns} tasks={tasks} />
      </div>
    </>
  );
}
