import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Modal,
    Dimensions,
    ToastAndroid,
    TouchableOpacity,
    ScrollView,
    CameraRoll,
    TextInput,
    FlatList,
    ProgressBarAndroid,
    Animated,
    Alert,
    PanResponder
} from 'react-native';
import * as NB from 'native-base';
import * as _ from 'lodash';
import ImageComp from "./image"
import { HeaderBar } from '../../header';
import Button from '../../FormButton';
import { Images, Icons, Fonts, } from '../../../../config';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import RNFetchBlob from 'react-native-fetch-blob'
import ImageZoom from 'react-native-image-pan-zoom'
import ViewShot from "react-native-view-shot";
import  {AddComment}  from '../../../progress';
 // import CollapsingToolbar from 'react-native-collapsingtoolbar';

// var imgFunc;

const { width, height, fontScale } = Dimensions.get('window');

class GalleryUpload extends Component {

    // imgCompFunc = (func) => {
    //     imgFunc = func
    // }

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            camImage:null,
             comment:"",
            imgArray: [],
            selectedImg: null,
            commentVisible:false,
            maxRange: 480,
            i: 0,
            assets: [],
            lastCursor: null,
            noMorePhotos: false,
            resize: false,
            zoom: true,
            nav: false,
            navcom:false,
            pan: new Animated.ValueXY(), //Step 1
            animatedValue: new Animated.Value(0)
        }
        this.scroll = null;
    }

    // index = 0;
    // prevIndex = 0;

    componentWillMount() {

        this.loadPhotos();

        this._val = { x: 0, y: 0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                    x: this._val.x,
                    y: this._val.y
                })
                this.state.pan.setValue({ x: 0, y: 0 });
                // this.setState({ pan: this.state.pan })
            },
            onPanResponderMove: Animated.event([
                null, { //dx: this.state.pan.x,
                    dy: this.state.pan.y
                }
            ]),
            onPanResponderRelease: (e, gesture) => {
                Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],
                    { useNativeDriver: true } // <-- Add this
                )
                if (this.isDropArea(gesture, this._val.y)) {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: -400 },
                        friction: 10
                    }).start();
                }
                else if (this.isDropArea2(gesture, this._val.y)) {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 400 },
                        friction: 10
                    }).start();
                }
                else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 10
                    }).start();
                }
            }
        });
    }

    isDropArea(gesture, y) {
        var y_axis = Math.round(y)
        var yState = Math.round(this.state.pan.y._value)
        // console.warn(gesture.moveY)
        return gesture.moveY < 290 && yState < -100;
    }

    
    isDropArea2(gesture, y) {
        var y_axis = Math.round(y)
        var yState = Math.round(this.state.pan.y._value)

        return gesture.moveY > 220 && gesture.moveY < 455 && yState > 100;
    }



    allowMore = true;

    loadPhotos = () => {
        let photos = [];
        let fetchParams = {
            first: 480,//this.state.loadImages,
            assetType: 'Photos'
        };
        if (this.state.lastCursor) {
            fetchParams.after = this.state.lastCursor;
        }
        CameraRoll.getPhotos(fetchParams)
            .then(data => {
                let edges = data.edges;
                for (let x in edges) {
                    photos.push(edges[x].node.image.uri)
                }
                if (!this.state.selectedImg)
                    this.setState({
                        selectedImg: edges[this.state.i].node.image.uri, photos: photos
                    });
                // this.appendAssets(data);
            })
            .catch((err) => {
                // console.warn(err)
            });
    }

    appendAssets(data) {
        const assets = data.edges;
        const nextState = {
            loadingMore: false,
        };

        if (!data.page_info.has_next_page) {
            nextState.noMorePhotos = true;
        }

        if (assets.length > 0) {
            nextState.lastCursor = data.page_info.end_cursor;
            nextState.assets = this.state.assets.concat(assets);
            nextState.photos = nextState.assets;
        }
        this.allowMore = true;
        this.setState(nextState);
    }

    endReached = () => {
        if ((!this.state.noMorePhotos && this.state.photos.length < this.state.maxRange
        )
            && this.allowMore) {
            this.allowMore = false;

            this.loadPhotos();
        }
    }
    click(img, i) {
        console.log(this.state.resize)
       console.log(img, i)
       this.rnZoom.resetScale()
        let a = Math.floor(i / 4);
        this.setState({
            selectedImg: img,//.node.image.uri,
            i: i,
            resize: false,
        }, () => {
            Animated.spring(this.state.pan, {
                toValue: { x: 0, y: 0 },
                friction: 10
            }).start();
            setTimeout(() =>
                this.scroll.scrollToIndex({
                    animated: true,
                    index: a
                }),
                500
            );
        })

        // this.scroll.scrollTo({ x: 0, y: 0 })
        // RNFetchBlob
        //     .fs
        //     .readFile(img.node.image.uri, 'base64')
        //     .then((data) => {
        //         console.warn("===base64==CCC==", data)
        //         console.log("===base64==CCC==", `data:image/jpg;base64,${data}`)
        //     }).catch((a) => console.warn("errrrrCCC", a));
        // this.setState({ //selectedImg: `data:image/jpg;base64,${data}`, 
        //     asd: true,
        // });
    }

     goBack = (visible) =>{
      // this.props.navigation.goBack();
       this.setState({ commentVisible: false });
    }

     shareComment(){
            ToastAndroid.show('Data Saved Succesfully', ToastAndroid.SHORT);
            // this.props.setState({ modalVisible: false })
            // this.setState({ commentVisible: false });
             this.setState({ navcom: false });
            this.props.nav.navigate('ProgressDashboard');
            this.props.setState({ modalVisible: false })
        }

    imagecap() {
        // Alert.alert("heyyy")
        this.refs.viewShot.capture().then(uri => {
             // Alert.alert("hmmmmmm")
            // this.props.nav.navigate(screen, {
            //     uri: uri,
            //     //resize: this.state.resize, 
            // });
          this.setState({camImage:uri});
            this.setState({ nav: false });
            // this.props.setState({ modalVisible: false })
            this.setState({ commentVisible: true })
            
            // this.props.setState({ commentVisible: true })
            
        }, err => { alert(err); this.setState({ nav: false }) });
    }

     nav() {
         // this.props.navigation.navigate("AddComment") 
    }
    // this.props.navigation.goBack();

    render() {

        // console.log(this.state.photos, this.state.photos.length)

        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        // let screen = this.props.screen === "profile" ? "Profile" : "Profile"
        return (
            <View style={styles.mainView} >
                <Animated.View
                    style={[
                        styles.animatedView,
                        panStyle,
                    ]}
                >
                    <View>
                        <HeaderBar
                            headerStyle={{
                                backgroundColor: "#fff",
                                zIndex: 1,
                                elevation: 1,
                                width,
                            }}
                            TextColor="#000"
                            Heading={
                                <Text
                                    style={{
                                        fontSize: fontScale * 16,
                                        fontFamily: Fonts.medium,
                                        elevation: 10,
                                        zIndex: 10
                                    }}
                                >Gallery
                                </Text>
                            }
                            LeftItem={
                                <NB.Icon
                                    name="ios-arrow-back"
                                    style={{
                                        color: "#000",
                                        elevation: 10,
                                        zIndex: 10
                                    }}/>
                            }
                            onPressLeft={
                                () => {
                                    // this.props.navigation.goBack();
                                  this.props.setState({
                                    modalVisible: false
                                })
                                }
                                
                            }
                            rightItemStyle={{
                                width: 40
                            }}
                            RightItem={
                                this.state.nav ?
                                    <ProgressBarAndroid color="#9685e5" styleAttr="Small" />
                                    :
                                    <Text
                                        style={{
                                            fontFamily: Fonts.medium,
                                            fontSize: fontScale * 14,
                                            color: '#000',
                                            width: width * 0.1,
                                            elevation: 10,
                                            zIndex: 10
                                        }}
                                    >Next
                                    </Text>
                            }
                            onPressRight={
                                () => {
                                    this.setState({
                                        nav: true,
                                    });
                                    setTimeout(
                                        () => 
                                    this.imagecap(),
                                        0
                                    )
                                }} />

                    <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.commentVisible}
                    onRequestClose={() => { !this.state.commentVisible }}
                >
                      <View style={styles.mainView}>
                 <HeaderBar
                            headerStyle={{
                                backgroundColor: "#fff",
                                zIndex: 1,
                                elevation: 1,
                                width,
                            }}
                            TextColor="#000"
                            Heading={
                                <Text
                                    style={{
                                        fontSize: fontScale * 16,
                                        fontFamily: Fonts.medium,
                                        elevation: 10,
                                        zIndex: 10
                                    }}
                                >Comment
                                </Text>
                            }
                            LeftItem={
                                <NB.Icon
                                    name="ios-arrow-back"
                                    style={{
                                        color: "#000",
                                        elevation: 10,
                                        zIndex: 10
                                    }}/>
                            }
                             onPressLeft={() => {this.goBack()}}
                            rightItemStyle={{
                                width: 40
                            }}

                            RightItem={
                                this.state.navcom ?
                                    <ProgressBarAndroid color="#9685e5" styleAttr="Small" />
                                    :
                                <Image source={
                                Icons.checkMark
                            }
                                style={
                                    styles.rightIconStyle
                                } />}
                           onPressRight={() => {
                            this.setState({
                                        navcom: true,
                                    });
                             setTimeout(
                                        () => 
                                     this.shareComment(),
                                        0
                                    )
                           
                        }} />

          <View style={{  flexDirection:'row',borderWidth:1,padding:10,borderColor:"#ccc"}}>
             <Image 
             style={{
              width: 50,height:50}}
            source={{uri: this.state.camImage}} />
            <TextInput
            underlineColorAndroid='transparent'
            style={{  fontFamily: Fonts.book,
              marginLeft: 10,width:"100%"}}
             onChangeText={(comment) => this.setState({comment})}
            value={this.state.comment}
             placeholder = "Write a caption"/>
          </View>
               
            </View>

                </Modal>

                        <View
                            style={{
                                elevation: 5,
                                zIndex: 5,
                                height: 400
                            }}
                        >
                        
                            <Animated.View
                                {...this.panResponder.panHandlers}
                            >
                                {this.state.selectedImg &&
                                <View
                                    style={{
                                        height: 350,
                                        width: width
                                    }}
                                >
                                    <ViewShot
                                        ref="viewShot"
                                        options={{
                                            format: "png",
                                            quality: 1,
                                        }}
                                    >
                                        {/* {this.state.zoom && */}
                                        <ImageZoom
                                          ref={ ref => this.rnZoom = ref }
                                            cropWidth={width}
                                            cropHeight={350}
                                            imageWidth={width}
                                            imageHeight={350}
                                        >
                                            <Image
                                                source={{
                                                    uri: this.state.selectedImg
                                                }}
                                                style={{
                                                    height: 350,
                                                    resizeMode: this.state.resize ? "contain" : "cover"
                                                }}
                                            />
                                        </ImageZoom>
                                        {/* } */}
                                    </ViewShot>
                                </View>
                            }
                                <View style={{
                                    height: 50,
                                    width,
                                    zIndex: 5,
                                    position: "absolute",
                                    bottom: 0,
                                }}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                             this.rnZoom.resetScale()
                                            this.setState({
                                                resize: !this.state.resize //, zoom: false
                                            },
                                                () => {
                                                    Animated.spring(this.state.pan, {
                                                        toValue: { x: 0, y: 0 },
                                                        friction: 10
                                                    }).start();
                                                    // setTimeout(
                                                    //     () => this.setState({ zoom: true }),
                                                    //     0
                                                    // )
                                                }
                                            )
                                        }}
                                        style={{
                                            height: 40,
                                            width: 40,
                                            borderRadius: 20,
                                            backgroundColor: "rgba(0,0,0,0.4)",
                                            left: 5,
                                        }}
                                    >
                                        <View
                                            style={{
                                                transform: [{ rotate: "-45deg" }],
                                                flexDirection: "row",
                                                justifyContent: "space-around",
                                                alignItems: "center",
                                                height: "100%",
                                                width: "100%",
                                            }}
                                        >
                                            <NB.Icon
                                                name="ios-arrow-back"
                                                style={{
                                                    color: "white",
                                                    fontSize: 18,
                                                }}/>
                                            <NB.Icon
                                                name="ios-arrow-forward"
                                                style={{
                                                    color: "white",
                                                    fontSize: 18,
                                                }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>
                        </View>
                    </View>
                </Animated.View>
                <Animated.View
                    style={[
                        panStyle,
                        {
                            height: height - 124
                        },
                    ]}
                >
                    <FlatList
                        ref={
                            (ref) => this.scroll = ref
                        }
                        keyExtractor={
                            (item, i) => i
                        }
                        onScroll={
                            (a) => {
                                // this.index = Math.floor(a.nativeEvent.contentOffset.y / 12245 * 480);
                                a.nativeEvent.contentOffset.y === 0 &&
                                    Animated.spring(this.state.pan, {
                                        toValue: { x: 0, y: 0 },
                                        friction: 10
                                    }).start();

                                // if (this.index > (this.prevIndex + 20)) {
                                //     this.prevIndex = this.index
                                //     imgFunc(this.index)
                                // }

                                // console.warn(this.index)
                            }
                        }
                        numColumns={4}
                        data={this.state.photos}
                        keyExtractor={
                            (item, index) => index//item.node.image.uri
                        }
                        renderItem={
                            ({
                                item,
                                index,
                                separators
                            }) => {
                                let p = item;
                                let i = index;
                                return (
                                    <View style={{ marginHorizontal: 0.25, }} key={i}>
                                        {this.state.i === i &&
                                            <View
                                                style={{
                                                    height: width * 0.017,
                                                    width: width * 0.017,
                                                    borderRadius: width * 0.017 / 2,
                                                    position: 'absolute',
                                                    zIndex: 20,
                                                    marginLeft: 5,
                                                    marginTop: 5,
                                                    alignItems: 'center',
                                                    justifyContent: "center",
                                                    backgroundColor: 'white',
                                                }}>
                                                <View
                                                    style={{
                                                        height: width * 0.01,
                                                        width: width * 0.01,
                                                        borderRadius: width * 0.01 / 2,
                                                        backgroundColor: "#4D4EEB"
                                                    }}
                                                />
                                            </View>
                                        }
                                        <View
                                            style={{
                                                opacity: this.state.i === i ? 0.3 : 1,
                                            }}
                                        >
                                            <ImageComp
                                                imgUri={
                                                    // this.state.selectedImg
                                                    p//.node.image.uri
                                                }
                                                // func={this.imgCompFunc}
                                                i={i}
                                                // index={this.index}
                                                click={this.click.bind(this, p, i)}
                                            />
                                        </View>
                                    </View>
                                )
                            }}
                        ListFooterComponent={
                            () =>
                                !(this.state.photos.length === this.state.maxRange) ?
                                    <View
                                        style={{
                                            height: 45,
                                            width: "100%",
                                            justifyContent: 'center',
                                            alignItems: "center"
                                        }}
                                    >
                                        <ProgressBarAndroid
                                            styleAttr="Small"
                                            color="#4D4EEB"
                                        />
                                        <Text>Loading...</Text>
                                    </View>
                                    :
                                    null
                        }
                        initialNumToRender={1}
                    // onEndReached={this.endReached}
                    // onEndReachedThreshold={0.9}
                    />
                </Animated.View>

              
            </View >
        );
    }
}

export default GalleryUpload;
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white'
    },
    animatedView: {
        height: 400,//height + 400 - 70,
        width,
        alignItems: "center",
        // position: "absolute",
        // zIndex: 400,
        backgroundColor: "white"
    },
    container: {
        marginVertical: '1%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: width,
        alignSelf: 'center',
        paddingHorizontal: "1%"
    },
    rightIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})