import React, { Component } from "react";
import { TouchableOpacity, Image, Dimensions, View } from "react-native";
// import { Icons } from "../../../../config";
// import index from "react-native-popup-menu";

const { width, height } = Dimensions.get('window');

export default class ImageComp extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         gray: false,
    //         index: 20,
    //     }
    // }

    // update = (a) => {
    //     // if (a > this.props.i) {
    //     // this.setState({ index: a + 20, gray: false })
    //     // }
    //     console.warn(a, this.props.i)
    // }

    // componentWillMount() {
    //     this.props.func(this.update)
    // }

    click() {
        this.props.click()
    }
    render() {
        return (
            <TouchableOpacity onPress={this.click.bind(this)}>
                <View>
                    <Image
                        style={{
                            width: width * 0.2485,
                            height: width * 0.25,
                            marginVertical: 0.5,
                            backgroundColor: "#ccced1",
                        }}
                        source={//this.state.gray ? Icons.gray : 
                            { uri: this.props.imgUri }}
                    // source={this.props.imgUri}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}
