const tasks = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload)
        case 'UPDATE_TASK':
            console.log('Action payload:', action.payload); // Log action payload
            const newState = state.map(task => {
              if (String(task.id) === action.payload.id) { // Convert task id to string for comparison
                console.log('Updating task:', task); // Log task to be updated
                return { ...task, column: action.payload.column };
              }
              return task;
            });
            console.log('New state:', newState); // Log new state
            return newState;
            default:
            return state;
    }
}
export default tasks;