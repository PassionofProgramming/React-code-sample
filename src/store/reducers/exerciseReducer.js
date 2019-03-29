import {
    ADD_EXERCISE, ADD_EXERCISE_SUCCESS, ADD_EXERCISE_FAILURE,
    EXERCISE_LOG, EXERCISE_LOG_SUCCESS, EXERCISE_LOG_FAILURE,
    FAVORITE, FAVORITE_SUCCESS, FAVORITE_FAILURE
} from '../constants';

const initialState = {
    exercise: {},
    error: {},
    isError: false,
    isLoading: false,
}

export default function exerciseReducer(state = initialState, action) {
    switch (action.type) {
        // Adding Exercise 
        case ADD_EXERCISE:
            return {
                ...state,
                exercise: {},
                isLoading: true,
                isError: false
            }
            break;
        case ADD_EXERCISE_SUCCESS:
            return {
                ...state,
                exercise: action.payload,
                isError: false,
                isLoading: false,
            }
            break;

        case ADD_EXERCISE_FAILURE:
            return {
                ...state,
                error: action.error,
                isError: true,
                isLoading: false
            }
            break;

        // exercise LOGs

        case EXERCISE_LOG:
            return {
                ...state,
                exercise: {},
                isLoading: true,
                isError: false
            }
            break;

        case EXERCISE_LOG_SUCCESS:
            return {
                ...state,
                exercise: action.payload,
                isLoading: false,
                isError: false
            }
            break;

        case EXERCISE_LOG_FAILURE:
            return {
                ...state,
                exercise: {},
                isLoading: false,
                isError: true,
            }
            break;

        // favorite 

        case FAVORITE:
            return {
                ...state,
                exercise: {},
                isLoading: true,
                isError: false
            }
            break;

        case FAVORITE_SUCCESS:
            return {
                ...state,
                exercise: action.payload,
                isLoading: false,
                isError: false
            }
            break;

        case FAVORITE_FAILURE:
            return {
                ...state,
                exercise: {},
                isLoading: false,
                isError: true,
            }
            break;
        default:
            return state
            break;
    }
}
