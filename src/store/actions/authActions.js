import {
    STEP_ONE, STEP_ONE_SUCCESS, STEP_ONE_FAILURE,
    STEP_TWO, STEP_TWO_SUCCESS, STEP_TWO_FAILURE,
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    RECOVERY_PASSWORD, RECOVERY_PASSWORD_SUCCESS, RECOVERY_PASSWORD_FAILURE,
} from '../constants'


export default class AuthActions {

    static stepOne(user) {
        return {
            type: STEP_ONE,
            payload: user
        }
    }

    static stepOneSuccess(data) {
        return {
            type: STEP_ONE_SUCCESS,
            payload: data
        }
    }

    static stepOneFailure(error) {
        return {
            type: STEP_ONE_FAILURE,
            error: error
        }
    }
    static stepTwo(user) {
        return {
            type: STEP_TWO,
            payload: user
        }
    }

    static stepTwoSuccess(data) {
        return {
            type: STEP_TWO_SUCCESS,
            payload: data
        }
    }

    static stepTwoFailure(error) {
        return {
            type: STEP_TWO_FAILURE,
            error: error
        }
    }
    static signup(user) {
        return {
            type: SIGNUP,
            payload: user
        }
    }

    static signupSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }

    static signupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }

    static signin(user) {
        return {
            type: SIGNIN,
            payload: user
        }
    }

    static signinSuccess(data) {
        return {
            type: SIGNIN_SUCCESS,
            payload: data
        }
    }

    static signinFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error: error
        }
    }

    static logout() {
        return {
            type: LOGOUT
        }
    }

    static logoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }

    static logoutFailure(error) {
        return {
            type: LOGOUT_FAILURE,
            error: error
        }
    }

    static recoveryPassword(recoverData) {
        return {
            type: RECOVERY_PASSWORD,
            payload: recoverData
        }
    }

    static recoverPasswordSuccess(recoverSuccess) {
        return {
            type: RECOVERY_PASSWORD_SUCCESS,
            payload: recoverSuccess
        }
    }

    static recoverPasswordFail(error) {
        return {
            type: RECOVERY_PASSWORD_FAILURE,
            payload: error
        }
    }
}