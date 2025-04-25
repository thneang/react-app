import { useTaskContext } from "@/components/task-list/TaskContext";
import { TaskType } from "@/types/global";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

export interface TaskProps {
  task: TaskType;
}

export default function Task(props: TaskProps) {
  const [localTitle, setLocalTitle] = useState(props.task.title);
  const [localDescription, setLocalDescription] = useState(
    props.task.description
  );
  const taskContext = useTaskContext();

  function handleTitleBlur() {
    if (localTitle !== props.task.title) {
      taskContext.handleUpdateTask(props.task.id, { title: localTitle });
    }
  }

  function handleDescriptionBlur() {
    if (localDescription !== props.task.description) {
      taskContext.handleUpdateTask(props.task.id, {
        description: localDescription,
      });
    }
  }

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
        <textarea
          value={localTitle}
          onChange={(e) => setLocalTitle(e.target.value)}
          onBlur={handleTitleBlur}
        ></textarea>
        <textarea
          value={localDescription}
          onChange={(e) => setLocalDescription(e.target.value)}
          onBlur={handleDescriptionBlur}
        ></textarea>
      </div>
    </>
  );
}
