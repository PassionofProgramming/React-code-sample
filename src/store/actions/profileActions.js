import {
    ADD_PROFILE,
    ADD_PROFILE_SUCCESS,
    ADD_PROFILE_FAILURE

} from '../constants';

export default class ProfileActions {

    static addProfile(profileData) {
        return {
            type: 'ADD_PROFILE',
            payload: profileData
        }
    }

    static addProfileSuccess(successData) {
        return {
            type: 'ADD_PROFILE_SUCCESS',
            payload: successData
        }
    }
    static addProfileFailure(error) {
        return {
            type: 'ADD_PROFILE_FAILURE',
            error: error
        }
    }
}