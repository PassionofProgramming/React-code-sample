import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Keyboard,
    ScrollView
} from 'react-native';
import SignInForm from '../signInForm';
import AuthButtonPair from '../authButtonPair';
import AuthInputPair from '../AuthInputPair';
import { Images } from '../../../config/index';

const { height, width } = Dimensions.get('window');

class AuthComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            scroll: false,
        }
        this.scroll = null;
    }
    componentWillMount() {
        Keyboard.dismiss()
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardShow)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardHide)
    }
    componentWillUnmount() {
        this.keyboardDidShow.remove()
        this.keyboardDidHide.remove()
    }
    keyboardShow = () => {
        this.setState({ scroll: true })
    }
    keyboardHide = () => {
        this.scroll.scrollTo({ x: 0, y: 0 })
        this.setState({ scroll: false })
    }
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView
                ref={(ref) => this.scroll = ref}
                contentContainerStyle={{ height: height, backgroundColor: 'white', justifyContent: 'flex-end' }}
                scrollEnabled={this.state.scroll}
                keyboardShouldPersistTaps='handled'
                keyboardDismissMode='interactive'
                showsVerticalScrollIndicator={false}
            >
                <Image source={this.props.backgroundSrc}
                    style={styles.topImage} />

                <View style={styles.container}>
                    <View
                        style={styles.innerView}>
                        <Image
                            source={Images.logo}
                            style={styles.logoStyle}
                        />
                    </View>

                    <View
                        style={styles.bottomView}>
                        {this.props.auth}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default AuthComponent;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: width,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    topImage: {
        position: 'absolute',
        height: '80%',
        width: '100%',
        resizeMode: 'cover',
    },
    innerView: {
        height: height / 100 * 28,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoStyle: {
        marginTop: height / 10,
        height: height / 7,
        width: height / 7,
        resizeMode: 'contain',
    },
    bottomView: {
        height: height / 100 * 72,
        width: window.width / 100 * 84.8,
        justifyContent: 'center',
    }

})