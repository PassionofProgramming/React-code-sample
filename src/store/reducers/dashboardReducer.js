import {
    DASHBOARD,
    DASHBOARD_SUCCESS,
    DASHBOARD_FAILURE
} from '../constants';

const initialState = {
    dashboard: {},
    error: {},
    isLoading: false,
    isError: false
}

export default function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD:
            return {
                ...state,
                dashboard: {},
                error: {},
                isError: false,
                isLoading: true
            }
            break;
        case DASHBOARD_SUCCESS:
            return {
                ...state,
                dashboard: action.payload,
                isLoading: false,
                isError: false
            }
            break;

        case DASHBOARD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
            break;


        default:
            return state
            break;
    }
}