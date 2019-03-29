import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from '../FormButton';
import { AuthBottomText } from '../authBottomText';
import { Images, Icons, Fonts } from '../../../config/index';

const { height, width } = Dimensions.get('window')
class AuthButtonPair extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <View style={{
                minHeight: (height / 100 * 72) / 100 * 37,
                maxHeight: (height / 100 * 72) / 100 * 42,
                paddingTop: (height / 100 * 72) / 100 * 7,
                width: width / 100 * 84.8,
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Button
                    color={'#4D4EEB'}
                    onPress={this.props.onPressBtn1}
                    text={this.props.btn1Text}
                />
                <View style={styles.orView}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>
                        OR
                    </Text>
                    <View style={styles.line} />
                </View>
                <Button
                    color={'#427DC3'}
                    onPress={this.props.onPressBtn2}
                    text={this.props.btn2Text}
                    icon={Icons.fb}
                />
                <AuthBottomText
                    text={this.props.bottomText}
                    linkText={this.props.bottomLinkText}
                    onPress={this.props.onPressLink}
                />
            </View>
        );
    }
}
export default AuthButtonPair

const styles = StyleSheet.create({
    line: {
        width: '42%',
        height: 1,
        backgroundColor: '#BDBDBD',
        alignSelf: 'center'
    },
    orText: {
        marginVertical: '-2%',
        color: "#BDBDBD",
        fontFamily:Fonts.medium,
    },
    orView: {
        flexDirection: 'row',
        paddingTop: '2%',
        justifyContent: 'space-between',
    },
})