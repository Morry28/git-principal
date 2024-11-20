const addProducts = (state = [], action) => {
    switch (action.payload) {
        case 'ADD_PRODUCTS':
            return [...state, action.payload];
            default:
                return state;
    }

}

export default addProducts;