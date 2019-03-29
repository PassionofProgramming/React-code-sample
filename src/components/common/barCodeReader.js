import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Dimensions, TouchableOpacity } from 'react-native';
import * as NB from "native-base";

import BarcodeScanner, { Exception, FocusMode, CameraFillMode, FlashMode, BarcodeType, pauseScanner, resumeScanner } from 'react-native-barcode-scanner-google';
const { height, width } = Dimensions.get('window');

export default class BarcodeApp extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{ height, width: width, backgroundColor: "#fff" }}>
                <View style={{
                    height: "100%", width: "18%", position: 'absolute', zIndex: 5, left: 0, //opacity: 0.2, backgroundColor: '#4D4EEB'
                }}>
                    <View style={{ height: "30.65%", width: 2, position: "absolute", top: "34.65%", right: 0, backgroundColor: '#8DAAB9' }} />
                </View>
                <View style={{
                    height: "100%", width: "18%", position: 'absolute', zIndex: 5, right: 0, //opacity: 0.2, backgroundColor: '#4D4EEB',
                }}>
                    <View style={{ height: "30.65%", width: 2, position: "absolute", top: "34.65%", left: 0, backgroundColor: '#8DAAB9' }} />
                </View>
                <View style={{
                    height: "35%", width: "64%", position: 'absolute', zIndex: 5, borderBottomWidth: 2, borderBottomColor: '#8DAAB9', top: 0, right: "18%", left: "18%",// opacity: 0.2, backgroundColor: '#4D4EEB',
                }} />
                <View style={{
                    height: "35%", width: "64%", position: 'absolute', zIndex: 5, bottom: 0, right: "18%", borderTopWidth: 2, borderTopColor: '#8DAAB9', left: "18%", //opacity: 0.2, backgroundColor: '#4D4EEB',
                }} />
                <TouchableOpacity
                    onPress={
                        this.props.goBack ? this.props.goBack :
                            () => this.props.navigation.goBack()
                    }
                    style={{
                        height: "7%",
                        width: "10%",
                        position: 'absolute',
                        zIndex: 6,
                        top: 0,
                        right: 0,
                        // opacity: 1, 
                        // backgroundColor: 'green',
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <NB.Icon name="md-close-circle" style={{ fontSize: 25, color: '#8DAAB9' }} />
                </TouchableOpacity>
                {/* <View style={{ height: height * 0.2, opacity: 0.3, backgroundColor: "brown" }} > */}
                {/* <Text style={{position: "absolute", zIndex: 20}}> Stay Camera on Bar code</Text> */}
                {/* </View> */}
                <BarcodeScanner
                    style={{
                        flex: 1, //backgroundColor: '#8DAAB9'
                        width: "100%"  // width: width
                    }}
                    onBarcodeRead={this.props.reader}
                    onException={exceptionKey => {
                        // check instructions on Github for a more detailed overview of these exceptions.
                        switch (exceptionKey) {
                            case Exception.NO_PLAY_SERVICES:
                            // tell the user they need to update Google Play Services
                            case Exception.LOW_STORAGE:
                            // tell the user their device doesn't have enough storage to fit the barcode scanning magic
                            case Exception.NOT_OPERATIONAL:
                            // Google's barcode magic is being downloaded, but is not yet operational.
                            default: break;
                        }
                    }}
                    focusMode={FocusMode.AUTO /* could also be TAP or FIXED */}
                    cameraFillMode={CameraFillMode.FIT /* could also be FIT */}
                    barcodeType={BarcodeType.CODE_128 | BarcodeType.EAN_13 | BarcodeType.EAN_8 /* replace with ALL for all alternatives */}
                    FlashMode={FlashMode.OFF /* 0 is OFF or 1 is TORCH  */}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});