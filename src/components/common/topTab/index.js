import React, { Component } from 'react';
import { TabNavigator, TabBarTop, StackNavigator } from 'react-navigation';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, Animated, Alert, Modal } from 'react-native';
import * as NB from 'native-base';
const { height, width } = Dimensions.get('window');
import FormInput from '../FormInput/index';
import Button from '../FormButton';
import { HeaderBar } from "../header";
import TabList from './tabList';
import CenterImageComponent from './centerImageComponent';
// import FoodDashboard from "../../food/foodDashboard"
// import ExerciseDashboard from "../../exercise/exerciseDashboard"
// import AddFoodManually from './addFoodManually';
// import AddCardioManually from '../../exercise/addCardioManually';
// import AddFoodFromSearch from '../AddFoodFromSearch/index';
import { Icons, Fonts, Images } from '../../../config/index';
// import Gallary from "../../progress/gallery/gallery";
import ExerciseTabList from "../../common/createdExercisesTabList";
import {Dashboard,NutrientDetail} from '../../Dashboard/'
import { AddCardio, AddCardioManually, ExerciseDashboard, AddStrength, AddStrengthManually, CreateWorkoutCardio, CreateWorkoutStrength, CreateWorkouts } from '../../exercise';
import { AddFoodManually, AddFoodFromSearch, FoodDashboard, CreatedMeal, AddMealTempFile } from '../../food/index';
import { AddImagePicture, ApprovePicture, Progress, Measurements, EditMeasurement, Chat,TabNavGallery } from '../../progress';
import BarcodeApp from "../barCodeReader";
////////////
import CreatedExercisesTabList from "../createdExercisesTabList";
///////////

const addManuallyData = [{
    mainHeading: " Food / Servings",
    firstlabel: "Brand Name(Optional)",
    secondlabel: "Discription (Require)",
    thirdlabel: "Serving Size (Require)",
    fourthlabel: "Serving per Container (Require)",
    secondheading: " Nutrition Facts ",
},
]

export const Home = () => {

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
        </View>
    )
}

export class Exercise extends Component {
    static navigationOptions = {
        header: null
    };


    // addFavoriteItems = () => {
    //     return (
    // <CenterImageComponent
    //     placeholder={"Search Exercise"}
    //     centerImageSource={Icons.fitness}
    //     headingText={"Add Favorite Exercise"}
    //     centerFirstText=" Add Favorite Exercise"
    //     centerSecondText="to your Favorite List"
    //     // onPress={() => this.props.navigation.navigate('AddCardioManually')}
    //     // navigation={this.props.navigation}
    // />
    //     )
    // }

    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            changeHeader: 'Search Cardio',
            emptyScreen: false,
            emptyScreen1: false,
            section: 'Cardio',
            search: "",
            recentSearch: "",
            favoriteSearch: "",
            workoutSearch: "",

            sections: {
                placeholder: "Search Exercise",
                barCodeimgSource: Icons.barCode,
                centerImageSource: Images.shoe,
                headingText: "Add Cardio Exercise",
                centerFirstText: "  Add Exercise with our ",
                centerSecondText: "Favorite List or your own creations",
                buttonText: "Add Manually",
            },
            items: [{
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            },],

            favoriteItems: [{
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            },],

            addManually: [{
                mainHeading: " Food / Servings",
                firstlabel: "Brand Name(Optional)",
                secondlabel: "Discription (Require)",
                thirdlabel: "Serving Size (Require)",
                fourthlabel: "Serving per Container (Require)",
                secondheading: " Nutrition Facts ",
            }],

            // FALTU STATES START 
            workoutArray: [{
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            }, {
                // favoriteIconSrc: Icons.star1,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            }, {
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            }, {
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            },
            {
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            }, {
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            },
            {
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            }, {
                // favoriteIconSrc: Icons.star,
                itemName: 'Workouts #1',
                subText1st: "Calories Burned: 127",
            }],

            workoutArray1: [{
                favoriteIconSrc: Icons.star,
                itemName: 'Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }, {
                favoriteIconSrc: Icons.star1,
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
            }, {
                favoriteIconSrc: Icons.star,
                itemName: 'Hack Squats',
                subText1st: "2 Sets",
                subText2nd: "10 reps",
                subText3rd: "10 lb",
            }],
            work: true,
            work2: true,
            // FALTU STATES KHATAM
        }

        this.tintPosition = new Animated.Value(0)

    }

    componentWillReceiveProps(newProps) {
        this.hello(newProps)
    }
    componentDidMount() {
        this.hello(this.props)
    }
    hello(newProps) {
        if (newProps.navigation.state.params) {
            this.setState({
                items: newProps.navigation.state.params.itemsArray,
                favoriteItems: newProps.navigation.state.params.favItemsArr,
                sections: newProps.navigation.state.params.sections,
                changeHeader: 'Search ' + newProps.navigation.state.params.section,
                section: newProps.navigation.state.params.section,
            })
        }
    }

    animateTabUnderline(i) {
        Animated.timing(
            this.tintPosition,
            {
                toValue: i,
                duration: 200,
            }
        ).start()
    }
    search(searchValue) {

        // console.warn(searchValue)
    }
    render() {
        const { container, actionButtonIcon, insideCircleCenter, activeTabTextStyleExer, tabViewStyle, tabInsideView, tabBottomLineStyleExer, imageViewStyle, centerTabStyle, viewOfButton, barCodeImageStyle, ViewOfText, centerImageStyle, HeadingTextafterImage, activeTabTextStyle, tabTextStyle, activeTabBackgroundStyle, tabBottomLineStyle, textAfterImage, itemStyle } = styles;
        const { navigate, goBack } = this.props.navigation;

        const tintPosition = this.tintPosition.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [0, width / 4, width / 4 * 2, width / 4 * 3],
        })

        return (
            <NB.Container >

                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={this.state.changeHeader}
                    headerStyle={{ elevation: 0 }}
                />

                <Animated.View
                    style={{
                        height: 5,
                        width: width / 4, //"90%",
                        top: 101,
                        alignItems: "center",
                        // bottom: 0,
                        zIndex: 20,
                        position: "absolute",
                        // transform: [{ translateX: tintPosition }]
                        left: tintPosition
                    }}>
                    {/* {this.state.changeHeader === 'Profile Setting' ?  */}

                    <Image source={Icons.selectedExerciseTabs} style={{
                        height: 5, width: "90%",
                        //resizeMode: "contain"
                    }} />
                    {/* : null
                                } */}
                </Animated.View>
                <NB.Tabs
                    initialPage={this.state.pageNumber}
                    // onChangeTab={({ ref }) => console.warn('Heading', ref.props.heading)}
                    onChangeTab={({ ref }) => {
                        switch (ref.props.heading) {
                            case "SEARCH":
                                this.setState({
                                    changeHeader: 'Search ' + this.state.section,
                                }, () => this.animateTabUnderline(0))
                                break;
                            case "RECENT":
                                this.setState({
                                    changeHeader: 'Recent Exercise'
                                }, () => this.animateTabUnderline(1))
                                break;
                            case "FAVORITES":
                                this.setState({
                                    changeHeader: 'Favorites Exercise'
                                }, () => this.animateTabUnderline(2))
                                break;
                            case "WORKOUTS":

                                this.setState({
                                    changeHeader: 'Exercise'
                                }, () => this.animateTabUnderline(3))
                                break;
                            default:
                                console.warn('reached to deafult case!') // should never reach here...x
                                break;
                        }
                    }
                    }
                    tabBarUnderlineStyle={tabBottomLineStyleExer}
                    textStyle={tabTextStyle}>

                    <NB.Tab
                        tabStyle={activeTabBackgroundStyle}
                        activeTabStyle={activeTabBackgroundStyle}
                        activeTextStyle={activeTabTextStyleExer}
                        textStyle={tabTextStyle}
                        heading="SEARCH">

                        <CenterImageComponent
                            {...this.state.sections}
                            {...this.state.addManually}
                            onChange={(e) => this.setState({ search: e.nativeEvent.text })}
                            onPressSearch={() => this.search({ screen: "search", value: this.state.search })}
                            onPress={() => this.props.navigation.navigate(this.state.section === "Cardio" ? 'AddCardioManually' : "AddStrengthManually")}
                            navigation={this.props.navigation}
                        />

                    </NB.Tab>

                    <NB.Tab

                        tabStyle={activeTabBackgroundStyle}
                        activeTabStyle={activeTabBackgroundStyle}
                        activeTextStyle={activeTabTextStyleExer}
                        textStyle={tabTextStyle}
                        heading="RECENT" >
                        <View style={{ flex: 1, }}>
                            {!this.state.emptyScreen ?
                                <CenterImageComponent
                                    onChange={(e) => this.setState({ recentSearch: e.nativeEvent.text })}
                                    onPressSearch={() => this.search({ screen: "recent", value: this.state.recentSearch })}
                                    placeholder="Search Exercise"
                                    // barCodeimgSource={Icons.search}
                                    centerImageSource={Icons.leg}
                                    headingText="Add Recent Exercise  "
                                    centerFirstText="  Add Exercise with our "
                                    centerSecondText="Recent List or your own creations"
                                    buttonText="Show Recent Exercise"
                                    onPress={() => this.setState({ emptyScreen: !this.state.emptyScreen })}

                                />
                                :
                                <View style={{ flex: 1 }}>
                                    <View style={tabViewStyle}>
                                        <FormInput
                                            itemStyle={styles.itemStyle}
                                            placeholder="Squats"
                                            iconRight={Icons.search}
                                            onChange={(e) => this.setState({ recentSearch: e.nativeEvent.text })}
                                            iconRightPress={() => this.search({ screen: "recent", value: this.state.recentSearch })}
                                        />
                                    </View>
                                    <ScrollView>
                                        <View>
                                            {this.state.emptyScreen && this.state.items && this.state.items.map((data, i) => {
                                                return (
                                                    <ExerciseTabList
                                                        key={i}
                                                        {...data}
                                                        rightImagebackgroundSrc={Icons.add}
                                                        // onPressAdd={() => navigate('AddFoodFromSearch', { data: { name: this.state.section, itemName: data.itemName, quantity: data.quantity, calories: data.calories, type: data.type }, star: true })}
                                                        onPressAdd={() => navigate(this.state.section === "Cardio" ? "AddCardio" : "AddStrength")}
                                                    />
                                                )
                                                console.log("items", items)

                                            })
                                            }
                                        </View>
                                    </ScrollView>
                                </View>
                            }

                        </View>
                    </NB.Tab>

                    <NB.Tab
                        tabStyle={activeTabBackgroundStyle}
                        activeTabStyle={activeTabBackgroundStyle}
                        activeTextStyle={activeTabTextStyleExer}
                        textStyle={tabTextStyle}
                        heading="FAVORITES">
                        <View style={{ flex: 1, }}>
                            {!this.state.emptyScreen1 ?
                                <CenterImageComponent
                                    onChange={(e) => this.setState({ favoriteSearch: e.nativeEvent.text })}
                                    onPressSearch={() => this.search({ screen: "favorite", value: this.state.favoriteSearch })}
                                    placeholder="Search Exercise"
                                    // barCodeimgSource={Icons.search}
                                    centerImageSource={Icons.training}
                                    headingText="Add Favorites Exercise "
                                    centerFirstText="Add Favorites Exercise"
                                    centerSecondText="to your Favorite List"
                                    buttonText="Show Favorite Exercise"
                                    onPress={() => this.setState({ emptyScreen1: !this.state.emptyScreen1 })}

                                />
                                :
                                <View style={{ flex: 1 }}>
                                    <View style={tabViewStyle}>
                                        <FormInput
                                            itemStyle={styles.itemStyle}
                                            placeholder="Squats"
                                            iconRight={Icons.search}
                                            onChange={(e) => this.setState({ favoriteSearch: e.nativeEvent.text })}
                                            iconRightPress={() => this.search({ screen: "favorite", value: this.state.favoriteSearch })}
                                        />
                                    </View>
                                    <ScrollView>
                                        <View>
                                            {this.state.emptyScreen1 && this.state.favoriteItems && this.state.favoriteItems.map((data, i) => {
                                                return (
                                                    <ExerciseTabList
                                                        key={i}
                                                        {...data}
                                                        rightImagebackgroundSrc={Icons.add}
                                                        onPressAdd={() => navigate(this.state.section === "Cardio" ? "AddCardio" : "AddStrength")}
                                                    // addOnClick={() => navigate('AddCardioManually', { data: { name: this.state.section, itemName: data.itemName, quantity: data.quantity, calories: data.calories, type: data.type }, star: true })}

                                                    />
                                                    // <TabList
                                                    //     key={i}
                                                    //     {...data}
                                                    //     RightImagebackgroundSrc={Icons.add}
                                                    // />
                                                )
                                                console.log("favoriteItems", favoriteItems)

                                            })
                                            }
                                        </View>
                                    </ScrollView>
                                </View>
                            }
                        </View>

                    </NB.Tab>

                    <NB.Tab
                        tabStyle={activeTabBackgroundStyle}
                        activeTabStyle={activeTabBackgroundStyle}
                        activeTextStyle={activeTabTextStyleExer}
                        textStyle={tabTextStyle}
                        heading="WORKOUTS">


                        {/* NOW FALTU START */}
                        {this.state.work ?
                            <CenterImageComponent
                                placeholder={this.state.section === "Cardio" ? "Search" : "Squats"}
                                centerImageSource={//this.state.section === "Cardio" ? Icons.fitness : 
                                    Icons.bike}
                                headingText={//this.state.section === "Cardio" ? "Add Strength Exercise" : 
                                    "Add Exercise"}
                                centerFirstText=" Add Exercise With Our"
                                centerSecondText="Favorite List or your Own Creations"
                                buttonText={//this.state.section === "Cardio" ? "Add Manually" : 
                                    "Create Workouts"}
                                onPress={() => {
                                    this.props.navigation.navigate(//this.state.section === "Cardio" ? "AddStrengthManually" : 
                                        "CreateWorkouts", { section: this.state.section }); setTimeout(() => this.setState({ work: !this.state.work, changeHeader: "Search Workouts" }), 20)
                                }}
                                navigation={this.props.navigation}
                            />
                            : this.state.work2 ?
                                <View style={{ flex: 1 }}>
                                    <View style={styles.tabViewStyle}>
                                        <FormInput
                                            itemStyle={styles.itemStyle}
                                            placeholder={this.props.last ? "Search Meals" : "Search"}
                                            iconRight={Icons.search}
                                        />
                                    </View>
                                    <View style={{ width: width, alignSelf: 'flex-start', }}>
                                        {this.state.workoutArray1.map((data, i) => {
                                            return (
                                                <CreatedExercisesTabList key={i}
                                                    {...data}
                                                    rightImagebackgroundSrc={Icons.add}
                                                    onPressAdd={() => {
                                                        this.props.navigation.navigate(//this.state.section === "Cardio" ? "AddStrengthManually" : 
                                                            "CreateWorkoutCardio", { section: this.state.section });
                                                        setTimeout(() => this.setState({ work2: false, changeHeader: "My Workouts" }), 20)
                                                    }}
                                                />
                                            )
                                        })}
                                    </View>
                                </View>
                                :
                                <View style={{ flex: 1 }}>
                                    <View style={styles.tabViewStyle}>
                                        <FormInput
                                            itemStyle={styles.itemStyle}
                                            placeholder={this.props.last ? "Search Meals" : "Search"}
                                            iconRight={Icons.search}
                                        />
                                    </View>
                                    <ScrollView contentContainerStyle={{ width: width, alignSelf: 'flex-start', }}>
                                        {this.state.workoutArray.map((data, i) => {
                                            return (
                                                <CreatedExercisesTabList key={i}
                                                    {...data}
                                                    rightImagebackgroundSrc={Icons.add}
                                                    onPressAdd={() => {
                                                        this.props.navigation.navigate(//this.state.section === "Cardio" ? "AddStrengthManually" : 
                                                            "CreateWorkouts", { section: this.state.section })
                                                    }}
                                                />
                                            )
                                        })}
                                    </ScrollView>
                                </View>

                        }
                        {/* FALTU KAM KHATAM */}
                    </NB.Tab>
                </NB.Tabs>
            </NB.Container >
        )
    }
}
// #FO4B671C6604
export class Food extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            modalVisible: false,
            changeHeader: 'Search Breakfast',
            emptyScreen: false,
            emptyScreen1: false,
            emptyScreen2: false,
            createdMeal: false,
            meal: 0,
            section: 'Breakfast',
            bCode: false,
            barCodeData: {
                data: null,
                type: null
            },
            sections: {
                placeholder: "Search Breakfast",
                barCodeimgSource: Icons.barCode,
                centerImageSource: Icons.breakfast,
                headingText: "No Breakfast Add Yet!",
                centerFirstText: "  Add Your Breakfast with our ",
                centerSecondText: "Favorite recipes or your own creations",
                buttonText: "Add Food Manually",
            },
            items: [{
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'White Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'White Bread',
                quantity: '1 Slice ',
                calories: '20 Calories',
                type: 'solid',
            },
            {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'White Bread',
                quantity: '1 Slice ',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            },],

            favoriteItems: [{
                backgroundSrc: require('../../../assets/icons/star1.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star1.png'),
                itemName: 'White Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star1.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star1.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star1.png'),
                itemName: 'White Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: require('../../../assets/icons/star1.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            },],
        }

        this.tintPosition = new Animated.Value(0)
    }
    static navigationOptions = {
        header: null
    };
    componentWillReceiveProps(newProps) {
        this.hello(newProps)
    }
    componentDidMount() {
        this.hello(this.props)
    }
    hello(newProps) {
        if (newProps.navigation.state.params) {
            this.setState({
                items: newProps.navigation.state.params.itemsArray,
                favoriteItems: newProps.navigation.state.params.favItemsArr,
                sections: newProps.navigation.state.params.sections,
                changeHeader: 'Search ' + newProps.navigation.state.params.section,
                section: newProps.navigation.state.params.section,
                createdMeal: newProps.navigation.state.params.createdMeal,
            })
        }
    }


    animateTabUnderline(i) {
        Animated.timing(
            this.tintPosition,
            {
                toValue: i,
                duration: 200,

            }
        ).start()
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });

    }

    render() {
        const { container, actionButtonIcon, insideCircleCenter, tabViewStyle, tabInsideView, imageViewStyle, centerTabStyle, viewOfButton, barCodeImageStyle, ViewOfText, centerImageStyle, HeadingTextafterImage, activeTabTextStyle, tabTextStyle, activeTabBackgroundStyle, tabBottomLineStyle, textAfterImage } = styles;
        const { navigate, goBack } = this.props.navigation;


        const tintPosition = this.tintPosition.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [0, width / 4, width / 4 * 2, width / 4 * 3],
        })


        return (

            this.state.bCode ?
                <BarcodeApp
                    close={() => this.setState({ bCode: false })}
                    reader={({ data, type }) => {
                        this.setState({ bCode: false, barCodeData: { data: data, type: type } });
                        Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`);
                    }}/>
                :

                <NB.Container >
                    <HeaderBar
                        onPressLeft={() => this.state.meal ? this.setState({ meal: this.state.meal - 1 }) : goBack()}
                        LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                        Heading={this.state.changeHeader}
                        headerStyle={{ elevation: 0 }}
                        RightItem={<Image source={this.state.meal === 2 ? Icons.checkMark : this.state.meal === 3 ? Icons.checkMark : this.state.meal === 5 ? Icons.checkMark : null} style={{ height: 20, width: 20, resizeMode: "contain" }} />}
                    />

                    <Animated.View
                        style={{
                            height: 5,
                            width: width / 4,//"90%",
                            top: 101,
                            alignItems: "center",
                            // bottom: 0,
                            zIndex: 20,
                            position: "absolute",
                            // transform: [{ translateX: tintPosition }]
                            left: tintPosition
                        }}>
                        {/* {this.state.changeHeader === 'Profile Setting' ?  */}

                        <Image source={Icons.selectedTab} style={{
                            height: 5, width: "90%",
                            //resizeMode: "contain"
                        }} />
                        {/* : null
                                } */}
                    </Animated.View>

                    <NB.Tabs
                        initialPage={this.state.pageNumber}
                        // onChangeTab={({ ref }) => console.warn('Heading', ref.props.heading)}
                        onChangeTab={({ ref }) => {

                            switch (ref.props.heading) {
                                case "SEARCH":
                                    this.setState({
                                        changeHeader: 'Search ' + this.state.section,
                                    }, () => this.animateTabUnderline(0))
                                    break;
                                case "RECENT":
                                    this.setState({
                                        changeHeader: 'Recent Food'
                                    }, () => this.animateTabUnderline(1))
                                    break;
                                case "FAVORITES":
                                    this.setState({
                                        changeHeader: 'Favorites Food'
                                    }, () => this.animateTabUnderline(2))
                                    break;
                                case "MEALS":

                                    this.setState({
                                        changeHeader: 'Food'
                                    }, () => this.animateTabUnderline(3))
                                    break;
                                default:
                                    console.warn('reached to deafult case!') // should never reach here...x
                                    break;
                            }
                        }
                        }
                        tabBarUnderlineStyle={tabBottomLineStyle}
                        textStyle={tabTextStyle}>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            heading="SEARCH">

                            <CenterImageComponent
                                {...this.state.sections}
                                {...this.state.addManually}
                                onPress={() => this.props.navigation.navigate('AddFoodManually', { addManually: addManuallyData[0], section: 'Food' })}
                                navigation={this.props.navigation}
                                barcode={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                    // navigate("Barcode", { goBack: goBack })//this.setState({ bCode: true }) 
                                }}
                            />
                        </NB.Tab>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            heading="RECENT" >
                            <View style={{ flex: 1, }}>

                                {!this.state.emptyScreen ?
                                    <CenterImageComponent
                                        placeholder="Bread"
                                        // barCodeimgSource={Icons.search}
                                        centerImageSource={Icons.meal}
                                        headingText="No You Add Yet!"
                                        centerFirstText="Add Your Food with our"
                                        centerSecondText="Favorite List or your own creations"
                                        buttonText="Show Recent"
                                        onPress={() => this.setState({ emptyScreen: !this.state.emptyScreen })}

                                    />
                                    :
                                    <View style={{ flex: 1 }}>
                                        <View style={tabViewStyle}>
                                            <FormInput
                                                itemStyle={styles.itemStyle}
                                                placeholder="Bread"
                                                iconRight={Icons.search}
                                            />
                                        </View>
                                        <ScrollView>
                                            <View>
                                                {this.state.items && this.state.items.map((data, i) => {
                                                    return (
                                                        <TabList
                                                            key={i}
                                                            {...data}
                                                            RightImagebackgroundSrc={Icons.add}
                                                            addOnClick={() => navigate('AddFoodFromSearch', { data: { name: this.state.section, itemName: data.itemName, quantity: data.quantity, calories: data.calories, type: data.type }, star: false })}

                                                        />
                                                    )
                                                    console.log("items", items)
                                                })
                                                }
                                            </View>
                                        </ScrollView>
                                    </View>
                                }

                            </View>
                        </NB.Tab>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            heading="FAVORITES">
                            <View style={{ flex: 1, }}>
                                {!this.state.emptyScreen1 ?
                                    <CenterImageComponent
                                        placeholder="Bread"
                                        // barCodeimgSource={Icons.search}
                                        centerImageSource={Icons.meal}
                                        headingText="No Favorite You Add Yet!"
                                        centerFirstText="Add Your Favorite Food with our"
                                        centerSecondText="Favorite List or your own creations"
                                        buttonText="Show Favorites"
                                        onPress={() => this.setState({ emptyScreen1: !this.state.emptyScreen1 })}

                                    />
                                    :
                                    <View style={{ flex: 1 }}>
                                        <View style={tabViewStyle}>
                                            <FormInput
                                                itemStyle={styles.itemStyle}
                                                placeholder="Bread"
                                                iconRight={Icons.search}
                                            />
                                        </View>
                                        <ScrollView>
                                            <View>
                                                {this.state.favoriteItems && this.state.favoriteItems.map((data, i) => {
                                                    return (
                                                        <TabList
                                                            key={i}
                                                            {...data}
                                                            RightImagebackgroundSrc={Icons.add}
                                                            addOnClick={() => navigate('AddFoodFromSearch', { data: { name: this.state.section, itemName: data.itemName, quantity: data.quantity, calories: data.calories, type: data.type }, star: true })}

                                                        />
                                                    )
                                                    console.log("favoriteItems", favoriteItems)

                                                })
                                                }
                                            </View>
                                        </ScrollView>
                                    </View>
                                }

                            </View>

                        </NB.Tab>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            heading="MEALS">

                            {/*  FALTO KAAM SHURU  */}

                            {this.state.meal === 0 ?
                                <CenterImageComponent
                                    placeholder="Search Meals"
                                    centerImageSource={Icons.meal}
                                    headingText="No Meal You Add Yet"
                                    centerFirstText=" Add Your Meal With Our"
                                    centerSecondText="Favorite list or your Own Creations"
                                    buttonText="Create Meal"
                                    {...this.state.addManually}
                                    onPress={() => {
                                        this.setState({ meal: this.state.meal + 1 });
                                        this.props.navigation.navigate('AddMealTempFile'); this.setState({ createdMeal: true, meal: this.state.meal + 1, changeHeader: "Search Meal" })
                                    }}
                                // navigation={this.props.navigation}
                                />
                                :
                                this.state.meal === 1 ?
                                    <CreatedMeal
                                        navigate={() =>
                                            this.setState({ meal: this.state.meal + 1, changeHeader: "Create Meal" })
                                            //navigate('AddFoodFromSearch', { meal: true })
                                        } />
                                    :
                                    this.state.meal === 2 ?
                                        <AddMealTempFile
                                            meal={true}
                                            headHide={true}
                                            // back={() => this.setState({ meal: this.state.meal - 1 })}
                                            add={() => this.setState({ meal: this.state.meal + 1 })}
                                        />
                                        : this.state.meal === 3 ?
                                            <AddMealTempFile
                                                pick={true}
                                                meal={true}
                                                headHide={true}
                                                // back={() => this.setState({ meal: this.state.meal - 1 })}
                                                add={() => this.setState({ meal: this.state.meal + 1 })}
                                            />
                                            :
                                            this.state.meal === 4 ?
                                                <CreatedMeal
                                                    last={true}
                                                    meal={true}
                                                    navigate={() =>
                                                        this.setState({ meal: this.state.meal + 1, changeHeader: "Add Meal" })
                                                        //navigate('AddFoodFromSearch', { meal: true })
                                                    }
                                                />
                                                :
                                                <AddMealTempFile
                                                    meal={true}
                                                    headHide={true}
                                                    // back={() => this.setState({ meal: this.state.meal - 1 })}
                                                    add={() => goBack()}
                                                />


                            }

                            {/* 

    FALTO KAAM KHATAM, I MEAN KAFI HAD TK

 */}

                            {/* {!this.state.createdMeal ?
                            <CenterImageComponent
                                placeholder="Search Meals"
                                centerImageSource={Icons.meal}
                                headingText="No Meal You Add Yet"
                                centerFirstText=" Add Your Meal With Our"
                                centerSecondText="Favorite list or your Own Creations"
                                buttonText="Create Meal"
                                {...this.state.addManually}
                                onPress={() => {this.props.navigation.navigate('AddFoodFromSearch'); this.setState({createdMeal: true})
                            }}
                                navigation={this.props.navigation}
                            />
                            : <CreatedMeal navigate={()=> navigate('AddFoodFromSearch', { meal: true })} />} */}
                        </NB.Tab>





                    </NB.Tabs>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { !this.state.modalVisible }}
                    >
                        <View style={{ flex: 1 }}>
                            <BarcodeApp
                                // nav={this.props.navigation}
                                goBack={() => this.setState({ modalVisible: false })}
                            />
                        </View>
                    </Modal>

                </NB.Container >
        )
    }
}
export const ExerciseNav = StackNavigator({
    ExerciseDashboard: {
        screen: ExerciseDashboard,
    },
    Exercise: {
        screen: Exercise,
    },
    AddCardioManually: {
        screen: AddCardioManually
    },
    AddCardio: {
        screen: AddCardio,
    },
    AddStrength: {
        screen: AddStrength,
    },
    AddStrengthManually: {
        screen: AddStrengthManually,
    },
    // CreateWorkoutsNav: {
    //     screen: CreateWorkoutsNav,
    // },
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

export const FoodNav = StackNavigator({
    FoodDashboard: {
        screen: FoodDashboard,
    },
    Food: {
        screen: Food
    },
    AddFoodFromSearch: {
        screen: AddFoodFromSearch
    },
    AddFoodManually: {
        screen: AddFoodManually
    },
    AddMealTempFile: {
        screen: AddMealTempFile
    }
})
export const DashboardNav = StackNavigator({
    Dashboard: {
        screen: Dashboard,
    },
    NutrientDetail: {
        screen: NutrientDetail
    }
})

export const ProgressNav = StackNavigator({
    AddImagePicture: {
        screen: AddImagePicture,
    },
    ApprovePicture: {
        screen: ApprovePicture,
    },
    // AddComment: {
    //     screen: AddComment,
    // },
    Progress: {
        screen: Progress,
    },
     Measurements: {
        screen: Measurements,
    },
    // NutrientDetail: {
    //     screen: NutrientDetail,
    // },
    EditMeasurement: {
        screen: EditMeasurement
    },
    ProgressDashboard: {
        screen: TabNavGallery,
    },
    Measurements: {
        screen: Measurements,
    },
    EditMeasurement: {
        screen: EditMeasurement,
    },
    Chat: {
        screen: Chat
    }
})



const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    insideCircleCenter: {
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: Fonts.medium,
        color: 'black',
    },
    tabViewStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: 'center',
        width: width * 0.95,
        height: height * 0.08,
        // zIndex: 200
    },
    tabInsideView: {
        width: width,
        height: height * 0.54,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageViewStyle: {
        height: height * 0.23,
        width: width * 0.3
    },
    barCodeImageStyle: {
        width: width * 0.09,
        height: height * 0.1,
        resizeMode: 'contain'
    },
    centerTabStyle: {
        height: height * 0.11,
        width: width * 0.8,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    centerImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    activeTabTextStyle: {
        fontFamily: Fonts.medium,
        color: '#4D4EEB',
        fontSize: 13
    },
    activeTabTextStyleExer: {
        fontFamily: Fonts.medium,
        color: '#FF78A4',
        fontSize: 13
    },
    tabTextStyle: {
        fontFamily: Fonts.medium,
        color: '#8DAAB9',
        fontSize: 13
    },
    activeTabBackgroundStyle: {
        backgroundColor: 'white',
    },
    tabBottomLineStyle: {
        backgroundColor: 'transparent',
        width: '22%',
        marginHorizontal: 5
    },
    tabBottomLineStyleExer: {
        backgroundColor: 'transparent',
        width: '22%',
        marginHorizontal: 5
    },
    textAfterImage: {
        fontFamily: Fonts.book,
        textAlign: 'center',
        color: '#8DAAB9',
        fontSize: 12,
    },
    HeadingTextafterImage: {
        fontFamily: Fonts.bold,
        letterSpacing: 25,
        textAlign: 'center',
        color: '#8DAAB9',
        fontSize: 15,
    },
    ViewOfText: {
        justifyContent: 'space-around',
        height: height * 0.06,
    },
    viewOfButton: {
        height: height * 0.15,
        paddingTop: 1
    },
    itemStyle: {
        width: width * 0.95,
        height: '60%'
    }
})
