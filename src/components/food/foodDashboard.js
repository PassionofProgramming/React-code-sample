import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import { View, Text, StyleSheet,Modal, TouchableOpacity, Dimensions, Image, TouchableHighlight, ScrollView } from 'react-native'
import * as NB from 'native-base';
import Card from '../common/card';
import CardSection from '../common/cardSection';
import { HeaderBar } from "../common/header"
import ActionButton from '../ActionButton/index';
import Fab from '../common/fab';
import TipTwo from '../appTip/tiptwo';
import ProgressBar from '../common/circularProgress/ProgressBar';
import { Icons, Fonts } from '../../config/index';
const { height, width, fontScale } = Dimensions.get('window');

const breakfast = [
    {
        title: "Scrembled eggs",
        cal: "100",
        value: "200g",
    },
    {
        title: "Scrembled eggs",
        cal: "100",
        value: "200g",
    },
];
const lunch = [
    {
        title: "Black Beens",
        cal: "200",
        value: "1 whole",
    },
];

class FoodDashboard extends Component {
    constructor() {
        super();
        this.state = {
            day: "Today: 15 Sat 2017",
            totalCalories: 2100,
            caloriesFill: 1547,
            breakfastCalories: 600,
            snackCalories: 600,
            lunchCalories: 600,
            dinnerCalories: 600,
            tipVisible: false,
            breakfast: null,
            snack: null,
            lunch: null,
            dinner: null,
        }
    }
    componentDidMount() {
        this.setState({
            breakfast: breakfast,
            snack: null,
            lunch: lunch,
            dinner: null,
            tipVisible: true 
        })

           this.setState({ tipVisible: true });
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
                    Heading={"Food Overview"}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.tipVisible}
                    onRequestClose={() => { !this.state.tipVisible }}
                >
                    <View style={{ flex: 1 }}>
                       <TipTwo  nav={this.props.navigation}
                            setState={(...a) => this.setState(...a)}/>
                    </View>
                </Modal>

                    <View style={{ alignSelf: 'center', marginVertical: '6%', height: height / 3.5 }}>
                        <ProgressBar
                            circularSize={"large"} // "large" || "small" , default is "small"                                                                    
                            title={"TOTAL"}
                            titleBottom={"CALORIES"}
                            titleSize={11}
                            titleColor={"black"}
                            titleBold={true}
                            numberSize={30}
                            numberColor={"black"}
                            totalFill={Number(this.state.totalCalories)}
                            fill={Number(this.state.caloriesFill)}
                            heading={
                                <Text style={styles.topText} >{this.state.day}</Text>
                            } />
                    </View>
                    <Card
                        imgSrc={Icons.toast}
                        color='#2DCE9B'
                        food="BREAKFAST"
                        rightText="Calories"
                        rightTextValue={this.state.breakfastCalories}
                        cardSection={
                            <CardSection
                                item={"Breakfast"}
                                onPressAdd={() => this.add("breakfast")}
                                addedRows={this.state.breakfast}
                            />}
                    />
                    <Card
                        imgSrc={Icons.apple}
                        color='#F9D42F'
                        food="SNACK"
                        rightText="Calories"
                        rightTextValue={this.state.snackCalories}
                        cardSection={
                            <CardSection
                                item={"Snack"}
                                onPressAdd={() => this.add("snack")}
                                addedRows={this.state.snack}
                            />}
                    />
                    <Card
                        imgSrc={Icons.chicken}
                        color='#7EC5ED'
                        food="LUNCH"
                        rightText="Calories"
                        rightTextValue={this.state.lunchCalories}
                        cardSection={
                            <CardSection
                                item={"Lunch"}
                                onPressAdd={() => this.add("lunch")}
                                addedRows={this.state.lunch}
                            />}
                    />
                    <Card
                        imgSrc={Icons.porkRoast}
                        color='#79A4F3'
                        food="DINNER"
                        rightText="Calories"
                        rightTextValue={this.state.dinnerCalories}
                        cardSection={
                            <CardSection
                                item={"Dinner"}
                                onPressAdd={() => this.add("dinner")}
                                addedRows={this.state.dinner}
                            />}
                    />
                </ScrollView>
                <Fab navigation={this.props.navigation} />
            </View>
        );
    }
}
export default FoodDashboard;
FoodDashboard.router = Fab.router
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    title: {
        justifyContent: 'center',
        fontSize: 17,
        fontFamily: Fonts.medium,
        color: 'black',
    },
    topText: {
        fontSize: 15,
        fontFamily: Fonts.bold,
        color: 'black'
    },
    circularViewStyle: {
        alignSelf: 'center'
    },
    insideCircletop: {
        alignSelf: 'center',
        fontSize: fontScale * 11,
        fontFamily: Fonts.bold,
        color: 'black',
    },
    insideCircleCenter: {
        alignSelf: 'center',
        fontSize: fontScale * 25,
        fontFamily: Fonts.book,
        color: 'black',
    }
})
