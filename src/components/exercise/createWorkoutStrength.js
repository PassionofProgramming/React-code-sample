import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import * as NB from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../../components/common/FormInput/index'
import Button from '../../components/common/FormButton';
import { HeaderBar } from "../../components/common/header";
import { Fonts, Icons } from '../../config/index';
import ProgressBar from '../common/circularProgress/ProgressBar';
import CheckBox from "../common/checkBox"

class CreateWorkoutStrength extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            chkbox_chk: true,
            totalCalories: 500,
            calories: 340,
            sets: "",
            weight: "",
            repsXsets: "",
            caloriesBurned: "",
            favorite: false
        }
    }
    done(goBack) {
        let workoutStrength = {
            sets: this.state.sets,
            weight: this.state.weight,
            repsXsets: this.state.repsXsets,
            caloriesBurned: this.state.caloriesBurned,
            favorite: this.state.star,
            addToToady: this.state.chkbox_chk ? "yes" : "no"
        }
        // goBack()
        // console.warn(workoutStrength)
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Create Workouts Strength"}
                    RightItem={<Image source={Icons.checkMark} style={{ height: 25, width: 25, resizeMode: "contain" }} />}
                    onPressRight={() => this.done(goBack)}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                >

                    <View style={styles.formView}>

                        <View style={styles.headingsView}>
                            <Text style={styles.headings}>
                                {/* {this.state.data && this.state.data.itemName} */}
                                Squats W/150 lbs
                        </Text>
                            <TouchableOpacity onPress={() => this.setState({ star: !this.state.star })} activeOpacity={1}>
                                <Image source={this.state.star ? Icons.star1 : Icons.star} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Sets'}
                                onChange={(e) => this.setState({ sets: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
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
                                itemStyle={styles.inputStyle}
                                label={'Weight'}
                                onChange={(e) => this.setState({ weight: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                            // maxLength={3}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Calories Burned'}
                                onChange={(e) => this.setState({ caloriesBurned: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={3}
                            />
                        </View>
                        <View style={{ height: height * 0.16, flexDirection: 'column', justifyContent: 'space-around', paddingTop: '4%' }}>
                            <View style={{}}>
                                <Text style={{ fontFamily: Fonts.medium, color: 'black' }}> Add to today's workout ? </Text>
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
                        <View style={{ height: height * 0.35, }}>
                            <Text style={styles.headings}> Calories Burned</Text>
                            <View style={{ height: height / 3.5, width: width, }}>
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
                        {/* <View style={{ backgroundColor: 'black', flex: 1 }}>
                    </View> */}
                    </View>
                </ScrollView>

            </View>
        );
    }
}

export default CreateWorkoutStrength;

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
    headingsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height / 13,
        width: "99%",
        alignSelf: 'center'
    },
    headings: {
        color: '#FF4081',
        fontFamily: Fonts.medium,
        fontSize: fontScale * 20,
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
    }
})