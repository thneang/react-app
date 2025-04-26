import { getItemFromStorage, saveToStorage } from "@/lib/localstorage";
import { ColumnType } from "@/types/global";
import { useEffect, useState } from "react";

export function useColumnData() {
  const [columnList, setColumnList] = useState<ColumnType[]>([]);

  const columnKey = "columnList";

  useEffect(() => {
    const defaultColumnList: ColumnType[] = [
      { id: "1", name: "TODO" },
      { id: "2", name: "In progress" },
    ];

    function initColumnList() {
      const columnData = getItemFromStorage(columnKey);
      if (columnData) {
        setColumnList(columnData);
      } else {
        saveToStorage(columnKey, defaultColumnList);
        setColumnList(defaultColumnList);
      }
    }

    initColumnList();
  }, []);

  useEffect(() => {
    saveToStorage(columnKey, columnList);
  }, [columnList]);

  function updateColumn(id: string, updates: Partial<ColumnType>) {
    setColumnList((prev: ColumnType[]) =>
      prev.map((col) => (col.id === id ? { ...col, ...updates } : col))
    );
  }

  function addColumn(column: ColumnType) {
    setColumnList([...columnList, column]);
  }

  function deleteColumn(column: ColumnType) {
    setColumnList(
      columnList.filter((currentCol: ColumnType) => currentCol.id !== column.id)
    );
  }

  return {
    columnList,
    updateColumn,
    setColumnList,
    addColumn,
    deleteColumn,
  };
}
