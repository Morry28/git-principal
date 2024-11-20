const gigOptions = (state = [], action) => {
    switch (action.type) {
        case 'BASE_GIGS':
            if (state.length === 0) { return [...action.payload]; }
            return state;

        default:
            return state;

    }
}

export default gigOptions;