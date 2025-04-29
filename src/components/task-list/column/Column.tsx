import Task from "@/components/task-list/task/Task";
import { useTaskDispatchContext } from "@/components/task-list/task/TaskContext";
import { addTask } from "@/lib/clients/boardClient";

import { ColumnType, TaskType } from "@/types/global";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

export default function Column(props: ColumnProps) {
  const dispatchTask = useTaskDispatchContext();
  const { setNodeRef } = useDroppable({
    id: props.column.id,
  });
  
  const taskCards = props.tasks.map((task: TaskType) => (
    <li key={task.id}><Task key={task.id} task={task} /></li>
  ));

  return (
    <>
      <div ref={setNodeRef} className="flex flex-col">
        <h2 className="self-center">{props.column.name}</h2>
        <ul className="border border-sky-500 p-2 space-y-4 lg:w-60">
          {taskCards}
          <li><button onClick={() => addTask(dispatchTask, props.column.id)}>Ajouter une tache</button></li>
        </ul>
      </div>
    </>
  );
}
