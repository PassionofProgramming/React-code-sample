import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import * as NB from 'native-base';
import { Fonts } from '../../../config/index';
export default class FormButton extends Component {

    render() {
        return (
            <NB.Button
                style={[
                    styles.btnStyle,
                    {
                        backgroundColor: this.props.color,
                        paddingRight: this.props.icon && window.width / 100 * 84.8 / 100 * 25,
                        paddingLeft: this.props.icon && window.width / 100 * 84.8 / 100 * 5,
                    },
                    this.props.btnStyle
                ]}
                {...this.props}
            >
                <Image
                    source={this.props.icon}
                    style={[styles.logo, this.props.iconStyle]}
                />


                <Text style={styles.btnText}>
                    {this.props.text}
                </Text>
            </NB.Button>
        )
    }
}
const window = Dimensions.get('window')
const styles = StyleSheet.create({

    btnStyle: {
        width: window.width / 100 * 84.8,
        height: window.height / 100 * 6.296,
        alignSelf: 'center',
        justifyContent: 'space-around',
        elevation: 0,

    },
    logo: {
        width: window.height * window.width / 100 / 100 * 0.9,
        height: window.height * window.width / 100 / 100 * 0.9,
        resizeMode: 'contain',
    },
    btnText: {
        color: 'white',
        fontFamily: Fonts.medium,
        fontSize: window.fontScale * 15,
    }
})