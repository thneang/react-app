'use server';

const defaultTask = {
    title: "Nouveau titre",
    description: "Nouvelle description",
}

const defaultcolumn = {
    name: "Nom de colonne"
}

export async function addTaskToDb(columnId: string) {
    // Normally do something with database
    const newTask = {...defaultTask, id: crypto.randomUUID() as string, columnId: columnId}
    return newTask;
}

export async function addColumnToDb() {
    // Normally do something with database
    const newColumn = {...defaultcolumn, id: crypto.randomUUID() as string}
    return newColumn;
}

// ...
