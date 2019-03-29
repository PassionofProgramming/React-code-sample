import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity, Picker } from 'react-native';
import * as NB from 'native-base';
import { HeaderBar } from "../common/header"
import ProgressBar from '../common/circularProgress/ProgressBar';
import Input from '../common/FormInput'
import { Images, Icons, Fonts } from '../../config/index';
import TabList from '../common/topTab/tabList';


const { height, width, fontScale } = Dimensions.get('window')

export default class AddMealTempFile extends Component {
    constructor() {
        super();
        this.state = {
            star: false,
            food: '',
            selectMeals: '',
            data: {
                backgroundSrc: null,
                itemName: null,
                quantity: null,
                calories: null,
                type: null,
            },
        }
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.props.headHide && <HeaderBar
                    onPressLeft={this.props.back}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Create Meal"}
                // onPressRight={this.props.check}
                // RightItem={<Image source={Icons.checkMark} style={{ height: 25, width: 25, resizeMode: "contain" }} />}
                />}
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                    contentContainerStyle={styles.scrollViewStyle} >
                    {this.state.data.name && <View style={styles.headingsView}>
                        <Text style={styles.headings}>
                            {this.state.data && this.state.data.itemName}
                        </Text>
                        <TouchableOpacity onPress={() => this.setState({ star: !this.state.star })} activeOpacity={1}>
                            <Image source={this.state.star ? Icons.star1 : Icons.star} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>}
                    {this.props.pick ?
                        <View style={{ alignItems: 'center' }}>
                            <View style={[styles.itemStyle, { borderBottomWidth: 1, borderBottomColor: "#8DAAB9" }]}>
                                <Picker 
                                    style={{ width: '100%'}}
                                    mode="dialog"
                                    itemStyle={{}}
                                    selectedValue={this.state.food}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ food: itemValue })}>
                                    <Picker.Item label="Create Breakfast" value="asd" />
                                    <Picker.Item label="Create Lunch" value="ft" />
                                    <Picker.Item label="Create Dinner" value="xyz" />
                                </Picker>
                            </View>

                            <Input itemStyle={styles.itemStyle} label=" " placeholder={'Beef Brisket, no fat'} />
                        </View>
                        :
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: height * 0.05, alignSelf: 'flex-start', width: width * 0.23, alignItems: 'flex-end' }}>
                                <Text style={{
                                    color: 'black',
                                    paddingTop: (height / 100 * 6.1) / 3,
                                    fontFamily: Fonts.book,
                                }}> Select Meal</Text>

                            </View>
                            <View style={[styles.itemStyle, { borderBottomWidth: 0.5, borderBottomColor: "#8DAAB9" }]}>
                                <Picker 
                                    style={{ width: '100%'}}
                                    mode="dropdown"
                                    itemStyle={{ }}
                                    selectedValue={this.state.selectMeals}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectMeals: itemValue })}>
                                    <Picker.Item label="Breakfast" value="asd" color={'#8DAAB9'} />
                                    <Picker.Item label="Snack" value="fst" color={'#8DAAB9'} />
                                    <Picker.Item label="Lunch" value="ft" color={'#8DAAB9'} />
                                    <Picker.Item label="Dinner" value="xyz" color={'#8DAAB9'} />
                                </Picker>
                            </View>
                            <Input itemStyle={styles.itemStyle} label="Meal Name " placeholder={"Name of your meal"} />
                        </View>
                    }
                    <View>
                        {this.props.meal &&
                            <View style={{ marginTop: 15 }}>
                                <TabList
                                    backgroundSrc={Icons.star}
                                    itemName="Bread"
                                    quantity="1 Slice"
                                    calories="20 Calories"
                                />
                                <TabList
                                    backgroundSrc={Icons.star}
                                    itemName="White Bread"
                                    quantity="1 Slice"
                                    calories="20 Calories"
                                />
                                <TabList
                                    backgroundSrc={Icons.star}
                                    itemName="Bread"
                                    quantity="1 Slice"
                                    calories="20 Calories"
                                />
                            </View>
                        }
                        <View style={styles.headingsView}>
                            <Text style={styles.headings}>
                                Nutrition Facts
                            </Text>
                        </View>
                        <View style={{ height: height / 3.5, width: width }}>
                            <ProgressBar
                                title={"Calories"}
                                titleSize={11}
                                titleColor={"#8DAAB9"}
                                titleBold={false}
                                numberSize={25}
                                numberColor={"black"}
                                totalFill={500}
                                fill={350}
                            // containerStyle={styles.progressContainerStyle}
                            />
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Carbohydrates
                        </Text>
                        <Text style={styles.listText}>
                            11g
                            </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Protein
                        </Text>
                        <Text style={styles.listText}>
                            11g
                            </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Fats
                        </Text>
                        <Text style={styles.listText}>
                            11g
                            </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Suger
                            </Text>
                        <Text style={styles.listText}>
                            11g
                            </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Sodium
                            </Text>
                        <Text style={styles.listText}>
                            11g
                            </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Cholesterol
                            </Text>
                        <Text style={styles.listText}>
                            11g
                            </Text>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    onPress={this.props.navigation ? () => { this.props.navigation.goBack() } : this.props.add}
                    activeOpacity={0.5}
                    style={styles.fabStyle}>
                    <Text style={styles.addIconStyle} > + </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={() => {
                        goBack();
                    }}
                    activeOpacity={0.5}
                    style={styles.fabStyle}>
                    <Text style={styles.addIconStyle} > + </Text>
                </TouchableOpacity> */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    actionButtonIcon: {
        fontSize: fontScale * 20,
        height: 22,
        color: 'white',
    },
    insideCircletop: {
        color: '#C7D6DE',
        fontFamily: Fonts.book
    },
    insideCircleCenter: {
        justifyContent: 'center',
        fontSize: fontScale * 20,
        color: 'black',
        fontFamily: Fonts.medium
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#C7D6DE',
        borderBottomWidth: 0.5,
        alignItems: 'center',
        alignSelf: 'center',
        height: height / 14,
        width: width * 0.95
    },
    listText: {
        color: 'black',
        fontFamily: Fonts.medium,
        fontSize: fontScale * 13,
        paddingHorizontal: "1%"
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
        alignSelf: 'center'
    },
    scrollViewStyle: {
        marginTop: '2%',
        paddingBottom: height * 0.02
    },
    itemStyle: {
        width: '96%',
        marginLeft: -2.5,
    },
    progressContainerStyle: {
        height: height / 6.8,
        paddingTop: 0,
    },
    fabStyle: {
        position: "absolute",
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#4D4EEB',
        alignItems: "center",
        justifyContent: "center",
        bottom: 20,
        // top: (height * 0.85) - (width * 0.13 / 2),
        right: (width * 0.13) / 4,
        zIndex: 20,
        alignSelf: "flex-end",
    },
    addIconStyle: {
        marginTop: -4.5,
        fontSize: 35,
        color: 'white',
        position: 'relative',
    },
})
