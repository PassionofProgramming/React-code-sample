import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Fonts } from '../../config/index';
import Input from '../common/FormInput';

const { height, width, fontScale } = Dimensions.get('window');

class InsertGoals extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        state = {
            calories: '',
            sodium: '',
            totalFat: '',
            potassium: '',
            saturated: '',
            totalCarbs: '',
            monosaturated: '',
            sugars: '',
            trans: '',
            protein: '',
            cholestrol: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Text style={styles.headingText}>Advanced Fitness Goals
                    </Text>
                    <Text style={styles.smallText}>Reset
                    </Text>
                </View>
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'>
                    <View style={styles.formView}>
                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Calories"}
                            placeholder={"540"}
                            onChange={() => this.props.setState({ insertGoals: { ...this.props.state, calories: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Sodium"}
                            placeholder={"240"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, sodium: e.nativeEvent.text } })}
                            text={"mg"} />

                        <Input itemStyle={styles.inputStyle} label={"Total Fat"} placeholder={"54"} />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Potassium"}
                            placeholder={"470"}
                            text={"mg"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, potassium: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Saturated"}
                            placeholder={"00"}
                            text={"g"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, saturated: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Total Carbs"}
                            placeholder={"00"}
                            text={"mg"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, totalCarbs: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Monosaturated"}
                            placeholder={"00"}
                            text={"g"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, monosaturated: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Sugars"}
                            placeholder={"00"}
                            text={"mg"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, sugars: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Trans"}
                            placeholder={"00"}
                            text={"g"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, sugars: e.nativeEvent.text } })}
                        />

                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Protein"}
                            placeholder={"00"}
                            text={"g"}
                            onChange={(e) => this.props.setState({ insertGoals: { ...this.props.state, sugars: e.nativeEvent.text } })}
                        />
                        <Input
                            itemStyle={styles.inputStyle}
                            label={"Cholestrol"}
                            placeholder={"00"}
                            text={"mg"} 
                            // onChange={(e)=>
                            />

                    </View>
                    <View style={styles.bottmViewStyle}>
                        <View style={styles.formView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={"Vitamin A"}
                                placeholder={"00"}
                                text={"%"} />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={"Calcium"}
                                placeholder={"00"}
                                text={"%"} />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={"Vitamin B"}
                                placeholder={"00"}
                                text={"%"} />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={"Iron"}
                                placeholder={"00"}
                                text={"%"} />
                        </View>
                    </View>
                </ScrollView >
            </View>
        );
    }
}

export default InsertGoals;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topView: {
        height: height * 0.06,
        width: width * 0.94,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'center'
    },
    formView: {
        height: height * 0.68,
        width: width * 0.95,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        borderBottomWidth: 0.6
    },
    headingText: {
        fontFamily: Fonts.bold,
        fontSize: fontScale * 16,
        color: '#000'
    },
    smallText: {
        color: '#000',
        fontFamily: Fonts.book,
        fontSize: fontScale * 12
    },
    inputStyle: {
        width: width * 0.4
    },
    bottomViewStyle: {
        height: height * 0.2
    }
})