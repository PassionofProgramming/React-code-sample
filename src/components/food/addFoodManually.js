import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import * as NB from 'native-base'
const { height, width, fontScale } = Dimensions.get('window');
import Input from '../common/FormInput/index'
import Button from '../common/FormButton';
import { HeaderBar } from "../common/header";
import { Fonts, Icons } from '../../config/index';

class AddFoodManually extends Component {
    constructor(){
        super();
        this.state={
            brandName: "",
            discription: "",
            // serving: 
        }
    }
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Add Food Manually"}
                    RightItem={<Image source={Icons.checkMark} style={{ height: 25, width: 25, resizeMode: "contain" }} />}
                    onPressRight={() => goBack()}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                    contentContainerStyle={styles.scrollViewStyle}>
                    <View style={styles.headingsView}>
                        <Text style={styles.headings}>
                            Food / Servings
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Input 
                        itemStyle={styles.itemStyle} 
                        label="Brand Name(Optional)"
                         placeholder='00'
                         onChange={(e) => this.setState({ brandName: e.nativeEvent.text })}
                          />
                        <Input itemStyle={styles.itemStyle} label="Discription (Require)" placeholder='00' />
                        <Input itemStyle={styles.itemStyle} label="Serving Size (Require)" placeholder='00' />
                        <Input itemStyle={styles.itemStyle} label="Serving per Container (Require)" placeholder='00' />
                    </View>
                    <View style={styles.headingsView}>
                        <Text style={styles.headings}>
                            Nutrition Facts
                        </Text>
                    </View>
                    <View style={styles.formView}>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Carbohydrates'}
                                onChange={() => { }}
                                placeholder={'Required'}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Sodium'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Protein'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Potassium'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Total Fats'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Sugar'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Dietary Fibers'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Polyunsaturated Fat'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                        </View>
                        <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Trans Fats'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Monounsaturated Fat'}
                                onChange={() => { }}
                                placeholder={'Optional'}
                            />
                        </View>
                        {/* <View style={styles.viewOfButton}>
                            <Button color={'#4D4EEB'} text="Save" onPress={() => goBack()} />
                        </View> */}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default AddFoodManually;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    insideCircleCenter: {
        justifyContent: 'center',
        fontSize: fontScale * 14,
        fontFamily: Fonts.medium,
        color: 'black',
    },
    headings: {
        color: '#4D4EEB',
        fontFamily: Fonts.medium,
        fontSize: fontScale * 20,
    },
    headingsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height / 13,
        width: "96%",
        alignSelf: 'center',
    },
    formView: {
        height: (height / 100 * 76) / 100 * 75,
        width: width / 100 * 94.8,
        alignSelf: 'center',
    },
    inputStyle: {
        width: width * 0.43,
    },
    viewOfButton: {
        height: height * 0.11,
        paddingTop: 1,
        justifyContent: 'center'
    },
    scrollViewStyle: {
        paddingBottom: height * 0.02
    },
    itemStyle: {
        width: '96%'
    },
    insideFormView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})