import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import * as NB from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../../components/common/FormInput/index'
import Button from '../../components/common/FormButton';
import { HeaderBar } from "../../components/common/header";
import { Fonts, Icons } from '../../config/index';
import ProgressBar from '../common/circularProgress/ProgressBar';

class AddCardio extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            chkbox_chk: false,
            totalCalories: 500,
            calories: 340,
            star: false,
            time: 0,
            distance: 0,
            caloriesBurned: 0,
        }
    }
    done(goBack) {
        let cardio = {
            time: this.state.time,
            distance: Number(this.state.distance),
            caloriesBurned: Number(this.state.caloriesBurned),
            favorite: this.state.star,
        }
        // console.warn(cardio)
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Add Cardio"}
                    RightItem={<Image source={Icons.checkMark} style={styles.rightItemIcon} />}
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
                                Running at 4.5 mph
                    </Text>
                            <TouchableOpacity onPress={() => this.setState({ star: !this.state.star })} activeOpacity={1}>
                                <Image source={this.state.star ? Icons.star1 : Icons.star} style={styles.starIconStyle} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Time'}
                                onChange={(e) => this.setState({ time: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>

                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Miles / Distance'}
                                onChange={(e) => this.setState({ distance: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>

                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Calories Burned'}
                                onChange={(e) => this.setState({ caloriesBurned: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>
                        <View style={styles.bottomTextView}>
                            <Text style={[styles.headings, { paddingTop: '5%' }]}> Calories Burned</Text>

                            <View style={styles.progressViewStyle}>

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

export default AddCardio;

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
        width: width / 100 * 94.8
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
    rightItemIcon: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    starIconStyle: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    bottomTextView: {
        height: height * 0.3
    },
    progressViewStyle: {
        height: height / 3.5,
        width: width,
        alignSelf: "center"
    }
})