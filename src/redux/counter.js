
const INCREASE_COUNTER = "INCREASE_COUNTER"

export const incrementCounterAction = (payload) => {
    return {
        type: INCREASE_COUNTER,
        payload
    }
}
const initialState = {
    counter: 0
}

const DECREASE_COUNTER = "DECREASE_COUNTER"

export const decrementCounterAction = (payload) => {
    return {
        type: DECREASE_COUNTER,
        payload
    }
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counter: state.counter + action.payload }
        case DECREASE_COUNTER:
            return { ...state, counter: state.counter - action.payload }
        default:
            return state
    }
}