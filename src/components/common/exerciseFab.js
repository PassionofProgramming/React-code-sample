import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ART } from 'react-native'
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
/////////////////SEARCH TAB ARRAY//////////////
const sectionArray = [{
    placeholder: "Search Exercise",
    // barCodeimgSource: Icons.barCode,
    centerImageSource: Images.shoe,
    headingText: "Add Cardio Exercise",
    centerFirstText: "  Add Exercise with our ",
    centerSecondText: "Favorite List or your own creations",
    buttonText: "Add Manually",
},{
    placeholder: "Search Strength",
    // barCodeimgSource: Icons.barCode,
    centerImageSource: Icons.fitness,
    headingText: "Add Strength Exercise",
    centerFirstText: "  Add Exercise with our ",
    centerSecondText: "Favorite List or your own creations",
    buttonText: "Add Manually",
},]
//////////////////Cardio RECENT TAB ARRAY///////////////
const cardioRecentTabArr = [{
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
},
{
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
},];

const cardioFavoriteTabArr = [{
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
},
{
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Walking',
    subText1st: "50 minutes",
    subText2nd: "2.5 mpg",
    // subText3rd: "10 lb",
},];

//////////////////Strength RECENT TAB ARRAY///////////////
const strengthRecentTabArr = [{
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, 
{
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
},];

const strengthFavoriteTabArr = [{
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
},
{
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
}, {
    favoriteIconSrc: Icons.star1,
    itemName: 'Squats',
    subText1st: "2 Sets",
    subText2nd: "10 reps",
    subText3rd: "10 lb",
},];

const Fab = (props) => {
    const { actionButtonIcon, mainViewStyle } = styles;
    let linearGradient = new LinearGradient(['#FF78A4', '#FFBE4B'], s(20), s(30), s(30), s(15))
    return (

        <View style={mainViewStyle}>
            <ActionButton elevation={5} itemSize={width / 2.1} backdrop={
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
                <Image source={Images.bgExerciseFab} style={{height: "100%", width: "100%"}}/>
            } opaOnActive={.7} bgColor='pink' buttonColor="#FF78A4" btnOutRange='#FFBE4B' position={"right"} radius={width / 6}  >
                <ActionButton.Item buttonColor='white' title="Strength"
                    onPress={() => props.navigation.navigate('Exercise', { sections: sectionArray[1], section: 'Strength', itemsArray: strengthRecentTabArr, favItemsArr: strengthFavoriteTabArr })}>
                    <Image source={Icons.fitness} style={actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='white' title="Cardio"
                    onPress={() => props.navigation.navigate('Exercise', { sections: sectionArray[0], section: 'Cardio', itemsArray: cardioRecentTabArr, favItemsArr: cardioFavoriteTabArr })}>
                    <Image source={Images.shoe} style={actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View >
    );
};

export default Fab;

const styles = StyleSheet.create({
    actionButtonIcon: {
        height: 50,
        width: 50,
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