import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal } from 'react-native';
import Gallery from './gallery';
import CameraCapture from "./cameraCapture"
import * as NB from "native-base";

const { height, width, fontScale } = Dimensions.get("window")

class RenderGallery extends Component {
    constructor() {
        super();
        // this.state = {
        //     nav: false,
        // }
    }
    static navigationOptions = {
        header: null
    };

    componentWillUnmount() {
        // requestCameraPermission();
        //    this.setState({})
    }
    render() {
        return (
            // this.state.permission ?
            // <View>
            //     <View
            //         style={{
            //         backgroundColor: 'grey',
            //         height: height * 0.08,
            //         flexDirection: 'row',
            //         width: width,
            //         flexWrap: 'wrap'
            //     }}>

            <NB.Tabs
                locked
                initialPage={0}
                tabBarPosition="bottom"
                textStyle={styles.tabTextStyle}
                tabBarUnderlineStyle={styles.tabBottomLineStyle}>
                <NB.Tab
                    tabStyle={styles.activeTabBackgroundStyle}
                    activeTabStyle={styles.activeTabBackgroundStyle}
                    activeTextStyle={styles.activeTabTextStyle}
                    textStyle={styles.tabTextStyle}
                    heading="Gallery">
                    <Gallery
                        nav={this.props.nav}
                        setState={this.props.setState}
                        screen={this.props.screen}
                    />
                </NB.Tab>
                <NB.Tab
                    tabStyle={styles.activeTabBackgroundStyle}
                    activeTabStyle={styles.activeTabBackgroundStyle}
                    activeTextStyle={styles.activeTabTextStyle}
                    textStyle={styles.tabTextStyle}
                    heading="Photo">
                    <CameraCapture
                        nav={this.props.nav}
                        setState={this.props.setState}
                        screen={this.props.screen}
                    />
                </NB.Tab>

            </NB.Tabs>
            // : <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>You should allow permission</Text></View>
            // </View>
            // </View>
        );
    }
}

export default RenderGallery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6AE2D'
    },
    content: {
        marginTop: 15,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 16,
        alignItems: 'center',
        color: '#fff'
    },
    bold: {
        fontWeight: 'bold'
    },
    info: {
        fontSize: 12
    },
    tabTextStyle: {
        color: '#8DAAB9',
        fontSize: 13
    },
    tabBottomLineStyle: {
        backgroundColor: '#000',
        width: '45%',
        marginHorizontal: 5
    },
    activeTabBackgroundStyle: {
        backgroundColor: 'white'
    },
    activeTabTextStyle: {
        // color: '#4D4EEB',
        color: '#000',
        fontSize: 13
    },
    headerStyle: {
        elevation: 0
    }
});