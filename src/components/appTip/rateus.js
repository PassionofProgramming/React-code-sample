import React, { Component } from 'react';
import { View,Image, Text,TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid, NetInfo } from 'react-native';
import { Toast } from "native-base";
import { Icons, Fonts,Images } from '../../config/index';
import { connect } from 'react-redux';
const { height,fontScale,width } = Dimensions.get('window');


class RateUS extends Component {

    constructor() {
        super();
    }

static navigationOptions = {
        header: null
    };
      modalClick() {
        // Alert.alert("hii")
         // this.setState({ tipVisible: true });
       this.props.setState({appVisible: false})


    }

    render() {
      return (
      	 <View style={styles.container}>
      	  <Image source={Images.star} style={styles.imageItemStyle} resizeMode="contain" />
         
           <Image
                                    source={Images.rateus}
                                    style={styles.content}
                                    resizeMode="contain" />

           <Text style={styles.textStyle}>Are you enjoying this app!</Text>
         

             <Text style={styles.textthin}>Give us love on the app store</Text>
           
          
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <TouchableOpacity  style={styles.whiteBtn}>
             <Text style={{fontFamily: Fonts.bold, fontSize: fontScale * 18,color:"#000",}}>Not now</Text>
             </TouchableOpacity>

             <TouchableOpacity  style={styles.tipBtn} onPress={this.modalClick.bind(this)}>
             <Text style={{fontFamily: Fonts.bold, fontSize: fontScale * 18,color:"#fff",}}>OK</Text>
             </TouchableOpacity>
             </View>
           </View>
      	);
        }

}	
export default RateUS;

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
    whiteBtn:{
        padding:10,
        width: "47%",
	     marginTop:25,
	     alignItems:'center',
	     borderWidth:1,
       borderRadius:2,
	     borderColor:"#000",
       marginRight:"6%"
    },
    tipBtn:{
    	 width: "47%",
	     padding:10,
         borderRadius:2,
	     marginTop:25,
	     alignItems:'center',
	     backgroundColor:"#6162FF"
    },
   
   content:{
     marginBottom:35,
      alignSelf:'center',
       height: 12,
        width: 100,

},
   content1:{
      fontSize: fontScale * 18,
      textAlign: 'center',
      fontFamily: Fonts.bold,
      color: 'black',

  }
});
