import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View, Text, StyleSheet, Dimensions, Image, Picker,
    Animated
} from 'react-native'
import * as NB from 'native-base';
import Input from '../common/FormInput';
import Button from '../common/FormButton'
import { Fonts } from '../../config/index';
import Dropdown from '../common/dropdown/dropdown';
const { height, width } = Dimensions.get('window');

class StepTwo extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super(); {
            this.state = {
                goal: "",
                activity: "",
                exerciseTime: "",
                weather: "",
                slide: new Animated.Value(100)
            }
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
    next() {
        let stepTwo = {
            goal: this.state.goal,
            activity: this.state.activity,
            exerciseTime: this.state.exerciseTime,
            weather: this.state.weather,
        }
        if (!this.state.goal) {
            NB.Toast.show({
                text: ' Please select your goal ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.activity) {
            NB.Toast.show({
                text: ' Please select your activity ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.exerciseTime) {
            NB.Toast.show({
                text: ' Please select your exercise Time ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.weather) {
            NB.Toast.show({
                text: ' Please select type of weather ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else {
            this.props.setState({ stepTwo })
            // console.warn(stepTwo)
            this.props.nextState()
        }
    }
    render() {
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

                            <View style={{ height: '80%', justifyContent: 'space-around' }} >
                                <View style={styles.subjectLabelView}>
                                    <Text style={styles.subjectLabelStyle}>Your Weight Goal </Text>
                                    <Dropdown
                                        placeholder="Select your weight goal"
                                        itemView={styles.itemView}
                                        items={[
                                            "Lose Weight", "Maintain Weight", "Gain Weight"
                                        ]}
                                        onValue={(value) => {
                                            let val;
                                            switch (value) {
                                                case "Lose Weight":
                                                    val = "lose";
                                                    break;
                                                case "Maintain Weight":
                                                    val = "maintain";
                                                    break;
                                                case "Gain Weight":
                                                    val = "gain";
                                                    break;
                                                default:
                                                    val = value
                                                    break;
                                            }
                                            this.setState({ goal: val })
                                        }}
                                    />
                                    <View style={styles.borderLine} />
                                </View>

                                <View style={styles.subjectLabelView}>
                                    <Text style={styles.subjectLabelStyle}>Level of activity</Text>
                                    <Dropdown
                                        placeholder="Select your level of activity"
                                        itemView={styles.itemView}
                                        items={[
                                            "Sedentary", "Light Active", "Active", "Very Active"
                                        ]}
                                        onValue={(value) => {
                                            let val;
                                            switch (value) {
                                                case "Sedentary":
                                                    val = "sedentary";
                                                    break;
                                                case "Light Active":
                                                    val = "light";
                                                    break;
                                                case "Active":
                                                    val = "active";
                                                    break;
                                                case "Very Active":
                                                    val = "very_active";
                                                    break;
                                                default:
                                                    val = value
                                                    break;
                                            }
                                            this.setState({ activity: val })
                                        }}
                                    />
                                    <View style={styles.borderLine} />
                                </View>
                                <View style={styles.subjectLabelView}>
                                    <Text style={styles.subjectLabelStyle}>Daily Exercise Time</Text>
                                    <Dropdown
                                        placeholder="Select your daily exercise time"
                                        itemView={styles.itemView}
                                        items={[
                                            "15 minutes", "30 minutes", "45 minutes", "60 minutes plus"
                                        ]}
                                        onValue={(value) => {
                                            let val;
                                            switch (value) {
                                                case "15 minutes":
                                                    val = 15;
                                                    break;
                                                case "30 minutes":
                                                    val = 30;
                                                    break;
                                                case "45 minutes":
                                                    val = 45;
                                                    break;
                                                case "60 minutes plus":
                                                    val = 60;
                                                    break;
                                                default:
                                                    val = value
                                                    break;
                                            }
                                            this.setState({ exerciseTime: val })
                                            // console.warn("exerciseTime", this.state.exerciseTime);
                                        }}
                                    />
                                    <View style={styles.borderLine} />
                                </View>
                                <View style={styles.subjectLabelView}>
                                    <Text style={styles.subjectLabelStyle}>Type of weather</Text>
                                    <Dropdown
                                        placeholder="Select your type of weather"
                                        itemView={styles.itemView}
                                        items={[
                                            "Cold weather", "Temperature weather", "Warm weather", "Hot weather"
                                        ]}
                                        onValue={(value) => {
                                            let val;
                                            switch (value) {
                                                case "Cold weather":
                                                    val = "cold";
                                                    break;
                                                case "Temperature weather":
                                                    val = "temperate";
                                                    break;
                                                case "Warm weather":
                                                    val = "warm";
                                                    break;
                                                case "Hot weather":
                                                    val = "hot";
                                                    break;
                                                default:
                                                    val = value
                                                    break;
                                            }
                                            this.setState({ weather: val })
                                            // console.warn("exerciseTime", this.state.exerciseTime);
                                        }}
                                    />
                                    <View style={styles.borderLine} />
                                </View>
                            </View>
                        </View>
                        <View style={btnViewStyle}>
                            <Button
                                style={btnStyle}
                                onPress={() => this.next()}
                                text={"Next"}
                            />
                        </View>
                    </View>
                </Animated.View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);

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
        justifyContent: 'center',
    },
    inputStyle: {
        marginVertical: height / 100 * 1,
        borderBottomWidth: 1
    },
    subjectLabelView: {
        height: height * 0.09,
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        width: width * 0.85,
    },
    subjectLabelStyle: {
        color: 'black',
        fontFamily: Fonts.book,
    },
    pickerItemColor: {
        color: "#E0E0E0",
    },
    borderLine: {
        borderBottomWidth: 1,
        borderColor: '#E0E0E0'
    },
    itemView: {
        backgroundColor: '#fff',
        top: 0,
        zIndex: 100,
        borderRadius: 2,
        position: 'absolute',
        width: '80%',
        elevation: 20
    },
    toastText: {
        textAlign: 'center',
        fontFamily: Fonts.book
    },
    toastStyle: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: width * 0.95,
        borderRadius: 10,
        alignSelf: 'center',
    }
})