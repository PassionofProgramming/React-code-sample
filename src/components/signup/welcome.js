import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import {
    View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Keyboard,
    Animated
} from 'react-native'
import * as NB from 'native-base';
import { Icons, Images } from '../../config/index';
import { Welcome1 } from "./welcome1";
import { Welcome2 } from "./welcome2";
import { Welcome3 } from "./welcome3";

const { height, width, fontScale } = Dimensions.get('window');

const content = [
    { img: Images.food, heading: 'Calories Intake', subHeading: 'Consumer', text1: '1860', text2: 'Cals/dia', },
    { img: Images.water, heading: 'Water Consumpton', subHeading: 'Consumer', text1: '2.8 Lt/', text2: ' 12 Glasses of Water ', },
    {
        img: Images.shoe, heading: 'Daily Exercise Time', subHeading: 'Actividad', text1: '1.5h/', text2: 'Exercise per day',
    }]

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            screen: 0,
            // slide: new Animated.Value(1000),
            // slide1: new Animated.Value(-1000),
            nav: true,
        }
    }

    // componentDidMount() {
    //     Animated.spring(
    //         this.state.slide,
    //         {
    //             toValue: 0,
    //         }
    //     ).start();
    //     Animated.spring(
    //         this.state.slide1,
    //         {
    //             toValue: 0,
    //         }
    //     ).start();
    // }

    componentWillMount() {
        Keyboard.dismiss()
    }

    _renderComponent = () => {
        switch (this.state.screen) {
            case 0:
                return <Welcome1
                    nav={this.state.nav}
                    contentHeading={content[0].heading}
                    contentSubHeading={content[0].subHeading}
                    contentImg={content[0].img}
                    contentText1={content[0].text1}
                    contentText2={content[0].text2}
                />;
                break;
            case 1:
                return <Welcome2
                    nav={this.state.nav}
                    contentHeading={content[1].heading}
                    contentSubHeading={content[1].subHeading}
                    contentImg={content[1].img}
                    contentText1={content[1].text1}
                    contentText2={content[1].text2}
                />;
                break;
            case 2:
                return <Welcome3
                    nav={this.state.nav}
                    contentHeading={content[2].heading}
                    contentSubHeading={content[2].subHeading}
                    contentImg={content[2].img}
                    contentText1={content[2].text1}
                    contentText2={content[2].text2}
                />;
                break;
            default:
                console.log('testing')
        }
    }

    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container} >
                {/* <View style={{height: "80%"}}> */}
                {
                    this._renderComponent()
                }
                {/* </View> */}
                <View style={styles.bottomStyle}>
                    <View style={styles.circleView}>
                        <NB.Left>
                            {this.state.screen !== 0 &&
                                <TouchableOpacity onPress={() => {
                                    this.setState({nav: false, screen: this.state.screen - 1 })
                                }}>
                                    <View style={styles.circleLeftStyle}>
                                        <View style={[styles.nextButtonActive, styles.nextButtonInactive]} >
                                            <NB.Icon name='ios-arrow-back' style={styles.iconStyle} />
                                        </View>
                                        <Text style={[styles.nextActiveText, styles.nextInActiveText]} > Back </Text>
                                    </View>
                                </TouchableOpacity>}
                        </NB.Left>
                        <NB.Right>
                            <TouchableOpacity onPress={this.state.screen === 2 ? () => { navigate('Tabs') } : () => {
                                this.setState({nav: true, screen: this.state.screen + 1 })
                            }}>
                                <View style={styles.circleRightStyle}>
                                    <Text style={[styles.nextInActiveText, styles.nextActiveText]} >{this.state.screen === 2 ? 'Go to Dashboard' : 'Next'} </Text>
                                    <View style={[styles.nextButtonInactive, styles.nextButtonActive]} >
                                        <NB.Icon name='ios-arrow-forward' style={styles.iconStyle} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </NB.Right>
                    </View>
                </View>
            </View>
        );
    }
}

export default Welcome;
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: height,
        backgroundColor: '#ffffff',
    },
    topStyle: {
        height: "20%"//height / 100 * 20,
    },
    centerStyle: {
        height: "60%"//height / 100 * 60,
    },
    centerView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBottomText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomStyle: {
        // height: "17%",
        height: height / 100 * 17,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    heading: {
        fontFamily: "CircularStd-Medium",
        fontSize: fontScale * 22,
        color: 'black',
    },
    textSTyle: {
        fontFamily: "CircularStd-Book",
        fontSize: fontScale * 15,
        color: 'black',
        textShadowColor: "white"
    },
    nextButtonInactive: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonActive: {

        backgroundColor: '#6D6EFF',
    },
    nextActiveText: {
        fontFamily: "CircularStd-Medium",
        color: '#6D6EFF',
        fontSize: fontScale * 15,
    },
    nextInActiveText: {
        color: '#E0E0E0',
    },
    iconStyle: {
        color: 'white',
        fontSize: 20,
    },
    circleLeftStyle: {
        flexDirection: 'row', alignItems: 'center',
    },
    circleRightStyle: {
        flexDirection: 'row', alignItems: 'center',
    },
    circleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 100 * 92.8,
    },
    imageContainer: {
        width: width / 1.5,
        height: height / 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});