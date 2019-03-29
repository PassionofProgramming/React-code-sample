import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Fab, View, Container, Content, Footer, Text, Icon, } from 'native-base';
import Camera from 'react-native-camera';
// import ImagePicker from 'react-native-image-picker';
import { Icons } from '../../../../config';
import { HeaderBar } from '../../header';
import Preview from './preview';

const { height, width } = Dimensions.get('window');

export default class Camera_Component extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      mode: (Dimensions.get('window').width < Dimensions.get('window').height) ? 'portrait' : 'landscape',
      flashName: 'flash-off',
      flashFlag: 'off',
      flashValue: Camera.constants.FlashMode.off,
      cameraMode: 'front',
      uri: "",
    }
  }

  takePicture() {
    // let screen = this.props.screen === "profile" ? "Profile" : "AddComment"
    if (this.camera) {
      setTimeout(() => {
        this.camera.capture()

          .then( data => {
            this.props.nav.navigate(screen, { uri: data.mediaUri })
            this.props.setState({ modalVisible: false })
            console.log(modalVisible)
          }
          )
          .catch(err => console.log(err));
      }, 0)
    }
  };

  componentWillMount() {
    Dimensions.addEventListener('change', (data) => {
      this.setState({ mode: (data.window.width < data.window.height) ? 'portrait' : 'landscape' })
    })
  }
  componentWillUnmount() {
    Dimensions.removeEventListener('change', (data) => {
      this.setState({ mode: (data.window.width < data.window.height) ? 'portrait' : 'landscape' })
    })
  }
  render() {
    return (
      this.state.uri ?
        <Preview
          back={() => this.setState({ uri: "" })}
          imageUrl={this.state.uri}/>
        :
        <View style={{ flex: 1 }}>
          <HeaderBar
            LeftItem={<Icon name="close" />}
            // onPressLeft={() => this.props.nav.goBack()}
            onPressLeft={() => this.props.setState({ modalVisible: false })}
            Heading={"Photo"}
          />
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            {/* <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            type={this.state.cameraMode}
            captureTarget={Camera.constants.CaptureTarget.temp}
            style={(this.state.mode == 'portrait') ? { height: "70%", flexDirection: 'row' } : { flex: 1, flexDirection: 'column' }}
            torchMode={this.state.flashValue}
            aspect={Camera.constants.Aspect.fill}>
           
          </Camera> */}
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
              }}
              type={this.state.cameraMode}
              // type={this.state.type}
              flashMode={this.state.flashFlag}
              // autoFocus={this.state.autoFocus}
              // zoom={this.state.zoom}
              // whiteBalance={this.state.whiteBalance}
              // ratio={this.state.ratio}
              // faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
              // onFacesDetected={this.onFacesDetected}
              // onFaceDetectionError={this.onFaceDetectionError}
              focusDepth={this.state.depth}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}>

            </Camera>
            {/* <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{
                flex: 1,
              }}
              type={this.state.cameraMode}
              // type={this.state.type}
              flashMode={this.state.flash}
              // autoFocus={this.state.autoFocus}
              // zoom={this.state.zoom}
              // whiteBalance={this.state.whiteBalance}
              // ratio={this.state.ratio}
              // faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
              // onFacesDetected={this.onFacesDetected}
              // onFaceDetectionError={this.onFaceDetectionError}
              focusDepth={this.state.depth}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
            >
            </RNCamera> */}


            <View style={{ backgroundColor: '#fff', height: "30%", width: width, bottom: 0, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
              <Button transparent
                style={(this.state.mode == 'portrait') ? {
                  // display: 'flex',
                  // flex: 1,
                  // top: '150%',
                  width: 70,
                  height: 50,
                  flexDirection: 'column',
                  alignSelf: "center",
                  justifyContent: 'center',

                } : {
                    display: 'flex',
                    flex: 1,
                    left: '170%',
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',

                  }}
                onPress={() => {
                  if (this.state.cameraMode === 'back') {
                    if (this.state.flashFlag === 'on') {
                      this.setState({ flashFlag: 'off', flashName: 'flash-off' })
                    }
                    else if (this.state.flashFlag === 'off') {
                      this.setState({ flashName: 'flash', flashFlag: 'on' })
                    }
                  }
                }}>
                <Image source={this.state.flashName === "flash" ? Icons.flash : Icons.flashOff} style={{ backgroundColor: '#fff', height: 25, width: 25, resizeMode: 'contain' }} />

              </Button>
              <Button
                transparent
                style={(this.state.mode == 'portrait') ? {
                  // display: 'flex',
                  // flex: 1,
                  width: 70,
                  height: 70,
                  // flexDirection: 'column',
                  // top: '145%',
                  alignSelf: "center",
                  justifyContent: 'center',

                } : {
                    display: 'flex',
                    left: '165%',
                    flex: 1,
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',

                  }}
                onPress={() => this.takePicture()}
              >
                {/* <Icon name="ios-analytics-outline" size={70} style={{color:'#619bf9'}}/> */}
                <View style={{ width: 60, height: 60, borderWidth: 10, borderRadius: 30, borderColor: "gray", backgroundColor: "#fff" }} />
              </Button>
              <Button transparent
                onPress={() => {
                  this.setState({ flashFlag: 'off', flashName: 'flash-off' })
                  if (this.state.cameraMode === 'front') {
                    this.setState({ cameraMode: 'back' })
                  }
                  else if (this.state.cameraMode === 'back') {
                    this.setState({ cameraMode: 'front' })
                  }
                }}
                style={(this.state.mode == 'portrait') ? {
                  // display: 'flex',
                  // flex: 1,
                  width: 70,
                  height: 50,
                  alignSelf: "center",
                  flexDirection: 'column',
                  // top: '150%',
                  justifyContent: 'center',

                } : {
                    display: 'flex',
                    flex: 1,
                    left: '170%',
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',

                  }}
              >
                <Icon name='ios-reverse-camera' style={{ color: "black", fontSize: 35 }} />
              </Button>

            </View>

          </View>
        </View>
    );
  }


}