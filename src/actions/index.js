export const search = (text) => {
    return {
        type: 'SEARCH',
        payload: text
    };
};

export const addTask = (text) =>{
    return {
        type: 'ADD_TASK',
        payload:text
    }
}

export const removeTask = (id) =>{
    return {
        type: 'REMOVE_TASK',
        payload:id
    }
}

export const updateTask = (task) =>{
    return {
        type: 'UPDATE_TASK',
        payload:task
    }
}


export const addColumn = (text) =>{
    return {
        type: 'ADD_COLUMN',
        payload:text
    }
}

export const removeColumn = (id) =>{
    return {
        type: 'REMOVE_COLUMN',
        payload:id
    }
}

