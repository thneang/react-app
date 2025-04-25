"use client";
import Board from "@/components/task-list/Board";
import { ColumnType, TaskType } from "@/types/global";

export default function BoardPage() {
  const initialTaskList: TaskType[] = [
    { id: "1", title: "title 1", description: "task 1", columnId: "1" },
    { id: "2", title: "title 2", description: "task 2", columnId: "2" },
    { id: "3", title: "title 3", description: "task 3", columnId: "1" },
    { id: "4", title: "title 4", description: "task 4", columnId: "2" },
  ];
  const initialColumnList: ColumnType[] = [
    { id: "1", name: "TODO" },
    { id: "2", name: "In progress" },
  ];
  
  return (
    <>
      <div>
        Board page
        <br />
          <Board columnList={initialColumnList} taskList={initialTaskList} />
        
      </div>
    </>
  );
}
