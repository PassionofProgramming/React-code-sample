import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    ProgressBarAndroid
} from 'react-native';
import { HeaderBar } from '../common/header';
import { Icons, Images, Fonts } from '../../config/index';

const { height, width } = Dimensions.get('window');

class ApprovePicture extends Component {
    constructor() {
        super();
        this.state = {
            nav: false,
            uri: null,
            resize: "contain",
            time: "Tuesday 9 ,2018"
        }
    }
    static navigationOptions = {
        header: null
    }
    componentWillReceiveProps(props) {
        // this.setState({})
        this.update(props)
        console.log("componentWillReceiveProps", props.navigation)
    }
    componentDidMount() {
        this.update(this.props)
        console.log("componentDidMount", this.props.navigation)
    }
    update(props) {
        let resize = props.navigation.state.params.resize ? "contain" : "cover"
        this.setState({ uri: props.navigation.state.params.uri, resize: resize, time: props.navigation.state.params.time })
    }

    nav() {
         console.log("navnavnavnavnavnavnav")
        this.setState({
            nav: true,
        })
        // setTimeout(() => { this.setState({ nav: false }); this.props.navigation.navigate("AddComment", { navBack: this.props.navigation.goBack,uri:this.state.uri }) }, 0)
    }
    render() {
        const { navigate, goBack, state } = this.props.navigation;
        // if (!state.params) return null

        return (
            <View style={styles.container}>
                <HeaderBar
                    onPressLeft={() => goBack()
                    }
                    headerStyle={{ elevation: 2 }}
                    Heading={"Approve Picture"}
                    RightItem={
                        this.state.nav ?
                            <ProgressBarAndroid color="#9685e5" styleAttr="Small" />
                            :
                            < Image source={
                                Icons.checkMark
                            }
                                style={
                                    styles.rightIconStyle
                                } />}
                    onPressRight={() => this.nav()} />
                <View style={styles.viewStyle}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: this.state.uri//state.params.uri 
                            }}
                            // resizeMode="contain"//{this.state.resize}
                            // style={{ height: state.params.height, width: state.params.width }}
                            style={styles.imageStyle}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        {/* <Text style={styles.textStyle}>Tuesday 9 ,2018</Text> */}
                    </View>
                </View>
            </View>
        );
    }
}

export default ApprovePicture;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageStyle: {
        height: 400,
        width: "100%",
        // resizeMode: "contain"
    },
    textContainer: {
        height: "10%", //height * 0.08,
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    textStyle: {
        fontFamily: Fonts.book,
        color: '#000'
    },
    rightIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    viewStyle: {
        backgroundColor: '#fff',
        // justifyContent: "flex-start",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        height: 400,
        width: "100%",
        backgroundColor: "rgba(224, 224, 224, 0.5)"
    }
})