import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import * as NB from 'native-base';
import { connect } from 'react-redux';
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../../components/common/FormInput/index'
import Button from '../../components/common/FormButton';
import { HeaderBar } from "../../components/common/header";
import { Fonts, Icons } from '../../config/index';
import ProgressBar from '../common/circularProgress/ProgressBar';
import CheckBox from "../common/checkBox";
import { AddExerciseMiddleware } from '../../store/middlewares/exerciseMiddleware'

class AddCardioManually extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            chkbox_chk: true,
            totalCalories: 500,
            calories: 340,
            exercise: "",
            time: 0,
            distance: 0,
            caloriesBurned: 0,
            exercise_type: "1",
            exerciseStyle: { width: width * 0.43, },
            timeStyle: { width: width * 0.43, },
            distanceStyle: { width: width * 0.43, },
            caloriesBurnedStyle: { width: width * 0.43, },
        }
    }
    done(goBack) {
        let cardioObj = {
            name: this.state.exercise,
            time: Number(this.state.time),
            cardio_minutes: this.state.time,
            distance: this.state.distance,
            calories_burned: Number(this.state.caloriesBurned),
            cardio_cal: this.state.caloriesBurned,
            add_log: this.state.chkbox_chk ? "1" : "0",
            exercise_type: "1"

        }
        if (!this.state.exercise) {
            this.setState({ exerciseStyle: { borderColor: "red", width: width * 0.43, } })
            NB.Toast.show({
                text: 'Enter Exercise Name',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.time) {
            this.setState({ timeStyle: { borderColor: "red", width: width * 0.43, } })
            NB.Toast.show({
                text: 'Enter Exercise Time',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.distance) {
            this.setState({ distanceStyle: { borderColor: "red", width: width * 0.43, } })
            NB.Toast.show({
                text: 'Enter Distance ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.caloriesBurned) {
            this.setState({ caloriesBurnedStyle: { borderColor: "red", width: width * 0.43, } })
            NB.Toast.show({
                text: ' Enter Calories Burned ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        // goBack()
        else {
            try {
                AsyncStorage.getItem('user').then((userString) => {
                    if (userString) {
                        var user = JSON.parse(userString)
                        var authToken = user.token
                        console.log("Succes", authToken)

                        this.props.AddExercise({ addExercise: cardioObj, token: "Bearer " + authToken })
                    }
                    else {
                        console.log("Fail", authToken)
                    }
                });
            } catch (error) {
                // Error retrieving data
                // console.warn(error, "getStorage")
            }
        }
        console.log(cardioObj)
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Add Cardio Manually"}
                    RightItem={<Image source={Icons.checkMark} style={styles.rightIconStyle} />}
                    onPressRight={() => this.done(goBack)}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                >
                    <View style={styles.formView}>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={this.state.exerciseStyle}
                                label={'Name of Exercise'}
                                onChange={(e) => this.setState({ exercise: e.nativeEvent.text })}
                                placeholder={'Type exercise name'}
                            // keyboardType={'numeric'}
                            // maxLength={2}
                            />
                            <Input
                                itemStyle={this.state.timeStyle}
                                label={'Time'}
                                onChange={(e) => this.setState({ time: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                            // maxLength={2}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={this.state.distanceStyle}
                                label={'Miles / Distance'}
                                onChange={(e) => this.setState({ distance: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                            // maxLength={2}
                            />
                            <Input
                                itemStyle={this.state.caloriesBurnedStyle}
                                label={'Calories Burned'}
                                onChange={(e) => this.setState({ caloriesBurned: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                            // maxLength={3}
                            />
                        </View>
                        <View style={styles.thirdVeiwStyle}>
                            <View>
                                <Text style={styles.textStyle}> Add to today's workout ? </Text>
                            </View>
                            <View style={styles.checkBoxView} >
                                <View style={styles.CheckBoxSecondView}>
                                    <CheckBox onPress={() => this.setState({ chkbox_chk: true })} label="Yes" checked={!this.state.chkbox_chk} />
                                </View>
                                <View style={styles.checkBoxText}>
                                    <CheckBox onPress={() => this.setState({ chkbox_chk: false })} label="No" checked={this.state.chkbox_chk} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottmView}>
                            <Text style={styles.bottomText}> Calories Burned</Text>
                            <View style={styles.progressView}>
                                <ProgressBar
                                    title={"Burned"}
                                    titleBottom={"Calories"}
                                    titleSize={11}
                                    titleColor={"#8DAAB9"}
                                    titleBold={false}
                                    numberSize={25}
                                    numberColor={"black"}
                                    totalFill={Number(this.state.totalCalories)}
                                    fill={Number(this.state.calories)}
                                    progressFirstColor={[255, 190, 75]}
                                    progressSecondColor={[255, 120, 164]}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// export default AddCardioManually;

const mapStateToProps = (state) => {
    return { exerciseObj: state.exerciseReducer }
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddExercise: (exerciseObj) => { dispatch(AddExerciseMiddleware(exerciseObj)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardioManually);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    formView: {
        height: height * 0.8,
        width: width / 100 * 94.8,
        alignSelf: 'center',
        paddingTop: '2%'
    },
    insideFormView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    inputStyle: {
        width: width * 0.43,
    },
    insideCircletop: {
        alignSelf: 'center',
        fontSize: fontScale * 13,
        fontFamily: Fonts.bold,
        color: 'black',
        color: '#8DAAB9'
    },
    insideCircleCenter: {
        alignSelf: 'center',
        fontSize: fontScale * 25,
        fontFamily: Fonts.book,
        color: 'black',
    },
    thirdVeiwStyle: {
        height: height * 0.16,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingTop: '4%'
    },
    checkBoxView: {
        flexDirection: 'row',
        width: width * 0.28,
        height: height * 0.05,
        alignItems: 'center',
        paddingLeft: '1%',
        justifyContent: 'space-between'
    },
    CheckBoxSecondView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%'
    },
    checkBoxText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%'
    },
    rightIconStyle: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    textStyle: {
        fontFamily: Fonts.medium,
        color: 'black'
    },
    bottmView: {
        height: height * 0.3
    },
    bottomText: {
        fontFamily: Fonts.medium,
        fontSize: fontScale * 20,
        color: '#FF78A4'
    },
    progressView: {
        height: height / 3.5,
        width: width,
        alignSelf: "center"
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