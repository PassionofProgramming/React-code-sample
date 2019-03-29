import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TextInput } from 'react-native';
import { HeaderBar } from '../common/header';
import { Fonts } from '../../config/index';
import { Icons } from '../../config';
import { NumInput } from "../common/numericInput";
import Menu, {
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger
} from 'react-native-popup-menu';

const { height, width, fontScale } = Dimensions.get('window');

class Measurements extends Component {
    constructor() {
        super();
        this.state = {
            openedMenu: false,
            edit: false,

            // * Measurements * //
            weight: "0.00",
            bmi: "0.00",
            neck: "0.00",
            chest: "0.00",
            uArmLeft: "0.00",
            uArmRight: "0.00",
            thighLeft: "0.00",
            thighRight: "0.00",
            forearmLeft: "0.00",
            forearmRight: "0.00",
            calfLeft: "0.00",
            calfRight: "0.00",
            waist: "0.00",
            hip: "0.00",
            //*/ Measurements /*//
        }
    }
    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderBar
                    Heading={"Measurements"}
                    onPressLeft={() => goBack()}
                    RightItem={
                        this.state.openedMenu ?
                            <Menu
                                opened={this.state.openedMenu}
                                onBackdropPress={() => this.setState({ openedMenu: !this.state.openedMenu }) //this.onBackdropPress
                                }
                                onSelect={value => this.setState({ openedMenu: !this.state.openedMenu, edit: true, })//this.onOptionSelect(value)
                                }>
                                <MenuTrigger
                                    onPress={() => this.setState({ openedMenu: !this.state.openedMenu })//this.onTriggerPress()
                                    }>
                                    <Image source={Icons.menuOption} style={styles.rightIconStyle} />
                                </MenuTrigger>
                                <MenuOptions>
                                    {/* <MenuOption value={1} text='One' /> */}
                                    <MenuOption value={2}>
                                        <Text style={{ color: '#8DAAB9', fontFamily: Fonts.book }}>Edit</Text>
                                    </MenuOption>
                                    {/* <MenuOption value={3} disabled={true} text='Three' /> */}
                                </MenuOptions>
                            </Menu>
                            :
                            this.state.edit ?
                                <Image source={Icons.checkMark} style={styles.rightIconStyle} />
                                :
                                <Image source={Icons.menuOption} style={styles.rightIconStyle} />
                    }
                    onPressRight={() => this.state.edit ? this.setState({ edit: false }) : this.setState({ openedMenu: !this.state.openedMenu })}
                />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="interactive"
                >
                    <View style={styles.boxeVeiw}>
                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Weight </Text>
                            </View>
                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ weight: e.nativeEvent.text })
                                        }}
                                        value={this.state.weight}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.weight).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> BMI </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ bmi: e.nativeEvent.text })
                                        }}
                                        value={this.state.bmi}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.bmi).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Neck </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ neck: e.nativeEvent.text })
                                        }}
                                        value={this.state.neck}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.neck).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Chest </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ chest: e.nativeEvent.text })
                                        }}
                                        value={this.state.chest}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.chest).toFixed(2)}</Text>
                                }
                            </View>
                        </View>
                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Upper Arm </Text>
                                <Text style={styles.topText2}> Left </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ uArmLeft: e.nativeEvent.text })
                                        }}
                                        value={this.state.uArmLeft}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.uArmLeft).toFixed(2)}</Text>
                                }
                            </View>
                        </View>
                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Upper Arm </Text>
                                <Text style={styles.topText2}> Right </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ uArmRight: e.nativeEvent.text })
                                        }}
                                        value={this.state.uArmRight}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.uArmRight).toFixed(2)}</Text>
                                }
                            </View>
                        </View>


                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Thigh </Text>
                                <Text style={styles.topText2}> Left </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ thighLeft: e.nativeEvent.text })
                                        }}
                                        value={this.state.thighLeft}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.thighLeft).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Thigh </Text>
                                <Text style={styles.topText2}> Right </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ thighRight: e.nativeEvent.text })
                                        }}
                                        value={this.state.thighRight}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.thighRight).toFixed(2)}</Text>
                                }
                            </View>

                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Forearm </Text>
                                <Text style={styles.topText2}> Left </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ forearmLeft: e.nativeEvent.text })
                                        }}
                                        value={this.state.forearmLeft}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.forearmLeft).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Forearm </Text>
                                <Text style={styles.topText2}> Right </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ forearmRight: e.nativeEvent.text })
                                        }}
                                        value={this.state.forearmRight}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.forearmRight).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Calf </Text>
                                <Text style={styles.topText2}> Left </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ calfLeft: e.nativeEvent.text })
                                        }}
                                        value={this.state.calfLeft}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.calfLeft).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Calf </Text>
                                <Text style={styles.topText2}> Right </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ calfRight: e.nativeEvent.text })
                                        }}
                                        value={this.state.calfRight}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.calfRight).toFixed(2)}</Text>
                                }
                            </View>
                        </View>

                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Waist </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ waist: e.nativeEvent.text })
                                        }}
                                        value={this.state.waist}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.waist).toFixed(2)}</Text>
                                }
                            </View>
                        </View>
                        <View style={styles.boxes}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}> Hip </Text>
                            </View>

                            <View style={styles.bottomtextView}>
                                {this.state.edit ?
                                    <NumInput
                                        onChange={(e) => {
                                            this.setState({ hip: e.nativeEvent.text })
                                        }}
                                        value={this.state.hip}
                                    />
                                    :
                                    <Text style={styles.bottomText}>{Number(this.state.hip).toFixed(2)}</Text>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Measurements;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#fff'
    },
    boxeVeiw: {
        // flex: 1,
        // backgroundColor: '#ff1',
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    boxes: {
        height: height * 0.13,
        width: "50%",
        backgroundColor: '#fff',
        borderColor: '#8DAAB9',
        borderTopWidth: 0,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        justifyContent: 'space-between'

    },
    textView: {
        // backgroundColor: "red",
        height: "50%",//height * 0.065,
        width: "60%",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    topText: {
        fontFamily: Fonts.medium,
        fontSize: fontScale * 16,
        color: 'black',
        paddingLeft: fontScale * 10
    },
    topText2: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 11,
        color: 'black',
        paddingLeft: fontScale * 10,
        margin: 2
    },
    bottomtextView: {
        height: "49.9%",
        justifyContent: "center",
        width: "50%",
        alignSelf: 'flex-end',
        alignItems: "center",
        // paddingBottom: 20
    },
    bottomText: {
        color: "#8DAAB9",
        fontFamily: Fonts.book,
        fontSize: fontScale * 16
    },
    rightIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    }
})