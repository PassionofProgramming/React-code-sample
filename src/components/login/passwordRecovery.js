import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ProgressBarAndroid, NetInfo } from 'react-native';
import { Toast } from "native-base"
import AuthComponent from "../common/authComponent";
import SignInForm from '../common/signInForm';
import AuthInputPair from "../common/AuthInputPair";
import AuthButtonPair from '../common/authButtonPair';
import Button from '../common/FormButton';
import Input from '../common/FormInput';
import { Icons, Fonts } from '../../config/index';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import { AuthRecovery } from "../../store/middlewares/authMiddleware";

const { height, width } = Dimensions.get('window');

class AuthRecover extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            loading: false,
            mount: false,
            message: "",
            error: "",
        }
    }
    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.setState({ mount: true })
    }
    componentWillUnmount() {
        this.setState({ mount: false })
    }

    componentWillReceiveProps(newProps) {
        if (this.state.mount) {
            if (newProps.authObj.isLoading) {
                this.setState({ loading: newProps.authObj.isLoading })
            }
            var error;
            var message;
            console.log("newProps", newProps)
            if (newProps.authObj.error) {
                if (newProps.authObj.error.response) {
                    error = newProps.authObj.error.response
                    // console.warn("error")
                    if (error) {
                        this.setState({ error })
                        if (!newProps.authObj.isLoading) {
                            this.setState({ loading: newProps.authObj.isLoading })
                        }
                    }
                }
            }
            if (newProps.authObj.authUser.data) {

                message = newProps.authObj.authUser.data.msg;

                console.log("responseTrue", message)

                if (message) {
                    this.setState({ message })
                    if (!newProps.authObj.isLoading) {
                        this.setState({ loading: newProps.authObj.isLoading })
                    }
                }
            }
            // else {
            //     Toast.show({
            //         text: 'Please try again',
            //         position: 'bottom',
            //         type: 'success',
            //         textStyle: styles.toastText,
            //         style: styles.toastStyle
            //     })
            // }
        }
    }

    onEmail() {
        // console.warn(this.state.email);
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
            if (isConnected) {
                if (this.state.email) {
                    this.props.recoverPass({ email_user: this.state.email })
                }
                else {
                    Toast.show({
                        text: 'Please write your email',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
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

    render() {
        if (this.state.loading) {
            return (
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: "#fff" }}>
                    <ProgressBarAndroid styleAttr="Large" color="#4D4EEB" />
                </View>);
        }
        return (
            <AuthComponent
                // backgroundSrc={}
                auth={
                    <SignInForm
                        firstPart={
                            <View style={styles.container}>
                                <Text style={[styles.TextStyle, { fontSize: height / 100 * 3.1 }]} >
                                    Recover password
                                </Text>
                                <Text style={[styles.TextStyle, { fontSize: height / 100 * 2.2, color: '#8DAAB9', fontFamily: "CircularStd-Book", }]} >
                                    Enter your register email id. we will send a link to reset your password
                                </Text>
                                <Input
                                    label={'E-mail'}
                                    autoCapitalize="none"
                                    onChange={(e) => {
                                        this.setState({ email: e.nativeEvent.text, message: "", error: "" })
                                    }}
                                    onSubmitEditing={() => this.onEmail()}
                                    icon={Icons.envelope1}
                                    placeholder={'Type your email address'}
                                    keyboardType="email-address"
                                />

                                {this.state.error ?
                                    <Text style={{
                                        fontFamily: Fonts.book,
                                        color: "red"
                                    }}
                                    >{this.state.error}</Text>
                                    :
                                    this.state.message ?
                                        <Text style={{
                                            fontFamily: Fonts.book,
                                            color: "green"
                                        }}>{this.state.message}
                                        </Text>
                                        : null
                                }

                            </View>
                        }
                        secondPart={
                            <Button onPress={() => this.onEmail()} text="Send me link" color="#4D4EEB" />
                        }
                    />
                }
            />

        );
    }
}


const mapStateToProps = (state) => {
    return { authObj: state.authReducer }
};

const mapDispatchToProps = (dispatch) => {
    return {
        recoverPass: (userObj) => { dispatch(AuthRecovery(userObj)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRecover);

const styles = StyleSheet.create({
    container: {
        height: (height / 100 * 72) / 100 * 45,
        width: width / 100 * 84.8,
        justifyContent: 'center',
    },
    TextStyle: {
        color: 'black',
        marginVertical: width / 100 * 2,
    },
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