import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
const { height, width, fontScale } = Dimensions.get('window');
import { Fonts } from '../../../config/index'
const Card = (props) => {
    return (
        <View style={style.containerStyle}>
            <View style={style.bottomRow}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', width: width/100 * 97, alignSelf: 'center',  }}>
                    <View style={{ flexDirection: 'row',}}>
                        <Image
                            source={props.imgSrc}
                            style={{
                                height: 20,
                                width: 20,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text style={[style.foodHead, { color: props.color, }]}> {props.food} </Text>
                    </View>
                    <Text style={style.textStyle}> {props.rightText}: {props.rightTextValue ? props.rightTextValue : '0'} </Text>
                </View>
            </View>
            {props.cardSection}
        </View>
    );
}

const style = {
    containerStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    bottomRow: {
        flexDirection: 'row',
        width: width,
        height: height / 100 * 8,
        justifyContent: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 2,

    },
    textStyle: {
        fontFamily: Fonts.book,
        fontSize: fontScale * 15,
        color: 'black',
    },
    foodHead: {
        fontFamily:Fonts.bold,
        fontSize: fontScale * 13,
        alignSelf: 'center',
        paddingLeft: 10,
    }
}
export default Card;