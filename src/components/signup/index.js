import React, { Component } from 'react';
import { Text, ProgressBarAndroid } from "react-native"
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import { Signup, Signin, StepOneMiddleware, StepTwoMiddleware } from "../../store/middlewares/authMiddleware";
import {
    View,
    Dimensions,
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    AsyncStorage,
} from 'react-native'
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import Stepper from '../common/Stepper'
import { Fonts } from '../../config';

const { height, width } = Dimensions.get('window');

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            current: 0,
            scroll: false,
            stepOne: {
                gender: null,
                status: null,
                dob: null,
                height: null,
                weight: null,
                desireWeight: null
            },
            stepTwo: {
                goal: null,
                activity: null,
                exerciseTime: null,
                weather: null,
            },
            stepThree: {
                name: null,
                email: null,
                password: null,
                confirmPassword: null,
            },
            error: "",
            loading: false,
            mount: true,
        }
        this.scroll = null;
    }
    componentWillMount() {
        let a = window.onBodyPress
        window.onBodyPress = () => {
            this.mounted && this.setState({ dropDown: false });
            a && a()
        };
        Keyboard.dismiss()
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardShow)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardHide)
    }
    componentWillUnmount() {
        this.keyboardDidShow.remove()
        this.keyboardDidHide.remove()
    }
    componentWillReceiveProps(newProps) {
        // console.log(newProps.authObj)
        if (this.state.mount) {
            if (newProps.authObj.isLoading) {
                this.setState({ loading: newProps.authObj.isLoading })
            }
            let user = newProps.authObj.user;
            let authUser = newProps.authObj.authUser.data ? newProps.authObj.authUser.data : null;
            var error;

            if (newProps.authObj.error.data) {
                setTimeout(() => {
                    if (newProps.authObj.error.data.error._message) {
                        error = newProps.authObj.error.data.error._message
                        // console.log("eeeeerrrrrrrrrrr", error)
                        if (error) {
                            if (!newProps.authObj.isLoading) {
                                this.setState({ loading: newProps.authObj.isLoading })
                            }
                            // setTimeout(() => this.setState({ error }), 500)
                        }
                    }
                }, 150)
            }
            else if (authUser) {
                // console.log("succesAuthUser", authUser)

                this.signin({ email: authUser.email, password: this.state.stepThree.password })
                // this.stepOneFunc(authUser)
            }
            if (user.data) {
                if (user.data.patientPreferences._id) {
                    this.store(newProps)
                }
                else {
                    this.stepOneFunc(user.data)
                }
            }
            else {
                // console.warn("else user")
            }
        }
    }


    async store(newProps) {
        this.setState({ mount: false })
        try {
            await AsyncStorage.getItem('user').then((userString) => {
                if (userString) {
                    var user = JSON.parse(userString)
                    var authToken = user.token
                    console.log("signinSucces", authToken)

                    // await AsyncStorage.getItem('token').then((authToken) => {
                    //     if (authToken) {
                    // console.warn("splashSignupsucces", authToken)
                    this.nav("WelcomeComponent")
                    this.stepTwoFunc(newProps.authObj.user.data, authToken)
                    // this.props.navigation.navigate("WelcomeComponent")
                    if (!newProps.authObj.isLoading) {
                        setTimeout(() => this.setState({ loading: newProps.authObj.isLoading }), 10)
                    }
                    // alert(authToken + "    signupSucces")
                }
                else {
                    // console.warn("splashSignupFail", authToken)
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
            console.log("SignupNavigated")
        }
        catch (err) {
            console.log("SignupNavigated fail", err)
        }
    }

    signup() {
        if (this.scroll) { this.scroll.scrollTo({ x: 0, y: 0 }) }
        let signup = {
            email: this.state.stepThree.email,
            password: this.state.stepThree.password,
            reppassword: this.state.stepThree.confirmPassword,
        }
        // console.warn("SignupFuncc", signup)
        this.props.signup(signup)

        // this.props.stepOneSignup(this.state.stepOne)
    }

    stepOneFunc = (user) => {
        //split into first and last name
        let name = this.state.stepThree.name.split(" ");

        // gender
        let gender = this.state.stepOne.gender ? "M" : "F";

        // for iso date formet
        let dobModifing = this.state.stepOne.dob.split("-");
        let dobJsFormet = new Date(dobModifing[2], dobModifing[1], dobModifing[0]);
        let dob = dobJsFormet.toISOString();

        //female status
        let pregnant = this.state.stepOne.status === 1 ? "Yes" : this.state.stepOne.status === 3 ? "Yes" : "No";
        let breastfeeding = this.state.stepOne.status === 2 ? "Yes" : this.state.stepOne.status === 3 ? "Yes" : "No";

        //split into feet and inches
        let heightModifing = this.state.stepOne.height.split(".");
        //converting feet into cm
        let height = Number(((heightModifing[0] * 12) + Number(heightModifing[1])) / 0.393701).toFixed(1)

        //converting into kg
        let weight = this.state.stepOne.weight * 0.453592;
        let desireWeight = this.state.stepOne.desireWeight * 0.453592;
        // put request obj
        let stepOne = {
            first_name: name[0] ? name[0] : "",
            last_name: name[1] ? name[1] : "",
            gender: gender,
            dob: dob,
            height: {
                units: "cm",
                value: height.toString(),
            },
            weight: {
                units: "kg",
                value: weight.toFixed(3).toString()
            },
            desired_weight: {
                units: "kg",
                value: desireWeight.toFixed(3).toString()
            },
            widgets: {
                meassure: "Imperial"
            }
        }
        if (gender === "F") {
            stepOne = {
                ...stepOne,
                breastfeeding: breastfeeding,
                pregnant: pregnant,
            }
        }
        console.log("stepOne object", stepOne)
        let id = user.id;
        let token = "Bearer " + user.token;
        this.props.stepOneSignup({ stepOne, id, token })
    }




    stepTwoFunc = (user, authToken) => {
        // console.warn(this.state.stepTwo);
        let { activity, weather, exerciseTime, goal } = this.state.stepTwo;
        let stepTwo = {
            maintain: goal,
            workout: exerciseTime,
            activity: activity,
            weather: weather,
        }
        let id = user.patientPreferences._id;
        let token = "Bearer " + authToken;
        this.props.stepTwoSignup({ stepTwo, id, token })
    }

    signin = (userObj) => {
        this.props.signin(userObj)
    }


    keyboardShow = () => {
        this.setState({ scroll: true }, () => {
        });
    }
    keyboardHide = () => {
        this.setState({ scroll: false }, () => {
            // this.scroll.scrollTo({ x: 0, y: 0 })
        })

    }
    static navigationOptions = {
        header: null
    };
    nextState = () => {
        this.setState({
            current: this.state.current + 1
        }//, () => this.scroll.scrollTo({ x: 0, y: 0 })
        )
    }
    _renderComponent = () => {
        if (this.state.mount) {
            switch (this.state.current) {
                case 0:
                    return <StepOne
                        nextState={() => this.nextState()}
                        setState={(a) => this.setState(a)}
                        state={this.state}
                        scroll={(a) =>
                            this.setState({ scroll: true },
                                () => {
                                    if (this.scroll) { this.scroll.scrollTo({ x: 0, y: a }) }
                                }
                            )
                        }
                    />;
                    break;
                case 1:
                    return <StepTwo
                        nextState={() => this.nextState()}
                        setState={(a) => this.setState(a)}
                        state={this.state}
                    />;
                    break;
                case 2:
                    return <StepThree
                        {...this.props}
                        sigup={() => this.signup()}
                        setState={(a) => { this.setState(a, () => this.signup()) }}
                        state={this.state}
                        scroll={(a) => this.setState({ scroll: true },
                            () => {
                                if (this.scroll) { this.scroll.scrollTo({ x: 0, y: a }) }
                            }
                        )}
                    />;
                    break;
                default:
                    console.log('testing')
            }
        }
    }



    render() {
        const { navigate } = this.props.navigation;

        if (this.state.loading) {
            return (
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: "#fff" }}>
                    <ProgressBarAndroid styleAttr="Large" color="#4D4EEB" />
                </View>);
        }
        return (
            <ScrollView
                ref={(ref) => this.scroll = ref}
                style={{ backgroundColor: "white" }}
                contentContainerStyle={{
                    height: height - 30,
                    backgroundColor: 'white', justifyContent: 'flex-end'
                }}
                scrollEnabled={this.state.scroll}
                keyboardShouldPersistTaps='handled'
                keyboardDismissMode='interactive'
                showsVerticalScrollIndicator={false}
            >

                <TouchableWithoutFeedback onPress={() => { window.onBodyPress() }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ height: height / 100 * 24, }}>
                            <Stepper counter={this.state.current} />
                        </View>
                        <View style={{ height: height / 100 * 76, }}>
                            {this._renderComponent()}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    }
}

// export default SignUp;

const mapStateToProps = (state) => {
    return { authObj: state.authReducer }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (userObj) => { dispatch(Signup(userObj)) },
        stepOneSignup: (userObj) => { dispatch(StepOneMiddleware(userObj)) },
        stepTwoSignup: (userObj) => { dispatch(StepTwoMiddleware(userObj)) },
        signin: (userObj) => { dispatch(Signin(userObj)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);