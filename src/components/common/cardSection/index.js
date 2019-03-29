import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import * as NB from 'native-base';
import { AddedThingsRow } from '../addedThingsRow'
const { height, width } = Dimensions.get('window');
import { Fonts } from '../../../config/index';
const CardSection = (props) => {
    return (
        props.addedRows ?
            <View style={styles.container}>
                {
                    props.addedRows.map((item, i) =>
                        <AddedThingsRow
                            key={i}
                            {...item}
                            // title={item.title && item.title}
                            // cal={item.cal && item.cal}
                            // value={item.value && item.value}
                            // status={item.status && item.status}
                        />
                    )
                }
            </View>
            :
            <TouchableOpacity onPress={props.onPressAdd} >
                <View style={styles.centerStyle}>
                    <NB.Icon name="ios-search-outline" style={styles.iconStyle} />
                    <View style={styles.addFoodView}>
                        <NB.Icon name="md-add" style={styles.addIcon} />
                        <Text style={styles.centerTextStyle}> Add {props.item} </Text>
                    </View>

                </View>
            </TouchableOpacity>
    );
}
const styles = {
    centerStyle: {
        height: height / 100 * 15,
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    iconStyle: {
        color: '#8DAAB9',
        fontSize: 30,
        fontWeight: 'bold'
    },
    addFoodView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    addIcon: {
        color: '#8DAAB9',
        fontSize: 18,
        fontWeight: "bold"
    },
    centerTextStyle: {
        fontFamily: Fonts.bold,
        fontSize: 15,
        color: '#8DAAB9',
    },
    container: {
        width: '100%'
    }
}
export default CardSection;