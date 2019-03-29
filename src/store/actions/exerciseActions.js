import {
    ADD_EXERCISE, ADD_EXERCISE_SUCCESS, ADD_EXERCISE_FAILURE,
    EXERCISE_LOG, EXERCISE_LOG_SUCCESS, EXERCISE_LOG_FAILURE,
    FAVORITE, FAVORITE_SUCCESS, FAVORITE_FAILURE,
} from '../constants';

export default class ExerciseActions {

    static addExercise(exercise) {
        return {
            type: ADD_EXERCISE,
            payload: exercise
        }
    }
    static addExerciseSuccess(successData) {
        return {
            type: ADD_EXERCISE_SUCCESS,
            payload: successData
        }
    }
    static addExerciseFailure(error) {
        return {
            type: ADD_EXERCISE_FAILURE,
            error: error
        }
    }
    // Exercise LOGS
    static exerciseLog(exercise) {
        return {
            type: EXERCISE_LOG,
            payload: exercise
        }
    }

    static exerciseLogSuccess(successData) {
        return {
            type: EXERCISE_LOG_SUCCESS,
            payload: successData
        }
    }

    static exerciseLogFailure(error) {
        return {
            type: EXERCISE_LOG_FAILURE,
            payload: error
        }
    }

    static favorite(exercise) {
        return {
            type: FAVORITE,
            payload: exercise
        }
    }

    static favoriteSuccess(successData) {
        return {
            type: FAVORITE_SUCCESS,
            payload: successData
        }
    }

    static facvoriteFailure(error) {
        return {
            type: FAVORITE_FAILURE,
            payload: error
        }
    }
}