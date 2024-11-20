const currencyOption = (state = [], action) => {
    switch (action.type) {
        case 'BASE_PREF':
            if (state.length === 0) { return [...action.payload]; }
            return state;

        default:
            return state;

    }
}

export default currencyOption;