import React from 'react';
import Button from '../FormButton';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icons, Fonts } from '../../../config/index';

const { height, width } = Dimensions.get('window')
const AuthButtonThrice = (props) => {
    return (
        <View style={{
            minHeight: (height / 100 * 72) / 100 * 37,
            maxHeight: (height / 100 * 72) / 100 * 42,
            width: width / 100 * 84.8,
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Button
                btnStyle={styles.btnStyle}
                color={'#4D4EEB'}
                onPress={props.onPressBtn1}
                text={props.btn1Text}/>
            <Button
                btnStyle={styles.btnStyle}
                color={'#427DC3'}
                onPress={props.onPressBtn2}
                text={props.btn2Text}
                icon={Icons.fb}/>
            <View style={styles.orView}>
                <View style={styles.line} />
                <Text style={styles.orText}>
                    OR
                </Text>
                <View style={styles.line} />
            </View>
            <Button
                btnStyle={styles.btnStyle}
                color={'#4D4EEB'}
                onPress={props.onPressBtn3}
                text={props.btn3Text}
            />
        </View>
    );
}
export { AuthButtonThrice }
const styles = StyleSheet.create({
    line: {
        width: '42%',
        height: 1,
        backgroundColor: '#BDBDBD',
        alignSelf: 'center'
    },
    orText: {
        marginVertical: '-2%',
        color: "#BDBDBD",
        fontFamily: Fonts.book
    },
    orView: {
        flexDirection: 'row',
        paddingTop: '2%',
        justifyContent: 'space-between',
    },
    btnStyle: {
        marginVertical: 0
    }
})