import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AuthActions } from '../../store/actions'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    Animated,
    NetInfo
} from 'react-native'
import { Toast } from 'native-base';
import * as NB from 'native-base';
import Input from '../common/FormInput';
import Button from '../common/FormButton'
import { Fonts } from '../../config';


const { height, width } = Dimensions.get('window');
class StepThree extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super(); {
            this.state = {
                error: false,
                show: false,
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                nameStyle: { marginVertical: height / 100 * 1 },
                emailStyle: { marginVertical: height / 100 * 1, },
                passwordStyle: { marginVertical: height / 100 * 1, },
                confirmPasswordStyle: { marginVertical: height / 100 * 1, },
                slide: new Animated.Value(100)
            },

                this.inputs = {};
        }
    }
    componentDidMount() {
        Animated.spring(
            this.state.slide,
            {
                toValue: 0,
            }
        ).start();
    }
    focusNextField(id) {
        this.inputs[id]._root.focus()
    }

    onSubmit() {
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
            if (isConnected) {
                let stepThree = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword,
                }
                if (!this.state.name) {
                    this.setState({ nameStyle: { ...this.state.nameStyle, borderColor: "red" } })
                    NB.Toast.show({
                        text: '  Enter your Name  ',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
                else if (!this.state.email) {
                    this.setState({ emailStyle: { ...this.state.emailStyle, borderColor: "red" } })
                    NB.Toast.show({
                        text: ' Enter your Email ',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
                else if (!this.state.password) {
                    this.setState({ passwordStyle: { ...this.state.passwordStyle, borderColor: "red" } })
                    NB.Toast.show({
                        text: ' Enter your Password ',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
                else if (this.state.confirmPassword !== this.state.password) {
                    this.setState({ confirmPasswordStyle: { ...this.state.confirmPasswordStyle, borderColor: "red" } })
                    NB.Toast.show({
                        text: ' Rewrite your password ',
                        position: 'bottom',
                        type: 'success',
                        textStyle: styles.toastText,
                        style: styles.toastStyle
                    })
                }
                else {
                    // this.props.setState({ stepThree })
                    this.setState({ error: true }, () => this.props.setState({ stepThree }))
                    // this.props.sigup()
                    // console.warn(stepThree);
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
        const { navigate } = this.props.navigation;
        const { container, content, btnStyle, btnViewStyle, formView, inputStyle } = styles;
        return (
            <View style={container} >
                <Animated.View style={{
                    flex: 1, transform: [
                        {
                            translateX: this.state.slide
                        }
                    ]
                }} >
                    <View style={content}>
                        <View style={formView}>
                            <Input
                                blurOnSubmit={false}
                                inputRef={ref => this.inputs['name'] = ref}
                                onSubmitEditing={() => {
                                    this.focusNextField('email');
                                    this.props.scroll(50)
                                }}
                                returnKeyType="next"
                                itemStyle={this.state.nameStyle}
                                label={'Name'}
                                onChangeText={(value) => { this.setState({ name: value, error: false }) }}
                                placeholder={'Type your name'}
                                autoCapitalize="words"
                            />

                            <Input
                                blurOnSubmit={false}
                                inputRef={ref => this.inputs['email'] = ref}
                                onSubmitEditing={() => {
                                    this.focusNextField('pass');
                                    this.props.scroll(135)
                                }}
                                returnKeyType="next"
                                itemStyle={this.state.emailStyle}
                                label={'Email'}
                                onChangeText={(value) => { this.setState({ email: value, error: false }) }}
                                placeholder={'Type your e-mail'}
                                keyboardType={'email-address'}
                                autoCapitalize="none"
                            />

                            <Input
                                blurOnSubmit={false}
                                inputRef={ref => this.inputs['pass'] = ref}
                                onSubmitEditing={() => {
                                    this.focusNextField('cPass');
                                    this.props.scroll(235)
                                }}
                                returnKeyType="next"
                                itemStyle={this.state.passwordStyle}
                                label={'Password'}
                                secureTextEntry={!this.state.show}
                                iconRightComp={<NB.Icon name={this.state.show ? "ios-eye-off" : "ios-eye"} />}
                                iconRightPress={() => this.setState({ show: !this.state.show })}
                                onChangeText={(value) => { this.setState({ password: value, error: false }) }}
                                placeholder={'Type your password'}
                            />

                            <Input
                                inputRef={ref => this.inputs['cPass'] = ref}
                                // onSubmitEditing={() => this.onSubmit()}
                                returnKeyType="done"
                                itemStyle={this.state.confirmPasswordStyle}
                                label={'Confirm Password'}
                                secureTextEntry={!this.state.show}
                                onChangeText={(value) => { this.setState({ confirmPassword: value, error: false }) }}
                                placeholder={'Type your confirm password'}
                            />
                            {this.props.state.error && this.state.error ? <Text style={{ color: "red", fontFamily: Fonts.book }}>{this.props.state.error}</Text> : null}
                        </View>
                        <View style={btnViewStyle}>
                            <Button
                                style={btnStyle}
                                onPress={() => navigate('WelcomeComponent')}
                                // onPress={() => this.onSubmit()}
                                text={"Sign Up"}
                            />
                        </View >
                    </View>
                </Animated.View>
            </View >
        )
    }

}

const mapStateToProps = (state) => {
    return { authObj: state.authReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signup: (userObj) => dispatch(AuthActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: height / 100 * 76,
    },
    content: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: width / 100 * 84.8,
        height: height / 100 * 76,
    },
    btnStyle: {
        width: width / 100 * 84.8,
        backgroundColor: '#6D6EFF',
        justifyContent: 'center',
        elevation: 0
    },
    btnViewStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: (height / 100 * 76) / 100 * 12,
    },
    formView: {
        height: (height / 100 * 76) / 100 * 80,
        justifyContent: 'center'
    },
    toastText: {
        textAlign: 'center',
        fontFamily: Fonts.medium
    },
    toastStyle: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: width * 0.95,
        borderRadius: 10,
        alignSelf: 'center',
    }
})

