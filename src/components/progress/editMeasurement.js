import React, {Component} from "react";
import {View, Dimensions, Text, StyleSheet, ScrollView} from "react-native";
import {HeaderBar} from "../common/header/index";
import {Fonts} from "../../config/index";

const {height, width, fontScale} = Dimensions.get("window")

export default class EditMeasurement extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        const {navigate, goBack} = this.props.navigation;
        return (
            <View
                style={{
                flex: 1,
                backgroundColor: "white"
            }}>
                <HeaderBar Heading="Measurement" onPressLeft={() => goBack()}/>

                <ScrollView>
                    <View style={styles.viewStyle}>
                        <View
                            style={[
                            styles.row, {
                                height: height * 0.07
                            }
                        ]}>
                            <View
                                style={[
                                styles.column,
                                styles.firstCol, {
                                    borderBottomWidth: 0
                                }
                            ]}></View>
                            <View
                                style={[
                                styles.column,
                                styles.secondCol, {
                                    borderBottomColor: "gray",
                                    backgroundColor: "white"
                                }
                            ]}>
                                <Text style={styles.topTextHeading}>Before</Text>
                                <Text style={[styles.text, { fontSize: fontScale * 15}]}>12/08/17</Text>
                            </View>
                            <View
                                style={[
                                styles.column,
                                styles.thirdCol, {
                                    borderBottomColor: "gray"
                                }
                            ]}>
                                <Text style={styles.topTextHeading}>After</Text>
                                <Text
                                    style={[
                                    styles.text, {
                                        fontSize: fontScale * 15
                                    }
                                ]}>10/09/17</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Weight</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00 lbs</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00 lbs</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>BMI</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00 %</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00 %</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Neck</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Chest</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Upper Arm</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>left</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Upper Arm</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>Right</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Waist</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Hip</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Forearm</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>left</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Forearm</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>Right</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Thight</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>left</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Thight</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>Right</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Calf</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>left</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.column, styles.firstCol]}>
                                <Text style={styles.subHeading}>Calf</Text>
                                <Text style={[styles.subHeading, styles.fontfamily]}>Right</Text>
                            </View>
                            <View style={[styles.column, styles.secondCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                            <View style={[styles.column, styles.thirdCol]}>
                                <Text style={styles.text}>0.00"</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        height: height * 0.09
    },
    topTextHeading: {
        fontSize: fontScale * 17,
        fontFamily: Fonts.bold,
        color: "#4D4EEB"
    },
    subHeading: {
        fontSize: fontScale * 17,
        fontFamily: Fonts.medium,
        color: "black"
    },
    text: {
        fontSize: fontScale * 17,
        fontFamily: Fonts.book,
        color: "#8DAAB9"
    },
    column: {
        height: "100%",
        // alignItems: "center",
        paddingHorizontal: "4%",
        justifyContent: "center",
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
        backgroundColor: "white"
    },
    firstCol: {
        width: "34%",
        borderLeftWidth: 0,
        // backgroundColor: "red",
    },
    secondCol: {
        width: "33%",
        backgroundColor: "#EEEEEE"
    },
    thirdCol: {
        width: "33%",
        // backgroundColor: "yellow",
    },
    viewStyle: {
        paddingTop: "1%",
        backgroundColor: "white"
    },
    fontfamily: {
        fontFamily: Fonts.book
    }
})