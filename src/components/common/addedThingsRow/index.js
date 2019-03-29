import React from "react"
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Fonts} from '../../../config/index'

const { fontScale, height } = Dimensions.get('window')

export const AddedThingsRow = (props) => {
    return (
        <View style={{ width: '100%', height: height * 0.09, paddingHorizontal: "2%", borderBottomWidth: 1, borderBottomColor: '#E0E0E0', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', width: "98%", justifyContent: 'space-between', height: height * 0.035, alignItems: 'center' }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>Cal: {props.cal}</Text>
            </View>
            <View style={{
                flexDirection: 'row', width: "98%",
                height: height * 0.035, alignItems: 'center'
            }}>
                <Text style={[styles.text, styles.text2]}>{props.value}</Text>
                <Text style={[styles.text, styles.text2]}>{props.status}</Text>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    title: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 14,
        color: 'black'
    },
    text: {
        fontFamily: 'CircularStd-Book',
        fontSize: fontScale * 12,
    },
    text2:{
        marginRight: fontScale * 30,
    }
})