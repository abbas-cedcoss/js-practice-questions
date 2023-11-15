const initialState = {
    count: 10
};

export const reducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state?.count - 1
            }
        default:
            return {
                ...state
            }
    }
}