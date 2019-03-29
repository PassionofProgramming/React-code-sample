import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    STEP_ONE, STEP_ONE_SUCCESS, STEP_ONE_FAILURE,
    STEP_TWO, STEP_TWO_SUCCESS, STEP_TWO_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    RECOVERY_PASSWORD, RECOVERY_PASSWORD_SUCCESS, RECOVERY_PASSWORD_FAILURE
} from '../constants'
const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    // stepOneResponse: {}
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authUser: action.payload,
                isLoading: false,
            }
            break;
        case SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error,
                user: {}
            }
            break;
        case STEP_ONE:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case STEP_ONE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
            break;
        case STEP_ONE_FAILURE:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: false,
                isError: true,
                error: {},
                isLoggedIn: false,
            }
            break;
        case STEP_TWO:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case STEP_TWO_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
            break;
        case STEP_TWO_FAILURE:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: false,
                isError: true,
                error: {},
                isLoggedIn: false,
            }
            break;
        case SIGNIN:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error,
                user: {}
            }
            break;
        case SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
            break;
        case LOGOUT:
            return {
                ...state,
                isLoading: true
            }
            break;
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authUser: {},
                user: {},
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
            break;
        case RECOVERY_PASSWORD:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: true,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case RECOVERY_PASSWORD_SUCCESS:
            return {
                ...state,
                user: {},
                authUser: action.payload,
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case RECOVERY_PASSWORD_FAILURE:
            return {
                ...state,
                user: {},
                authUser: {},
                isLoading: false,
                isError: true,
                error: action.payload,
                isLoggedIn: false
            }
            break;

        default:
            return state
            break;
    }
}