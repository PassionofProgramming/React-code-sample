import React from "react";
import { View, Text, ImageBackground, ART, AppState } from "react-native";
import { Icons } from "../../config";

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
export class MicroBar extends React.Component {
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
        const { barBorder, barFilled, barMainView, barTextOne, barTextTwo, width, heading, linearGradient, left } = this.props;
        return (
            this.state.show &&
            <View style={barMainView}>
                <Text style={barTextOne}>{heading}</Text>
                <ImageBackground source={Icons.dashBarBg} style={barBorder} resizeMode="contain" >
                    <View style={[barFilled, { width: `${width}%` }]}>
                        <Surface width={100} height={10} >
                            <Shape
                                d="M188,233H0.5V0.5H188V233z"
                                transform={new Transform().transformTo(
                                    width / 100,
                                    0,
                                    0,
                                    10 / 100,
                                    -(width / 100 * 0.5),
                                    -(10 / 100 * 0.5),
                                )}
                                fill={linearGradient}
                            />
                        </Surface>
                    </View>
                </ImageBackground>
                <Text style={barTextTwo}>{left}g left</Text>
            </View>
        )
    }
}