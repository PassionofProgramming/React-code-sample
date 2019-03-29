import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import {
    View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Keyboard,
    Animated
} from 'react-native'
import * as NB from 'native-base';
import { Icons, Images } from '../../config/index';

const { height, width, fontScale } = Dimensions.get('window');

export class Welcome2 extends React.Component {
    constructor() {
        super();
        this.state = {
            screen: 0,
            slide: new Animated.Value(100),
            slide1: new Animated.Value(-100)
        }
    }
    componentDidMount() {
        Animated.spring(
            this.props.nav ? this.state.slide : this.state.slide1,//this.state.slide,
            {
                toValue: 0,
            }
        ).start();
        // Animated.spring(
        //     this.props.nav ?  this.state.slide1 : this.state.slide,//this.state.slide1,
        //     {
        //         toValue: 0,
        //     }
        // ).start();
    }

    render() {
        return (
            <View>
                <View style={styles.topStyle}>
                    <View style={styles.content}>
                        <Animated.View style={{
                            height: "40%",
                            transform: [
                                {
                                    translateX: this.props.nav ? this.state.slide : this.state.slide1
                                }
                            ]
                        }} >
                            <View style={{ alignItems: 'center', justifyContent: 'space-around', height: "100%" }}>
                                <Text style={styles.heading}>{this.props.contentHeading}</Text>
                                <Text style={styles.textSTyle}>Recomendamos {this.props.contentSubHeading}</Text>
                            </View>
                        </Animated.View>
                    </View>
                </View>
                <View style={styles.centerStyle}>
                    <View style={styles.centerView}>
                        <View style={styles.imageContainer}>
                            <Animated.View style={{
                                transform: [
                                    {
                                        translateX: this.props.nav ? this.state.slide : this.state.slide1,//this.state.slide
                                    }
                                ]
                            }} >
                                <Image
                                    source={this.props.contentImg} style={{ width: width / 2, height: height / 4, resizeMode: 'contain', alignSelf: 'center' }}
                                />
                            </Animated.View>
                            <Animated.View style={[styles.imageBottomText, {
                                height: "40%",
                                transform: [
                                    {
                                        translateX: this.props.nav ? this.state.slide : this.state.slide1,//this.state.slide1
                                    }
                                ]
                            }]} >
                                {/* <View style={styles.imageBottomText}> */}
                                <Text style={styles.heading}>{this.props.contentText1}</Text>
                                <Text style={styles.textSTyle}> {this.props.contentText2}</Text>
                                {/* </View> */}
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: height,
        backgroundColor: '#ffffff',
    },
    topStyle: {
        height: height / 100 * 20,
    },
    centerStyle: {
        height: height / 100 * 60,
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