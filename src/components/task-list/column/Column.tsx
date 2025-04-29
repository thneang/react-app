import Task from "@/components/task-list/task/Task";
import { ColumnType, TaskType } from "@/types/global";
import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

export default function Column(props: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: props.column.id,
  });
  
  const taskCards = props.tasks.map((task: TaskType) => (
    <Task key={task.id} task={task} />
  ));

  return (
    <>
      <div ref={setNodeRef} className="flex flex-col">
        <h2 className="self-center">{props.column.name}</h2>
        <ul className="border border-sky-500 p-2 space-y-4 lg:w-60">
          <li className="flex flex-col space-y-2">{taskCards}</li>
        </ul>
      </div>
    </>
  );
}
