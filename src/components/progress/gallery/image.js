import React, { Component } from "react";
import { TouchableOpacity, Image, Dimensions, View, ImageBackground } from "react-native";
import { Icons } from "../../../config/index";

const { width, height } = Dimensions.get('window');

export default class ImageComp extends Component {
    constructor() {
        super();
        this.state = {
            mark: false,
        }
    }

    click() {
        if (this.props.imgArray.length !== 2) {
            if (this.state.mark) {
                this.setState({ mark: false })
                this.props.arrayPop()
            }
            else {
                this.setState({ mark: true })
                this.props.click()
            }
        }
        else {
            if (this.state.mark) {
                this.props.arrayPop()
            }
            this.setState({ mark: false })
        }
        // if (this.props.imgArray.length < 2) {
        //     this.setState({
        //         mark: !this.state.mark,
        //     })
        // }
        // else{
        //     console.warn("asd")
        // }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.click.bind(this)}>
                <View>
                    {this.state.mark &&
                    <View //source={this.state.mark ? Icons.compareSelectedBg : null} resizeMode="contain" 
                        style={{
                            height: width * 0.029,
                            width: width * 0.029,
                            borderRadius: width * 0.029 / 2,
                            position: 'absolute',
                            zIndex: 20,
                            marginLeft: 5,
                            marginTop: 5,
                            alignItems: 'center',
                            justifyContent: "center",
                            backgroundColor: 'white',
                        }}>
                        <View
                            //        source={this.state.mark ? Icons.compareSelected : null}
                            style={{
                                height: width * 0.019,
                                width: width * 0.019,
                                borderRadius: width * 0.019 / 2,
                                backgroundColor: "#4D4EEB"
                            }} />
                    </View>}

                    <Image
                        style={{
                            width: width * 0.323,
                            height: height * 0.2,
                            marginVertical: 1
                        }}
                        // source={{ uri: this.props.imgUri }}
                        source={this.props.imgUri}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}