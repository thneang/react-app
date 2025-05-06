import EditableDiv from "@/components/form/EditableDiv";
import { HoverActions } from "@/components/navigation/HoverActions";
import { useTaskDispatchContext } from "@/components/task-list/task/TaskContext";
import { TaskActionType } from "@/components/task-list/task/taskReducer";
import { useHover } from "@/lib/hooks/useHover";
import { TaskType } from "@/types/global";
import { useDraggable } from "@dnd-kit/core";

export interface TaskProps {
  task: TaskType;
}

export default function Task(props: TaskProps) {
  const dispatch = useTaskDispatchContext();
  const { isHovered, mouseEventHandlers } = useHover();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.task.id,
  });
  const dragStyle = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        zIndex: 1,
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
        className="flex flex-col rounded-md bg-card-color shadow-lg cursor-pointer p-2 relative border border-transparent hover:border-inherit "
        {...mouseEventHandlers}
      >
        <HoverActions isActive={isHovered}>
          <button
            className="bg-card-color"
            onMouseUp={(e) => {
              e.stopPropagation();
              dispatch({ type: TaskActionType.REMOVE, task: props.task });
            }}
          >
            ❌
          </button>
        </HoverActions>
        <EditableDiv
          className="text-center font-bold border-b-1 p-1"
          value={props.task.title}
          onBlur={(e) =>
            dispatch({
              type: TaskActionType.UPDATE,
              task: { ...props.task, title: e.target.value },
            })
          }
        ></EditableDiv>

        <EditableDiv
          className="p-2"
          value={props.task.description}
          onBlur={(e) =>
            dispatch({
              type: TaskActionType.UPDATE,
              task: { ...props.task, description: e.target.value },
            })
          }
        ></EditableDiv>
      </div>
    </>
  );
}
