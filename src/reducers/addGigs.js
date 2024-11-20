const addGigs = ( state =[], action ) => {
    switch(action.type){
        case 'ADD_GIGS':
            if(state.includes(action.payload)){
                return state.filter(item=> item !== action.payload);
            }
            return [...state, action.payload];
        default: 
            return state;   

    }}

export default addGigs;