import { TaskType } from '@/types/global';
import React from 'react';


export type TaskContextType = {
    handleUpdateTask: (taskId: string, updates: Partial<TaskType>) => void;
};

export const TaskContext = React.createContext<TaskContextType | undefined>(undefined);

function useTaskContext() {
    const taskContext = React.useContext(TaskContext);
    if(taskContext == undefined) {
        throw new Error("Use taskContext within it's context provider")
    } 
    return taskContext;
}
export {useTaskContext};