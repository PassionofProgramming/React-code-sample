import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet, Animated } from 'react-native';
import { HeaderBar } from '../common/header/index';
import { Icons, Fonts, } from '../../config/index';
import * as NB from 'native-base';
import { ProfileSetting, WeightSetting, GoalsSetting,Notifications, Help, InsertGoals, Profile } from './index';
const { height, width } = Dimensions.get('window');
import { StackNavigator } from 'react-navigation';

const header = ['Profile Setting', 'Weight Setting', 'Goals Setting', 'Setting'];

export class ProfileTabs extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            changeHeader: 0,
            goalEdit: false,
            click: true,

            profileData: {
                status: "none",
                gender: "female",
                firstName: '',
                lastName: '',
                email: '',
                weight: '',
                desireWeight: '',
                ft: "",
                in: "",
                date: "",
                month: "",
                year: "",
            },
            insertGoals: {
                calories: '',
                sodium: '',
                totalFat: '',
                potassium: '',
                saturated: '',
                totalCarbs: '',
                monosaturated: '',
                sugars: '',
                trans: '',
                protein: '',
                cholestrol: '',
                vitaminA: '',
                calcium: '',
                vitaminB: '',
                iron: '',
            }
        }
        this.tintPosition = new Animated.Value(0)
    }

    animateTabUnderline(i) {
        Animated.timing(
            this.tintPosition,
            {
                toValue: i,
                duration: 200,

            }
        ).start()
    }


    done(goBack) {
        let profileSetting = this.state.profileData
        // console.warn(profileSetting)
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        const tintPosition = this.tintPosition.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [0, width / 4, width / 4 * 2, width / 4 * 3],
        })

        return (
            <View style={styles.container}>
                {
                    header[this.state.changeHeader] == "Setting" ?
                        <HeaderBar
                            Heading={
                                header[this.state.changeHeader]
                            }
                            onPressLeft={() => goBack()}
                            TextColor="black"
                            headerStyle={styles.headerStyle}/>
                        :
                        (
                            header[this.state.changeHeader] !== "Goals Setting" ?
                       <HeaderBar
                            Heading={
                                header[this.state.changeHeader]
                            }
                            onPressLeft={() => goBack()}
                            TextColor="black"
                            headerStyle={styles.headerStyle}
                            RightItem={<Image source={Icons.checkMark} style={{ height: 20, width: 20, resizeMode: 'contain' }} />}
                            onPressRight={() => this.done(goBack)}/>
                            :
                            <HeaderBar
                            onPressLeft={this.state.click ? () => goBack() : () => this.setState({ click: true })}
                            Heading={
                                header[this.state.changeHeader]
                            }
                            TextColor="black"
                            headerStyle={styles.headerStyle}
                            RightItem={this.state.goalEdit ?
                                < Image source={Icons.checkMark} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                                : < Image source={Icons.edit} style={{ height: 20, width: 20, resizeMode: 'contain' }} />}
                            onPressRight={() => this.setState({ goalEdit: !this.state.goalEdit })}/>
                    )
                    
                }
                <Animated.View
                    style={{
                        height: 5,
                        width: width / 4,//"90%",
                        top: 101,
                        alignItems: "center",
                        // bottom: 0,
                        zIndex: 20,
                        position: "absolute",
                        // transform: [{ translateX: tintPosition }]
                        left: tintPosition
                    }}>
                    {/* {this.state.changeHeader === 'Profile Setting' ?  */}

                    <Image source={Icons.selectedTab} style={{
                        height: 5, width: "100%",
                        //resizeMode: "contain"
                    }} />
                    {/* : null
                                } */}
                </Animated.View>
                <NB.Tabs
                    initialPage={0}
                    textStyle={styles.tabTextStyle}
                    tabBarUnderlineStyle={styles.tabBottomLineStyle}
                    onChangeTab={({ ref }) => {
                        switch (ref.props.heading1) {
                            case "PROFILE":
                                this.setState({
                                    changeHeader: 0//'Profile Setting' // +  this.state.section,
                                }, () => this.animateTabUnderline(0))
                                break;
                            case "WIDGET":
                                this.setState({
                                    changeHeader: 1//'Weight Setting'
                                }, () => this.animateTabUnderline(1))
                                break;
                            case "GOALS":
                                this.setState({
                                    changeHeader: 2//'Goals Setting'
                                }, () => this.animateTabUnderline(2))
                                break;
                            case "NOTIFICATIONS":
                                this.setState({
                                    changeHeader: 3//'Help'
                                }, () => this.animateTabUnderline(3))
                                break;
                            default:
                                // console.warn('reached to deafult case!') // should never reach here...x
                                break;
                        }
                    }
                    }
                >
                    <NB.Tab
                        tabStyle={styles.activeTabBackgroundStyle}
                        activeTabStyle={styles.activeTabBackgroundStyle
                        }
                        activeTextStyle={styles.activeTabTextStyle
                        }
                        textStyle={styles.tabTextStyle}
                        heading={"PROFILE"
                            // <View style={{ backgroundColor: "white", flexDirection: "column", height: "100%", width: "100%" }}>
                            //     <Text style={{ fontFamily: Fonts.medium, color: "gray" }}>PROFILE</Text>
                            // </View>
                        }
                        heading1="PROFILE"
                    // 'PROFILE'
                    >
                        <ProfileSetting
                            setState={(data) => this.setState(data)} state={this.state.profileData}
                        />
                    </NB.Tab >
                    <NB.Tab
                        tabStyle={styles.activeTabBackgroundStyle}
                        activeTabStyle={styles.activeTabBackgroundStyle}
                        activeTextStyle={styles.activeTabTextStyle}
                        textStyle={styles.tabTextStyle}
                        // heading='WEIGHT'
                        heading1="WIDGET"
                        heading={"WIDGET"
                            // <View style={{ backgroundColor: "white", flexDirection: "column", height: "100%", width: "100%" }}>
                            //     <Text style={{ fontFamily: Fonts.medium, color: "gray" }}>WEIGHT</Text>
                            //     <View style={{ height: 5, width: "90%", bottom: 0, position: "absolute" }}>
                            //         {/* {this.state.changeHeader === 'Weight Setting' ? 
                            //     <Image source={Icons.selectedTab} style={{ height: 5, width: "100%", //resizeMode: "contain"
                            // }} />
                            //     : null
                            //     } */}
                            //     </View>
                            // </View>
                        }
                    >

                        <WeightSetting />
                    </NB.Tab >
                    <NB.Tab
                        tabStyle={styles.activeTabBackgroundStyle}
                        activeTabStyle={styles.activeTabBackgroundStyle}
                        activeTextStyle={styles.activeTabTextStyle}
                        textStyle={styles.tabTextStyle}
                        heading1="GOALS"
                        heading={'GOALS'
                            // <View style={{ backgroundColor: "white", flexDirection: "column", height: "100%", width: "100%" }}>
                            //     <Text style={{ fontFamily: Fonts.medium, color: "gray" }}>GOALS</Text>
                            //     <View style={{ height: 5, width: "90%", bottom: 0, position: "absolute" }}>
                            //         {/* {this.state.changeHeader === 'Goals Setting' ? 
                            //     <Image source={Icons.selectedTab} style={{ height: 5, width: "100%", //resizeMode: "contain"
                            // }} />
                            //     : null
                            //     } */}
                            //     </View>
                            // </View>
                        }

                    >
                        {this.state.click ? <GoalsSetting
                            edit={this.state.goalEdit}
                            navigation={this.props.navigation}
                            click={() => this.setState({ click: !this.state.click })}
                        />
                            :
                            <InsertGoals
                                click={() => this.setState({ click: !this.state.click })}
                                setState={(data) => this.setState(data)}

                            />
                        }
                    </NB.Tab >
                    <NB.Tab
                        tabStyle={styles.activeTabBackgroundStyle}
                        activeTabStyle={styles.activeTabBackgroundStyle}
                        activeTextStyle={styles.activeTabTextStyle}
                        textStyle={styles.tabTextStyle}
                        heading1="NOTIFICATIONS"
                        heading={'NOTIFICATIONS'
                            // <View style={{ backgroundColor: "white", flexDirection: "column", height: "100%", width: "100%" }}>
                            //     <Text style={{ fontFamily: Fonts.medium, color: "gray" }}>HELP</Text>
                            //     <View style={{ height: 5, width: "90%", bottom: 0, position: "absolute" }}>
                            //         {/* {this.state.changeHeader === 'Help' ? 
                            //     <Image source={Icons.selectedTab} style={{ height: 5, width: "100%", //resizeMode: "contain"
                            // }} />
                            //     : null
                            //     } */}
                            //     </View>
                            // </View>
                        }
                    >
                        <Notifications />
                    </NB.Tab >
                </NB.Tabs>
            </View >
        );
    }
}

// export default ProfileTabbar;
export const ProfileTabbar = StackNavigator({

    Profile: {
        screen: Profile
    },
    ProfileTabbar: {
        screen: ProfileTabs
    },
    InsertGoals: {
        screen: InsertGoals
    },
    ProfileSetting: {
        screen: ProfileSetting
    },
    WeightSetting: {
        screen: WeightSetting
    },
    GoalsSetting: {
        screen: GoalsSetting
    },
    Notifications: {
        screen: Notifications
    }

})
ProfileTabs.router = GoalsSetting.router

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabTextStyle: {
        fontFamily: Fonts.medium,
        color: '#8DAAB9',
        fontSize: 9
    },
    tabBottomLineStyle: {
        backgroundColor: 'transparent',
        width: '22%',
        marginHorizontal: 5
    },
    activeTabBackgroundStyle: {
        backgroundColor: 'white',
    },
    activeTabTextStyle: {
        fontFamily: Fonts.medium,
        color: '#4D4EEB',
        fontSize: 9
    },
    headerStyle: {
        elevation: 0
    }
})