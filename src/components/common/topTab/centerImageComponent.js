import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import FormInput from '../FormInput/index'
import Button from '../FormButton'
import { Images, Icons, Fonts } from '../../../config/index';
const { height, width, fontScale } = Dimensions.get('window');

const CenterImageComponent = (props) => {

    return (
        <View style={{ flex: 1, }}>
            {props.barCodeimgSource ?
                <View style={styles.tabViewStyle}>
                    <FormInput
                        itemStyle={{ width: width * 0.8 }}
                        placeholder={props.placeholder}
                        iconRight={Icons.search}
                        onChange={props.onChange}
                        iconRightPress={props.onPressSearch}
                    />
                    <TouchableOpacity onPress={props.barcode}>
                        <Image
                            source={props.barCodeimgSource}
                            style={styles.barCodeImageStyle}
                        />
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.tabViewStyle}>
                    <FormInput
                        itemStyle={{ width: width * 0.95 }}
                        placeholder={props.placeholder}
                        iconRight={Icons.search}
                        onChange={props.onChange}
                        iconRightPress={props.onPressSearch}
                    />
                </View>
            }
            <View style={styles.tabInsideView}>
                <View style={styles.imageViewStyle}>
                    <Image
                        source={props.centerImageSource}
                        style={styles.centerImageStyle}
                    />
                </View>
                <View style={styles.centerTabStyle}>
                    <Text style={styles.HeadingTextafterImage}> {props.headingText}</Text>

                    <View style={styles.ViewOfText}>
                        <Text style={styles.textAfterImage} > {props.centerFirstText} </Text>
                        <Text style={styles.textAfterImage}> {props.centerSecondText}  </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewOfButton}>
                <Button color={'#4D4EEB'} text={props.buttonText} onPress={props.onPress} />
            </View>
        </View>
    );
};

export default CenterImageComponent;

const styles = StyleSheet.create({
    tabViewStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: 'center',
        width: width * 0.95,
        height: height * 0.09,
    },
    tabInsideView: {
        width: width,
        height: height * 0.54,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageViewStyle: {
        height: height * 0.23,
        width: width * 0.3
    },
    barCodeImageStyle: {
        width: width * 0.09,
        height: height * 0.1,
        resizeMode: 'contain'
    },
    centerTabStyle: {
        height: height * 0.14,
        width: width * 0.8,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    centerImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    HeadingTextafterImage: {
        fontFamily: Fonts.bold,
        letterSpacing: 25,
        textAlign: 'center',
        color: '#8DAAB9',
        fontSize: fontScale * 22,
    },
    textAfterImage: {
        fontFamily: Fonts.book,
        textAlign: 'center',
        color: '#8DAAB9',
        fontSize: fontScale * 15,
    },
    ViewOfText: {
        justifyContent: 'space-around',
        height: height * 0.06,
    },
    viewOfButton: {
        height: height * 0.15,
        paddingTop: 1
    }
})