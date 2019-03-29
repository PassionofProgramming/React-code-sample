import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Icons, Fonts } from '../../config/index';
import TabList from "../common/topTab/tabList";
import FormInput from "../common/FormInput"

const { height, width, fontScale } = Dimensions.get("window")

class CreatedMeals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: true,
            items: [{
                backgroundSrc: Icons.star,
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: Icons.star1,
                itemName: 'White Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: Icons.star,//require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: Icons.star,//require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: Icons.star1,//require('../../../assets/icons/star.png'),
                itemName: 'White Bread',
                quantity: '1 Slice ',
                calories: '20 Calories',
                type: 'solid',
            }, {
                backgroundSrc: Icons.star,//require('../../../assets/icons/star.png'),
                itemName: 'Bread',
                quantity: '1 Slice',
                calories: '20 Calories',
                type: 'solid',
            },],
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.tabViewStyle}>
                    <FormInput
                        itemStyle={{ width: this.props.last ? width * 0.95 : width * 0.8}}
                        placeholder={this.props.last ? "Search Meals" : "Search"}
                        iconRight={Icons.search}
                    />
                    {!this.props.last &&
                    <Image
                        source={Icons.barCode}
                        style={styles.barCodeImageStyle}
                    />}
                </View>
                {this.state.items && this.state.items.map((data, i) => {
                    return (
                        this.props.last ?

                            <View key={i} style={styles.mainView}>
                                <View style={styles.innerView}>
                                    <View style={styles.leftMainView}>
                                        <Text style={styles.topTextView} >{"Meal #" + (i + 1)}</Text>
                                        <Text style={styles.textFont} >20 Calories</Text>
                                    </View>
                                    <TouchableOpacity onPress={this.props.navigate}>
                                        <View style={styles.bottomView}>
                                            <Image
                                                source={Icons.add}
                                                style={{
                                                    position: 'absolute',
                                                    height: 30,
                                                    width: 30,
                                                    resizeMode: 'contain',
                                                }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <TabList
                                key={i}
                                {...data}
                                RightImagebackgroundSrc={Icons.add}
                                addOnClick={this.props.navigate}
                            />
                    )
                    console.log("favoriteItems", favoriteItems)

                })
                }
            </View>
        );
    }
}

export default CreatedMeals;

const styles = StyleSheet.create({

    tabViewStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: 'center',
        width: width * 0.95,
        height: height * 0.09,
        marginBottom: 10,
    },
    barCodeImageStyle: {
        width: width * 0.09,
        height: height * 0.1,
        resizeMode: 'contain'
    },
    textFont: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 14,
        marginRight: '10%',
        color: '#8DAAB9'
    },
    bottomView: {
        height: height * 0.08,
        width: width * 0.1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    topTextView: {
        // textAlign: 'center',
        // paddingLeft: width * 0.09,
        fontFamily: Fonts.medium,        
        color: 'black',
        fontSize: fontScale * 16,
    },
    innerView: {
        height: height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.96,
        alignSelf: 'center',
    },
    leftMainView: {
        height: height * 0.07,
        width: width * 0.8,
        justifyContent: "space-around"
    },
    mainView: {
        height: height * 0.1,
        width: width,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#8DAAB9',
    },
})