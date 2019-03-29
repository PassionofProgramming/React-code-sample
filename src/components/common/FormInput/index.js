import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import * as NB from 'native-base';
const { height, width } = Dimensions.get('window')
import { Fonts } from '../../../config/index';

export default class FormInput extends Component {
    constructor() {
        super();
        this.state = {
            focus: false,
        }
    }
    render() {
        return (
            <View>
                <Text style={[styles.labelStyle, { fontSize: this.props.labelFontSize }]}>
                    {this.props.label}
                </Text>
                <NB.Item
                    style={[
                        styles.item,
                        this.state.focus && styles.inputBorder,
                        this.props.itemStyle
                    ]}
                >
                    <Image
                        source={this.props.icon}
                        style={styles.iconImgStyle}
                    />
                    <NB.Input
                        ref={this.props.inputRef}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={this.props.placeholderTextColor || '#8DAAB9'}
                        style={[styles.input, this.props.inputStyle]}
                        {...this.props}
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={() => this.setState({ focus: false })}
                        selectionColor={"#4D4EEB"}
                    // keyboardType={'email-address'}
                    // maxLength={this.props.maxLength}
                    />
                    <TouchableOpacity activeOpacity={1} onPress={this.props.iconRightPress}>
                        <Image
                            source={this.props.iconRight}
                            style={[styles.iconImgStyle, this.props.iconRightStyle]}
                        />
                        {this.props.iconRightComp}
                    </TouchableOpacity>
                    <Text style={this.props.textStyle}>{this.props.text}</Text>
                </NB.Item>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        fontFamily: Fonts.book,
        fontSize: height / 100 * 2.23,
        paddingLeft:0
    },
    labelStyle: {
        color: 'black',
        paddingTop: (height / 100 * 6.1) / 3,
        fontFamily: Fonts.book,
    },
    iconImgStyle: {
        width: height / 100 * 3,
        height: height / 100 * 3,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginRight: 10,
    },
    item: {
        height: height / 100 * 6.1,
    },
    inputBorder: {
        borderColor: '#4D4EEB'
    },
})