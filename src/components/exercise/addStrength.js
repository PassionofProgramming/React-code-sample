import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import * as NB from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../../components/common/FormInput/index'
import Button from '../../components/common/FormButton';
import { HeaderBar } from "../../components/common/header";
import { Fonts, Icons } from '../../config/index';
import ProgressBar from '../common/circularProgress/ProgressBar';

class AddStrength extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            chkbox_chk: false,
            star: false,
            totalCalories: 500,
            calories: 340,
            sets: 0,
            rapesXsets: 0,
            weight: 0,
            caloriesBurned: 0,

        }
    }

    done(goback) {
        let strength = {
            favorite: this.state.star,
            sets: this.state.sets,
            rapesXsets: this.state.rapesXsets,
            weight: this.setState.weight,
            caloriesBurned: this.state.caloriesBurned,
        }
        // console.warn(strength)
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Add Strength"}
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
                                Running at 4.5 mph
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
                                onChange={(e) => this.setState({ rapesXsets: e.nativeEvent.text })}
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
                                maxLength={3}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Calories Burned'}
                                onChange={(e) => this.setState({ caloriesBurned: e.nativeEvent.text })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>
                        <View style={{ height: height * 0.3, paddingTop: '5%' }}>
                            <Text style={styles.headings}>Calories Burned</Text>
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

export default AddStrength;

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

})