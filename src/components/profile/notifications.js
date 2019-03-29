import React, { Component } from 'react';
import { View, Text,Image, Dimensions, StyleSheet, ScrollView, Picker } from 'react-native';
import Input from '../common/FormInput'
import { Fonts,Images,Icons } from '../../config/index';
import SwitchToggle from 'react-native-switch-toggle';
import FlipToggle from 'react-native-flip-toggle-button'

const { height, width } = Dimensions.get('window');

class Notifications extends Component {
    constructor() {
        super();
        this.state = {
            language: "No Subject available",
            weight:true,
            notification:false,
            food:true,
            water:true,
            exercise:true

        }
    }

     onPress1 = () => {
    this.setState({ weight: !this.state.weight });
  }

     onPress2 = () => {
    this.setState({ notification: !this.state.notification });
  }

     onPress3 = () => {
    this.setState({ food: !this.state.food });
  }

     onPress4= () => {
    this.setState({ water: !this.state.water });
  }
   onPress5= () => {
    this.setState({ exercise: !this.state.exercise });
  }
    render() {
        return (
            <ScrollView
                keyboardShouldPersistTaps='handled'
                keyboardDismissMode='interactive'
            >
                <View style={styles.container}>
                   
                 
                            <View style={styles.subjectLabelView}>
                                <Text style={styles.subjectLabelStyle}>General Setting </Text>
                            </View>

                            <View style={styles.mainView}>

                            <Image source={Icons.weightPng} style={styles.topIconStyle} resizeMode="contain" />
                              <Text style={styles.textStyle}>Remind me to weight</Text>

                             <SwitchToggle
                                  switchOn={this.state.weight}
                                  onPress={this.onPress1}
                                   backgroundColorOn='#6162ff'
                                  backgroundColorOff='#f0f3f5'
                                  circleColorOff='#6162ff'
                                  circleColorOn='#f0f3f5'
                                   containerStyle={{
                                    width: 45,
                                    height: 20,
                                    borderRadius: 50,
                                    padding: 5,
                                  }}
                                  circleStyle={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: 50,
                                  }}
                                />
                               

                            </View>
                            <View style={styles.mainView}>
                            <Image source={Icons.notifyPng} style={styles.topIconStyle} resizeMode="contain" />
                              <Text style={styles.textStyle}>Notifications</Text>
                                <SwitchToggle
                                  switchOn={this.state.notification}
                                  onPress={this.onPress2}
                                   backgroundColorOn='#6162ff'
                                  backgroundColorOff='#f0f3f5'
                                  circleColorOff='#6162ff'
                                  circleColorOn='#f0f3f5'
                                   containerStyle={{
                                    width: 45,
                                    height: 20,
                                    borderRadius: 50,
                                    padding: 5,
                                  }}
                                  circleStyle={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: 50,
                                  }}
                                />

                            </View>
                           

                           <View style={styles.subjectLabelView}>
                                <Text style={styles.subjectLabelStyle}>Meals and Water Setting </Text>
                            </View>

                            <View style={styles.mainView}>

                            <Image source={Icons.foodPng} style={styles.topIconStyle} resizeMode="contain" />
                              <Text style={styles.textStyle}>Food Reminder</Text>
                               
                                <SwitchToggle
                                  switchOn={this.state.food}
                                  onPress={this.onPress3}
                                   backgroundColorOn='#6162ff'
                                  backgroundColorOff='#f0f3f5'
                                  circleColorOff='#6162ff'
                                  circleColorOn='#f0f3f5'
                                   containerStyle={{
                                    width: 45,
                                    height: 20,
                                    borderRadius: 50,
                                    padding: 5,
                                  }}
                                  circleStyle={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: 50,
                                  }}
                                />

                            </View>
                            <View style={styles.mainView}>

                            <Image source={Icons.waterPng} style={styles.topIconStyle} resizeMode="contain" />
                              <Text style={styles.textStyle}>Water Consumption Reminder</Text>
                                <SwitchToggle
                                  switchOn={this.state.water}
                                  onPress={this.onPress4}
                                   backgroundColorOn='#6162ff'
                                  backgroundColorOff='#f0f3f5'
                                  circleColorOff='#6162ff'
                                  circleColorOn='#f0f3f5'
                                   containerStyle={{
                                    width: 45,
                                    height: 20,
                                    borderRadius: 50,
                                    padding: 5,
                                  }}
                                  circleStyle={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: 50,
                                  }}
                                />
                            </View>
                           
                              <View style={styles.mainView}>

                            <Image source={Icons.exercisePng} style={styles.topIconStyle} resizeMode="contain" />
                              <Text style={styles.textStyle}>Exercise Reminder</Text>
                               
                                <SwitchToggle
                                  switchOn={this.state.exercise}
                                  onPress={this.onPress5}
                                   backgroundColorOn='#6162ff'
                                  backgroundColorOff='#f0f3f5'
                                  circleColorOff='#6162ff'
                                  circleColorOn='#f0f3f5'
                                   containerStyle={{
                                    width: 45,
                                    height: 20,
                                    borderRadius: 50,
                                    padding: 5,
                                  }}
                                  circleStyle={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: 50,
                                  }}
                                />

                            </View>
                           
                </View >
            </ScrollView>
        );
    }
}

export default Notifications; 

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
    mainView:{
         // backgroundColor:'red',
         flexDirection: 'row',
         justifyContent: 'space-between',
         width: width * 0.96,
         alignSelf: 'center',
           marginTop:25,
         height:37,
         alignItems:'center',
         padding:10
    },
    topIconStyle:{
        height:37,
        width:37
        // backgroundColor:'red'
     // width: width * 0.3
    },
    toggleStyle:{
     width: width * 0.3
    },
    textStyle:{
        fontFamily: Fonts.book,
       
      
        fontSize: 15,
        // marginLeft:0,
        color:'#000',
        position:"absolute",
        left:65
        // width: width * 0.3
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
        alignSelf: 'flex-start',
        marginTop:30,
        marginBottom:5,
        justifyContent: 'flex-end'
    },
    subjectLabelStyle: {
        color: '#6068fa',
        fontFamily: Fonts.bold,
        paddingLeft: 8,
        fontSize:18
    },
    inputStyle: {
        width: width * 0.95
    }

})
