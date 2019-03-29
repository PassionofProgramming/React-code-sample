import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    Text
} from 'react-native';

export default class ActionButtonItem extends Component {

    render() {
        const offsetX = this.props.radius * Math.cos(this.props.angle);
        const offsetY = this.props.radius * Math.sin(this.props.angle);
        return (
            <Animated.View
                style={[{
                    opacity: this.props.anim.interpolate({
                        inputRange: [0, this.props.opaOnActive],
                        outputRange: [0, 1],
                    }),
                    width: this.props.size,
                    height: this.props.size,
                    transform: [
                        {
                            translateY: this.props.anim.interpolate({
                                inputRange: [0, this.props.opaOnActive],
                                outputRange: [0, offsetY],
                            })
                        },
                        {
                            translateX: this.props.anim.interpolate({
                                inputRange: [0, this.props.opaOnActive],
                                outputRange: [0, offsetX],
                            })
                        },
                        {
                            rotate: this.props.anim.interpolate({
                                inputRange: [0, this.props.opaOnActive],
                                outputRange: [`${this.props.startDegree}deg`, `${this.props.endDegree}deg`],
                            })
                        },
                        {
                            scale: this.props.anim.interpolate({
                                inputRange: [0, this.props.opaOnActive],
                                outputRange: [0, this.props.opaOnActive],
                            })
                        },
                    ]
                }]}
            >
                <View style={{ height: this.props.size/1.4, width: this.props.size/1.4,  }}>
                    <Text style={{fontSize: 20, position: 'absolute', zIndex: 50, color: 'white', fontFamily: 'CircularStd-Book' }}>{this.props.title}</Text>
                    <TouchableOpacity 
                        activeOpacity={this.props.activeOpacity || 0.85} onPress={this.props.onPress}
                            style={[styles.actionButton, {
                                width: this.props.size / 2,
                                height: this.props.size / 2,
                                borderRadius: this.props.size / 2,
                                backgroundColor: this.props.buttonColor,
                                position: 'absolute',
                                zIndex: 12,
                                right: 0,
                                bottom: 0
                            }]}
                        >

                            {this.props.children}
                </TouchableOpacity>
                    </View>
            </Animated.View>
        );
    }

}

ActionButtonItem.propTypes = {
    angle: PropTypes.number,
    radius: PropTypes.number,
    buttonColor: PropTypes.string,
    onPress: PropTypes.func,
    children: PropTypes.node.isRequired,
    startDegree: PropTypes.number,
    endDegree: PropTypes.number,
};

ActionButtonItem.defaultProps = {
    onPress: () => { },
    startDegree: 360,
    endDegree: 360
};

const styles = StyleSheet.create({
    actionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 2,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: '#444',
        shadowRadius: 1,
        backgroundColor: 'red',
        position: 'absolute',
    },
});