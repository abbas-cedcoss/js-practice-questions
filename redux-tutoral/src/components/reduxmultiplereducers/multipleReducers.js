import {
    INCREMENT_APPLE,
    DECREMENT_APPLE,
    INCREMENT_BANANA,
    DECREMENT_BANANA
} from "./actions";

const initialStateApple = {
    appleCount: 1
}
export const appleReducers = (state = initialStateApple, action) => {
    switch (action.type) {
        case INCREMENT_APPLE:
            return {
                ...state,
                appleCount: state?.appleCount + 1
            }
        case DECREMENT_APPLE:
            return {
                ...state,
                appleCount: state?.appleCount - 1
            }

        default:
            return {
                ...state
            }
    }

}

const initialStateBanana = {
    bananaCount: 2
}


export const bananaReducers = (state = initialStateBanana, action) => {
    switch (action.type) {
        case INCREMENT_BANANA:
            return {
                ...state,
                bananaCount: state?.bananaCount + 1
            }
        case DECREMENT_BANANA:
            return {
                ...state,
                bananaCount: state?.bananaCount - 1
            }

        default:
            return {
                ...state
            }
    }

}