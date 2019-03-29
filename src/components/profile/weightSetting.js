import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, StyleSheet, Picker } from 'react-native';
import Input from '../common/FormInput';
import { Fonts, Icons } from '../../config/index';
import * as NB from 'native-base';

const { height, width, fontScale } = Dimensions.get('window');

class WeightSetting extends Component {
    constructor() {
        super();
        this.state = {
            Carbohydrates: "Carbohydrates",
            Protein: "Protein",
            Sodium: "Sodium",
            Fat: "Fat",
            Cholestrol: "Cholestrol",
            Sugars: "Sugars",
        }
    }
    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.topView}>
                        <View style={styles.dropDownContainer}>
                            <Input
                                label={' Measurements'}
                                onChange={() => { }}
                                placeholder={'Imperial'}
                                placeholderTextColor='#BDBDBD'
                                iconRight={Icons.dropDown}
                                iconRightStyle={styles.iconImgStyle}
                            />
                        </View>
                    </View>

                    <View style={styles.topView}>
                        <View style={styles.HeadingView}>
                            <Text style={styles.headingText}> Nutritional Information</Text>
                            <View style={styles.textView}>
                                <Text style={styles.textAfterheading}>Arrange nutritional Information in a way you like the most</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.listView}>
                        <View style={styles.listHeading}>
                            <Text style={styles.listTextStyle}> Position  </Text>
                            <Text style={styles.listTextStyle}> Tracking Sequence  </Text>
                        </View>

                        <View style={styles.secondView}>
                            <View style={styles.counterView}>
                                <Text style={styles.counterStyle}>1</Text>
                            </View>
                            <View style={styles.pickerViewStyle}>
                                <Picker style={styles.pickerheight}
                                    mode="dialog"
                                    itemStyle={{}}
                                    selectedValue={this.state.Carbohydrates}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ Carbohydrates: itemValue })}>
                                    <Picker.Item
                                        label="Carbohydrates" value="asd" />
                                    <Picker.Item label="Fat" value="ft" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.secondView}>
                            <View style={styles.counterView}>
                                <Text style={styles.counterStyle}>2</Text>
                            </View>
                            <View style={styles.pickerViewStyle}>
                                <Picker style={styles.pickerheight}
                                    itemStyle={{}}
                                    selectedValue={this.state.Protein}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ Protein: itemValue })}>
                                    <Picker.Item
                                        label="Protein" value="asd" />
                                    <Picker.Item label="Carbohydrates" value="ft" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.secondView}>
                            <View style={styles.counterView}>
                                <Text style={styles.counterStyle}>3</Text>
                            </View>
                            <View style={styles.pickerViewStyle}>
                                <Picker style={styles.pickerheight}
                                    itemStyle={{}}
                                    selectedValue={this.state.Sodium}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ Sodium: itemValue })}>
                                    <Picker.Item
                                        label="Sodium" value="asd" />
                                    <Picker.Item label="Proteins" value="ft" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.secondView}>
                            <View style={styles.counterView}>
                                <Text style={styles.counterStyle}>4</Text>
                            </View>
                            <View style={styles.pickerViewStyle}>
                                <Picker style={styles.pickerheight}
                                    itemStyle={{}}
                                    selectedValue={this.state.Fat}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ Fat: itemValue })}>
                                    <Picker.Item
                                        label="Fat" value="asd" />
                                    <Picker.Item label="Sodium" value="ft" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.secondView}>
                            <View style={styles.counterView}>
                                <Text style={styles.counterStyle}>5</Text>
                            </View>
                            <View style={styles.pickerViewStyle}>
                                <Picker style={styles.pickerheight}
                                    itemStyle={{}}
                                    selectedValue={this.state.Cholestrol}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ Cholestrol: itemValue })}>
                                    <Picker.Item
                                        label="Cholestrol" value="asd" />
                                    <Picker.Item label="Carbohydrates" value="ft" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.secondView}>
                            <View style={styles.counterView}>
                                <Text style={styles.counterStyle}>6</Text>
                            </View>
                            <View style={styles.pickerViewStyle}>
                                <Picker style={styles.pickerheight}
                                    itemStyle={{ fontFamily: Fonts.medium }}
                                    selectedValue={this.state.Sugars}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ Sugars: itemValue })}>
                                    <Picker.Item
                                        label="Sugars" value="asd" />
                                    <Picker.Item label="Cholestrol" value="ft" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default WeightSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topView: {
        height: height * 0.12,
        justifyContent: 'flex-end',
        margin: 1
    },
    headingText: {
        fontFamily: Fonts.book,
        color: 'black',
        fontSize: fontScale * 15,
    },
    dropDownContainer: {
        width: width * 0.98,
        alignSelf: 'center',
    },
    HeadingView: {
        alignSelf: 'center',
        width: width * 0.98,
        height: height * 0.09,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    textAfterheading: {
        fontFamily: Fonts.medium,
        fontSize: fontScale * 14,
        color: '#BDBDBD',
    },
    textView: {
        width: width * 0.96,
        alignSelf: 'center'
    },
    listView: {
        height: height * 0.6
    },
    listHeading: {
        height: height * 0.06,
        width: width * 0.57,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    secondView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: height * 0.07,
        paddingHorizontal: "4%"
    },
    counterView: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        marginTop: '2%',
    },
    counterStyle: {
        color: 'black',
        fontFamily: Fonts.book
    },
    pickerViewStyle: {
        width: width * 0.75,
        borderBottomWidth: 1,
        borderBottomColor: "#8DAAB9",
        marginTop: '2%',
    },
    pickerheight: {
        height: "100%"
    },
    listTextStyle: {
        fontFamily: Fonts.book,
        color: '#6D6EFF',
        paddingLeft: '2%'
    },
    iconImgStyle: {
        height: 80,
        width: 8,
        resizeMode: 'contain'
    }
})