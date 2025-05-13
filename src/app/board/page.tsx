"use client";
import Waves from "@/components/animations/Waves";
import Board from "@/components/task-list/board/Board";
import { useStorageInitialisation } from "@/lib/localstorage";


export default function BoardPage() {
  const [columns, tasks] = useStorageInitialisation();

  if (!columns || !tasks) {
    return "Loading data...";
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-5">
        <br />
        <Board columns={columns} tasks={tasks} />
        <Waves></Waves>
      </div>
    </>
  );
}
