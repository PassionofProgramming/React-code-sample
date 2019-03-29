import React, { Component } from 'react';
import { View, Image,Keyboard, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, CameraRoll, Permission, PermissionsAndroid } from 'react-native';
import * as NB from 'native-base';
import ImageComp from "./image"
import { HeaderBar } from '../../common/header/';
import Button from '../../../components/common/FormButton';
import { Images, Icons } from '../../../config/index';

const { width, height } = Dimensions.get('window');

class Gallery extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            imgArray: [],

            //ForDummyData
            photos1: [
                Images.dp1,
                Images.dp2,
                Images.dp3,
                Images.dp4,
                Images.dp5,
                Images.dp6,
                Images.dp1,
                Images.dp2,
                Images.dp3,
                Images.dp4,
                Images.dp5,
                Images.dp6,
            ],
        }
    }
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(pics => {
                this.setState({ photos: pics.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };

    componentDidMount() {
        this._handleButtonPress();
         Keyboard.dismiss();
    }

    click(img, i) {
        const imgArr = this.state.imgArray.slice(0);

        if (imgArr.length <= 1) {
            imgArr.push({ img, i })
            this.setState({
                imgArray: imgArr
            })
            setTimeout(() =>
                console.log(this.state.imgArray.length, 'add', this.state.imgArray)
                , 2)
        }
    }
    arrayPop(i) {
        const imgArr = this.state.imgArray.slice(0);
        for (let x in imgArr) {
            if (imgArr[x].i === i) {
                imgArr.splice(x, 1)

                this.setState({
                    imgArray: imgArr
                })
                setTimeout(() =>
                    console.log(imgArr.length, "pop", this.state.imgArray)
                    , 2)
            }
        }
    }

    goBack = () =>{
      this.props.navigation.goBack();
    }

    render() {
        const { navigate, goBack, state } = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <HeaderBar
                    onPressLeft={() => {this.goBack()}}
                    LeftItem={<NB.Icon name="ios-arrow-back" style={{ color: 'black' }} />}
                    Heading={"Gallery"}
                    RightItem={<Image source={Icons.menu} style={styles.rightIconStyle} />}
                    onPressRight={() => navigate("Progress")}
                />

                <ScrollView >
                    <View style={styles.container}>
                        {/* {this.state.photos.map((p, i) => { */}
                        {/* For Dummy Data */}
                        {this.state.photos1.map((p, i) => {
                            return (
                                <ImageComp
                                    key={i}
                                    // imgUri={p.node.image.uri}

                                    // ForDummyData //
                                    imgDummy={true}
                                    imgUri={p}

                                    img={p}
                                    index={i}
                                    imgArray={this.state.imgArray.slice(0)}
                                    click={this.click.bind(this, p, i)}
                                    arrayPop={this.arrayPop.bind(this, i)}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Button text="Compare Picture" btnStyle={{ width: width * 0.55, }} color={'#4D4EEB'}
                        onPress={() => navigate("Progress")} />
                </View>
            </View>
        );
    }
}

export default Gallery;
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

