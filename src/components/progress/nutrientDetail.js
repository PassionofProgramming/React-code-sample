import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import {  TouchableOpacity,ART} from 'react-native';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, Animated, Alert, Modal } from 'react-native';import * as NB from 'native-base';
import Card from '../common/card';
import NutrientTabs from './nutrientTabs';
import CardSection from '../common/cardSection';
import { HeaderBar } from "../common/header"
import ActionButton from '../ActionButton/index';
import Fab from '../common/fab';
import ProgressBar from '../common/circularProgress/ProgressBar';
import { Icons, Fonts,Images } from '../../config/index';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import Dash from 'react-native-dash';
// var DashedBorder = require('react-native-dashed-border');
// import SegmentTab from 'react-native-segment-tab'
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
 class NutrientDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            modalVisible: false,
            changeHeader: 'Nutrient Details',
            emptyScreen: false,
            weekly:false,
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
                placeholder: "Nutrient Details",
                barCodeimgSource: Icons.barCode,
                centerImageSource: Icons.breakfast,
                headingText: "No Breakfast Add Yet!",
                centerFirstText: "  Add Your Breakfast with our ",
                centerSecondText: "Favorite recipes or your own creations",
                buttonText: "Add Food Manually",
            },
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
                changeHeader: 'Nutrient Details',
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


  weekLyClick(){
   this.setState({ weekly: true });
  }

    render() {
        const { container, actionButtonIcon, insideCircleCenter, tabViewStyle, tabInsideView, imageViewStyle, centerTabStyle, viewOfButton, barCodeImageStyle, ViewOfText, centerImageStyle, HeadingTextafterImage, activeTabTextStyle, tabTextStyle, activeTabBackgroundStyle, tabBottomLineStyle, textAfterImage } = styles;
        const { navigate, goBack } = this.props.navigation;


        const tintPosition = this.tintPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width / 2],
        })


        return (


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
                            width: width / 2,//"90%",
                            top: 101,
                            alignItems: "center",
                            // bottom: 0,
                            zIndex: 20,
                            position: "absolute",
                            // transform: [{ translateX: tintPosition }]
                            left: tintPosition
                        }}>

                        <Image source={Icons.selectedTab} style={{
                            height: 5, width: "90%",
                            //resizeMode: "contain"
                        }} />
                    </Animated.View>

                    <NB.Tabs
                        initialPage={this.state.pageNumber}
                        // onChangeTab={({ ref }) => console.warn('Heading', ref.props.heading)}
                        onChangeTab={({ ref }) => {

                            switch (ref.props.heading) {
                                case "NUTRIENTS":
                                    this.setState({
                                        changeHeader: 'Nutrient Details',
                                    }, () => this.animateTabUnderline(0))
                                    break;
                                case "MACROS":
                                    this.setState({
                                        changeHeader: 'Nutrient Details'
                                    }, () => this.animateTabUnderline(1))
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
                            heading="NUTRIENTS">

                        <View style={{margin:30,padding:3,flexDirection:"row",borderRadius:30,borderWidth:1,borderColor:"#ccc"}}>
                        <TouchableOpacity  activeOpacity={1} style={[styles.weekwhite, this.state.weekly ? styles.blueBtn : null]}>
                            <Text style={{  fontSize: fontScale * 12,color:"white" ,fontFamily: Fonts.black }}>Today</Text>
                        </TouchableOpacity>
                         <TouchableOpacity   onPress={this.weekLyClick.bind(this)} activeOpacity={1} 
                         style={[styles.weekwhite, this.state.weekly ? styles.blueBtn : null]}>
                            <Text style={{  fontSize: fontScale * 12,color:"#8DAAB9" ,alignItems:"center",fontFamily: Fonts.black }}>Weekly</Text>
                        </TouchableOpacity>
                        </View>

                        <ScrollView>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}></Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>Today</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>Goal</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>Left</Text>
                        </View>
                          <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"45%",fontFamily: Fonts.black }}>Total Fat(g)</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>36</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>49</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"15%",fontFamily: Fonts.black }}>13</Text>
                        </View>
                        <Dash dashColor="#4D4EEB" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Saturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>16</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>11</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"45%",fontFamily: Fonts.black }}>Total Fat(g)</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>36</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>49</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"15%",fontFamily: Fonts.black }}>13</Text>
                        </View>
                        <Dash dashColor="#4D4EEB" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Saturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>16</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>11</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                          <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"45%",fontFamily: Fonts.black }}>Total Fat(g)</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>36</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>49</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"15%",fontFamily: Fonts.black }}>13</Text>
                        </View>
                        <Dash dashColor="#4D4EEB" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Saturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>16</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>11</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"45%",fontFamily: Fonts.black }}>Total Fat(g)</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>36</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.black }}>49</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"15%",fontFamily: Fonts.black }}>13</Text>
                        </View>
                        <Dash dashColor="#4D4EEB" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Saturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>16</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>11</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 12,width:"45%",fontFamily: Fonts.black }}>Polyunsaturated Fat</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>4</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"20%",fontFamily: Fonts.black }}>0</Text>
                           <Text style={{  fontSize: fontScale * 12,width:"15%",fontFamily: Fonts.black }}>-5</Text>
                        </View>
                        
                        </ScrollView>
                        </NB.Tab>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            heading="MACROS" >
                        <View style={{margin:30,padding:3,flexDirection:"row",borderRadius:30,borderWidth:1,borderColor:"#ccc"}}>
                        <TouchableOpacity  activeOpacity={1} style={{backgroundColor:"#4D4EEB",alignItems:"center",padding:10,width:"50%",borderRadius:30}}>
                            <Text style={{  fontSize: fontScale * 12,color:"white" ,fontFamily: Fonts.black }}>Today</Text>
                        </TouchableOpacity>
                         <TouchableOpacity  activeOpacity={1} style={{alignItems:"center",padding:10,width:"50%",borderRadius:30}}>
                            <Text style={{  fontSize: fontScale * 12,color:"#8DAAB9" ,alignItems:"center",fontFamily: Fonts.black }}>Weekly</Text>
                        </TouchableOpacity>
                        </View>


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

                         <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"5%",fontFamily: Fonts.black }}></Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"55%",fontFamily: Fonts.black }}></Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#000",width:"20%",fontFamily: Fonts.black }}>Total</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#000",width:"20%",fontFamily: Fonts.black }}>Goal</Text>
                        </View>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <View style={{ backgroundColor:"#e14350",borderRadius:3,padding:3,width:"5%"}}></View>
                           <Text style={{  fontSize: fontScale * 12,paddingLeft:10,color:"#000",width:"55%",fontFamily: Fonts.black }}>Fat(10g)</Text>
                          
                           <Text style={{  fontSize: fontScale * 12,color:"#8DAAB9",width:"20%",fontFamily: Fonts.latoThin }}>57%</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.latoThin }}>50%</Text>
                        </View>

                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <View style={{ backgroundColor:"#2293e1",borderRadius:3,padding:3,width:"5%"}}></View>
                           <Text style={{  fontSize: fontScale * 12,paddingLeft:10,color:"#000",width:"55%",fontFamily: Fonts.black }}>Carbohydrates(10g)</Text>
                          
                           <Text style={{  fontSize: fontScale * 12,color:"#8DAAB9",width:"20%",fontFamily: Fonts.latoThin }}>16%</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.latoThin }}>30%</Text>
                        </View>

                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <View style={{ backgroundColor:"#87c030",borderRadius:3,padding:3,width:"5%"}}></View>
                           <Text style={{  fontSize: fontScale * 12,paddingLeft:10,color:"#000",width:"55%",fontFamily: Fonts.black }}>Protein(10g)</Text>
                          
                           <Text style={{  fontSize: fontScale * 12,color:"#8DAAB9",width:"20%",fontFamily: Fonts.latoThin }}>27%</Text>
                           <Text style={{  fontSize: fontScale * 12,color:"#4D4EEB",width:"20%",fontFamily: Fonts.latoThin }}>20%</Text>
                        </View>


                      
                        </NB.Tab>

                    </NB.Tabs>

                </NB.Container >
        )
    }
}
export default NutrientDetail;
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
    weekwhite:{
     alignItems:"center",padding:10,width:"50%",borderRadius:30
    },
    blueBtn:{
      backgroundColor:"#4D4EEB"
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
