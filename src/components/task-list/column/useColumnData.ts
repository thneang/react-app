import { ColumnActionType, columnReducer } from "@/components/task-list/column/columnReducer";
import { getItemFromStorage, saveToStorage } from "@/lib/localstorage";
import { ColumnType } from "@/types/global";
import { useEffect, useReducer } from "react";

export function useColumnData() {
  const [columns, dispatch] = useReducer(columnReducer, []);

  const columnKey = "columns";

  useEffect(() => {
    const defaultcolumns: ColumnType[] = [
      { id: "1", name: "TODO" },
      { id: "2", name: "In progress" },
    ];

    function initcolumns() {
      const columnData = getItemFromStorage(columnKey);
      if (columnData) {
        dispatch({type: ColumnActionType.INITIALIZE, columns: columnData });
      } else {
        saveToStorage(columnKey, defaultcolumns);
        dispatch({type: ColumnActionType.INITIALIZE, columns: defaultcolumns });
      }
    }

    initcolumns();
  }, []);

  useEffect(() => {
    saveToStorage(columnKey, columns);
  }, [columns]);


  return [
    columns,
    dispatch,
  ] as const;
}
