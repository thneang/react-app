import { TaskType } from "@/types/global";

export enum TaskAction {
    ADD,
    REMOVE,
    UPDATE,
    MOVE_TO_COLUMN,
    INITILIZE,
}

export type TaskActionType = 
| {type: TaskAction.ADD, task: TaskType}
| {type: TaskAction.INITILIZE, tasks: TaskType[]}
| {type: TaskAction.UPDATE, task: TaskType}
| {type: TaskAction.MOVE_TO_COLUMN, task:TaskType, columnId: string}
| {type: TaskAction.UPDATE, task: TaskType}


export function taskReducer() {

}