import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import * as NB from 'native-base';
import { HeaderBar } from "../common/header"
import ProgressBar from '../common/circularProgress/ProgressBar';
import Input from '../common/FormInput'
import { Images, Icons, Fonts } from '../../config/index';

const { height, width, fontScale } = Dimensions.get('window')

export default class AddFoodFromSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star: false,

            totalCalories: 500,
            calories: 321,
            carbohydrates: "11g",
            protein: "11g",
            fats: "11g",
            suger: "11g",
            sodium: "11g",
            cholesterol: "11g",
            servingNum: 0,
            servingSize: 0,
            glasses: 0,
            glassSize: 0,

            data: {
                name: null,
                backgroundSrc: null,
                itemName: null,
                quantity: null,
                calories: null,
                type: null,
            },
        }
    }
    componentDidMount() {
        this.propState(this.props)
    }
    componentWillReceiveProps(props) {
        this.propState(props)
    }

    done(goBack) {
        let data = this.state.data.name ? this.state.data : null;
        let screen = this.state.data.name ? this.state.data.name : "meal";
        let { servingNum, servingSize, glasses, glassSize } = this.state
        // console.warn(screen, data)
        goBack()
    }

    add() {
        alert("MicroNutrientsAdded")
    }

    propState(props) {
        if (props.navigation.state.params) {
            this.setState({
                data: { ...props.navigation.state.params.data },
                star: props.navigation.state.params.star
            })
        }
        console.log(this.state.data, 'asd')
    }
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate, goBack } = this.props.navigation;

        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={this.state.data.name ? "Add " + this.state.data.name : "Create Meal"}
                    onPressRight={() => this.done(goBack)}
                    RightItem={<Image source={Icons.checkMark} style={{ height: 25, width: 25, resizeMode: "contain" }} />}
                />
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
                    {this.state.data.name ?
                        this.state.data.type === "solid" ?
                            <View style={{ alignItems: 'center' }}>
                                <Input
                                    itemStyle={styles.itemStyle}
                                    label={"Number of Servings"}
                                    placeholder='00'
                                    keyboardType="numeric"
                                    onChange={(e) => this.setState({ servingNum: e.nativeEvent.text })}
                                />
                                <Input
                                    itemStyle={styles.itemStyle}
                                    label="Serving Size"
                                    placeholder={'00'}
                                    keyboardType="numeric"
                                    onChange={(e) => this.setState({ servingSize: e.nativeEvent.text })}
                                />
                            </View>
                            :
                            <View style={{ alignItems: 'center' }}>
                                <Input
                                    itemStyle={styles.itemStyle}
                                    label={"Number of Glasses"}
                                    placeholder='00'
                                    keyboardType="numeric"
                                    onChange={(e) => this.setState({ glasses: e.nativeEvent.text })}
                                />
                                <Input
                                    itemStyle={styles.itemStyle}
                                    label="Serving Size"
                                    placeholder={"00 ml"}
                                    keyboardType="numeric"
                                    onChange={(e) => this.setState({ glassSize: e.nativeEvent.text })}
                                />
                            </View>
                        : <View style={{ alignItems: 'center' }}>
                            <Input
                                itemStyle={styles.itemStyle}
                                label={"Select Meal "}
                                placeholder='Breakfast'
                                onChange={(e) => this.setState({ meal: e.nativeEvent.text })}
                            />
                            <Input
                                itemStyle={styles.itemStyle}
                                label="Meal Name"
                                placeholder={"Name of your meal"}
                                onChange={(e) => this.setState({ mealName: e.nativeEvent.text })}
                            />
                        </View>
                    }
                    <View>
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
                                totalFill={this.state.totalCalories}
                                fill={this.state.calories}
                            // containerStyle={styles.progressContainerStyle}
                            />
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Carbohydrates
                        </Text>
                        <Text style={styles.listText}>
                            {this.state.carbohydrates}
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Protein
                        </Text>
                        <Text style={styles.listText}>
                            {this.state.protein}
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Fats
                        </Text>
                        <Text style={styles.listText}>
                            {this.state.fats}
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Suger
                            </Text>
                        <Text style={styles.listText}>
                            {this.state.suger}
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Sodium
                            </Text>
                        <Text style={styles.listText}>
                            {this.state.sodium}
                        </Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.listText}>
                            Cholesterol
                            </Text>
                        <Text style={styles.listText}>
                            {this.state.cholesterol}
                        </Text>
                    </View>
                </ScrollView>

                {
                    this.state.data.name ?
                        null
                        :
                        <TouchableOpacity
                            onPress={() => this.add()}
                            activeOpacity={0.5}
                            style={styles.fabStyle}>
                            <Text style={styles.addIconStyle} > + </Text>
                        </TouchableOpacity>
                }
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
        width: '96%'
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
        top: (height * 0.85) - (width * 0.13 / 2),
        right: (width * 0.13) / 4,
        // zIndex: 20,
        alignSelf: "flex-end",
    },
    addIconStyle: {
        marginTop: -4.5,
        fontSize: 35,
        color: 'white',
        position: 'relative',
    },
})
