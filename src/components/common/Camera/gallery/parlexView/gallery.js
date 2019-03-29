import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
// import GalleryViewStyle from './GalleryViewStyle'
import RNFetchBlob from 'react-native-fetch-blob'
import * as NB from 'native-base';
import {
  AppBarLayout,
  CoordinatorLayout,
  CollapsingToolbarLayout,
  CollapsingParallax,
} from 'react-native-collapsing-toolbar';
import NestedScrollView from 'react-native-nested-scroll-view';

const {height, width, fontScale} = Dimensions.get('window');

export default class GalleryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryImagePath: false
        }
    }
    getSelectedImages(image, current) {
        console.log("====image path ===", current.uri)
        this.setState({galleryImagePath: current.uri});

        RNFetchBlob
            .fs
            .readFile(current.uri, 'base64')
            .then((data) => {
                console.log("===base64 ====", data)
                this.setState({galleryImagePath: `data:image/jpg;base64,${data}`});
            }).catch((a)=>console.log("errrrr",a));
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <ParallaxScrollView
                    style={{
                    flex: 1,
                    backgroundColor: 'hotpink',
                    overflow: 'hidden'
                }}
                    renderBackground={() => (
                    <View style={styles.galleryView}>
                        <View style={styles.imagePreview}>
                            {this.state.galleryImagePath && <Image
                                source={{
                                uri: this.state.galleryImagePath
                            }}
                                style={{
                                height: 400
                            }}/>}
                        </View>
                    </View>
                )}
                    renderFixedHeader={() => <Text
                    style={{
                    textAlign: 'center',
                    color: 'white',
                    padding: 15,
                    fontSize: 20
                }}>Gallery</Text>}
                
                    parallaxHeaderHeight={350}
                    stickyHeaderHeight={55}>
                    <View
                        style={{
                        alignItems: 'center'
                    }}>
                        <CameraRollPicker
                            scrollRenderAheadDistance={100}
                            initialListSize={1}
                            pageSize={3}
                            // removeClippedSubviews={true}
                            groupTypes='SavedPhotos'
                            maximum={1}
                            assetType='Photos'
                            imagesPerRow={3}
                            imageMargin={1}
                            callback={this.getSelectedImages.bind(this)}/>

                    </View>
                </ParallaxScrollView>
                {/* <View style={{ backgroundColor: 'grey', height: height * 0.08, flexDirection: 'row', width: width, flexWrap: 'wrap'}}>

                    <NB.Tabs
                     initialPage={0}
                     tabBarPosition="bottom"
                     textStyle={styles.tabTextStyle}
                     tabBarUnderlineStyle={styles.tabBottomLineStyle}
                    >
                    <NB.Tab
                       tabStyle={styles.activeTabBackgroundStyle}
                       activeTabStyle={styles.activeTabBackgroundStyle}
                       activeTextStyle={styles.activeTabTextStyle}
                       textStyle={styles.tabTextStyle}
                       heading="Gallery"
                     >
                     </NB.Tab>
                    <NB.Tab
                       tabStyle={styles.activeTabBackgroundStyle}
                       activeTabStyle={styles.activeTabBackgroundStyle}
                       activeTextStyle={styles.activeTabTextStyle}
                       textStyle={styles.tabTextStyle}
                       heading="Photo"
                          >
                    </NB.Tab>


                    </NB.Tabs>

                </View> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6AE2D'
    },
    content: {
        marginTop: 15,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 16,
        alignItems: 'center',
        color: '#fff'
    },
    bold: {
        fontWeight: 'bold'
    },
    info: {
        fontSize: 12
    },
    tabTextStyle: {
        color: '#8DAAB9',
        fontSize: 13
    },
    tabBottomLineStyle: {
        backgroundColor: '#000',
        width: '45%',
        marginHorizontal: 5
    },
    activeTabBackgroundStyle: {
        backgroundColor: 'white'
    },
    activeTabTextStyle: {
        // color: '#4D4EEB',
        color: '#000',
        fontSize: 13
    },
    headerStyle: {
        elevation: 0
    }
});