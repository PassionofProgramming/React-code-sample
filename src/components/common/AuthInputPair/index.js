import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Input from '../FormInput'
import Button from '../FormButton'
import { Icons, Fonts } from '../../../config/index';
import { Icon } from "native-base";
const { height, width, fontScale } = Dimensions.get('window')
class AuthInputPair extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        }
        this.inputs = {};
    }



    focusNextField(id) {
        this.inputs[id]._root.focus()
    }

    render() {
        return (
            <View style={styles.mainView} >
                <Input
                    blurOnSubmit={false}
                    inputRef={ref => this.inputs['email'] = ref}
                    onSubmitEditing={() => this.focusNextField('pass')}
                    returnKeyType="next"
                    value={this.props.valueEmail}
                    label={'Username'}
                    keyboardType={'email-address'}
                    autoCapitalize="none"
                    labelFontSize={fontScale * 16}
                    onChange={this.props.onChangeEmail}
                    icon={Icons.user}
                    placeholder={'E-mail or username'}
                    itemStyle={this.props.emailStyle}
                // text={'Available'}
                // textStyle={{ color: '#3CB371' }}
                />
                <Input
                    inputRef={ref => this.inputs['pass'] = ref}
                    onSubmitEditing={this.props.onSubmit}
                    returnKeyType="done"
                    label={'Password'}
                    value={this.props.valuePass}
                    labelFontSize={fontScale * 16}
                    secureTextEntry={!this.state.show}
                    onChange={this.props.onChangePassword}
                    icon={Icons.padLock}
                    itemStyle={this.props.passStyle}
                    placeholder={'Type password'}
                    iconRightComp={<Icon name={this.state.show ? "ios-eye-off" : "ios-eye"} />}
                    iconRightPress={() => this.setState({ show: !this.state.show })}
                />
                {this.props.error}
                <Text
                    style={styles.fogetPasswordText}
                    onPress={this.props.onPressForgetPass}
                >
                    Forgot password
                </Text>
            </View>
        );
    }
}
export default AuthInputPair

const styles = StyleSheet.create({
    mainView: {
        minHeight: (height / 100 * 72) / 100 * 45,
        maxHeight: (height / 100 * 72) / 100 * 55,
        width: width / 100 * 84.8,
    },
    fogetPasswordText: {
        color: '#6D6EFF',
        fontSize: fontScale * 16,
        paddingVertical: (height / 100 * 72) / 100 * 5,
        fontFamily: Fonts.book,
    },
})