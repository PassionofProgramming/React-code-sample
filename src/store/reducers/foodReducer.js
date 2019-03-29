import {
    ADD_FOOD,
    ADD_FOOD_SUCCESS,
    ADD_FOOD_FAILURE
} from '../constants';

const initialState = {
    food: {},
    error: {},
    isError: false,
    isLoading: false
}

export default function foodReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                food: {},
                isError: false,
                isLoading: false
            }

        case ADD_FOOD_SUCCESS:
            return {
                ...state,
                food: action.payload,
                isError: false,
                isLoading: false
            }
        case ADD_FOOD_FAILURE:
            return {
                ...state,
                error: action.error,
                isError: true,
                isLoading: false
            }
        default:
            return state
    }
}