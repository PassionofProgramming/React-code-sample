import React, { Component } from 'react';
import AuthComponent from "../common/authComponent";
import SignInForm from '../common/signInForm';
import AuthInputPair from "../common/AuthInputPair";
import AuthButtonPair from '../common/authButtonPair';
import { AuthButtonThrice } from '../common/authButtonThrice';
import Button from '../common/FormButton';
import { View, StyleSheet,Modal, Text, Dimensions, ScrollView, Keyboard, AsyncStorage, ProgressBarAndroid, NetInfo } from 'react-native';
import { SplashScreen } from './splashScreen';
import { AuthActions } from '../../store/actions';
import { Signin } from '../../store/middlewares/authMiddleware';
import { connect } from 'react-redux';
import { Toast } from 'native-base';
import { Fonts } from '../../config';
const { height, width } = Dimensions.get('window');


class Login extends Component {
    constructor() {
        super();
        this.state = {
            scroll: false,
            splashScreen: true,
            email: '',
            password: '',
            emailStyle: {},
            passStyle: {},
            mount: false,
            error: "",
            loading: false,
             modalVisible: false,
        }
        this.scroll = null;

         // this.setState({ modalVisible: true });
    }

    componentWillMount() {
        this.setState({ mount: true })
        Keyboard.addListener('keyboardOpen', this.keyboard)
    }

    componentWillUnmount() {
        this.setState({ mount: false })
    }

    componentWillReceiveProps(newProps) {
        // console.log("props", newProps.authObj)
        // console.log("isLoading", newProps.authObj.isLoading)
        if (this.state.mount) {
            // console.warn("loading before condition", newProps.authObj.isLoading)
            if (newProps.authObj.isLoading) {
                // console.warn("loading after true", newProps.authObj.isLoading)
                this.setState({ loading: newProps.authObj.isLoading })
            }
            let user = newProps.authObj.user ? newProps.authObj.user : null
            var error;
            if (newProps.authObj.error) {
                if (newProps.authObj.error.response) {
                    setTimeout(() => {
                        if (newProps.authObj.error.response.data.message) {
                            error = newProps.authObj.error.response.data.message
                            if (error) {
                                this.setState({ error })
                                if (!newProps.authObj.isLoading) {
                                    this.setState({ loading: newProps.authObj.isLoading })
                                }
                            }
                        }
                    }, 10)
                }
            }
            if (user.data) {
                this.store(newProps)
            }
            else {
                // console.warn("else user")
            }
        }
    }

    async store(newProps) {
        try {
            await AsyncStorage.getItem('user').then((userString) => {
                if (userString) {
                    var user = JSON.parse(userString)
                    var authToken = user.token
                    console.log("signinSucces", authToken)
                    this.nav("Tabs")
                    if (!newProps.authObj.isLoading) {
                        setTimeout(() => this.setState({ loading: newProps.authObj.isLoading }), 10)
                    }
                    // alert(authToken + "    signupSucces")
                }
                else {
                    // console.warn("SigninFail", authToken)
                }
            });
        } catch (error) {
            // Error retrieving data
            // console.warn(error, "getStorage")
        }
    }

    nav = (screen) => {
        try {
            this.props.navigation.navigate(screen)
            console.log("navigated")
        }
        catch (err) {
            console.log("navigated fail", err)
        }
    }
    static navigationOptions = {
        header: null
    };

    login() {
        this.setState({ mount: true })
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
            if (isConnected) {

                var signInData = {
                    email: this.state.email,
                    password: this.state.password
                }
                if (!signInData.email) {
                    this.setState({ emailStyle: { borderColor: "red" } })
                    Toast.show({
                        text: 'Enter your Email',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
                else if (!signInData.password) {
                    this.setState({ passStyle: { borderColor: "red" } })
                    Toast.show({
                        text: 'Enter your Password',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
                else {
                    this.props.signin(signInData)
                    // console.warn(signInData);
                }
            }
            else {
                Toast.show({
                    text: 'Network Error',
                    position: 'bottom',
                    type: 'success',
                    textStyle: styles.toastText,
                    style: styles.toastStyle
                })
            }
        });
    }
    fbLogin() {
        // console.warn("FaceBook LogIn")
    }

    render() {
        // console.log(this.props.authObj.isLoading)
        if (this.state.loading) {
            return (
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: "#fff" }}>
                    <ProgressBarAndroid styleAttr="Large" color="#4D4EEB" />
                </View>);
        }

        return (
                
            this.state.splashScreen ?
                <SplashScreen setState={(val) => this.setState(val)} nav={(path) => this.props.navigation.navigate(path)} />
                :
                <AuthComponent
                    // backgroundSrc={require('../../assets/images/Bitmap.png')}
                    auth={
                        <SignInForm
                            firstPart={
                                <AuthInputPair
                                    onChangeEmail={(email) => {
                                        this.setState({ email: email.nativeEvent.text, error: "", mount: true })
                                    }}
                                    valueEmail={this.state.email}
                                    valuePass={this.state.password}
                                    emailStyle={this.state.emailStyle}
                                    passStyle={this.state.passStyle}
                                    onChangePassword={(password) => {
                                        this.setState({ password: password.nativeEvent.text, error: "", mount: true })
                                    }}
                                    onSubmit={() => this.login()}
                                    onPressForgetPass={() => { this.props.navigation.navigate('PasswordRecovery'); this.setState({ mount: false }) }}
                                    error={<Text style={{ color: "red", fontFamily: Fonts.book }}>{this.state.error}</Text>}/>
                            }
                            secondPart={
                                <AuthButtonThrice
                                    btn1Text={'Log in'}
                                    btn2Text={'Log in with Facebook'}
                                    btn3Text={'Sign Up'}
                                   onPressBtn1={() => this.props.navigation.navigate('WelcomeComponent')}
                                    onPressBtn2={() => this.fbLogin()}
                                    onPressBtn3={() => { this.props.navigation.navigate('SignUp'); this.setState({ mount: false }) }}/>
                            }
                        />

                    }/>

                    
        );
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.authReducer }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (userObj) => { dispatch(Signin(userObj)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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