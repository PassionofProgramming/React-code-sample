import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import {  TouchableOpacity,ART} from 'react-native';
import { View, Image, StyleSheet, Text,Easing, Dimensions, ScrollView, Animated, Alert, Modal } from 'react-native';import * as NB from 'native-base';
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
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PieChart from 'react-native-pie-chart';
// import Pie from "react-native-animated-pie";
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

const s = a => scale * a;
const { height, width, fontScale,scale } = Dimensions.get('window');

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
            today:true,
            emptyScreen1: false,
            emptyScreen2: false,
            createdMeal: false,
            totalCalories: 2616,
            tokeCalories: 2616,
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
   this.setState({ weekly: true,today:false });
  }
   todayClick(){
   this.setState({ weekly: false,today:true });
  }

    render() {
        const { container, actionButtonIcon, insideCircleCenter, tabViewStyle, tabInsideView, imageViewStyle, centerTabStyle, viewOfButton, barCodeImageStyle, ViewOfText, centerImageStyle, HeadingTextafterImage, activeTabTextStyle, tabTextStyle, activeTabBackgroundStyle, tabBottomLineStyle, textAfterImage } = styles;
        const { navigate, goBack } = this.props.navigation;


        const tintPosition = this.tintPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width / 2],
        })
         let linearGradient = new LinearGradient(['#9c0722', '#e14350'], s(15), s(20), s(30), s(2.5))
          let linearGradient1 = new LinearGradient(['#a0cf34', '#87bd2f'], s(15), s(20), s(30), s(2.5))
           let linearGradient2 = new LinearGradient(['#f9cc65', '#f7a44e'], s(15), s(20), s(30), s(2.5))

        const chart_wh = 150
        const series = [57, 27, 16] 
        const sliceColor = [linearGradient,linearGradient1,linearGradient2]



        return (


                <NB.Container >
                    <HeaderBar
                        onPressLeft={() => this.state.meal ? this.setState({ meal: this.state.meal - 1 }) : goBack()}
                        LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                        Heading={this.state.changeHeader}
                        headerStyle={{ elevation: 0}}
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
                            height: 5, width: "100%",
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
                        <TouchableOpacity  onPress={this.todayClick.bind(this)} activeOpacity={1} style={[styles.weekwhite, this.state.today ? styles.blueBtn : null]}>
                            <Text style={[styles.weektextwhite,this.state.today ? styles.whiteText : styles.clrText]}>Today</Text>
                        </TouchableOpacity>
                         <TouchableOpacity   onPress={this.weekLyClick.bind(this)} activeOpacity={1} 
                         style={[styles.weekwhite, this.state.weekly ? styles.blueBtn : null]}>
                            <Text style={[styles.weektextwhite,this.state.weekly ? styles.whiteText : styles.clrText]}>Weekly</Text>
                        </TouchableOpacity>
                        </View>

                        <ScrollView>
                        <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'}}>
                           <Text style={{  fontSize: fontScale * 15,width:"45%",fontFamily: Fonts.book }}></Text>
                           <Text style={{  fontSize: fontScale * 15,width:"20%",color:"#000",fontFamily: Fonts.medium }}>Total</Text>
                           <Text style={{  fontSize: fontScale * 15,width:"20%",color:"#000",fontFamily: Fonts.medium }}>Goal</Text>
                           <Text style={{  fontSize: fontScale * 15,width:"15%",color:"#000",fontFamily: Fonts.medium }}>Left</Text>
                        </View>
                          <View style={styles.blueView}>
                           <Text style={styles.firstBlueView}>Total Fat (g)</Text>
                           <Text  style={styles.first20View}>36</Text>
                           <Text  style={styles.first20View}>49</Text>
                           <Text  style={styles.first15View}>13</Text>
                        </View>
                        <Dash dashColor="#6068fa" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Saturated Fat</Text>
                           <Text style={styles.second20View}>16</Text>
                           <Text style={styles.second20View}>11</Text>
                           <Text style={styles.second15View}>-5</Text>
                        </View>
                         <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Polyunsaturated Fat</Text>
                           <Text style={styles.second20View}>4</Text>
                           <Text style={styles.second20View}>0</Text>
                           <Text style={styles.second15View}>-5</Text>
                        </View>
                         <View style={styles.blueView}>
                           <Text style={styles.firstBlueView}>Total Monounsaturated (g)</Text>
                           <Text  style={styles.first20View}>9</Text>
                           <Text  style={styles.first20View}>0</Text>
                           <Text style={styles.first15View}>-9</Text>
                        </View>
                        <Dash dashColor="#6068fa" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Trans Fat</Text>
                           <Text style={styles.second20View}>1</Text>
                           <Text style={styles.second20View}>0</Text>
                           <Text style={styles.second15View}>-1</Text>
                        </View>
                       <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Cholesterol</Text>
                           <Text style={styles.second20View}>74</Text>
                           <Text style={styles.second20View}>300</Text>
                           <Text style={styles.second15View}>226</Text>
                        </View>
                       <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Sodium</Text>
                           <Text style={styles.second20View}>1539</Text>
                           <Text style={styles.second20View}>1500</Text>
                           <Text style={styles.second15View}>-39</Text>
                        </View>
                        <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Potassium</Text>
                           <Text style={styles.second20View}>458</Text>
                           <Text style={styles.second20View}>2000</Text>
                           <Text style={styles.second15View}>1542</Text>
                        </View>
                          <View style={styles.blueView}>
                           <Text style={[styles.firstBlueView,{paddingRight:35}]}>Total Carbohydrates (g)</Text>
                           <Text  style={styles.first20View}>143</Text>
                           <Text  style={styles.first20View}>202</Text>
                           <Text style={styles.first15View}>59</Text>
                        </View>
                        <Dash dashColor="#6068fa" flexDirection = 'row' style={{width:"100%", height:1}}/>
                       <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Dietary Fiber</Text>
                           <Text style={styles.second20View}>4</Text>
                           <Text style={styles.second20View}>25</Text>
                           <Text style={styles.second15View}>21</Text>
                        </View>
                         <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Sugars</Text>
                           <Text style={styles.second20View}>67</Text>
                           <Text style={styles.second20View}>45</Text>
                           <Text style={styles.second15View}>-22</Text>
                        </View>
                         <View style={styles.blueView}>
                           <Text style={[styles.firstBlueView,{paddingRight:10}]}>Total Protein (g)</Text>
                           <Text  style={styles.first20View}>37</Text>
                           <Text  style={styles.first20View}>55</Text>
                           <Text style={styles.first15View}>18</Text>
                        </View>
                        <Dash dashColor="#6068fa" flexDirection = 'row' style={{width:"100%", height:1}}/>
                        <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Vitamin A</Text>
                           <Text style={styles.second20View}>160%</Text>
                           <Text style={styles.second20View}>110%</Text>
                           <Text style={styles.second15View}>50%</Text>
                        </View>
                         <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Vitamin C</Text>
                           <Text style={styles.second20View}>89%</Text>
                           <Text style={styles.second20View}>100%</Text>
                           <Text style={styles.second15View}>35%</Text>
                        </View>
                        <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Calcium</Text>
                           <Text style={styles.second20View}>123%</Text>
                           <Text style={styles.second20View}>100%</Text>
                           <Text style={styles.second15View}>100%</Text>
                        </View>
                         <View style={styles.normalView}>
                           <Text style={styles.secondNormalView}>Iron</Text>
                           <Text style={styles.second20View}>467%</Text>
                           <Text style={styles.second20View}>78%</Text>
                           <Text style={styles.second15View}>55%</Text>
                        </View>
                        
                        </ScrollView>
                        </NB.Tab>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            heading="MACROS" >
                       
                        <View style={{margin:30,marginBottom:10,padding:3,flexDirection:"row",borderRadius:30,borderWidth:1,borderColor:"#ccc"}}>
                        <TouchableOpacity  onPress={this.todayClick.bind(this)} activeOpacity={1} style={[styles.weekwhite, this.state.today ? styles.blueBtn : null]}>
                            <Text style={[styles.weektextwhite,this.state.today ? styles.whiteText : styles.clrText]}>Today</Text>
                        </TouchableOpacity>
                         <TouchableOpacity   onPress={this.weekLyClick.bind(this)} activeOpacity={1} 
                         style={[styles.weekwhite, this.state.weekly ? styles.blueBtn : null]}>
                            <Text style={[styles.weektextwhite,this.state.weekly ? styles.whiteText : styles.clrText]}>Weekly</Text>
                        </TouchableOpacity>
                        </View>

                          <ScrollView>
                            <View style={styles.circularBarTopContainer}>
                            <Image source={Images.circle} style={{ height: 200,width:200}} />
                                </View>

                          <View style={{flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10}}>
                           <Text style={{  fontSize: fontScale * 15,color:"#6068fa",width:"5%",fontFamily: Fonts.black }}></Text>
                           <Text style={{  fontSize: fontScale * 15,color:"#6068fa",width:"60%",fontFamily: Fonts.black }}></Text>
                           <Text style={{  fontSize: fontScale * 15,color:"#000",width:"20%",fontFamily: Fonts.medium }}>Total</Text>
                           <Text style={{  fontSize: fontScale * 15,color:"#000",width:"15%",fontFamily: Fonts.medium }}>Goal</Text>
                        </View>


                        <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10,paddingBottom:10}}>
                          <View style={{ width:"65%",flexDirection:"row",}} >
                           <View style={{ backgroundColor:"#e14350",borderRadius:3,padding:3,marginTop:3,width:14,height:14}}></View>
                           <Text style={{  fontSize: fontScale * 15,paddingLeft:10,color:"#000",fontFamily: Fonts.medium }}>Fat</Text>
                           <Text style={{  fontSize: fontScale * 15,paddingLeft:3,color:"#8DAAB9",fontFamily: Fonts.medium }}>(10g)</Text>
                           </View>
                            
                          
                           <Text style={{  fontSize: fontScale * 15,color:"#8DAAB9",width:"20%",fontFamily: Fonts.latoBold }}>57%</Text>
                           <Text style={{  fontSize: fontScale * 15,color:"#6068fa",width:"15%",fontFamily: Fonts.latoBold }}>50%</Text>
                        </View>


                        <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10,paddingBottom:10}}>
                         <View style={{ width:"65%",flexDirection:"row",}} >
                           <View style={{ backgroundColor:"#2293e1",borderRadius:3,padding:3,width:14,marginTop:3,height:14}}></View>
                           <Text style={{  fontSize: fontScale * 15,paddingLeft:10,color:"#000",fontFamily: Fonts.medium }}>Carbohydrates</Text>
                           <Text style={{  fontSize: fontScale * 15,paddingLeft:3,color:"#8DAAB9",fontFamily: Fonts.medium }}>(77g)</Text>
                          
                             </View>
                          
                           <Text style={{  fontSize: fontScale * 15,color:"#8DAAB9",width:"20%",fontFamily: Fonts.latoBold}}>16%</Text>
                           <Text style={{  fontSize: fontScale * 15,color:"#6068fa",width:"15%",fontFamily: Fonts.latoBold }}>30%</Text>
                        </View>

                        <View style={{flexDirection:"row",paddingLeft:10,paddingTop:10,paddingBottom:10}}>
                          <View style={{ width:"65%",flexDirection:"row",}} >
                           <View style={{ backgroundColor:"#87c030",borderRadius:3,padding:3,width:14,marginTop:3,height:14}}></View>
                           <Text style={{  fontSize: fontScale * 15,paddingLeft:10,color:"#000",fontFamily: Fonts.medium }}>Protein</Text>
                           <Text style={{  fontSize: fontScale * 15,paddingLeft:3,color:"#8DAAB9",fontFamily: Fonts.medium }}>(37g)</Text></View>
                          
                           <Text style={{  fontSize: fontScale * 15,color:"#8DAAB9",width:"20%",fontFamily: Fonts.latoBold }}>27%</Text>
                           <Text style={{  fontSize: fontScale * 15,color:"#6068fa",width:"15%",fontFamily: Fonts.latoBold }}>20%</Text>
                        </View>

                          </ScrollView>

                      
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
     circularBarTopContainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginBottom:30
    },
     circularBarTopContainer2: {
        width:200,
        position:'relative'
    },
     
    blueView:{
   flexDirection:"row",height:45,paddingLeft:5,alignItems:"center"
    },
    normalView:{
   flexDirection:"row",paddingLeft:5,paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'#ccc'
    },
    firstBlueView:{
     fontSize: fontScale * 15,color:"#6068fa",width:"45%",fontFamily: Fonts.medium
    },
     first20View:{
     fontSize: fontScale * 15,color:"#6068fa",width:"20%",fontFamily: Fonts.latoBold
    },
    first15View:{
     fontSize: fontScale * 14,color:"#6068fa",width:"15%",fontFamily: Fonts.latoBold
    },
    secondNormalView:{
      fontSize: fontScale * 14,width:"45%",color:"#000",fontFamily: Fonts.book 
    },
    second20View:{
     fontSize: fontScale * 14,color:"#000",width:"20%",fontFamily: Fonts.latoBold
    },
    second15View:{
      fontSize: fontScale * 14,width:"15%",color:"#000",fontFamily: Fonts.latoBold
    },
    weekwhite:{
     alignItems:"center",padding:10,width:"50%",borderRadius:30
    },
    weektextwhite:{
     fontSize: fontScale * 14 ,fontFamily: Fonts.black
    },
    clrText:{
    color:"#8DAAB9"
    },
      whiteText:{
    color:"#fff"
    },
    blueBtn:{
      backgroundColor:"#6068fa"
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
        fontFamily: Fonts.bold,
        fontWeight:'bold',
        color: '#6068fa',
        fontSize: 14
    },
    // activeTabTextStyleExer: {
    //     fontFamily: Fonts.medium,
    //     color: '#FF78A4',
    //     fontSize: 13
    // },
    tabTextStyle: {
        fontFamily: Fonts.book,
        color: '#8DAAB9',
        fontSize: 14
    },
    activeTabBackgroundStyle: {
        backgroundColor: 'white',
         // fontFamily: Fonts.medium,
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
