import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Image, StyleSheet } from 'react-native';
import Dashboard from '../../components/Dashboard/'
import BottomTabs from '../common/tabNavigator'



class Tabs extends Component {
    render() {
        return (
            <View>
                <BottomTabs />
            </View>
        );
    }
}

export default Tabs;