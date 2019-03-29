import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Icon, Toast } from 'native-base';
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../../components/common/FormInput/index'
import Button from '../../components/common/FormButton';
import { HeaderBar } from "../../components/common/header";
import { Fonts, Icons } from '../../config/index';
import ProgressBar from '../common/circularProgress/ProgressBar';
import CheckBox from "../common/checkBox";
import { AddExerciseMiddleware, ExerciseLogMiddleware, ExerciseFavorite } from '../../store/middlewares/exerciseMiddleware';

class AddStrengthManually extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            chkbox_chk: false,
            totalCalories: 500,
            calories: 340,
            exercise: "",
            sets: "",
            weight: "",
            repsXsets: "",
            caloriesBurned: "",
            exerciseStyle: { width: width * 0.43 },
            setsStyle: { width: width * 0.43 },
            weightStyle: { width: width * 0.43 },
            repsStyle: { width: width * 0.43 },
            caloriesBurnedStyle: { width: width * 0.43 }
        }
    }

    componentWillReceiveProps(props) {
        AsyncStorage.getItem('user').then((userString) => {
            if (userString) {
                let userID = props.exerciseObj.exercise.data ? props.exerciseObj.exercise.data.user : null
                var user = JSON.parse(userString)
                var authToken = user.token
                if (userID) {
                    this.props.FavoriteExercise({ id: userID, type: "exercise", token: " Bearer " + authToken })
                    console.log("Succes", authToken + "  ID  " + userID)
                }
            }
            else {
                console.log("token not found", authToken)
            }
        });

    }

    done(goBack) {

        let strengthObj = {
            name: this.state.exercise,
            sets: this.state.sets,
            weight: this.state.weight,
            repetitions: this.state.repsXsets,
            calories_burned: Number(this.state.caloriesBurned),
            strenght_cal: this.state.caloriesBurned
        }

        if (!this.state.exercise) {
            this.setState({ exerciseStyle: { borderColor: "red ", width: width * 0.43 } })
            Toast.show({
                text: 'Enter Exercise Name',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.sets) {
            this.setState({ setsStyle: { borderColor: "red", width: width * 0.43 } })
            Toast.show({
                text: 'Enter Number of Sets',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.weight) {
            this.setState({ weightStyle: { borderColor: "red", width: width * 0.43 } })
            Toast.show({
                text: 'Enter Weight',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.repsXsets) {
            this.setState({ repsStyle: { borderColor: "red", width: width * 0.43 } })
            Toast.show({
                text: 'Enter Repiitions',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: style.toastStyle
            })
        }
        else if (!this.state.caloriesBurned) {
            this.setState({ caloriesBurnedStyle: { borderColor: "red", width: width * 0.43 } })
            Toast.show({
                text: 'Enter Calories Burned',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle,
            })
        }
        else {
            try {
                AsyncStorage.getItem('user').then((userString) => {
                    if (userString) {
                        var user = JSON.parse(userString)
                        var authToken = user.token
                        console.log("Succes", authToken)

                        this.props.AddExecise({ addExercise: strengthObj, token: " Bearer " + authToken })
                        this.props.ExerciseLogs({ addExercise: strengthObj, token: " Bearer " + authToken })
                        // this.props.FavoriteExercise({ id: user.user, type: "exercise", token: " Bearer " + authToken })
                    }
                    else {
                        console.log("token not found", authToken)
                    }
                });
            } catch (error) {
                // console.warn("error", error)
            }
        }

        // goBack()
        console.log(strengthObj)
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Add Strength Manually"}
                    RightItem={<Image source={Icons.checkMark} style={{ height: 25, width: 25, resizeMode: "contain" }} />}
                    onPressRight={() => this.done(goBack)}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                >
                    <View style={styles.formView}>
                        {/* <View style={styles.headingsView}>
                            <Text style={styles.headings}>Squats W/150 lbs
                        </Text>
                            <TouchableOpacity onPress={() => this.setState({ star: !this.state.star })} activeOpacity={1}>
                                <Image source={this.state.star ? Icons.star1 : Icons.star} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View> */}
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Name of Exercise'}
                                onChange={(e) => this.setState({ exercise: e.nativeEvent.text })}
                                placeholder={'Type exercise name'}
                            // keyboardType={'numeric'}
                            // maxLength={2}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Sets'}
                                onChange={(e) => this.setState({ sets: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Weight'}
                                onChange={(e) => this.setState({ weight: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                            // maxLength={3}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Reps X Sets'}
                                onChange={(e) => this.setState({ repsXsets: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={{ width: width / 100 * 94.8 }}
                                label={'Calories Burned'}
                                onChange={(e) => this.setState({ caloriesBurned: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={3}
                            />
                        </View>
                        <View style={[styles.thirdVeiwStyle, { height: "6%" }]}>
                            {/* <View>
                                <Text style={{ fontFamily: Fonts.medium, color: 'black' }}> Add to today's workout ? </Text>
                            </View>
                            <View style={styles.checkBoxView} >

                                <View style={styles.CheckBoxSecondView}>
                                    <CheckBox onPress={() => this.setState({ chkbox_chk: this.state.chkbox_chk ? false : false })} label="Yes" checked={this.state.chkbox_chk} />
                                </View>

                                <View style={styles.checkBoxText}>
                                    <CheckBox onPress={() => this.setState({ chkbox_chk: this.state.chkbox_chk ? true : true })} label="No" checked={!this.state.chkbox_chk} />
                                </View>
                            </View> */}
                        </View>
                        <View style={{ height: height * 0.3, }}>
                            <Text style={styles.headings}> Calories Burned</Text>

                            <View style={{ height: height / 3.5, width: width, alignSelf: "center" }}>
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

// export default AddStrengthManually;
const mapStateToProps = (state) => {
    return {
        exerciseObj: state.exerciseReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddExecise: (exerciseObj) => { dispatch(AddExerciseMiddleware(exerciseObj)) },
        ExerciseLogs: (exerciseObj) => { dispatch(ExerciseLogMiddleware(exerciseObj)) },
        FavoriteExercise: (exerciseObj) => { dispatch(ExerciseFavorite(exerciseObj)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStrengthManually);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    formView: {
        flex: 1,
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
    headingsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height / 13,
        width: "99%",
        alignSelf: 'center'
    },
    headings: {
        color: '#FF78A4',
        fontFamily: Fonts.medium,
        fontSize: fontScale * 20,
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