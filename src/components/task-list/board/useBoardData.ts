import { useTaskData } from "@/components/task-list/task/useTaskData";
import { useColumnData } from "@/components/task-list/column/useColumnData";

export function useBoardData() {
  const taskData = useTaskData();
  const columnData = useColumnData();

  return {
    ...taskData,
    ...columnData,
  };
}
