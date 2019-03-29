import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Fonts, Icons } from '../../config/index';
import * as NB from 'native-base';
// import SvgUri from 'react-native-svg-uri';
// import Image from 'react-native-remote-svg'

const { height, width, fontScale } = Dimensions.get('window');


const GoalsArray = [
    { weightGoals: Icons.kneesPng, heading: 'Loss Weight', },
    { weightGoals: Icons.manPng, heading: 'Maintain Weight', },
    { weightGoals: Icons.bicepsPng, heading: 'Gain Weight', },

    // SVG
    // { weightGoals: Icons.handsOnKnee, heading: 'Loss Weight', },
    // { weightGoals: Icons.mandrop, heading: 'Maintain Weight', },
    // { weightGoals: Icons.weightLifting, heading: 'Gain Weight', },
    // { weightGoals: Icons.yogaSvg, heading: 'Maintain Weight', bottomText: '0 to 2 Days/Week' },1
]

const ActivityGoals = [
    { ActivityImages: Icons.yogaPng, heading: 'Sedentary', bottomText: '0 to 2 Days/Week' },
    { ActivityImages: Icons.handsupPng, heading: 'Light Active', bottomText: '0 to 2 Days/Week' },
    { ActivityImages: Icons.sitPng, heading: 'Active', bottomText: '0 to 2 Days/Week' },
    { ActivityImages: Icons.backdropPng, heading: 'Very Active', bottomText: '0 to 2 Days/Week' },




    // { ActivityImages: Icons.yoga, heading: 'Sedentary', bottomText: '0 to 2 Days/Week' },
    // { ActivityImages: Icons.handsup, heading: 'Light Active', bottomText: '0 to 2 Days/Week' },
    // { ActivityImages: Icons.yoga, heading: 'Active', bottomText: '0 to 2 Days/Week' },
    // { ActivityImages: Icons.backdrop, heading: 'Very Active', bottomText: '0 to 2 Days/Week' },
]
const WeatherGoals = [
    { WeatherImages: Icons.cloudPng, heading: 'Cold Weather', bottomText: '10 April' },
    { WeatherImages: Icons.warmPng, heading: 'Warm Weather', bottomText: '10 April' },
    { WeatherImages: Icons.hotPng, heading: 'Hot Weather', bottomText: '10 April' },
    { WeatherImages: Icons.thermometerPng, heading: 'Temprature Weather', bottomText: '10 April' },



    // { WeatherImages: Icons.clouds, heading: 'Cold Weather', bottomText: '10 April' },
    // { WeatherImages: Icons.warmWeather, heading: 'Warm Weather', bottomText: '10 April' },
    // { WeatherImages: Icons.hotweather, heading: 'Hot Weather', bottomText: '10 April' },
    // { WeatherImages: Icons.temp, heading: 'Temprature Weather', bottomText: '10 April' },
]

const ExerciseTime = [
    { ExerciseImages: Icons.fifteenPng, heading: '15 Minutes', bottomText: '15 minutes/day' },
    { ExerciseImages: Icons.ThirtyPng, heading: '30 Minutes', bottomText: '30 minutes/day' },
    { ExerciseImages: Icons.fortyfivePng, heading: '45 Minutes', bottomText: '45 minutes/day' },
    { ExerciseImages: Icons.sixtyPng, heading: '60 Minutes', bottomText: '60 minutes/day' },

    // { ExerciseImages: Icons.fifteen, heading: '15 Minutes', bottomText: '15 minutes/day' },
    // { ExerciseImages: Icons.thirty, heading: '30 Minutes', bottomText: '30 minutes/day' },
    // { ExerciseImages: Icons.fortyFive, heading: '45 Minutes', bottomText: '45 minutes/day' },
    // { ExerciseImages: Icons.sixty, heading: '60 Minutes', bottomText: '60 minutes/day' },
]

const WaterConsumption = [
    { waterImages: Icons.glassPng, heading: 'Recomendations', bottomText: '2.5 lt./8 glasses of water' }
    // { waterImages: Icons.waterglass, heading: 'Recomendations', bottomText: '2.5 lt./8 glasses of water' }
]
const CalorieIntake = [
    { caloreiImages: Icons.cerealPng, heading: 'Recomendations', bottomText: '1908 Calorie' }
    // { caloreiImages: Icons.cereal, heading: 'Recomendations', bottomText: '1908 Calorie' }
]


class GoalsSetting extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            next: false,
            weight: 0,
            activity: 0,
            weather: 0,
            exerciseTime: 0,
            water: 0,
            calorie: 0,
        }
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.content}>

                        <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Weight Goal </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.weight === 0 ? this.setState({ weight: GoalsArray.length - 1 }) : this.setState({ weight: this.state.weight - 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>

                                    }
                                    <View style={styles.pngStyle}>
                                        <Image source={GoalsArray[this.state.weight].weightGoals} style={styles.imageStyle} />
                                        <Text style={styles.belowImageText}>{GoalsArray[this.state.weight].heading}</Text>
                                    </View>

                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.weight === GoalsArray.length - 1 ? this.setState({ weight: 0 }) : this.setState({ weight: this.state.weight + 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>}
                                </View>
                            </View>
                        </View>
                        {/* Activity */}
                        <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Activity </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.activity === 0 ? this.setState({ activity: ActivityGoals.length - 1 }) : this.setState({ activity: this.state.activity - 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                    {/* <SvgUri
                                        width="50"
                                        height="50"
                                        source={ActivityGoals[this.state.activity].ActivityImages}
                                    /> */}
                                    <View style={styles.pngStyle}>
                                        <Image source={ActivityGoals[this.state.activity].ActivityImages} style={styles.imageStyle} />
                                        <Text style={styles.belowImageText}>{ActivityGoals[this.state.activity].heading}</Text>
                                    </View>

                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.activity === ActivityGoals.length - 1 ? this.setState({ activity: 0 }) : this.setState({ activity: this.state.activity + 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={styles.bottomTextView}>
                                <Text style={styles.bottomTextStyle} > {ActivityGoals[this.state.activity].bottomText} </Text>
                            </View>
                        </View>


                        {/* Exercise Time */}
                        <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Daily Exercise Time </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.exerciseTime === 0 ? this.setState({ exerciseTime: ExerciseTime.length - 1 }) : this.setState({ exerciseTime: this.state.exerciseTime - 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                    {/* <SvgUri
                                        width="50"
                                        height="50"
                                        // source={ExerciseTime[this.state.exerciseTime].ExerciseImages}
                                        source={ExerciseTime[this.state.exerciseTime].ExerciseImages}
                                    /> */}
                                    <View style={styles.pngStyle}>
                                        <Image source={ExerciseTime[this.state.exerciseTime].ExerciseImages} style={styles.imageStyle} />
                                        <Text style={styles.belowImageText}>{ExerciseTime[this.state.exerciseTime].heading}</Text>
                                    </View>


                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.exerciseTime === ExerciseTime.length - 1 ? this.setState({ exerciseTime: 0 }) : this.setState({ exerciseTime: this.state.exerciseTime + 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={styles.bottomTextView}>
                                <Text style={styles.bottomTextStyle} > {ExerciseTime[this.state.exerciseTime].bottomText} </Text>
                            </View>
                        </View>

                        {/* <TouchableOpacity onPress={() => this.props.click()}> 
                         <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Calorie Intake </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit && <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle} />}
                                    <Image source={Icons.cerealPng} style={styles.imageStyle} />
                                    {this.props.edit && <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle} />}
                                </View>
                                <Text style={styles.belowImageText} > Recommendation </Text>
                            </View>
                            <View style={styles.bottomTextView}>
                                <Text style={styles.bottomTextStyle} > 1908 Calories </Text>
                            </View>
                        </View> 
                         </TouchableOpacity> */}

                        {/* Calorie Intake  */}

                        <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Calorie Intake </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.calorie === 0 ? this.setState({ calorie: CalorieIntake.length - 1 }) : this.setState({ calorie: this.state.calorie - 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                    {/* <SvgUri
                                        width="50"
                                        height="50"
                                        source={WeatherGoals[this.state.weather].WeatherImages}
                                    /> */}
                                    <View style={styles.pngStyle}>
                                        <Image source={CalorieIntake[this.state.calorie].caloreiImages} style={styles.imageStyle} />
                                        <Text style={styles.belowImageText}>{CalorieIntake[this.state.calorie].heading}</Text>
                                    </View>

                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.calorie === CalorieIntake.length - 1 ? this.setState({ calorie: 0 }) : this.setState({ calorie: this.state.calorie + 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={styles.bottomTextView}>
                                <Text style={styles.bottomTextStyle} > {CalorieIntake[this.state.calorie].bottomText} </Text>
                            </View>
                        </View>

                        <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Water Consumption </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.water === 0 ? this.setState({ water: WaterConsumption.length - 1 }) : this.setState({ water: this.state.water - 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                    {/* <SvgUri
                                        width="50"
                                        height="50"
                                        source={WeatherGoals[this.state.weather].WeatherImages}
                                    /> */}
                                    <View style={styles.pngStyle}>
                                        <Image source={WaterConsumption[this.state.water].waterImages} style={styles.imageStyle} />
                                        <Text style={styles.belowImageText}>{WaterConsumption[this.state.water].heading}</Text>
                                    </View>

                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.water === WaterConsumption.length - 1 ? this.setState({ water: 0 }) : this.setState({ water: this.state.water + 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={styles.bottomTextView}>
                                <Text style={styles.bottomTextStyle} > {WaterConsumption[this.state.water].bottomText} </Text>
                            </View>
                        </View>

                        <View style={styles.box}>
                            <View style={styles.topTextView}>
                                <Text style={styles.textStyle} > Weather </Text>
                            </View>
                            <View style={styles.imageContainer} >
                                <View style={styles.belowImageContainerStyle}>
                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.weather === 0 ? this.setState({ weather: WeatherGoals.length - 1 }) : this.setState({ weather: this.state.weather - 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                    {/* <SvgUri
                                        width="50"
                                        height="50"
                                        source={WeatherGoals[this.state.weather].WeatherImages}
                                    /> */}
                                    <View style={styles.pngStyle}>
                                        <Image source={WeatherGoals[this.state.weather].WeatherImages} style={styles.imageStyle} />
                                        <Text style={styles.belowImageText}>{WeatherGoals[this.state.weather].heading}</Text>
                                    </View>

                                    {this.props.edit &&
                                        <TouchableOpacity
                                            style={{ justifyContent: "center", alignItems: "center", height: 40, width: 30 }}
                                            onPress={() => { this.state.weather === WeatherGoals.length - 1 ? this.setState({ weather: 0 }) : this.setState({ weather: this.state.weather + 1 }) }}
                                        >
                                            <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <View style={styles.bottomTextView}>
                                <Text style={styles.bottomTextStyle} > {WeatherGoals[this.state.weather].bottomText} </Text>
                            </View>
                        </View>






                        {/* <TouchableOpacity onPress={() => this.props.click()}>
                            <View style={styles.box}>
                                <View style={styles.topTextView}>
                                    <Text style={styles.textStyle} > Daily Exercise Time </Text>
                                </View>
                                <View style={styles.imageContainer} >
                                    <View style={styles.belowImageContainerStyle}>
                                        {this.props.edit && <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle} />}
                                        <Image source={Icons.bicycle} style={styles.imageStyle} />
                                        {this.props.edit && <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle} />}
                                    </View>
                                    <Text style={styles.belowImageText} > 15 Minutes </Text>
                                </View>
                                <View style={styles.bottomTextView}>
                                    <Text style={styles.bottomTextStyle} > 15 minutes/daily </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.click()}>
                            <View style={styles.box}>
                                <View style={styles.topTextView}>
                                    <Text style={styles.textStyle} > Calorie Intake </Text>
                                </View>
                                <View style={styles.imageContainer} >
                                    <View style={styles.belowImageContainerStyle}>
                                        {this.props.edit && <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle} />}
                                        <Image source={Icons.cereal} style={styles.imageStyle} />
                                        {this.props.edit && <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle} />}
                                    </View>
                                    <Text style={styles.belowImageText} > Recommendation </Text>
                                </View>
                                <View style={styles.bottomTextView}>
                                    <Text style={styles.bottomTextStyle} > 1848 Calorie </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.click()}>
                            <View style={styles.box}>
                                <View style={styles.topTextView}>
                                    <Text style={styles.textStyle} > Water Consumption </Text>
                                </View>
                                <View style={styles.imageContainer} >
                                    <View style={styles.belowImageContainerStyle}>
                                        {this.props.edit && <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle} />}
                                        <Image source={Icons.glass} style={styles.imageStyle} />
                                        {this.props.edit && <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle} />}
                                    </View>
                                    <Text style={styles.belowImageText} > Recommendation </Text>
                                </View>
                                <View style={styles.bottomTextView}>
                                    <Text style={styles.bottomTextStyle} > 12.4 Lt/30 glasses of water </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.click()}>
                            <View style={styles.box}>
                                <View style={styles.topTextView}>
                                    <Text style={styles.textStyle} > Weather </Text>
                                </View>
                                <View style={styles.imageContainer} >
                                    <View style={styles.belowImageContainerStyle}>
                                        {this.props.edit && <NB.Icon name="ios-arrow-back" style={styles.arrowIconstyle} />}
                                        <Image source={Icons.cloud} style={styles.imageStyle} />
                                        {this.props.edit && <NB.Icon name="ios-arrow-forward" style={styles.arrowIconstyle} />}
                                    </View>
                                    <Text style={styles.belowImageText}> Cold Weather </Text>
                                </View>
                                <View style={styles.bottomTextView}>
                                    <Text style={styles.bottomTextStyle} > 10 April </Text>
                                </View>
                            </View>
                        </TouchableOpacity>*/}
                        <TouchableOpacity onPress={() => this.props.click()}>
                            <View style={styles.secondBox}>
                                <View style={styles.imageContainer} >
                                    <View style={styles.belowImageContainerStyle}>
                                        <Image source={Icons.chef} style={styles.imageStyle} />
                                    </View>
                                    <Text style={styles.centerText}> Advanced </Text>
                                    <Text style={styles.centerSmallText}> Nutrition Setup </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default GoalsSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        marginVertical: '2%',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    box: {
        backgroundColor: '#FFF',
        height: height * 0.28,
        width: width * 0.48,
        borderWidth: 0.8,
        borderColor: '#8DAAB9'
    },
    secondBox: {
        backgroundColor: '#FFF',
        height: height * 0.20,
        width: width * 0.96,
        borderWidth: 0.8,
        borderColor: '#8DAAB9',
        alignItems: "center",
        justifyContent: "center"
    },
    topTextView: {
        flexDirection: 'row',
        height: height * 0.04,
        alignItems: 'flex-end',
        width: width * 0.4,
        marginHorizontal: '3%'
    },
    bottomTextView: {
        flexDirection: 'row',
        height: height * 0.04,
        justifyContent: 'flex-end',
        width: width * 0.4,
        marginHorizontal: '3%',
        alignSelf: 'flex-end'
    },
    textStyle: {
        fontFamily: Fonts.book,
        color: 'black'
    },
    bottomTextStyle: {
        fontFamily: Fonts.book,
        color: '#8DAAB9',
        fontSize: fontScale * 11
    },
    imageContainer: {
        height: height * 0.2,
        width: width * 0.4,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageStyle: {
        height: 55,
        width: 60,
        resizeMode: 'contain',
    },
    centerSmallText: {
        fontFamily: Fonts.medium,
        color: '#8DAAB9',
        fontSize: fontScale * 11,
        marginTop: 5
    },
    centerText: {
        fontFamily: Fonts.medium,
        color: '#8DAAB9',
    },
    arrowIconstyle: {
        color: '#E0E0E0',
        fontSize: 18
    },
    belowImageContainerStyle: {
        height: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: '3%'
    },
    belowImageText: {
        fontFamily: Fonts.medium,
        color: '#8DAAB9',
    },
    pngStyle: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'space-between'

    }

})  