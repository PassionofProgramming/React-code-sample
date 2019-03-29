import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as NB from 'native-base';
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../../components/common/FormInput/index';
import Button from '../../components/common/FormButton';
import { HeaderBar } from "../../components/common/header";
import { Fonts, Icons } from '../../config/index';
import CreatedExercisesTabList from "../common/createdExercisesTabList";
import ProgressBar from '../common/circularProgress/ProgressBar';
// import { CreateWorkoutStrength, CreateWorkoutCardio } from './index';
import CreateWorkoutStrength from './createWorkoutStrength';
import CreateWorkoutCardio from './createWorkoutCardio'

export class CreateWorkouts extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            chkbox_chk: false,
            totalCalories: 500,
            calories: 340,
            workoutName: "",
            add: false,
            asd: true,
            head: "Create Workouts",
            workoutArray: [{
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Hack Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }]
        }

    }
    prop(props) {
        if (props.navigation.state.params) {
            this.setState({ add: props.navigation.state.params.add, head: "Add Workouts" })
        }
    }
    componentDidMount() {
        this.prop(this.props)
    }
    componentWillReceiveProps(props) {
        this.prop(props)
    }
    done() {
        let workoutName = this.state.workoutName;
        // console.warn(workoutName)
    }
    add(){
        // console.warn("added")
    }
    render() {
        const { navigate, goBack, state } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={this.state.head}
                    RightItem={<Image source={Icons.checkMark} style={{ height: 25, width: 25, resizeMode: "contain" }} />}
                    onPressRight={() => this.done()}
                />

                <View style={styles.formView}>
                    <ScrollView contentContainerStyle={{ width: width }}
                        keyboardShouldPersistTaps='handled'
                        keyboardDismissMode='interactive'
                    >


                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={{ width: width / 100 * 94.8 }}
                                label={'  Create Workouts'}
                                onChange={(e) => this.setState({ workoutName: e.nativeEvent.text })}
                                placeholder={'Name of your workouts'}
                            />
                        </View>
                        <View style={{ width: width, alignSelf: 'flex-start', }}>
                            {this.state.add && this.state.workoutArray.map((data, i) => {
                                return (
                                    <CreatedExercisesTabList key={i}
                                        {...data}
                                    />
                                )
                            })}
                        </View>
                        <View style={{ height: height * 0.35, }}>
                            <Text style={styles.headings}> Calories Burned</Text>

                            <View style={{ height: height / 3.5, }}>
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
                        {/* <View style={{ backgroundColor: 'grey', height: height * 0.1 }}> */}
                        {/* </View> */}
                    </ScrollView>
                    <TouchableOpacity
                        onPress={state.params.back ? () => state.params.back() : () => { this.state.asd ? goBack() : this.state.add ? goBack() : state.params.section === "Cardio" ? navigate("CreateWorkoutCardio") : navigate('CreateWorkoutStrength'); setTimeout(() => this.setState({ add: true, asd: false }), 20) }}
                        // onPress={() => this.add()}
                        activeOpacity={0.5}
                        style={styles.fabStyle}>
                        <Text style={styles.addIconStyle} > + </Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}


export const CreateWorkoutsNav = StackNavigator({
    CreateWorkouts: {
        screen: CreateWorkouts
    },
    CreateWorkoutStrength: {
        screen: CreateWorkoutStrength
    },
    CreateWorkoutCardio: {
        screen: CreateWorkoutCardio
    }

})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    formView: {
        flex: 1,
        // height: height * 0.8,
        width: width,
        alignSelf: 'center',
        paddingTop: '2%'
    },
    insideFormView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height * 0.15,
        alignSelf: 'center',
        width: width * 0.96
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
        paddingTop: "4%",
    },
    fabStyle: {
        position: "absolute",
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#4D4EEB',
        alignItems: "center",
        justifyContent: "center",
        top: (height * 0.75) - (width * 0.13 / 2),
        right: (width * 0.13) / 4,
        // zIndex: 20,
        alignSelf: "flex-end",
    },
    addIconStyle: {
        marginTop: -4.5,
        fontSize: 35,
        color: 'white',
        position: 'relative',
    },

})