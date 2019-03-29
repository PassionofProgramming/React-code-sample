import AuthActions from '../actions/authActions'
import { HttpService } from '../../services/http';
import Path from '../../config/path';
import { Toast } from 'native-base';
import { Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Fonts } from '../../config';
const { height, width } = Dimensions.get('window');
// import { NavigationActions } from 'react-navigation';


export function StepOneMiddleware(payload) {
    return (dispatch) => {
        console.log("After dispatched", payload.id);
        dispatch(AuthActions.stepOne(payload))
        HttpService.put(Path.SIGNUP + '/' + payload.id, payload.stepOne, { 'Authorization': payload.token }
        )
            .then((response) => {
                dispatch(AuthActions.stepOneSuccess(response))
                console.log("response in stepone", response)
            })
            .catch((err) => {
                dispatch(AuthActions.stepOneFailure(err));
                console.log(err)
            })
    }
}

export function StepTwoMiddleware(payload) {
    return (dispatch) => {
        console.log("After dispatched", payload.id);
        dispatch(AuthActions.stepTwo(payload))
        HttpService.put(Path.STEPTWO + '/' + payload.id, payload.stepTwo, { 'Authorization': payload.token }
        )
            .then((response) => {
                dispatch(AuthActions.stepTwoSuccess(response))
                console.log("response in stepTwo", response)
            })
            .catch((err) => {
                dispatch(AuthActions.stepTwoFailure(err));
                console.log(err)
            })
    }
}




export function Signup(payload) {
    return (dispatch) => {
        dispatch(AuthActions.signup(payload))
        HttpService.post(Path.SIGNUP, payload)
            .then((response) => {
                if (response.status === 201) {
                    dispatch(AuthActions.signupSuccess(response));
                    console.log("response in Middleware", response);
                }
                else {
                    dispatch(AuthActions.signupFailure(response));
                    Toast.show({
                        text: 'Wrong Email OR Password',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
            })

            .catch((err) => {
                dispatch(AuthActions.signupFailure(err));
                Toast.show({
                    text: 'Wrong Email OR Password',
                    position: 'bottom',
                    type: 'success',
                    textStyle: styles.toastText,
                    style: styles.toastStyle
                })
            })
    }
}

export function Signin(payload) {
    return (dispatch) => {
        dispatch(AuthActions.signin(payload))
        HttpService.post(Path.LOGIN, payload).then((response) => {
            if (response.status === 200) {
                let user = JSON.stringify(response.data);
                AsyncStorage.setItem("user", user, ).then((a) => {
                    dispatch(AuthActions.signinSuccess(response))
                })
            }
            else {
                dispatch(AuthActions.signinFailure(response.status));
                Toast.show({
                    text: 'Wrong Email OR Password',
                    position: 'bottom',
                    type: 'success',
                    textStyle: styles.toastText,
                    style: styles.toastStyle
                })
            }
        }).catch((err) => {
            dispatch(AuthActions.signinFailure(err));
            Toast.show({
                text: 'Wrong Email OR Password',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        )
    }
}


export function AuthRecovery(payload) {
    return (dispatch) => {
        dispatch(AuthActions.recoveryPassword(payload))
        HttpService.post(Path.PASSWORDRECOVERY, payload).then((response) => {
            console.log("respnse", response)
            dispatch(AuthActions.recoverPasswordSuccess(response))
        })
            .catch((error) => {
                dispatch(AuthActions.recoverPasswordFail({ response: "Please write your valid email" }))
                console.log("error", error)
            })
    }
}
const styles = StyleSheet.create({
    toastText: {
        textAlign: 'center',
        fontFamily: Fonts.book
    },
    toastStyle: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: width * 0.95,
        borderRadius: 8,
        alignSelf: 'center',
    }
})