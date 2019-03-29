import {
    DASHBOARD,
    DASHBOARD_SUCCESS,
    DASHBOARD_FAILURE
} from '../constants';

export default class DashboardActions {
    static dashboard(dashboardData) {
        return {
            type: 'DASHBOARD',
            payload: dashboardData
        }
    }

    static dashboardSuccess(successData) {
        return {
            type: 'DASHBOARD_SUCCESS',
            payload: successData
        }
    }

    static dashboardFailure(error) {
        return {
            type: 'DASHBOARD_FAILURE',
            error: error
        }
    }
}
