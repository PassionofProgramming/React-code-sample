import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {  TouchableOpacity,ART} from 'react-native';

import { View, Image,Keyboard, StyleSheet, Text,Easing,ART,TouchableOpacity, CameraRoll, Permission, PermissionsAndroid, Dimensions, ScrollView, Animated, Alert, Modal } from 'react-native';
import * as NB from 'native-base';
import  { TabHeading,Icon } from 'native-base';
import Button from '../../../components/common/FormButton';
import Gallery from './gallery';
// import Foundation from 'react-native-vector-icons/Foundation';
// import NutrientTabs from './nutrientTabs';
import { HeaderBar } from "../../common/header"
import ActionButton from '../../ActionButton/index';
import Fab from '../../common/fab';
import { Icons, Fonts,Images } from '../../../config/index';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import ImageComp from "./image"
import Dash from 'react-native-dash';
import PhotoUpload from 'react-native-photo-upload'
import Menu, {
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-popup-menu';
import Swiper from 'react-native-swiper';
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
 class TabNavGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
            modalVisible: false,
            changeHeader: 'Gallery',
            emptyScreen: false,
            weekly:false,
            today:true,
            emptyScreen1: false,
            emptyScreen2: false,
            createdMeal: false,
            totalCalories: 2616,
            tokeCalories: 2616,
            meal: 0,
            grid:true,
            list:false,
            compare:false,
            photos: [],
            imgArray: [],
            changePic: false,
            openedMenu: false,
            position: 1,
            interval: null,
            avatar: "",
            avatar1: "",
            index: 0,
            pic1: Images.dp7,
            pic2: Images.dp8,

            //ForDummyData
            photos1: [
                Images.dp1,
                Images.dp2,
                Images.dp3,
                Images.dp4,
                Images.dp5,
                Images.dp6,
                Images.dp1,
                Images.dp2,
                Images.dp3,
                Images.dp4,
                Images.dp5,
                Images.dp6,
            ],
            section: 'Breakfast',
            bCode: false,
            barCodeData: {
                data: null,
                type: null
            },
            sections: {
                placeholder: "Gallery",
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
         this._handleButtonPress();
         Keyboard.dismiss();
    }
    hello(newProps) {
        if (newProps.navigation.state.params) {
            this.setState({
                items: newProps.navigation.state.params.itemsArray,
                favoriteItems: newProps.navigation.state.params.favItemsArr,
                sections: newProps.navigation.state.params.sections,
                changeHeader: 'Gallery',
                section: newProps.navigation.state.params.section,
                createdMeal: newProps.navigation.state.params.createdMeal,
            })
        }
    }

   del() {
        this.state.index === 0 ? this.setState({ avatar: "", pic1: false }) : this.setState({ avatar1: "", pic2: false });
        this.setState({ openedMenu: false })
    }
    ask() {
        Alert.alert(
            'Delete',
            'Are you sure to delete?',
            [
                { text: 'Cancel', onPress: () => { this.setState({ openedMenu: false }); console.log('Cancel Pressed') }, style: 'cancel' },
                { text: 'OK', onPress: () => this.del() },
            ],
            { cancelable: false }
        )
    }
    

    animateTabUnderline(i) {
    	console.log(i)
        Animated.timing(
            this.tintPosition,
            {
                toValue: i,
                duration: 200,

            }
        ).start();

       if(i==0){
         this.setState({
         	grid:true,
         	list:false,
         	compare:false
         });
       }

       else if(i==1){
       	this.setState({
         	grid:false,
         	list:true,
         	compare:false
         });
       	  
       }
       else{
       		this.setState({
         	grid:false,
         	list:false,
         	compare:true
         });
         	
       }

    }

   _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(pics => {
                this.setState({ photos: pics.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    }

    click(img, i) {
        const imgArr = this.state.imgArray.slice(0);

        if (imgArr.length <= 1) {
            imgArr.push({ img, i })
            this.setState({
                imgArray: imgArr
            })
            setTimeout(() =>
                console.log(this.state.imgArray.length, 'add', this.state.imgArray)
                , 2)
        }
    }
    arrayPop(i) {
        const imgArr = this.state.imgArray.slice(0);
        for (let x in imgArr) {
            if (imgArr[x].i === i) {
                imgArr.splice(x, 1)

                this.setState({
                    imgArray: imgArr
                })
                setTimeout(() =>
                    console.log(imgArr.length, "pop", this.state.imgArray)
                    , 2)
            }
        }
    }

    goBack = () =>{
      this.props.navigation.goBack();
    }

    render() {
        const { container, actionButtonIcon, insideCircleCenter, tabViewStyle, tabInsideView, imageViewStyle, centerTabStyle, viewOfButton, barCodeImageStyle, ViewOfText, centerImageStyle, HeadingTextafterImage, activeTabTextStyle, tabTextStyle, activeTabBackgroundStyle, tabBottomLineStyle, textAfterImage } = styles;
        const { navigate, goBack } = this.props.navigation;


        const tintPosition = this.tintPosition.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, width / 3,width / 3 * 2,],
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
                            width: width / 3,//"90%",
                            top: 101,
                            alignItems: "center",
                            // bottom: 0,
                            zIndex: 20,
                            position: "absolute",
                            // transform: [{ translateX: tintPosition }]
                            left: tintPosition
                        }}>

                        <Image source={Icons.selectedTab} style={{
                            height: 5, width: "50%",
                            //resizeMode: "contain"
                        }} />
                    </Animated.View>

                    <NB.Tabs
                       style={{ backgroundColor: "white" }}
                       tabBarBackgroundColor={'#ffffff'}
                        initialPage={this.state.pageNumber}
                        // onChangeTab={({ ref }) => console.warn('Heading', ref.props.heading)}
                        onChangeTab={({ ref }) => {

                            switch (ref.props.page) {
                                case "1":
                                    this.setState({
                                        changeHeader: 'Gallery',
                                    }, () => this.animateTabUnderline(0))
                                    break;
                                case "2":
                                    this.setState({
                                        changeHeader: 'Gallery'
                                    }, () => this.animateTabUnderline(1))
                                    break;
                                 case "3":
                                    this.setState({
                                        changeHeader: 'Gallery'
                                    }, () => this.animateTabUnderline(2))
                                    break;
                                default:
                                    console.log('reached to deafult case!') // should never reach here...x
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
                            page="1"
                            heading={<TabHeading  style={{ backgroundColor: "white" }}>
                            {this.state.grid?<Image source={Icons.gridactive} style={styles.rightIconStyle}/>:
                            <Image source={Icons.grid} style={styles.rightIconStyle}/>}
                            </TabHeading>}>
                            <ScrollView >
		                    <View style={styles.container}>
		                        {/* {this.state.photos.map((p, i) => { */}
		                        {/* For Dummy Data */}
		                        {this.state.photos1.map((p, i) => {
		                            return (
		                                <ImageComp
		                                    key={i}
		                                    // imgUri={p.node.image.uri}

		                                    // ForDummyData //
		                                    imgDummy={true}
		                                    imgUri={p}

		                                    img={p}
		                                    index={i}
		                                    imgArray={this.state.imgArray.slice(0)}
		                                    click={this.click.bind(this, p, i)}
		                                    arrayPop={this.arrayPop.bind(this, i)}
		                                />
		                            );
		                        })}
		                    </View>
                    </ScrollView>
                     <View style={styles.buttonContainer}>
                    <Button text="Compare Picture" btnStyle={{ width: width * 0.55, }} color={'#4D4EEB'}
                        onPress={() => navigate("Progress")} />
                       </View>
                        

                       
                        </NB.Tab>

                        <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            page="2"
                            heading={<TabHeading style={{ backgroundColor: "white" }}>
                             {this.state.list?<Image source={Icons.listactive} style={styles.rightIconStyle1}/>:
                            <Image source={Icons.list} style={styles.rightIconStyle1}/>}
                            </TabHeading>} >
                            </NB.Tab>
                           <NB.Tab
                            tabStyle={activeTabBackgroundStyle}
                            activeTabStyle={activeTabBackgroundStyle}
                            activeTextStyle={activeTabTextStyle}
                            textStyle={tabTextStyle}
                            page="3"
                            heading={<TabHeading style={{ backgroundColor: "white" }}>
                            {this.state.compare?<Image source={Icons.cardactive} style={styles.rightIconStyle}/>:
                            <Image source={Icons.card} style={styles.rightIconStyle}/>}
                            </TabHeading>} >
                       
                              <ScrollView contentContainerStyle={{ height: height }}>
                    <View style={styles.imageContainer}>
                        {/* {this.state.changePic == false ?
                            <Image source={Images.dp7} style={styles.imageStyle} />
                            :
                            <Image source={Images.dp8} style={styles.imageStyle} resizeMode='contain' />
                        } */}
                        <TouchableOpacity
                            onPress={() => this.setState({ changePic: !this.state.changePic })}
                            activeOpacity={0.5}
                            style={styles.fabStyle}>
                            <PhotoUpload
                                onResponse={avatar => {
                                    if (avatar) {
                                        switch (this.state.index) {
                                            case 0:
                                                this.setState({ avatar: avatar.uri })
                                                break;
                                            case 1:
                                                this.setState({ avatar1: avatar.uri })
                                                break;
                                        }
                                    }
                                }}
                                quality={100}
                            >
                                <Text style={styles.addIconStyle} > + </Text>
                            </PhotoUpload>
                        </TouchableOpacity>
                        <Swiper
                            loop={false}
                            style={styles.wrapper} height={height * 0.7} horizontal={true} autoplay={false}
                            dot={<View style={{ backgroundColor: '#bdbdbd', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignSelf: 'flex-end' }} />}
                            activeDot={<View style={{ backgroundColor: '#4D4EEB', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            onIndexChanged={(index) => this.setState({ index: index })}
                        >
                            {this.state.pic1 &&
                                <View style={styles.slide1}>
                                    {!this.state.avatar ?
                                        <Image source={this.state.pic1} style={styles.imageStyle} resizeMode="contain" />
                                        :
                                        <Image source={{ uri: this.state.avatar }} style={styles.imageStyle} />
                                    }
                                </View>
                            }
                            {this.state.pic2 ?
                                <View style={styles.slide2}>
                                    {!this.state.avatar1 ?
                                        <Image source={this.state.pic2} style={styles.imageStyle} resizeMode="contain" />
                                        :
                                        <Image source={{ uri: this.state.avatar1 }} style={styles.imageStyle} />
                                    }
                                </View>
                                : null}

                        </Swiper>


                    </View>
                    <View style={{ height: height * 0.07, alignContent: 'flex-start' }}>
                        <View style={styles.viewStyle}>
                            <TouchableOpacity
                                onPress={() => navigate('Measurements')}>
                                <Image source={Icons.height} style={styles.heightImageStyle} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => alert('Comment')}>
                                <View style={{ width: 50, }} >
                                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: 'red', position: 'absolute', alignSelf: 'flex-end', zIndex: 20, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, color: '#fff', fontFamily: Fonts.medium }}>2</Text>
                                    </View>
                                    <Image source={Icons.comment} style={styles.commentImage} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.dateStyle}> Tuesday 9, 2018 </Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.topText}> Caise </Text>
                            <Text style={styles.bottomText}> I' m feeling like the Rock Today! </Text>
                        </View>
                    </View>
                </ScrollView>

                      
                        </NB.Tab>

                    </NB.Tabs>

                </NB.Container >
        )
    }
}
export default TabNavGallery;
const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
        imageContainer: {
        height: height * 0.77,
        position: 'relative',
        zIndex: -1,
        width: width,
    },
    imageStyle: { height: height * 0.7, width: width, justifyContent: 'flex-end' },
    fabStyle: {
        position: "absolute",
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#4D4EEB',
        alignItems: "center",
        justifyContent: "center",
        top: (height * 0.7) - (width * 0.13 / 2),
        right: (width * 0.13) / 4,
        zIndex: 20,
        alignSelf: "flex-end",
    },
    addIconStyle: {
        marginTop: -4.5,
        fontSize: 35,
        color: 'white',
        position: 'relative',
    },
    rightItemStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    viewStyle: {
        width: width * 0.25,
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    heightImageStyle: {
        height: 35,
        width: 40,
        resizeMode: 'contain'
    },
    commentImage: {
        height: 35,
        width: 40,
        resizeMode: 'contain'
    },
    bottomView: {
        height: height * 0.07,
        width: width * 0.96,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    dateStyle: {
        fontFamily:
            Fonts.medium,
        color: 'black'
    },
    textContainer: {
        flexDirection: 'row'
    },
    topText: {
        fontFamily: Fonts.black,
        color: 'black'
    },
    bottomText: {
        fontFamily: Fonts.book,
        color: 'black'
    },
     buttonContainer: {
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },
     container: {
        marginVertical: '1%',
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: width,
        alignSelf: 'center',
        paddingHorizontal: "1%"
    },
    insideCircleCenter: {
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: Fonts.medium,
        color: 'black',
    },
    rightIconStyle: {
        height: 24,
        width: 24,
    },
    rightIconStyle1: {
        height: 24,
        width: 34,
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
        color: 'white',
        fontSize: 13
    },
    activeTabTextStyleExer: {
        fontFamily: Fonts.medium,
        color: '#fff',
        fontSize: 13
    },
    tabTextStyle: {
    	backgroundColor:"white",
        fontFamily: Fonts.medium,
        color: '#fff',
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
        color: '#fff',
        fontSize: 12,
    },
    HeadingTextafterImage: {
        fontFamily: Fonts.bold,
        letterSpacing: 25,
        textAlign: 'center',
        color: '#fff',
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
