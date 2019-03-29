import React, { Component } from 'react';
import { View,Alert, Text, Image, ScrollView, Dimensions, StyleSheet, TextInput } from 'react-native';
// import { HeaderBar } from '../common/header';
import { Fonts } from '../../config/index';
import { Icons } from '../../config';
// import { NumInput } from "../common/numericInput";
import Menu, {
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-popup-menu';

const { height, width, fontScale } = Dimensions.get('window');

class NutrientTabs extends Component {
    constructor() {
        super();
        Alert.alert("hiiiiii")
    
    }
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
                 <Text style={{  fontSize: fontScale * 14, fontFamily: Fonts.black }}>fgfgfgfgfg</Text>
         
        );
    }
}

export default NutrientTabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#fff'
    },
    boxeVeiw: {
        // flex: 1,
        // backgroundColor: '#ff1',
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boxes: {
        height: height * 0.13,
        width: "50%",
        backgroundColor: '#fff',
        borderColor: '#8DAAB9',
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        justifyContent: 'space-between'

    },
    textView: {
        // backgroundColor: "red",
        height: "50%",//height * 0.065,
        width: "60%",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topText: {
        fontFamily: Fonts.medium,
        fontSize: fontScale * 16,
        color: 'black',
        paddingLeft: fontScale * 10
    },
    topText2: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 11,
        color: 'black',
        paddingLeft: fontScale * 10,
        margin: 2
    },
    bottomtextView: {
        height: "49.9%",
        justifyContent: "center",
        width: "50%",
        alignSelf: 'flex-end',
        alignItems: "center",
        // paddingBottom: 20
    },
    bottomText: {
        color: "#8DAAB9",
        fontFamily: Fonts.book,
        fontSize: fontScale * 16
    },
    rightIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    }
})