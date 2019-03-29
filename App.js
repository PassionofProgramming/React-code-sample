/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  PermissionsAndroid
} from 'react-native';
import { Provider } from 'react-redux';
import  store  from './src/store/index';
import AppRoutes from './src/config/AppRoutes';
import { MenuProvider } from "react-native-popup-menu";
import { Root, Toast } from 'native-base';

const { height, width } = Dimensions.get('window');

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Qalorie App Permission',
        'message': 'Qalorie App needs access to your gallery ' +
          'so you can see your awesome pictures.'
      }
    )
    const granted1 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'Qalorie App Permission',
        'message': 'Qalorie App needs access to your Phone Camera ' +
          'so you can use Camera.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
      // return true;
    } else {
      console.log("Camera permission denied");
      // return false;
    }
  } catch (err) {
    // console.warn("asdddddddd", err)
    console.log("asdddddddd", err)
  }
}


export default class App extends Component {

  componentWillMount() {
    // requestCameraPermission();
  }
  componentWillUnmount() {
    Toast.toastInstance = null;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, width, backgroundColor: "#fff" }}>
          <MenuProvider>
            <Root>
              <TouchableWithoutFeedback onPress={() => {
                 window.onBodyPress() }}>
                <AppRoutes />
              </TouchableWithoutFeedback>
            </Root>
          </MenuProvider>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
