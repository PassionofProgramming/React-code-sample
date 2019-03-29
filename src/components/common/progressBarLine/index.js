import React from "react";
import { View, Text, ImageBackground, ART, AppState, Dimensions } from "react-native";
import { Icons } from "../../../config";

const {
    Surface,
    Shape,
    Group,
    Path,
    ClippingRectangle,
    LinearGradient,
    RadialGradient,
    Pattern,
    Transform
} = ART

// export const MicroBar = ({
//     barMainView,
//     barTextOne,
//     barBorder,
//     width,
//     linearGradient,
//     barTextTwo,
//     barFilled,
//     heading,
//     left
// }) => 
export class ProgressBarLine extends React.Component {
    constructor() {
        super();
        this.state = {
            appState: AppState.currentState,
            show: true,
        }
    }
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            // Fix bug on Android where the drawing is not displayed after the app is
            // backgrounded / screen is turned off. Restart the animation when the app
            // comes back to the foreground.
            this.setState({
                // chartFillAnimation: new Animated.Value(this.props.prefill || 0)
                show: false
            });
            // this.animateFill();
        }
        this.setState({ appState: nextAppState, show: true });
    }




    render() {
        const { barBorder, barFilled, width, linearGradient } = this.props;
        return (
            this.state.show &&
            // <View style={barMainView}>
            //     <Text style={barTextOne}>{heading}</Text>
            //     <ImageBackground source={Icons.dashBarBg} style={barBorder} resizeMode="contain" >
            // <View style={[barFilled, { width: "100%" }]}>
            <Surface width={width * 4} height={10} >
                <Shape
                    d="M121,199H0V1H450V12"
                    transform={new Transform().transformTo(
                        (width + 100) / 100,
                        0,
                        0,
                        10 / 100,
                        -(width / 100 * 0.5),
                        -(10 / 100 * 0.5),
                    )}
                    fill={linearGradient}
                />
            </Surface>
            //  </View>
            //     </ImageBackground>
            //     <Text style={barTextTwo}>{left}g left</Text>
            // </View>
        )
    }
}