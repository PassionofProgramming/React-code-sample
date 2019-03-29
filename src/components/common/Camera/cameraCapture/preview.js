import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { HeaderBar } from '../../header';
import { Icon } from "native-base"

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <HeaderBar
                    onPressLeft={this.props.back}
                    LeftItem={<Icon name="close" />}
                />
                <Image source={{ uri: this.props.imageUrl }} style={{ flex: 1, resizeMode: 'contain' }} />
            </View>
        );
    }
}

export default Preview;
