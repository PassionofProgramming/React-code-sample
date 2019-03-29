import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,Modal, ScrollView, Image, ImageBackground, TouchableOpacity, ART } from 'react-native'
import * as NB from 'native-base';
import Card from '../common/card';
import { HeaderBar } from "../common/header"
import ActionButton from '../ActionButton/index';
import Fab from '../common/fab';
import TipOne from '../appTip/tipone';
import ExerciseFab from '../common/exerciseFab';
import Button from '../common/FormButton/';
import ProgressBar from '../common/circularProgress/ProgressBar';
import { Fonts, Icons, Images } from '../../config/index';
import { MicroBar } from './microBar';
import { StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
// import SvgImage from 'react-native-remote-svg'
import Menu, {
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'reat-native-popup-menu';

const {
    Surface,
    Shape,
    Group,
    Path,
    ClippingRectangle,
    LinearGradient,
    RadialGradient,
    Pattern,
    Transform
} = ART


const { height, width, fontScale, scale } = Dimensions.get('window');

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            //MainDashboard
            eaten: 675,
            burned: 457,
            totalCalories: 2616,
            tokeCalories: 1831,
            // MicroBars
            carbs: 50,
            protein: 30,
            fat: 40,
            carbs2: 80,
            protein2: 65,
            cholesterol: 40,
            modalVisible: false,
            totalCarbs: 256,
            totalProtein: 104,
            totalFat: 56,
            totalCarbs2: 256,
            totalProtein2: 104,
            totalCholesterol: 56,

            // WaterIntake
            liter: Number(1250),
            intakeValue: "Liter",
            openedMenu: false,
            glass: 10,

            week: [
                {
                    "DAY": "Mon",
                    "DATE": 10,
                    "Done": false,
                    "MARKED": false,
                },
                {
                    "DAY": "Tues",
                    "DATE": 11,
                    "Done": false,
                    "MARKED": false,
                },
                {
                    "DAY": "Wed",
                    "DATE": 12,
                    "Done": false,
                    "MARKED": true,
                },
                {
                    "DAY": "Thrs",
                    "DATE": 13,
                    "Done": false,
                    "MARKED": false,
                },
                {
                    "DAY": "Fri",
                    "DATE": 14,
                    "Done": false,
                    "MARKED": false,
                },
                {
                    "DAY": "Sat",
                    "DATE": 15,
                    "Done": false,
                    "MARKED": false,
                },
                {
                    "DAY": "Sun",
                    "DATE": 16,
                    "Done": false,
                    "MARKED": false,
                },

            ],
            data: [
                {
                    month: new Date(2018, 0, 1),
                    apples: 2350,
                },
                {
                    month: new Date(2018, 1, 1),
                    apples: 2550,
                },
                {
                    month: new Date(2018, 2, 1),
                    apples: 2140,
                },
                {
                    month: new Date(2018, 3, 1),
                    apples: 2800,
                }
            ],
            sourceColor: { 'apples': '#5AD6F5', } //'bananas': '#fff', 'cherries': '#5AD6F5', 'dates': '#BBDEFB' }
        }
    }
    
    static navigationOptions = {
        header: null
    };

    day(i) {
        let state = this.state.week.slice(0);
        for (let x in state) {
            state[x].MARKED = false;
        }
        state[i].MARKED = true;
        this.setState({ week: state })
    }


    changeFillFillColor = (data, change) => {
        let ap = 0
        data = data.map((val) => {
            let a = {};
            Object.keys(val).map((v, i) => {
                if (v !== 'month') {
                    a[v] = val[v] + change[i]
                }
            })
            return a
        })
        console.log(data)
        this.setState({ data })
    }

      componentDidMount() {
       this.setState({ modalVisible: true });

    }

  nav() {
         this.props.navigation.navigate("NutrientDetail") 
    }


    render() {
        // const { data, sourceColor } = this.state
        const {
            carbs,
            protein,
            fat,
            carbs2,
            protein2,
            cholesterol,

            totalCarbs,
            totalProtein,
            totalFat,
            totalCarbs2,
            totalProtein2,
            totalCholesterol
        } = this.state

        let microBars = {
            carbs: carbs / totalCarbs * 100,
            protein: protein / totalProtein * 100,
            fat: fat / totalFat * 100,
            carbs2: carbs2 / totalCarbs2 * 100,
            protein2: protein2 / totalProtein2 * 100,
            cholesterol: cholesterol / totalCholesterol * 100,

        }

        const s = a => scale * a;
        let linearGradient = new LinearGradient([
            '#735FFB' //"#fff" //'#AB98fD'
            , '#AB98fD'
        ], s(1), s(8), s(1), s(1))

        let linearGradient1 = new LinearGradient(['#c9beee', '#a7d1f0'], s(1), s(25), s(25), s(30))
        let linearGradient2 = new LinearGradient(['#fd9072', '#fc5e59'], s(1), s(25), s(25), s(30))
        let linearGradient3 = new LinearGradient(['#9aea63', '#62c21c'], s(1), s(25), s(25), s(30))
        let linearGradient4 = new LinearGradient(['#4ef1b9', '#31aeb2'], s(1), s(25), s(25), s(30))
        let linearGradient5 = new LinearGradient(['#FCC003', '#EBA924'], s(1), s(25), s(25), s(30))
        let linearGradient6 = new LinearGradient(['#D794E1', '#C087F5'], s(1), s(25), s(25), s(30))

        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => navigate("WelcomeComponent")}
                    headerStyle={{ elevation: 0 }}
                    LeftItem={<View />}
                    Heading={'Dashboard'}
                    statusbarColor="#4D4EEB"
                    RightItem={<Image source={Icons.bell} style={styles.headerRightIcon} />}/>
                <ScrollView>

                 <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { !this.state.modalVisible }}
                >
                    <View style={{ flex: 1 }}>
                       <TipOne  nav={this.props.navigation}
                            setState={(...a) => this.setState(...a)}/>
                    </View>
                </Modal>

                    <View style={styles.mainContainer}>
                        <View style={styles.afterMainContainer}>
                            <View style={styles.calenderContainer}>
                                <ScrollView
                                    horizontal={true}
                                >
                                    {
                                        this.state.week.map((data, i) => {
                                            return (
                                                <TouchableOpacity key={i} activeOpacity={1} onPress={() => this.day(i)}>
                                                    <View style={{
                                                        width: width / 7, height: "100%", backgroundColor: "white", justifyContent: "flex-end", borderBottomRightRadius: i === (this.state.week.length - 1) ? 0 : (this.state.week[(i < this.state.week.length - 1) ? i + 1 : 0].MARKED ? 10 : 0), borderBottomLeftRadius: i === 0 ? 0 : (this.state.week[(i > 0) ? i - 1 : 0].MARKED ? 10 : 0)
                                                    }}>
                                                        <View key={i} style={{
                                                            width: width / 7, height: "100%", backgroundColor: data.MARKED ? "#AB98fD" : "white", justifyContent: "center", alignItems: "center", borderTopRightRadius: data.MARKED ? 10 : 0, borderTopLeftRadius: data.MARKED ? 10 : 0,
                                                            borderBottomLeftRadius: data.MARKED ? 0 : 10, borderBottomRightRadius: data.MARKED ? 0 : 10
                                                        }}>
                                                            <View style={{ height: `${100 / 3.7}%`, justifyContent: "center" }}>
                                                                <Text style={{ color: data.MARKED ? "white" : "#8DAAB9", fontSize: fontScale * 11, fontFamily: Fonts.book }}>{data.DAY}</Text>
                                                            </View>
                                                            <View style={{ height: `${100 / 3.7}%`, justifyContent: "center" }}>

                                                                <Text style={{ color: data.MARKED ? "white" : "black", fontSize: fontScale * 14, fontFamily: Fonts.black }}>{data.DATE}</Text>
                                                            </View>
                                                            <View style={{ height: `${100 / 3.7}%`, justifyContent: "center" }}>
                                                                <Image
                                                                    source={i === 0 ? Icons.cross : i === 1 ? Icons.tick : data.MARKED ? Icons.whiteDot : Icons.purpleDot}
                                                                    style={{ height: 7, width: 10, resizeMode: 'contain' }}
                                                                />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>
                            <View
                                style={[{ alignItems: 'center', width, height: "85%", overflow: "hidden", justifyContent: "space-between", borderRadius: 15, borderTopLeftRadius: this.state.week[0].MARKED ? 0 : 15, borderTopRightRadius: this.state.week[this.state.week.length - 1].MARKED ? 0 : 15, },
                                {
                                }]}
                            >
                                <Surface width={width} height={(height * 0.62) * 0.85}
                                    style={{ position: "absolute" }}
                                >
                                    <Shape
                                        d="M188,233H0.5V0.5H188V233z"
                                        transform={new Transform().transformTo(
                                            width / 100,
                                            0,
                                            0,
                                            height / 100,
                                            -(width / 100 * 0.5),
                                            -(height / 100 * 0.5),
                                            position = 'absolute',
                                        )}
                                        fill={linearGradient}
                                    />
                                </Surface>

                                <View style={styles.eatenTextContainer}>
                                    <View style={styles.topContainerinCalender}>

                                        <View style={styles.iconContainer}>
                                            <Image source={Icons.restaurantWhite} style={styles.topIconStyle} resizeMode="contain" />
                                            <Text style={styles.numberStyle}>{this.state.eaten}</Text>
                                            <Text style={styles.textStyle}>EATEN</Text>
                                        </View>
                                        <View style={styles.iconContainer}>
                                            <Image source={Icons.fireWhite} style={styles.topIconStyle} resizeMode="contain" />
                                            <Text style={styles.numberStyle}>{this.state.burned}</Text>
                                            <Text style={styles.textStyle}>BURNED</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* <Animated.Text
                                        style={[styles.headerText, { color: textColor, }]}
                                            >
                                      {'1211'}
                                    </Animated.Text> */}
                                <View style={styles.circularBarTopContainer}>
                                    <View style={styles.circularProgressContainer}>
                                        <ProgressBar
                                            // title={""}
                                            backgroundColor="#9fa0ff"
                                            showRemainingValue={true}       // boolean , default is false
                                            circularSize={"extraLarge"}     // "extraLarge" || "large" || "small" , default is "small"
                                            titleBottom={"REMAINING"}
                                            titleBold={true}
                                            titleSize={12}
                                            titleColor={"white"}
                                            numberSize={35}
                                            numberColor={"white"}
                                            totalFill={Number(this.state.totalCalories)}
                                            fill={Number(this.state.tokeCalories)}
                                            progressFirstColor={[2, 236, 255]}
                                            progressSecondColor={[255, 243, 141]}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={styles.calenderBottomContainer}
                                >
                                    <View style={styles.calenderBottomView}>
                                        <MicroBar
                                            heading={"CARBS"}
                                            barMainView={styles.barMainView}
                                            barTextOne={styles.barTextOne}
                                            barBorder={styles.barBorder}
                                            width={microBars.carbs}
                                            linearGradient={linearGradient1}
                                            barTextTwo={styles.barTextTwo}
                                            barFilled={styles.barFilled}
                                            left={totalCarbs}
                                        />

                                        <MicroBar
                                            heading={"PROTEIN"}
                                            barMainView={styles.barMainView}
                                            barTextOne={styles.barTextOne}
                                            barBorder={styles.barBorder}
                                            width={microBars.protein}
                                            linearGradient={linearGradient2}
                                            barTextTwo={styles.barTextTwo}
                                            barFilled={styles.barFilled}
                                            left={totalProtein}
                                        />
                                        <MicroBar
                                            heading={"FATS"}
                                            barMainView={styles.barMainView}
                                            barTextOne={styles.barTextOne}
                                            barBorder={styles.barBorder}
                                            width={microBars.fat}
                                            linearGradient={linearGradient3}
                                            barTextTwo={styles.barTextTwo}
                                            barFilled={styles.barFilled}
                                            left={totalFat}
                                        />
                                    </View>

                                    <View style={styles.progressSlider}>

                                        <MicroBar
                                            heading={"SUGAR"}
                                            barMainView={styles.barMainView}
                                            barTextOne={styles.barTextOne}
                                            barBorder={styles.barBorder}
                                            width={microBars.carbs2}
                                            linearGradient={linearGradient4}
                                            barTextTwo={styles.barTextTwo}
                                            barFilled={styles.barFilled}
                                            left={totalCarbs2}
                                        />
                                        <MicroBar
                                            heading={"SODIUM"}
                                            barMainView={styles.barMainView}
                                            barTextOne={styles.barTextOne}
                                            barBorder={styles.barBorder}
                                            width={microBars.protein2}
                                            linearGradient={linearGradient5}
                                            barTextTwo={styles.barTextTwo}
                                            barFilled={styles.barFilled}
                                            left={totalProtein2}
                                        />
                                        <MicroBar
                                            heading={"CHOLESTEROL"}
                                            barMainView={styles.barMainView}
                                            barTextOne={styles.barTextOne}
                                            barBorder={styles.barBorder}
                                            width={microBars.cholesterol}
                                            linearGradient={linearGradient6}
                                            barTextTwo={styles.barTextTwo}
                                            barFilled={styles.barFilled}
                                            left={totalCholesterol}
                                        />
                                    </View>
                                    <Text onPress={this.nav.bind(this)} style={styles.centerTextStyle}>DETAILS</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.centerViewStyle}>
                            <View style={styles.centerViewTextContainer}>
                                <Text style={styles.title}>Water Intake</Text>
                                <TouchableOpacity onPress={() => {
                                    // alert("in progress")
                                    this.setState({ openedMenu: !this.state.openedMenu })
                                }}>
                                    {
                                        this.state.openedMenu ?
                                            <Menu
                                                opened={this.state.openedMenu}
                                                onBackdropPress={() => this.setState({ openedMenu: !this.state.openedMenu }) //this.onBackdropPress
                                                }
                                                onSelect={value => this.setState({ openedMenu: !this.state.openedMenu, intakeValue: value, })//this.onOptionSelect(value)
                                                }>
                                                <MenuTrigger
                                                    onPress={() => this.setState({ openedMenu: !this.state.openedMenu })//this.onTriggerPress()
                                                    }>
                                                    <Image source={Icons.greyMenu} style={styles.verticalMenuImageStyle} />
                                                </MenuTrigger>
                                                <MenuOptions
                                                    style={{ height: 80 }}
                                                >
                                                    <MenuOption
                                                        style={{ height: 40, justifyContent: "center" }} value="Liter">
                                                        <Text style={{ color: '#8DAAB9', fontFamily: Fonts.book, fontSize: 16 }}>Liter of water</Text>
                                                    </MenuOption>
                                                    <MenuOption
                                                        style={{ height: 40, justifyContent: "center" }} value="Glass">
                                                        <Text style={{ color: '#8DAAB9', fontFamily: Fonts.book, fontSize: 16 }}>Glass of water</Text>
                                                    </MenuOption>
                                                </MenuOptions>
                                            </Menu>
                                            :
                                            <Image source={Icons.greyMenu} style={styles.verticalMenuImageStyle} />
                                    }
                                    {/* <Image source={Icons.greyMenu} style={styles.verticalMenuImageStyle} /> */}
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: height * 0.4, justifyContent: 'space-around' }}>
                                {this.state.intakeValue === "Liter" ?
                                    <View style={styles.centerViewImage}>
                                        <ImageBackground source={Icons.waterFlow} style={styles.circularView}>
                                        </ImageBackground>

                                        {/* <StackedAreaChart
                                        style={{ height: 200, width: 200, borderRadius: 100, borderWidth: 1, borderColor: '#8DAAB9', overflow: 'hidden', }}
                                        data={data}
                                        keys={Object.keys(sourceColor)}
                                        colors={Object.values(sourceColor)}
                                        curve={shape.curveNatural}
                                        showGrid={false}
                                    /> */}
                                    </View>
                                    :

                                    <View style={{ height: height * 0.20, width: width * 0.9, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>

                                        <TouchableOpacity
                                            onPress={
                                                //     this.state.intakeValue === "Liter" ? () => {
                                                //     // alert("in progress")
                                                //     Number(this.state.liter.toFixed(0)) !== Number(0) && this.setState({ liter: this.state.liter - Number(50) })
                                                //     // { this.changeFillFillColor(data, Object.keys(data[0]).map(a => -Math.round(Math.random() * 100 + 250))) }
                                                // } : 
                                                () => this.state.glass !== 0 && this.setState({ glass: this.state.glass - 1 }, () => Number(this.state.liter.toFixed(0)) !== Number(0) && this.setState({ liter: this.state.liter - Number(125) }))}

                                            activeOpacity={0.5}
                                            style={styles.glassfabStyle}>
                                            <NB.Icon name="remove" style={[styles.iconStyle, { color: "#8DAAB9" }]} />
                                        </TouchableOpacity>

                                        <Image source={Icons.glass} style={{ height: 120, width: 120, resizeMode: "contain" }} />

                                        <TouchableOpacity
                                            onPress={
                                                // this.state.intakeValue === "Liter" ? () => {
                                                //     Number(this.state.liter.toFixed(0)) !== Number(1500) && this.setState({ liter: this.state.liter + Number(50) })
                                                //     // { this.changeFillFillColor(data, Object.keys(data[0]).map(a => +Math.round(Math.random() * 100 + 250))) }
                                                // } :
                                                () => this.state.glass !== 12 && this.setState({ glass: this.state.glass + 1 }, () => Number(this.state.liter.toFixed(0)) !== Number(1500) && this.setState({ liter: this.state.liter + Number(125) }))}
                                            activeOpacity={0.5}

                                            style={styles.glassfabStyle}>
                                            <NB.Icon name="add" style={[styles.iconStyle, { color: "#40bc40" }]} />
                                        </TouchableOpacity>

                                    </View>
                                }
                                <View style={{ alignItems: "center", }}>
                                    <Text style={[styles.title, this.state.intakeValue === "Glass" ? { fontSize: fontScale * 24, fontFamily: Fonts.book } : {}]}><Text style={styles.boldTextStyle}>{this.state.intakeValue === "Liter" && 1.5}</Text>{this.state.intakeValue === "Liter" ? " Liter" : this.state.glass + " / " + 12}</Text>
                                    <Text style={[{ fontFamily: Fonts.book }, this.state.intakeValue === "Glass" ? { fontSize: fontScale * 20 } : {}]}>{Number(this.state.liter).toFixed(0) + " ML"}</Text>
                                </View>
                            </View>
                        </View>

                        {this.state.intakeValue === "Liter" ?
                            <View style={styles.fabContainer}>

                                <TouchableOpacity
                                    onPress={
                                        //this.state.intakeValue === "Liter" ? 
                                        () => {
                                            this.state.glass !== 0 && this.setState({ glass: this.state.glass - 1 }, () => Number(this.state.liter.toFixed(0)) !== Number(0) && this.setState({ liter: this.state.liter - Number(125) }))
                                            //Number(this.state.liter.toFixed(0)) !== Number(0) && this.setState({ liter: this.state.liter - Number(50) })
                                        }
                                        // : () => this.state.glass !== 0 && this.setState({ glass: this.state.glass - 1 })
                                    }
                                    activeOpacity={0.5}
                                    style={styles.fabStyle}>
                                    <NB.Icon name="remove" style={[styles.iconStyle, { color: "#8DAAB9" }]} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={
                                        // this.state.intakeValue === "Liter" ? 
                                        () => {
                                            this.state.glass !== 12 && this.setState({ glass: this.state.glass + 1 }, () => Number(this.state.liter.toFixed(0)) !== Number(1500) && this.setState({ liter: this.state.liter + Number(125) }))
                                            // Number(this.state.liter.toFixed(0)) !== Number(1500) && this.setState({ liter: this.state.liter + Number(50) })
                                        }
                                        //: () => this.state.glass !== 8 && this.setState({ glass: this.state.glass + 1 })
                                    }
                                    activeOpacity={0.5}
                                    style={styles.fabStyle2}>
                                    <NB.Icon name="add" style={[styles.iconStyle, { color: "#40bc40" }]} />
                                </TouchableOpacity>
                            </View>
                            : null
                        }
                        {/* <View style={{ height: height * 0.1, width: width * 0.8, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 10 }}> */}
                        <View style={{ height: height * 0.1 }}>
                            {/* <Text style={styles.title}>Articles</Text>
                            <Image source={Icons.horizontalMenu} style={{ height: 25, width: 25, resizeMode: 'contain', }} /> */}
                        </View>
                        {/* <View style={{ height: height * 0.4, backgroundColor: '#fff', width: width * 0.9, alignSelf: 'center', borderRadius: 10, alignItems: 'center' }}>
                            <View style={{ height: height * 0.07, width: width * 0.8, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Swiper style={styles.wrapper}
                                    dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                    activeDot={<View style={{ backgroundColor: '#bbb', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                                    paginationStyle={{
                                        // bottom: 70
                                    }}
                                    loop={false}>
                                    <View style={styles.slide}>
                                        <Image
                                            style={styles.image}
                                            source={Images.dp3}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.slide}>
                                        <Image
                                            style={styles.image}
                                            source={Images.dp1}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.slide}>
                                        <Image style={styles.image} source={Images.dp2} />
                                    </View>
                                </Swiper>
                            </View>
                        </View> */}
                    </View>

                </ScrollView>
            </View >
        );
    }
}
export default Dashboard;
Dashboard.router = Fab.router
Dashboard.router = ExerciseFab.router
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    afterMainContainer: {
        height: height * 0.62,
        backgroundColor: "white"
    },
    calenderContainer: {
        height: "15%",
        flexDirection: "row",
        backgroundColor: "#AB98fD"
    },
    eatenTextContainer: {
        height: "30%",
        width: "100%",
        justifyContent: "flex-end"
    },
    topContainerinCalender: {
        flexDirection: "row",
        height: "95%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },//backgroundColor: "yellow" }
    iconContainer: {
        width: "30%",
        height: "80%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    numberStyle: {
        fontFamily: Fonts.latoLight,
        fontSize: fontScale * 28,
        color: "white"
    },
    textStyle: {
        fontFamily: Fonts.black,
        fontSize: fontScale * 12,
        color: "white"
    },
    topIconStyle: {
        height: "30%",
        width: "35%"
    },
    circularBarTopContainer: {
        width: '40%',
        height: '30%',
        position: "absolute",
        justifyContent: "center",
        alignItems: 'center'
    },
    circularProgressContainer: {
        height: height / 3.5,
        marginTop: height / 3.5 / 1.8,
        width: width
    },
    calenderBottomContainer: {
        alignItems: 'center', //backgroundColor: "red", 
        height: "60%",
        justifyContent: "flex-end"
    },
    calenderBottomView: {
        flexDirection: "row",
        height: "30%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    progressSlider: {
        flexDirection: "row",
        height: "30%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    barMainView: {
        width: "30%",
        height: "70%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    barTextOne: {
        fontFamily: Fonts.medium,
        fontSize: fontScale * 10,
        color: "white"
    },
    barTextTwo: {
        fontFamily: Fonts.latoLight,
        fontSize: fontScale * 10,
        color: "white"
    },
    barBorder: {
        height: 5,
        width: "60%",
        justifyContent: "center",
    },
    barFilled: {
        justifyContent: "center",
        height: 6,
        width: "80%",
        borderRadius: 5,
        overflow: "hidden",

        position: "absolute",
        zIndex: 20,
        elevation: 0.5
    },
    headerRightIcon: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        justifyContent: 'center',
        fontSize: fontScale * 20,
        fontFamily: Fonts.medium,
        color: 'black',
    },
    fabStyle: {
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: (width * 0.13) / -2,
        zIndex: 20,
        alignSelf: "flex-end",
        marginHorizontal: (width * 0.13) / 3,
        elevation: 2
    },
    glassfabStyle: {
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        // marginVertical: (width * 0.13) / -2,
        marginTop: '10%',
        zIndex: 20,
        // alignSelf: "flex-end",
        // marginHorizontal: (width * 0.13) / 3,
        elevation: 2
    },
    fabStyle2: {
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: (width * 0.13) / -2,
        zIndex: 20,
        alignSelf: "flex-start",
        marginHorizontal: (width * 0.13) / 3,
        elevation: 2
    },
    glassfabStyle2: {
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
        // marginVertical: (width * 0.13) / -2,
        marginVertical: '34%',
        zIndex: 20,
        alignSelf: "flex-start",
        marginHorizontal: (width * 0.13) / 3,
        elevation: 2
    },
    iconStyle: {
        fontWeight: "bold",

    },
    centerTextStyle: {
        paddingBottom:10,
        fontFamily: Fonts.bold,
        fontSize: fontScale * 13,
         color: "white"
    },
    centerViewStyle: {
        height: height * 0.5,
        backgroundColor: '#fff',
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "space-around",
        marginVertical: '5%',
        elevation: 1,
        zIndex: 1
    },
    centerViewTextContainer: {
        height: height * 0.05,
        width: width * 0.85,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    verticalMenuImageStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    centerViewImage: {
        width: width * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circularView: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: '#8DAAB9',
        borderWidth: 0.8,
        elevation: 2,
        zIndex: 2,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: '#5AD6F5',
        // shadowOpacity: 1,
    },
    boldTextStyle: {
        fontFamily: Fonts.black,
        fontSize: fontScale * 21
    },
    fabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: '-5%',
    }
    // wrapper: {
    //     // backgroundColor: '#f00'
    // },

    // slide: {
    //     flex: 1,
    //     backgroundColor: 'transparent'
    // },
    // container: {
    //     flex: 1,
    // },

    // imgBackground: {
    //     width: 60,
    //     height: 60,
    //     backgroundColor: 'transparent',
    //     // position: 'absolute'
    // },

    // image: {
    //     width: 60,
    //     height: 60,
    //     resizeMode: 'contain'
    // }
})
