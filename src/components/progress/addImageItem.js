import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    Dimensions,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import { HeaderBar } from '../common/header/';
import { Images, Fonts, Icons } from '../../config/index';
import * as NB from 'native-base';
import { ApprovePicture } from './index';
import PhotoUpload from 'react-native-photo-upload'
import RenderGallery from '../common/Camera'

const { height, width, fontScale } = Dimensions.get('window');

class AddProfileImage extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super();
        this.state = {
            avatar: "",
            modalVisible: false,
        }

    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });

    }
    render() {
        const { navigate, goBack, state } = this.props.navigation;
        // console.warn(JSON.stringify(state))
        return (

            // !(state.params && state.params.uri)
            //     ?

            // this.state.modalVisible ==false  ?
            // <View style={this.state.modalVisible == true ? { display: 'none' } : styles.container} >

            <View style={styles.container} >
                <View style={styles.container}>
                    <HeaderBar
                        Heading='Progress'
                        headerStyle={{ elevation: 2 }}/>
                    <View style={styles.content}>

                        <TouchableOpacity
                            // onPress={() => { navigate("CameraComponent") }}
                            // style={styles.circleView}
                            onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
                        >
                            <ImageBackground style={styles.circleView} source={Images.addImageBg}>
                                <Image
                                    source={Icons.imageItem}
                                    style={styles.imageItemStyle}
                                    resizeMode="contain" />
                                <Text style={styles.addImageText}>Add item image</Text>
                                <View style={styles.viewAlign}>
                                    <Text style={styles.centerText}>Drop an image or
                                        <Text style={styles.browseText}> browse </Text>
                                    </Text>
                                    <Text style={styles.bottomTextStyle}>it from your computer</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <HeaderBar Heading='Progress' />
                <View style={styles.content}>
                <PhotoUpload
                onResponse={avatar => {
                    if (avatar) {
                        this.setState({ avatar: avatar.uri })
                    }
                        }}>
                        <ImageBackground style={styles.circleView} source={Images.addImageBg}>
                            <Image
                            source={Icons.imageItem}
                                style={styles.imageItemStyle}
                                resizeMode="contain" />
                            <Text style={styles.addImageText}>Add item image</Text>
                            <View style={styles.viewAlign}>
                                <Text style={styles.centerText}>Drop an image or
                                <Text style={styles.browseText}> browse </Text>
                                </Text>
                                <Text style={styles.bottomTextStyle}>it from your computer</Text>
                                </View>
                                </ImageBackground>
                                </PhotoUpload>
                            </View> */}

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


                <NB.Fab
                    position="bottomRight"
                    style={styles.fabColor}
                    onPress={() => { this.setModalVisible(!this.state.modalVisible) }}
                >
                    <View>
                        <Text style={styles.addIconStyle} > + </Text>
                    </View>
                </NB.Fab>
            </View >
            // </View>
            // : <ApprovePicture
            //     avatar={state.params.uri}
            //     click={() => this.setState({
            //         avatar: !this.state.avatar
            //     })}
            //     navigation={this.props.navigation} />


        );
    }
}


export default AddProfileImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.8,
        alignSelf: 'center',
        width: width * 0.9
    },
    circleView: {
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.31,
        width: height * 0.31,
        borderRadius: height * 0.31 / 2,
    },
    imageItemStyle: {
        height: "30%",
        width: "35%",
        marginTop: fontScale * -14
    },
    addImageText: {
        fontFamily: Fonts.bold,
        fontSize: fontScale * 17,
        color: "black",
        marginBottom: "1%"
    },
    viewAlign: {
        alignItems: 'center'
    },
    centerText: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 14,
        color: "gray"
    },
    browseText: {
        color: "#4D4EEB"
    },
    bottomTextStyle: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 14,
        color: "gray"
    },
    fabColor: {
        backgroundColor: "#4D4EEB"
    },
    addIconStyle: {
        marginTop: -4.5,
        fontSize: 35,
        color: 'white',
        position: 'relative',
    }
})