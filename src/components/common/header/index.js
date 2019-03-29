import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, View, Text } from 'react-native';
import { Header, Button, Icon, Title, } from 'native-base';
import { Fonts } from '../../../config/index';

const { height, width, fontScale } = Dimensions.get('window')

export const HeaderBar = ({
    hasTabs,
    headerStyle,
    LeftItem,
    onPressLeft,
    RightItem,
    onPressRight,
    Heading,
    TextColor,
    statusbarColor,
    rightItemStyle,
    leftItemStyle
}) => {
    return (
        <Header hasTabs={hasTabs} //androidStatusBarColor={statusbarColor} 
            style={[styles.header, headerStyle]}>
            <TouchableOpacity
                onPress={onPressLeft}>
                <View style={[{ width: 30, height: 30 }, leftItemStyle]}>
                    {LeftItem ? LeftItem : <Icon name="ios-arrow-back" style={{ color: TextColor }} />}
                </View>
            </TouchableOpacity>
            <Title style={[styles.title, { color: TextColor || "black", fontSize: Heading === "Dashboard" ? (fontScale * 21) : (fontScale * 16), }]}>{Heading}</Title>
            <TouchableOpacity onPress={onPressRight}>
                <View style={[{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }, rightItemStyle]}>
                    {RightItem ? RightItem : <Icon /> || <Text />}
                </View>
            </TouchableOpacity>
        </Header>
    )
}

const styles = StyleSheet.create({
    header: {
        elevation: 4,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    title: {
        justifyContent: 'center',
        fontFamily: Fonts.bold,
        color: 'black',
    }
})