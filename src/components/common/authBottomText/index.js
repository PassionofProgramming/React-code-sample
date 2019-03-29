import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Fonts} from '../../../config/index'

const { fontScale } = Dimensions.get('window')

const AuthBottomText = ({ onPress, text, linkText }) => {
    const { TextStyle, getStarted, viewStyle } = styles;

    return (
        <View
            style={viewStyle}
        >
            <Text
                style={TextStyle}
            >
                {text}
            </Text>
            <Text
                style={getStarted}
                onPress={onPress}
            >
                {linkText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    TextStyle: {
        color: 'black',
        fontFamily: Fonts.medium,
        fontSize: fontScale * 17,
    },
    getStarted: {
        color: '#6D6EFF',
        fontFamily: Fonts.book,
        marginLeft: 4,
        fontSize: fontScale * 17,
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export { AuthBottomText };