import EditableDiv from "@/components/form/EditableDiv";
import { Dropdown } from "@/components/navigation/Dropdown";
import { useColumnDispatchContext } from "@/components/task-list/column/ColumnContext";
import { ColumnActionType } from "@/components/task-list/column/columnReducer";
import Task from "@/components/task-list/task/Task";
import { useTaskDispatchContext } from "@/components/task-list/task/TaskContext";
import { addTask, removeColumn } from "@/lib/clients/boardClient";

import { ColumnType, TaskType } from "@/types/global";
import { useDroppable } from "@dnd-kit/core";
import { useMemo } from "react";

interface ColumnProps {
  column: ColumnType;
  tasks: TaskType[];
}

export default function Column(props: ColumnProps) {
  const dispatchTasks = useTaskDispatchContext();
  const dispatchColumns = useColumnDispatchContext();
  const { setNodeRef } = useDroppable({
    id: props.column.id,
  });

  // Prevent the computing of the cardList when the column name change
  const renderTaskCards = useMemo(() => {
    return props.tasks.map((task: TaskType) => (
      <li key={task.id}>
        <Task key={task.id} task={task} />
      </li>
    ));
  }, [props.tasks]);

  return (
    <>
      <div
        ref={setNodeRef}
        className="relative flex flex-col border dark:border-none bg-background dark:bg-cyan-900 shadow-lg rounded-md h-full"
      >
        {/* Column Title */}
        <div className="flex flex-row justify-between items-center p-2">
          <EditableDiv
            className="font-bold text-center w-full"
            value={props.column.name}
            onBlur={(e) =>
              dispatchColumns({
                type: ColumnActionType.UPDATE,
                column: { ...props.column, name: e.target.value },
              })
            }
          />
          <Dropdown>
            <Dropdown.DropdownIcon>☰</Dropdown.DropdownIcon>
            <Dropdown.DropdownContent>
              <Dropdown.DropdownList>
                <Dropdown.DropdownItem>
                  <button
                    onClick={() => removeColumn(dispatchColumns, props.column)}
                  >
                    Supprimer la colonne
                  </button>
                </Dropdown.DropdownItem>
              </Dropdown.DropdownList>
            </Dropdown.DropdownContent>
          </Dropdown>
        </div>

        <ul className="p-2 space-y-4 lg:w-60">
          {renderTaskCards}
          <li className="border-t p-2 pb-0">
            <button
              className="w-full"
              onClick={() => addTask(dispatchTasks, props.column.id)}
            >
              Ajouter une tache
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
