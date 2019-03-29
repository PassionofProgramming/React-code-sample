import {
    ADD_PROFILE,
    ADD_PROFILE_SUCCESS,
    ADD_PROFILE_FAILURE
} from '../constants';

const intialState = {
    profile: {},
    error: {},
    isError: false,
    isLoading: false
}

export default function ProfileReducer(state = intialState, action) {
    switch (action.type) {
        case ADD_PROFILE:
            return {
                ...state,
                profile: {},
                isError: false,
                isLoading: true
            }
        case ADD_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isError: false,
                isLoading: false
            }
        case ADD_PROFILE_FAILURE:
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