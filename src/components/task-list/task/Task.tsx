import EditableDiv from "@/components/form/EditableDiv";
import { useTaskDispatchContext } from "@/components/task-list/task/TaskContext";
import { TaskActionType } from "@/components/task-list/task/taskReducer";
import { TaskType } from "@/types/global";
import { useDraggable } from "@dnd-kit/core";

export interface TaskProps {
  task: TaskType;
}

export default function Task(props: TaskProps) {
  const dispatch = useTaskDispatchContext();

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
        onPointerDown={(e) => e.stopPropagation()}
        {...attributes}
        {...listeners}
        style={dragStyle}
        className="flex flex-col border border-red-500 cursor-pointer p-2"
      >
        <EditableDiv
        className="text-center"
          value={props.task.title}
          onBlur={(e) =>
            dispatch({type: TaskActionType.UPDATE, task: { ...props.task, title: e.target.value }})
          }
        ></EditableDiv>
        <EditableDiv
          value={props.task.description}
          onBlur={(e) =>
            dispatch({type: TaskActionType.UPDATE, task: { ...props.task, description: e.target.value }})
          }
        ></EditableDiv>
      </div>
    </>
  );
}
