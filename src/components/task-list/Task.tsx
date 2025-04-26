import EditableDiv from "@/components/form/EditableDiv";
import { useTaskContext } from "@/components/task-list/TaskContext";
import { TaskType } from "@/types/global";
import { useDraggable } from "@dnd-kit/core";

export interface TaskProps {
  task: TaskType;
}

export default function Task(props: TaskProps) {
  const taskContext = useTaskContext();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.task.id,
  });
  const dragStyle = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={dragStyle}
        className="flex flex-col border border-red-500 cursor-pointer"
      >
        <EditableDiv
          value={props.task.title}
          onBlur={(e) =>
            taskContext.handleUpdateTask(props.task.id, { title: e.target.value })
          }
        ></EditableDiv>
        <EditableDiv
          value={props.task.description}
          onBlur={(e) =>
            taskContext.handleUpdateTask(props.task.id, {
              description: e.target.value
            })
          }
        ></EditableDiv>
      </div>
    </>
  );
}
