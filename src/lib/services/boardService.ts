'use server';

const defaultTask = {
    title: "new title",
    description: "new description",
}

export async function addTaskToDb(columnId: string) {
    // Normally do something with database
    const newTask = {...defaultTask, id: crypto.randomUUID() as string, columnId: columnId}
    return newTask;
}

// ...
