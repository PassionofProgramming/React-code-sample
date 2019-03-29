import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Picker } from 'react-native';
import Input from '../common/FormInput'
import { Fonts } from '../../config/index';

const { height, width } = Dimensions.get('window');

class Help extends Component {
    constructor() {
        super();
        this.state = {
            language: "No Subject available"
        }
    }
    render() {
        return (
            <ScrollView
                keyboardShouldPersistTaps='handled'
                keyboardDismissMode='interactive'
            >
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <View style={styles.topTextView}>
                            <Text style={styles.paragraphStyle}>Start the conversation today. we would be happy if you kindly complete the short form below and allow us to solve your issues. </Text>
                        </View>
                    </View>
                    <View style={styles.centerViewStyle}>
                        <View style={styles.viewinsideCenter}>
                            <View style={styles.subjectLabelView}>
                                <Text style={styles.subjectLabelStyle}>Subjects </Text>
                            </View>
                            <Picker
                                mode="dialog"
                                style={styles.inputStyle}
                                itemStyle={{}}
                                selectedValue={this.state.language}
                                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                <Picker.Item
                                    color={"#BDBDBD"}
                                    label="Select Subject" value="asd" />
                                <Picker.Item label="No Subject available" value="ft" />
                                <Picker.Item label="Chat" value="ft"  onPress={() => navigate('Chat')} />
                            </Picker>

                            <Input
                                itemStyle={styles.inputStyle}
                                label={" Title"}
                                placeholder={"Title for your concern"}
                                placeholderTextColor='#BDBDBD'
                            />

                            <Input
                                itemStyle={styles.inputStyle}
                                label={" Message"}
                                placeholder={"Type your message"}
                                placeholderTextColor='#BDBDBD'
                            />
                        </View>
                    </View>
                </View >
            </ScrollView>
        );
    }
}

export default Help;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    topView: {
        height: height * 0.17,
        justifyContent: 'center'
    },
    topTextView: {
        height: height * 0.12,
        width: width * 0.95,
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    paragraphStyle: {
        lineHeight: 20,
        fontFamily: Fonts.book,
        color: '#BDBDBD',
    },
    centerViewStyle: {
        height: height * 0.5,
    },
    viewinsideCenter: {
        width: width * 0.98,
        alignItems: 'center'
    },
    subjectLabelView: {
        height: height * 0.05,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end'
    },
    subjectLabelStyle: {
        color: 'black',
        fontFamily: Fonts.book,
        paddingLeft: 8
    },
    inputStyle: {
        width: width * 0.95
    }

})
