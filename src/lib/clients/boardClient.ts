'use client';

import { ColumnAction, ColumnActionType } from "@/components/task-list/column/columnReducer";
import { TaskAction, TaskActionType } from "@/components/task-list/task/taskReducer";
import { addColumnToDb, addTaskToDb } from "@/lib/services/boardService";
import { ColumnType, TaskType } from "@/types/global";
import { Dispatch } from "react";

export async function addTask(dispatch: Dispatch<TaskAction>, columnId: string) {
    const task = await addTaskToDb(columnId);
    dispatch({type: TaskActionType.ADD, task: task})
    // addItemToStorage(StorageKey.TASKS, task);
}
export async function removeTask(dispatch: Dispatch<TaskAction>, task: TaskType) {
    dispatch({type: TaskActionType.REMOVE, task: task})
    // removeItemFromStorage(StorageKey.TASKS, task);
}

export async function addColumn(dispatch: Dispatch<ColumnAction>) {
    const column = await addColumnToDb();
    dispatch({type: ColumnActionType.ADD, column: column})
    // addItemToStorage(StorageKey.COLUMNS, column);
}

export async function removeColumn(dispatch: Dispatch<ColumnAction>, column: ColumnType) {
    dispatch({type: ColumnActionType.REMOVE, column: column})
    // removeItemFromStorage(StorageKey.COLUMNS, column);
}

// ...