import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import * as NB from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import FormInput from '../FormInput/index';
import Button from '../FormButton';
import { Fonts } from '../../../config/index';

const TabList = (props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.innerView}>
                <View style={styles.leftMainView}>
                    <View style={styles.imageView}>
                        <Image
                            source={props.backgroundSrc}
                            style={{
                                position: 'absolute',
                                height: 20,
                                width: 20,
                                resizeMode: 'contain',
                            }} />
                        <Text style={styles.topTextView} >{props.itemName}</Text>
                    </View>
                    <View style={styles.textView}>

                        <Text style={styles.textFont} >{props.quantity}</Text>
                        <Text style={styles.textFont} >{props.calories}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={props.addOnClick}>
                    <View style={styles.bottomView}>
                        <Image
                            source={props.RightImagebackgroundSrc}
                            style={{
                                position: 'absolute',
                                height: 30,
                                width: 30,
                                resizeMode: 'contain',
                            }} />
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    );
};

export default TabList;

const styles = StyleSheet.create({
    mainView: {
        height: height * 0.1,
        width: width,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#8DAAB9',
    },
    innerView: {
        height: height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.96,
        alignSelf: 'center',
    },
    leftMainView: {
        height: height * 0.08,
        width: width * 0.8,
    },
    imageView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.04,
    },
    topTextView: {
        textAlign: 'center',
        paddingLeft: width * 0.09,
        color: 'black',
        fontFamily:Fonts.medium,
        fontSize: fontScale * 14,
    },
    textView: {
        height: height * 0.03,
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: width * 0.5,
    },
    textFont: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 12,
        marginRight: '10%',
        color: '#8DAAB9'
    },
    bottomView: {
        height: height * 0.08,
        width: width * 0.1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    }
})