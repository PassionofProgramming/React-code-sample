import React, { Component } from 'react';
import { View,Image, Text,Modal,TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid, NetInfo } from 'react-native';
import { Toast } from "native-base";
import { Icons, Fonts,Images } from '../../config/index';
import { connect } from 'react-redux';
import RateUS from './rateus';

const { height,fontScale,width } = Dimensions.get('window');


class TipTwo extends Component {

    constructor() {
        super();
         this.state={
            appVisible: false,
        }
    }

static navigationOptions = {
        header: null
    };

       modalClick() {
        // Alert.alert("hii")
         // this.setState({ tipVisible: true });
       this.props.setState({tipVisible: false})


    }
      cancelClick() {
        // Alert.alert("hii")
         // this.setState({ tipVisible: true });
         this.props.setState({tipVisible: false})
       // this.props.setState({tipVisible: false})


    }

    render() {
      return (
      	 <View style={styles.container}>
         
      	  <Image source={Images.bell} style={styles.imageItemStyle} resizeMode="contain" />
                <Image
                                    source={Images.heading}
                                    style={styles.content}
                                    resizeMode="contain" />
         
             <Text style={styles.textthin}>Notifications may include aiarts sounds and icon badges these can be configured in settings</Text>
         
            
          
            <View style={{flexDirection:"row",justifyContent:"space-between"}} onPress={this.cancelClick.bind(this)}>
            <TouchableOpacity  style={styles.whiteBtn}>
             <Text style={{fontFamily: Fonts.bold, fontSize: fontScale * 16,color:"#000",}}>Cancel</Text>
             </TouchableOpacity>

             <TouchableOpacity  style={styles.tipBtn}  onPress={this.modalClick.bind(this)}>
             <Text style={{fontFamily: Fonts.bold, fontSize: fontScale * 16,color:"#fff",}}>OK</Text>
             </TouchableOpacity>
             </View>
           </View>
      	);
        }

}	
export default TipTwo;

	const styles = StyleSheet.create({

	container:{
		 flex: 1,
	     backgroundColor: '#fff',
	    justifyContent:'center',
       alignItems:'center',
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
    whiteBtn:{
        padding:10,
        width: "47%",
	     marginTop:25,
	     alignItems:'center',
	     borderWidth:1,
	     borderColor:"#000",
        marginRight:"6%",
         borderRadius:2,
    },
    tipBtn:{
    	 width: "47%",
	     padding:10,
	     marginTop:25,
	     alignItems:'center',
        borderRadius:2,
	     backgroundColor:"#6162FF"
    },
   
     textthin:
 {
   fontFamily: Fonts.book,
   marginTop:0,
   color: 'black',
    paddingLeft:10,
        paddingRight:10,
     fontSize: fontScale * 15,
    lineHeight:25,
      textAlign:'center',
     marginBottom:27,
},
  content:{
     marginBottom:35,
      alignSelf:'center',
       height: 12,
        width: 100,

 }
});
