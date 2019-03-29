import ExerciseActions from '../actions/exerciseActions';
import { HttpService } from '../../services/http';
import Path from '../../config/path';
import { Toast } from 'native-base';
import { Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Fonts } from '../../config';
const { height, width } = Dimensions.get('window');

export function AddExerciseMiddleware(payload) {
    return (dispatch) => {
        console.log("After dispatched", payload);
        dispatch(ExerciseActions.addExercise(payload))
        HttpService.post(Path.ADDEXERCISE, payload.addExercise, { 'Authorization': payload.token }
        )
            .then((response) => {
                dispatch(ExerciseActions.addExerciseSuccess(response))
                console.log("response Adding Exercise", response)
            })
            .catch((err) => {
                dispatch(ExerciseActions.addExerciseFailure(err));
                console.log("error in adding Exercise", err)
            })
    }
}

export function ExerciseLogMiddleware(payload) {
    return (dispatch => {
        dispatch(ExerciseActions.exerciseLog(payload))
        HttpService.post(Path.EXERCISELOG, payload.addExercise, { 'Authorization': payload.token }
        )
            .then((response) => {
                dispatch(ExerciseActions.exerciseLogSuccess(response))
                console.log("response in Logs", response)
            })
            .catch((error) => {
                dispatch(ExerciseActions.exerciseLogFailure(error))
                console.log(" Error in logs", error)
            })
    })
}


export function ExerciseFavorite(payload) {
    return (dispatch) => {
        dispatch(ExerciseActions.favorite(payload))
        HttpService.get(Path.FAVORITE + `?type=${payload.type}&owner=${payload.id}`, { 'Authorization': payload.token })
            .then((response) => {
                dispatch(ExerciseActions.favoriteSuccess(response))
                console.log("Response in Favorite Exercise", response)
            })
            .catch((error) => {
                dispatch(ExerciseActions.facvoriteFailure(error))
                console.log("Error in Favorite Exercise", error);
            })
    }
}
