import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.mainVeiw}>
                <View style={styles.topView}>
                    {this.props.firstPart}
                </View>
                <View
                    style={styles.topView}>
                    {this.props.secondPart}
                </View>
            </View >
        );
    }
}
export default SignInForm
const styles = StyleSheet.create({
    mainVeiw: {
        height: height / 100 * 72,
        width: width / 100 * 84.8,
        justifyContent: 'center'
    },
    topView: {
        minHeight: '45%',
        maxHeight: '55%',
    },
})