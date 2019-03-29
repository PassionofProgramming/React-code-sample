import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import { View, Text,Modal, StyleSheet, TouchableOpacity, Dimensions, Image, TouchableHighlight, ScrollView } from 'react-native'
import * as NB from 'native-base';
import Card from '../common/card';
import CardSection from '../common/cardSection';
import { AddedThingsRow } from '../common/addedThingsRow'
import { HeaderBar } from "../common/header"
import ActionButton from '../ActionButton/index';
import RateUS from '../appTip/rateus';
const { height, width, fontScale } = Dimensions.get('window');
import ExerciseFab from '../common/exerciseFab';
import ProgressBar from '../common/circularProgress/ProgressBar';
import { Fonts, Icons, Images } from '../../config/index';
import CenterImageComponent from '../common/topTab/centerImageComponent';
const cardio = [
    {
        title: "Walk",
        cal: "20",
        value: "50 minutes",
        status: "2.5 mpg"
    },
    {
        title: "Running",
        cal: "20",
        value: "50 minutes",
        status: "2.5 mpg"
    },
];

const strength = [
    {
        title: "Squats",
        cal: "60",
        value: "50 minutes",
        status: "3 Sets",
    },
    {
        title: "Squats",
        cal: "60",
        value: "50 minutes",
        status: "3 Sets",
    },
    {
        title: "Squats",
        cal: "60",
        value: "50 minutes",
        status: "3 Sets",
    },
];

class ExerciseDashboard extends Component {
    constructor() {
        super();
        this.state = {
            cardio: [],
            strength: [],
            day: "Today: 15 Sat 2017",
            totalCalories: 2100,
            burnedCalories: 1547,
            cardioBurned: 60,
            strengthBurned: 60,
            appVisible: false,
        }
    }
    // componentWillReceiveProps(props){
    componentDidMount() {
        this.setState({
            cardio: cardio,//props.cardio
            strength: strength,//props.strength
            appVisible: true,
        })
    }
    static navigationOptions = {
        header: null
    };

    add(add) {
        // console.warn(add)
    }



    render() {
        const { navigate, goBack } = this.props.navigation;
        const { container, actionButtonIcon, title, insideCircleCenter } = styles;

        return (
            <View style={container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Exercise Overview"}/>
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'>

                     <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.appVisible}
                    onRequestClose={() => { !this.state.appVisible }}
                >
                    <View style={{ flex: 1 }}>
                      <RateUS  nav={this.props.navigation}
                            setState={(...a) => this.setState(...a)}/>
                    </View>
                </Modal>
                    <View style={{ height: height / 3.5, width: width, alignSelf: "center", marginVertical: "6%" }}>
                        <ProgressBar
                            circularSize={"large"} // "large" || "small" , default is "small"
                            title={"BURNED"}
                            titleBottom={"CALORIES"}
                            titleSize={11}
                            titleColor={"#8DAAB9"}
                            titleBold={true}
                            numberSize={30}
                            numberColor={"black"}
                            totalFill={this.state.totalCalories}
                            fill={this.state.burnedCalories}
                            progressFirstColor={[255, 190, 75]}
                            progressSecondColor={[255, 120, 164]}
                            heading={
                                <Text style={styles.topText} >{this.state.day}</Text>
                            }/>
                    </View>
                    <Card
                        imgSrc={Images.shoe}
                        color='#FFBE4B'
                        food="CARDIO EXERCISE"
                        rightText="Burned"
                        rightTextValue={this.state.cardioBurned}
                        cardSection={
                            <CardSection
                                item={"Cardio Exercise"}
                                onPressAdd={() => this.add("cardio")}
                            // addedRows={this.state.cardio}
                            />
                        }/>

                    <Card
                        imgSrc={Icons.fitness}
                        color='#FF78A4'
                        food="STRENGTH EXERCISE"
                        rightText="Burned"
                        rightTextValue={this.state.strengthBurned}
                        cardSection={
                            <CardSection
                                item={"Strength Exercise"}
                                onPressAdd={() => this.add("strength")}
                                addedRows={this.state.strength}/>
                        }/>
                </ScrollView>
                <ExerciseFab navigation={this.props.navigation} />
            </View>
        );
    }
}
export default ExerciseDashboard;
ExerciseDashboard.router = ExerciseFab.router
ExerciseDashboard.router = CenterImageComponent.router

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    actionButtonIcon: {
        fontSize: fontScale * 20,
        height: 22,
        color: 'white',
    },
    title: {
        justifyContent: 'center',
        fontSize: fontScale * 16,
        fontFamily: Fonts.medium,
        color: 'black',
    },
    topText: {
        fontSize: fontScale * 15,
        fontFamily: Fonts.bold,
        color: 'black'
    },
    circularViewStyle: {
        alignSelf: 'center'
    },
    insideCircletop: {
        alignSelf: 'center',
        fontSize: fontScale * 10,
        fontFamily: Fonts.bold,
        color: 'black',
    },
    insideCircleCenter: {
        alignSelf: 'center',
        fontSize: fontScale * 29,
        fontFamily: Fonts.book,
        color: 'black',
    }
})
