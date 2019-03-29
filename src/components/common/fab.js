import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TouchableHighlight, ScrollView, ART } from 'react-native'
import * as NB from 'native-base';
import ActionButton from '../ActionButton/index';
import { Icons, Images } from '../../config/index';
const { height, width, scale } = Dimensions.get('window');
const s = a => scale * a;
const {
    Surface,
    Shape,
    Group,
    Path,
    ClippingRectangle,
    LinearGradient,
    RadialGradient,
    Pattern,
    Transform
  } = ART
//   #835FF', '#6162FF

/////////////////SEARCH TAB ARRAY//////////////
const sectionArray = [{
    placeholder: "Search Breakfast",
    barCodeimgSource: Icons.barCode,
    centerImageSource: Icons.breakfast,
    headingText: "No Breakfast Add Yet!",
    centerFirstText: "  Add Your Breakfast with our ",
    centerSecondText: "Favorite recipes or your own creations",
    buttonText: "Add Food Manually",
}, {
    placeholder: "Search Snack",
    barCodeimgSource: Icons.barCode,
    centerImageSource: Icons.snack2,
    headingText: "No Snack Add Yet!",
    centerFirstText: "  Add Your Snack with our ",
    centerSecondText: "Favorite recipes or your own creations",
    buttonText: "Add Food Manually",
}, {
    placeholder: "Search Lunch",
    barCodeimgSource: Icons.barCode,
    centerImageSource: Icons.lunch,
    headingText: "No Lunch Add Yet!",
    centerFirstText: "  Add Your Lunch with our ",
    centerSecondText: "Favorite recipes or your own creations",
    buttonText: "Add Food Manually",
}, {
    placeholder: "Search Dinner",
    barCodeimgSource: Icons.barCode,
    centerImageSource: Icons.pot,
    headingText: "No Dinner Add Yet!",
    centerFirstText: "  Add Your Dinner with our ",
    centerSecondText: "Favorite recipes or your own creations",
    buttonText: "Add Food Manually",
}]
//////////////////BREAKFAST RECENT TAB ARRAY///////////////
const breackfastRecentTabArr = [{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'White Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'White Bread',
    quantity: '1 Slice ',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'White Bread',
    quantity: '1 Slice ',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
},];

const breackfastFavoriteTabArr = [{
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'White Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'White Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'White Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Bread',
    quantity: '1 Slice',
    calories: '20 Calories',
    type: 'solid',
},];
//////////////////SNACK RECENT TAB ARRAY///////////////
const snackRecentTabArr = [{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple',
    quantity: '1 Whole Apple',
    calories: '76 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
},
{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
},];

const snackFavoriteTabArr = [{
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple juice (unsweetened)',
    quantity: '1 regular glass (240ml)',
    calories: '113 Calories',
    type: 'liquid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Apple pie',
    quantity: '1 piece',
    calories: '20 Calories',
    type: 'solid',
},];
//////////////////LUNCH RECENT TAB ARRAY///////////////
const lunchRecentTabArr = [{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
},];

const lunchFavoriteTabArr = [{
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star1.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
},];
//////////////////DINNER RECENT TAB ARRAY///////////////
const dinnerRecentTabArr = [{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
},];

const dinnerFavoriteTabArr = [{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Brisket, no Fat',
    quantity: '1 Standar serving (150g)',
    calories: '363 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
},
{
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
}, {
    backgroundSrc: require('../../assets/icons/star.png'),
    itemName: 'Beef Shank, with fat ',
    quantity: '1 Standar serving (150)',
    calories: '578 kcal',
    type: 'solid',
},];
const Fab = (props) => {
    const { actionButtonIcon, mainViewStyle } = styles;
    let linearGradient = new LinearGradient(['#E835FF', '#6162FF'], s(15), s(20), s(30), s(2.5))
    // let linearGradient = new LinearGradient(['#E835FF', '#6162FF'], 60, 80, 120, 10) 
    return (

        <View style={mainViewStyle}>
            <ActionButton elevation={5} backdrop={
                // <Surface width={width} height={height} >
                //     <Shape
                //         d="M188,233H0.5V0.5H188V233z"
                //         transform={new Transform().transformTo(
                //             width / 100,
                //             0,
                //             0,
                //             height / 100,
                //             -(width / 100 * 0.5),
                //             -(height / 100 * 0.5),
                //             position = 'absolute',
                //         )}
                //         fill={linearGradient}
                //     />
                // </Surface>
                <Image source={Images.bgFoodFab} style={{height: "100%", width: "100%"}}/>                
            } bgColor="#E835FF" opaOnActive={.7} buttonColor="#4D4EEB" position={"right"} radius={width / 2}  >
                <ActionButton.Item buttonColor='white' title="Snack"
                    onPress={() => props.navigation.navigate('Food', { sections: sectionArray[1], section: 'Snack', itemsArray: snackRecentTabArr, favItemsArr: snackFavoriteTabArr })} >
                    <Image source={Icons.popcorn} style={actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='white' title="Dinner"
                    onPress={() => props.navigation.navigate('Food', { sections: sectionArray[3], section: 'Dinner', itemsArray: dinnerRecentTabArr, favItemsArr: dinnerFavoriteTabArr })}>
                    <Image source={Icons.porkRoast} style={actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='white' title="Snack"
                    onPress={() => props.navigation.navigate('Food', { sections: sectionArray[1], section: 'Snack', itemsArray: snackRecentTabArr, favItemsArr: snackFavoriteTabArr })}>
                    <Image source={Icons.snack} style={actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='white' title="Lunch"
                    onPress={() => props.navigation.navigate('Food', { sections: sectionArray[2], section: 'Lunch', itemsArray: lunchRecentTabArr, favItemsArr: lunchFavoriteTabArr })}>
                    <Image source={Icons.chicken} style={actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='white' title="Snack"
                    onPress={() => props.navigation.navigate('Food', { sections: sectionArray[1], section: 'Snack', itemsArray: snackRecentTabArr, favItemsArr: snackFavoriteTabArr })}>
                    <Image source={Icons.apple} style={actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='white' title="Breakfast"
                    onPress={() => props.navigation.navigate('Food', { sections: sectionArray[0], section: 'Breakfast', itemsArray: breackfastRecentTabArr, favItemsArr: breackfastFavoriteTabArr })}>
                    <Image source={Icons.toast} style={actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View >
    );
};

export default Fab;

const styles = StyleSheet.create({
    actionButtonIcon: {
        height: 40,
        width: 35,
        resizeMode: 'contain',
    },
    mainViewStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})