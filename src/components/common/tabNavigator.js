import React from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Image, StyleSheet } from 'react-native';
// import Dashboard from '../../components/Dashboard/'
import { Home, Food, Exercise, FoodNav,DashboardNav, ExerciseNav, ProgressNav } from '../common/topTab'
import { Icons, Fonts } from '../../config/index';
import { ProfileTabbar } from '../profile/tabbar';

const BottomTabs = TabNavigator({

    // Progress: {
    //     screen: ProgressNav,
    //     navigationOptions: {
    //         // title: 'Progress',
    //         // headerTitleStyle: { alignSelf: 'center' },
    //         tabBarIcon: ({ tintColor }) => <Image source={tintColor === 'black' ? Icons.barChart1 : Icons.barChart} style={styles.tabIconStyle} color={tintColor} />
    //     },
    // },

    Dashboard: {
        screen: DashboardNav,
        navigationOptions: {
            // tabBarLabel: 'Home',
            header: null,
            // title: 'Home',
            headerTitleStyle: {
                alignSelf: 'center', fontSize: 17,
                fontFamily: "CircularStd-Medium",
            },
            tabBarIcon: ({ tintColor }) => <Image source={tintColor === 'black' ? Icons.home2 : Icons.home} style={styles.tabIconStyle} color={tintColor} />
        },
    },
    Exercise: {
        screen: ExerciseNav,
        navigationOptions: {
            header: null,
            // title: 'Exercise',
            // headerTitleStyle: { alignSelf: 'center' },
            tabBarIcon: ({ tintColor }) => <Image source={tintColor === 'black' ? Icons.dumbbell2 : Icons.dumbbell} resizeMethod="auto" resizeMode="contain" style={{height: "125%", width: "125%",}} color={tintColor} />
        },
    },

    Food: {
        screen: FoodNav,
        navigationOptions: {
            header: null,
            // title: 'Food',
            // headerTitleStyle: { alignSelf: 'center' },
            tabBarIcon: ({ tintColor }) => <Image source={tintColor === 'black' ? Icons.restaurant2 : Icons.restaurant} style={styles.tabIconStyle} color={tintColor} />
        },
    },
    Progress: {
        screen: ProgressNav,
        navigationOptions: {
            // title: 'Progress',
            // headerTitleStyle: { alignSelf: 'center' },
            tabBarIcon: ({ tintColor }) => <Image source={tintColor === 'black' ? Icons.barChart1 : Icons.barChart} style={styles.tabIconStyle} color={tintColor} />
        },
    },
    Profile: {
        screen: ProfileTabbar, 
        navigationOptions: {
            // title: 'Profile',
            // headerTitleStyle: { alignSelf: 'center' },
            tabBarIcon: ({ tintColor }) => <Image source={tintColor === 'black' ? Icons.user21 : Icons.user2} style={styles.tabIconStyle} color={tintColor} />
        },
    },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: '#8B64FF',
            // labelStyle: {
            //     fontSize: 9,
            //     fontFamily: Fonts.book,
            // },
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                borderTopColor: 'white',
                borderBottomWidth: 0,
                height: "8%",
                width: '100%'

            },
            indicatorStyle: {
                backgroundColor: 'white'
            }
        }
    });
export default BottomTabs;

const styles = StyleSheet.create({
    tabIconStyle: {
        width: '100%' , height: '100%', resizeMode: 'contain',
    },
})