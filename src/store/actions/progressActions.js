import {
    ADD_PROGRESS,
    ADD_PROGRESS_SUCCESS,
    ADD_PROGRESS_FAILURE
} from '../constants';

export default class ProgressActions {

    static addProgress(progressData) {
        return {
            type: 'ADD_PROGRESS',
            payload: progressData
        }
    }
    static addProgressSuccess(successData) {
        return {
            type: 'ADD_PROGRESS_SUCCESS',
            payload: successData
        }
    }

    static addProgressFailure(error) {
        return {
            type: 'ADD_PROGRESS_FAILURE',
            error: error
        }
    }
}
