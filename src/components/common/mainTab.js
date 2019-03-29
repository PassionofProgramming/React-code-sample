import React, { Component } from 'react';
import {
    View,
    Animated
} from 'react-native';
import Tabs from './tabNavigator';

class MainTab extends Component {
    constructor() {
        super();
        this.state = {
            // slide: new Animated.Value(1000),
        }
    }
    static navigationOptions = {
        header: null
    }
    // componentDidMount() {
    //     Animated.spring(
    //         this.state.slide,
    //         {
    //             toValue: 0,
    //         }
    //     ).start();
    // }



    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Animated.View style={{
                    transform: [
                        {
                            translateX: this.state.slide
                        }
                    ]
                }} > */}
                    <Tabs navigation={this.props.navigation}
                    />
                {/* </Animated.View> */}
            </View>
        );
    }
}
export default MainTab;
MainTab.router = Tabs.router;