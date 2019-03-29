import React, { Component } from "react";
import { View, ImageBackground, Image, AsyncStorage } from "react-native";
import { Images } from "../../config";

export class SplashScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        this.store()
        ///////////////////TEMP////////
        // this.props.setState({ splashScreen: false })
        //////////////////temp///////////
    }
    async store() {
        try {
            await AsyncStorage.getItem('user').then((userString) => {
                if (userString) {
                    var user = JSON.parse(userString)
                    var authToken = user.token
                    console.log("signinSucces", authToken)
                    this.nav("Tabs")
                }
                else {
                    this.props.setState({ splashScreen: false })
                }
            });
        } catch (error) {
            // Error retrieving data
            // console.warn(error, "getStorage")
        }
    }
    nav = (screen) => {
        try {
            this.props.nav(screen)
            console.log("SplashNavigated")
        }
        catch (err) {
            console.log("SplashNavigated fail", err)
        }
    }

    render() {
        return (
            <ImageBackground source={Images.bgSplash} style={{ flex: 1, backgroundColor: "#4D4EEB", justifyContent: "center", alignItems: "center" }} >
                <Image source={Images.logoSplash} style={{ height: "25%", width: "30%" }} resizeMode="contain" />
            </ImageBackground>
        )
    }
}