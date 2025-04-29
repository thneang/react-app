'use client'

import { TaskAction, TaskActionType } from "@/components/task-list/task/taskReducer";
import { addTaskToDb } from "@/lib/services/boardService";
import { Dispatch } from "react";

export async function addTask(dispatch: Dispatch<TaskAction>, columnId: string) {
    const task = await addTaskToDb(columnId);
    dispatch({type: TaskActionType.ADD, task: task})
}

// ...