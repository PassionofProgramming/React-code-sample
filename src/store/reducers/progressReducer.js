import {
    ADD_PROGRESS,
    ADD_PROGRESS_SUCCESS,
    ADD_PROGRESS_FAILURE
} from '../constants';

const initialState = {
    progress: {},
    error: {},
    isError: false,
    isLoading: false
}

export default function ProgressReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PROGRESS:
            return {
                ...state,
                progress: {},
                isLoading: true,
                isError: false
            }

        case ADD_PROGRESS_SUCCESS:
            return {
                ...state,
                progress: action.payload,
                isLoading: false,
                isError: false
            }
        case ADD_PROGRESS_FAILURE:
            return {
                ...state,
                error: payload.error,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}