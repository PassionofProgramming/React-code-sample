import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import * as NB from 'native-base';
import { Images, Fonts } from '../../config/index';

const { height, width } = Dimensions.get('window');

class Stepper extends Component {

    render() {
        const { container, content, line, stepperStyle, active, stepperTextActive, stepperStyle2, leftdot, rightDot, dot, activeButton, logoImage, stepperView, textView, numberStyle, smallDot } = styles;
        return (
            <View style={container} >
                <View style={content}>
                    <Image
                        source={Images.logo} style={logoImage}
                    />
                    <View style={stepperView}>

                        <View style={[stepperStyle, this.props.counter === 0 && active]}>
                            <Text style={this.props.counter === 0 ? stepperTextActive : numberStyle} >1</Text>
                        </View>

                        <View style={[smallDot, leftdot, this.props.counter !== 0 && dot]} />
                        <View style={line} />
                        <View style={[smallDot, rightDot, this.props.counter !== 1 && dot]} />

                        <View style={[stepperStyle, this.props.counter === 1 && active]}>
                            <Text style={this.props.counter === 1 ? stepperTextActive : numberStyle} >2</Text>
                        </View>

                        <View style={[smallDot, leftdot, this.props.counter !== 1 && dot]} />
                        <View style={line} />
                        <View style={[smallDot, rightDot, this.props.counter !== 2 && dot]} />

                        <View style={[stepperStyle, this.props.counter === 2 && active]}>
                            <Text style={this.props.counter === 2 ? stepperTextActive : numberStyle} >3</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};

export default Stepper;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: height / 100 * 24,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#54d'
    },
    content: {
        paddingTop: '4%',
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '98%',
        paddingBottom: 1,
        // backgroundColor: '#3ef'
    },
    line: {
        width: 10,
        height: 1,
        backgroundColor: '#BDBDBD',
        alignSelf: 'center',
    },

    stepperStyle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#E0E0E0',
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2
    },
    active: {
        borderWidth: 0,
        backgroundColor: '#6D6EFF'
    },
    stepperTextActive: {
        color: 'white',
        fontFamily: Fonts.medium,
    },
    stepperTextInactive: {
        color: '#E0E0E0',
    },
    smallDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        zIndex: 1,
        marginVertical: 15,
        backgroundColor: '#6D6EFF',
        position: 'relative',
    },
    dot: {
        backgroundColor: '#E0E0E0',
    },
    leftdot: {
        marginLeft: -6,
    },
    rightDot: {
        marginRight: -6,
    },
    logoImage: {
        width: 60,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    stepperView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },


    numberStyle: {
        color: '#C7D6DE',
        fontFamily: Fonts.medium,
    },

})

