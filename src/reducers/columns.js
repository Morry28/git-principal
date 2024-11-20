const columns = (state=[], action)=>{
    switch(action.type){
        case 'ADD_COLUMN':
            return [...state, action.payload];
        case 'REMOVE_COLUMN':
            return state.filter(column=> column.id !== action.payload)
        case 'UPDATE_COLUMN':
            return state.map(column => column.id === action.payload.id ? action.payload : column)
        default:
            return state;      
    }
}
export default columns;