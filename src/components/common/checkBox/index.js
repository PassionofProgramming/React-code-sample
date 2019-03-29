import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text, ImageBackground, Dimensions } from "react-native";
import { Images, Icons, Fonts } from "../../../config/index";

const { height, width, fontScale } = Dimensions.get("window")

export default class CheckBox extends Component {
    constructor() {
        super();
        // this.state = {
        //     checked: false,
        // }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={1} style={{ flexDirection: "row" }} >
                <View style={{flexDirection: "row", width: width * 0.14, justifyContent: "space-between", alignItems: "center"}}>
                    <ImageBackground style={{ height: 20, width: 20, alignItems: "center", justifyContent: "center",  }} resizeMode="contain" source={Icons.CheckBox}>
                        <Image source={!this.props.checked ? Icons.check : null} style={{ height: 14, width: 14, }} resizeMode="contain" />
                    </ImageBackground>
                    <Text style={{ fontFamily: Fonts.book, color: "black", fontSize: fontScale * 15, }}>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}