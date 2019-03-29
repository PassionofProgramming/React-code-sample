import React from "react";
import { View, TextInput } from "react-native";
import { Fonts } from "../../../config/index";

export class NumInput extends React.Component {
    constructor() {
        super();
        this.state = {
            // focus: false
        }
    }
    render() {
        return (
            <View style={{width: "100%", height: "100%"}}>
                <TextInput
                    style={{ width: "100%", color: "#8DAAB9", fontFamily: Fonts.book}}
                    {...this.props}
                    // onChange={
                    //     // (e) => this.setState({ weight: e.nativeEvent.text })
                    // }
                    dataDetectorTypes="phoneNumber"
                    // value={this.state.weight}
                    keyboardType="numeric"
                    selectionColor={"#4D4EEB"}
                    underlineColorAndroid={"#4D4EEB"}
                />
            </View>
        )
    }
}