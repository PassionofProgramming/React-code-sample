import React, { Component } from 'react';
import { View, Modal,Image,Keyboard,ToastAndroid, TextInput,StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, CameraRoll, Permission, PermissionsAndroid } from 'react-native';
import * as NB from 'native-base';
import { HeaderBar } from '../common/header/';
import { Icons, Images, Fonts } from '../../config/index';
import RenderGallery from '../common/Camera'

const { width, height, fontScale } = Dimensions.get('window');

class AddComment extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            camImage:null,
             comment:"",
            imgArray: [],
            modalVisible: false,

        }
    }
    componentDidMount() {
        // this._handleButtonPress()
         const { navigation } = this.props;
         var _id = navigation.getParam('uri');
         console.log(_id)
         this.setState({camImage:_id});
        
    }

    goBack = (visible) =>{
      this.props.navigation.goBack();
       // this.setState({ modalVisible: visible });
    }

        shareComment(){
            ToastAndroid.show('Data Saved Succesfully', ToastAndroid.SHORT);
            this.props.navigation.navigate('ProgressDashboard');
        }
 

    render() {
        const { navigate, goBack, state } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                 <HeaderBar
                            headerStyle={{
                                backgroundColor: "#fff",
                                zIndex: 1,
                                elevation: 1,
                                width,
                            }}
                            TextColor="#000"
                            Heading={
                                <Text
                                    style={{
                                        fontSize: fontScale * 16,
                                        fontFamily: Fonts.medium,
                                        elevation: 10,
                                        zIndex: 10
                                    }}
                                >Comment
                                </Text>
                            }
                            LeftItem={
                                <NB.Icon
                                    name="ios-arrow-back"
                                    style={{
                                        color: "#000",
                                        elevation: 10,
                                        zIndex: 10
                                    }}/>
                            }
                             onPressLeft={() => {this.goBack(!this.state.modalVisible)}}
                            rightItemStyle={{
                                width: 40
                            }}

                            RightItem={
                                < Image source={
                                Icons.checkMark
                            }
                                style={
                                    styles.rightIconStyle
                                } />}
                           onPressRight={() => this.shareComment()} />

          <View style={{  flexDirection:'row',borderWidth:1,padding:10,borderColor:"#ccc"}}>
             <Image 
             style={{
              width: 50,height:50}}
            source={{uri: this.state.camImage}} />
            <TextInput
            underlineColorAndroid='transparent'
            style={{  fontFamily: Fonts.book,
              marginLeft: 10,width:"100%"}}
             onChangeText={(comment) => this.setState({comment})}
            value={this.state.comment}
             placeholder = "Write a caption"/>
          </View>

              <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { !this.state.modalVisible }}
                >
                    <View style={{ flex: 1 }}>
                        <RenderGallery
                            nav={this.props.navigation}
                            setState={(...a) => this.setState(...a)}
                        />
                    </View>
                </Modal>
               
            </View>
        );
    }
}

export default AddComment;
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginVertical: '1%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: width,
        alignSelf: 'center',
        paddingHorizontal: "1%"
    },
    rightIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    buttonContainer: {
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

