import React, { Component } from "react";
import { View, Image, Dimensions, Text, StyleSheet, StatusBar, ScrollView, ART, ImageBackground, TouchableOpacity, Modal } from "react-native";
import { Icon } from 'native-base';
import { HeaderBar } from "../common/header/index";
import { Icons, Fonts, Images } from "../../config/index";
import ImageZoom from "react-native-image-pan-zoom";
import ViewShot from "react-native-view-shot";
const { height, width, fontScale, scale } = Dimensions.get("window");
import PhotoUpload from 'react-native-photo-upload';
import { ProgressBarLine } from "../common/progressBarLine";
import RenderGallery from "../common/Camera";
import SvgUri from 'react-native-svg-uri';
// import SVGImage from 'react-native-remote-svg'


const s = a => scale * a;
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
// let linearGradient = new LinearGradient(['#F48FB1', '#1565C0'], s(5), s(20), s(30), s(2.5))

let linearGradient = new LinearGradient(['#ff84fa', '#3a90f2'], s(1), s(25), s(25), s(30))

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            uri: "",
            changeImage: false,
            weight: 50, // in percentage
            avatar: '',
            modalVisible: false,
        }
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        this.update(this.props)
    }
    componentWillReceiveProps(props) {
        this.update(props)
    }
    update(props) {
        if (props.navigation.state.params) {
            this.setState({ avatar: props.navigation.state.params.uri })
        }

    }
    imagecap() {
        console.log("do something with ");
        this.refs.viewShot.capture().then(uri => {
            this.setState({ uri: uri })
            console.log("do something with ", uri);
        });
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { !this.state.modalVisible }}
                >
                    <View style={{ flex: 1 }}>
                        <RenderGallery
                            nav={this.props.navigation}
                            screen="profile"
                            setState={(...a) => this.setState(...a)}
                        />
                    </View>
                </Modal>
                <HeaderBar
                    statusbarColor="transparent"
                    onPressLeft={() => this.setState({ avatar: "" })}
                    Heading="My Profile"
                    TextColor="white"
                    headerStyle={styles.headerStyle}
                    RightItem={<Image source={Icons.settings} style={styles.rightIconStyle} />}
                    onPressRight={() =>
                        navigate('ProfileTabbar')
                        //this.imagecap()
                    }
                />

                {!this.state.avatar ?
                    <View style={styles.uploaderstyle}>
                        <ImageBackground source={Images.backImage} style={styles.backgroundImage} >
                            {/* <PhotoUpload
                                onResponse={avatar => {
                                    if (avatar) {
                                        this.setState({ avatar: avatar.uri })
                                    }
                                }}
                                quality={100}
                            > */}
                            <TouchableOpacity style={styles.cameraViewStyle}
                                onPress={() =>
                                    this.setState({ modalVisible: true })}
                            >
                                <Image source={Icons.camera} style={styles.cameraIconStyle} />
                                <Text style={styles.camerTextStyle}> Add Photo and drag to adjust </Text>
                            </TouchableOpacity>
                            {/* </PhotoUpload> */}
                        </ImageBackground>
                    </View> :
                    <View style={styles.viewHeight}>
                        {/* <Draggable imageSource={Images.dp9}
                            offsetX={180}
                            offsetY={0}
                            renderShape="image"
                            renderSize={width}
                            reverse={false}
                            pressDrag={(a) => console.warn(a)}
                        /> */}

                        {/* <ImageZoom
                            pinchToZoom
                            panToMove
                            maxOverflow={200}
                            cropWidth={width}
                            doubleClickInterval={100}
                            cropHeight={'100%'}
                            imageWidth={width}
                            imageHeight={'100%'}
                            onClick={() => { this.imagecap.bind(this) }}
                        > */}
                        <Image style={styles.imageContainer}
                            source={{
                                uri: this.state.avatar
                            }} />
                        {/* </ImageZoom> */}
                    </View>
                }
                <View style={styles.topView}>
                    {this.state.uri ?

                        <Image source={{ uri: this.state.uri }}
                            style={styles.imageContainer} />

                        : <ViewShot ref="viewShot" options={{ format: "jpg", quality: 1 }} >
                            {/* <ImageZoom
                                pinchToZoom={false}
                                onDoubleClick={()=>false}
                                maxOverflow={150}
                                cropWidth={width}
                                doubleClickInterval={100}
                                cropHeight={height / 2.1}
                                imageWidth={width}
                                imageHeight={height / 2.1}
                                onClick={() => { this.imagecap.bind(this) }}
                            
                              
                                
                            > */}
                            {/* <Image style={styles.imageContainer}
                                    source={{ uri: 'https://www.thefamouspeople.com/profiles/images/rachel-platten-3.jpg' }}  /> */}
                            {/* </ImageZoom> */}

                        </ViewShot>}
                    <View style={styles.imageTextContainer}>
                        <View style={styles.textOnImage}>
                            <Text style={styles.imageHeading}>Anna Hastings</Text>
                            <Text style={styles.imageText}>Reduce Weight</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.viewafterImage}>
                        <View style={styles.headingAfterImage}>
                            <Text style={styles.textAfterImage}>Your Goal is</Text>
                            <Text style={styles.headingTop}>Reduce Weight</Text>
                        </View>

                        <View style={styles.progressViewStyle}>
                            <View style={styles.progressBackground}>
                                <View style={[styles.progressForeground, {
                                    width: `${this.state.weight}%`, backgroundColor: "#ff84fa"
                                }]}>
                                    <ProgressBarLine linearGradient={linearGradient} width={this.state.weight} />
                                </View>
                            </View>
                            <View style={styles.progressView}>
                                <View>
                                    <Text style={{ fontFamily: Fonts.bold, color: "#8DAAB9" }}>90kg</Text>
                                    <Text style={styles.weightText}>Starting</Text>
                                </View>
                                <View>
                                    <Text style={styles.centerWeightText}>80kg</Text>
                                </View>
                                <View>
                                    <Text style={{ fontFamily: Fonts.bold, color: "#8DAAB9" }}>75kg</Text>
                                    <Text style={styles.weightText}>Desired</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.listView}>
                            <View style={styles.iconContainer}>
                                <Image source={Icons.calendar} style={styles.iconStyle} />
                                {/* <SvgUri
                                    width="30"
                                    height="30"
                                    source={Icons.calendar}
                                /> */}
                            </View>

                            <View style={styles.listTextView}>
                                <Text style={styles.textStyle1}>Age</Text>
                                <Text style={styles.textStyle}>22 Years</Text>
                            </View>
                        </View>

                        <View style={styles.listView}>
                            <View style={styles.iconContainer}>
                                <Image source={Icons.height} style={styles.iconStyle} />
                                {/* <SvgUri
                                    width="30"
                                    height="30"
                                    source={Icons.height}
                                /> */}
                            </View>

                            <View style={styles.listTextView}>
                                <Text style={styles.textStyle1}>Height</Text>
                                <Text style={styles.textStyle}>6'2 "</Text>
                            </View>
                        </View>

                        <View style={styles.listView}>
                            <View style={styles.iconContainer}>
                                <Image source={Icons.envelope} style={styles.iconStyle} />
                                {/* <SvgUri
                                    width="30"
                                    height="30"
                                    source={Icons.envelope}
                                /> */}
                            </View>

                            <View style={styles.listTextView}>
                                <Text style={styles.textStyle1}>Email</Text>
                                <Text style={styles.textStyle}>info@companyname.com</Text>
                            </View>
                        </View>

                        <View style={styles.listView}>
                            <View style={styles.iconContainer}>
                                <Image source={Icons.female} style={styles.iconStyle} />
                                {/* <SvgUri
                                    width="30"
                                    height="30" a
                                    source={Icons.female}
                                /> */}
                            </View>

                            <View style={styles.listTextView}>
                                <Text style={styles.textStyle1}>Gender</Text>
                                <Text style={styles.textStyle}>Female</Text>
                            </View>
                        </View>

                        <View style={styles.listView}>
                            <View style={styles.iconContainer}>
                                <Image source={Icons.pregnantWoman} style={styles.iconStyle} />
                                {/* <SvgUri
                                    width="30"
                                    height="30"
                                    source={Icons.pregnant}
                                    style={{
                                        transform: [
                                            { rotateY: '180deg' },
                                        ],
                                    }}
                                /> */}
                            </View>

                            <View style={styles.listTextView}>
                                <Text style={styles.textStyle1}>Status</Text>
                                <Text style={styles.textStyle}>I'm pregnant</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View >
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    topView: {
        width: width,
        flexDirection: 'column',
        justifyContent: "flex-end",

    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    headerStyle: {
        backgroundColor: 'transparent',
        elevation: 2,
        zIndex: 20,
        position: "absolute",
        marginTop: '2%'
    },
    imageContainer: {
        width: width,
        height: height * 0.5,


    },
    imageTextContainer: {
        height: (height / 2.1) / 4,
        width: width,
        position: 'absolute',
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        elevation: 2
    },
    textOnImage: {
        height: (height / 2.1) / 6,
        width: width * 0.96,
        justifyContent: 'space-around',

    },
    imageHeading: {
        fontFamily: Fonts.bold,
        fontSize: fontScale * 24,
        color: 'white'
    },
    imageText: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 17,
        color: 'white'
    },
    viewafterImage: {
        flex: 1
    },
    headingAfterImage: {
        height: height / 10,
        width: width,
        paddingHorizontal: "7%",
        justifyContent: "center"
    },
    textAfterImage: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 14,
        color: '#8DAAB9'
    },
    headingTop: {
        fontFamily: Fonts.bold,
        fontSize: fontScale * 20,
        color: 'black'
    },
    progressViewStyle: {
        height: height / 9,
        width: width,
        paddingHorizontal: "7%",
        justifyContent: "center"
    },
    progressbarViewStyle: {
        width: width,
        alignItems: 'flex-start'
    },
    weightText: {
        fontFamily: Fonts.medium,
        fontSize: fontScale * 13,
        color: '#8DAAB9'
    },
    centerWeightText: {
        fontFamily: Fonts.bold,
        fontSize: fontScale * 14,
        color: 'black'
    },
    listView: {
        height: height * 0.1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#8DAAB9'
    },
    iconContainer: {
        height: height * 0.1,
        width: width * 0.15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listTextView: {
        height: height * 0.1,
        width: width * 0.8,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    iconStyle: {
        height: 35,
        width: 25,
        resizeMode: 'contain'
    },
    progressView: {
        flexDirection: 'row',
        width: width * 0.86,
        alignItems: "center",
        justifyContent: 'space-between',
    },
    textStyle: {
        color: 'black',
        fontFamily: Fonts.book
    },
    textStyle1: {
        color: '#8DAAB9',
        fontFamily: Fonts.book
    },
    progressBackground: {
        width: width * 0.86,
        height: 12,
        padding: 1,
        borderWidth: 1,
        borderColor: "#8DAAB9",
        borderRadius: 6,
        justifyContent: "center",
        // overflow: "hidden"
    },
    progressForeground: {
        height: 8.5,
        borderRadius: 4.5,
        overflow: "hidden",
    },
    backgroundImage: {
        height: height * 0.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraViewStyle: {
        height: height * 0.15,
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cameraIconStyle: {
        height: 60,
        width: 60,
        resizeMode: 'contain'
    },
    camerTextStyle: {
        fontFamily: Fonts.medium,
        color: '#fff',
        fontSize: fontScale * 18
    },
    rightIconStyle: {
        height: 25,
        width: 25
    },
    viewHeight: {
        height: height * 0.5,
        elevation: 2,
        zIndex: 2,
    },
    uploaderstyle: {
        height: height * 0.5,
        backgroundColor: '#9685e5',
        elevation: 2,
        zIndex: 2,
    }
})
