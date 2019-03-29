import React, { Component } from 'react';
import { View,Image,Alert, Modal,Text,TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid, NetInfo } from 'react-native';
import { Toast } from "native-base";
import { Icons, Fonts,Images } from '../../config/index';
import { connect } from 'react-redux';
import TipTwo from './tiptwo';
import MyText from 'react-native-letter-spacing';

const { height,fontScale,width } = Dimensions.get('window');


class TipOne extends Component {

    constructor() {
        super();
          this.state={
            tipVisible: false,
        }
    }

      modalClick() {
        // Alert.alert("hii")
      
       this.props.setState({modalVisible: false})


    }

static navigationOptions = {
        header: null
    };

    render() {
      return (
      	 <View style={styles.container}>
           
      	  <Image
                                    source={Images.bulb}
                                    style={styles.imageItemStyle}
                                    resizeMode="contain" />

          
           <Image
                                    source={Images.quicktips}
                                    style={styles.content}
                                    resizeMode="contain" />
         
            <Text style={styles.textStyle}>Point One goes here</Text>
             <Text style={styles.textthin}>Notifications may include aiarts sounds and give it to you</Text>
  

            <Text style={styles.textStyle}>Point two here</Text>
             <Text style={styles.textthin}>Notifications may include aiarts sounds and give it to you</Text>
              
             <TouchableOpacity  style={styles.tipBtn}  onPress={this.modalClick.bind(this)}>
             <Text style={{fontFamily: Fonts.bold, fontSize: fontScale * 18,color:"#fff",}}>Close</Text>
             </TouchableOpacity>
           </View>
      	);
        }

}	
export default TipOne;

const styles = StyleSheet.create({

container:{
	 flex: 1,
     backgroundColor: '#fff',
     paddingTop:100,
     paddingLeft:40,
     paddingRight:40
},
 imageItemStyle: {
        height: 70,
        width: 70,
        alignSelf:'center',
         marginBottom:28,
        marginTop: fontScale * -14,

    },
tipBtn:{
     padding:10,
     marginTop:25,
     alignItems:'center',
     borderRadius:2,
     backgroundColor:"#6162FF"
  },
 textStyle:{
    fontSize: fontScale * 18,
    fontFamily: Fonts.bold,color: 'black',
    paddingLeft:10
 },
 textthin:
 {
   fontFamily: Fonts.book,
   marginTop:0,
   color: 'black',
    paddingLeft:10,
     fontSize: fontScale * 15,
    lineHeight:25,
     marginBottom:27,
},
content:{
     marginBottom:35,
      alignSelf:'center',
       height: 12,
        width: 100,

 }
});
