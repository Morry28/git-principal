const entireOffers = (state = [], action) => {
    switch (action.type) {
        case 'ALL_OFFERS':
            if (state.length === 0) { return [...action.payload]; }
            return state;

        default:
            return state;

    }
} 
export default entireOffers;