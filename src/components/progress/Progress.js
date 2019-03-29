import React, { Component } from 'react';
import { View, Text, Scroll, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { HeaderBar } from '../common/header';
import { Images, Icons, Fonts } from '../../config/index';
import * as NB from 'native-base';
import PhotoUpload from 'react-native-photo-upload'
import Menu, {
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-popup-menu';
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');

class Progress extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            changePic: false,
            openedMenu: false,
            position: 1,
            interval: null,
            avatar: "",
            avatar1: "",
            index: 0,
            pic1: Images.dp7,
            pic2: Images.dp8,
        }
    }
    del() {
        this.state.index === 0 ? this.setState({ avatar: "", pic1: false }) : this.setState({ avatar1: "", pic2: false });
        this.setState({ openedMenu: false })
    }
    ask() {
        Alert.alert(
            'Delete',
            'Are you sure to delete?',
            [
                { text: 'Cancel', onPress: () => { this.setState({ openedMenu: false }); console.log('Cancel Pressed') }, style: 'cancel' },
                { text: 'OK', onPress: () => this.del() },
            ],
            { cancelable: false }
        )
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()}
                    Heading={this.state.changePic == false ? "Progress" : "Progress Comparison"}
                    RightItem={
                        this.state.openedMenu ?
                            <Menu
                                opened={this.state.openedMenu}
                                onBackdropPress={() => this.setState({ openedMenu: !this.state.openedMenu }) //this.onBackdropPress
                                }
                                onSelect={() => this.ask()//this.onOptionSelect(value)
                                }>
                                <MenuTrigger
                                    onPress={() => this.setState({ openedMenu: !this.state.openedMenu })//this.onTriggerPress()
                                    }>
                                    <Image source={Icons.menuOption} style={styles.rightItemStyle} />
                                </MenuTrigger>
                                <MenuOptions>
                                    {/* <MenuOption value={1} text='One' /> */}
                                    <MenuOption value={2}>
                                        <Text style={{ color: '#8DAAB9', fontFamily: Fonts.book }}>Delete</Text>
                                    </MenuOption>
                                    {/* <MenuOption value={3} disabled={true} text='Three' /> */}
                                </MenuOptions>
                            </Menu>
                            :
                            <Image source={Icons.menuOption} style={styles.rightItemStyle} />
                    }
                    onPressRight={() => this.setState({ openedMenu: !this.state.openedMenu })}
                />
                <ScrollView contentContainerStyle={{ height: height }}>
                    <View style={styles.imageContainer}>
                        {/* {this.state.changePic == false ?
                            <Image source={Images.dp7} style={styles.imageStyle} />
                            :
                            <Image source={Images.dp8} style={styles.imageStyle} resizeMode='contain' />
                        } */}
                        <TouchableOpacity
                            onPress={() => this.setState({ changePic: !this.state.changePic })}
                            activeOpacity={0.5}
                            style={styles.fabStyle}>
                            <PhotoUpload
                                onResponse={avatar => {
                                    if (avatar) {
                                        switch (this.state.index) {
                                            case 0:
                                                this.setState({ avatar: avatar.uri })
                                                break;
                                            case 1:
                                                this.setState({ avatar1: avatar.uri })
                                                break;
                                        }
                                    }
                                }}
                                quality={100}
                            >
                                <Text style={styles.addIconStyle} > + </Text>
                            </PhotoUpload>
                        </TouchableOpacity>
                        <Swiper
                            loop={false}
                            style={styles.wrapper} height={height * 0.7} horizontal={true} autoplay={false}
                            dot={<View style={{ backgroundColor: '#bdbdbd', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, alignSelf: 'flex-end' }} />}
                            activeDot={<View style={{ backgroundColor: '#4D4EEB', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            onIndexChanged={(index) => this.setState({ index: index })}
                        >
                            {this.state.pic1 &&
                                <View style={styles.slide1}>
                                    {!this.state.avatar ?
                                        <Image source={this.state.pic1} style={styles.imageStyle} resizeMode="contain" />
                                        :
                                        <Image source={{ uri: this.state.avatar }} style={styles.imageStyle} />
                                    }
                                </View>
                            }
                            {this.state.pic2 ?
                                <View style={styles.slide2}>
                                    {!this.state.avatar1 ?
                                        <Image source={this.state.pic2} style={styles.imageStyle} resizeMode="contain" />
                                        :
                                        <Image source={{ uri: this.state.avatar1 }} style={styles.imageStyle} />
                                    }
                                </View>
                                : null}

                        </Swiper>


                    </View>
                    <View style={{ height: height * 0.07, alignContent: 'flex-start' }}>
                        <View style={styles.viewStyle}>
                            <TouchableOpacity
                                onPress={() => navigate('Measurements')}>
                                <Image source={Icons.height} style={styles.heightImageStyle} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => alert('Comment')}>
                                <View style={{ width: 50, }} >
                                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: 'red', position: 'absolute', alignSelf: 'flex-end', zIndex: 20, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, color: '#fff', fontFamily: Fonts.medium }}>2</Text>
                                    </View>
                                    <Image source={Icons.comment} style={styles.commentImage} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.dateStyle}> Tuesday 9, 2018 </Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.topText}> Caise </Text>
                            <Text style={styles.bottomText}> I' m feeling like the Rock Today! </Text>
                        </View>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default Progress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        height: height * 0.77,
        position: 'relative',
        zIndex: -1,
        width: width,
    },
    imageStyle: { height: height * 0.7, width: width, justifyContent: 'flex-end' },
    fabStyle: {
        position: "absolute",
        height: width * 0.13,
        width: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        backgroundColor: '#4D4EEB',
        alignItems: "center",
        justifyContent: "center",
        top: (height * 0.7) - (width * 0.13 / 2),
        right: (width * 0.13) / 4,
        zIndex: 20,
        alignSelf: "flex-end",
    },
    addIconStyle: {
        marginTop: -4.5,
        fontSize: 35,
        color: 'white',
        position: 'relative',
    },
    rightItemStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    viewStyle: {
        width: width * 0.25,
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    heightImageStyle: {
        height: 35,
        width: 40,
        resizeMode: 'contain'
    },
    commentImage: {
        height: 35,
        width: 40,
        resizeMode: 'contain'
    },
    bottomView: {
        height: height * 0.07,
        width: width * 0.96,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    dateStyle: {
        fontFamily:
            Fonts.medium,
        color: 'black'
    },
    textContainer: {
        flexDirection: 'row'
    },
    topText: {
        fontFamily: Fonts.black,
        color: 'black'
    },
    bottomText: {
        fontFamily: Fonts.book,
        color: 'black'
    },


})