import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ART } from 'react-native'
import * as NB from 'native-base';
import AnimatedCircularProgress from './AnimatedCircularProgress';
import { Fonts } from '../../../config/index';

const { height, width, scale, fontScale } = Dimensions.get('window');
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
    Transform,
    Circle
} = ART

const ProgressBar = (props) => {
    let linearGradient = new LinearGradient(['#E835FF', '#6162FF'], s(15), s(20), s(30), s(2.5))
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Text style={styles.topText} >{props.heading}</Text>
            <View style={styles.circularViewStyle}>
                <AnimatedCircularProgress
                    //     size={props.size ? props.size : 112}
                    //     width={8}
                    //     fill={60}
                    //     tintColor={props.tintColor ? props.tintColor : "#8B64FF"}
                    //     onAnimationComplete={() => console.log('onAnimationComplete')}
                    //     backgroundColor={props.backgroundColor ? props.backgroundColor : "#EFEBE9"}
                    // >
                    //     {
                    //         (fill) => (
                    //             props.section
                    //         )
                    //     }
                    // style={{
                    //     height: "50%",
                    //     width: "50%",
                    //     backgroundColor: "yellow",
                    //     padding: 0,
                    //     justifyContent: "flex-start"
                    // }}
                    showRemainingValue={props.showRemainingValue}
                    color1={props.progressFirstColor ? props.progressFirstColor : [97, 98, 255]}
                    color2={props.progressSecondColor ? props.progressSecondColor : [232, 53, 255]}
                    color3={props.progressThirdColor ? props.progressThirdColor : [23, 53, 255]}
                    circularSize={props.circularSize ? props.circularSize : "small"}
                    size={300}
                    width={10}
                    totalFill={props.totalFill ? props.totalFill : 100}
                    fill={props.fill ? props.fill : 0}
                    prefill={-100}
                    tintColor="8B64FF"
                    backgroundColor={props.backgroundColor || "#EEECF0"}
                >
                    {
                        (fill) => (
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontFamily: props.titleBold ? Fonts.bold : Fonts.book, fontSize: fontScale * props.titleSize ? props.titleSize : 12, color: props.titleColor ? props.titleColor : "black" }}>{props.title}</Text>
                                <Text style={{ fontFamily: props.circularSize ? Fonts.latoLight : Fonts.medium, fontSize: fontScale * props.numberSize ? props.numberSize : 25, color: props.numberColor ? props.numberColor : "black" }}>
                                    {fill.toFixed(0)}
                                </Text>
                                <Text style={{ fontFamily: props.titleBold ? Fonts.bold : Fonts.book, fontSize: fontScale * props.titleSize ? props.titleSize : 12, color: props.titleColor ? props.titleColor : "black" }}>{props.titleBottom}</Text>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>
            </View >
        </View >
    );
};

export default ProgressBar;

const styles = StyleSheet.create({
    container: {
        ///////////
        // flex: 1,
        /////////
        height: height / 3.5,
        alignItems: "center",
        // backgroundColor: "red"
    },
    topText: {
        fontSize: 15,
        fontFamily: Fonts.book,
        color: 'black'
    },
    circularViewStyle: {
        alignSelf: 'center'
    },
})
