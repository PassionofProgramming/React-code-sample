import React, { Component } from 'react';
import { View,Button,TouchableOpacity, Text, Dimensions, Image, ScrollView, Picker } from 'react-native';
import { HeaderBar } from '../../components/common/header/index';
import { Icons, Fonts } from '../../config/'
import Input from '../../components/common/FormInput/index'
// import Button from '../../components/common/FormButton';
const { width, height, scale, fontScale } = Dimensions.get('window')

class ProfileSetting extends Component {

    constructor() {
        super();
        this.state = {
            status: "none",
            gender: "female",
            firstName: '',
            lastName: '',
            username: '',
            goal: '',
            email: '',
            weight: '',
            desireWeight: '',
            password:'',
            ft: "",
            in: "",
            date: "",
            month: "",
            year: "",
            dateStyle: { width: (width / 100 * 84.8) / 3.3 },
            monthStyle: { width: (width / 100 * 84.8) / 3.3, },
            yearStyle: { width: (width / 100 * 84.8) / 3.3, },
            ftStyle: { width: (width / 100 * 84.8) / 2.3, },
            inStyle: { width: (width / 100 * 84.8) / 2.3, },
        }
        this.inputs = {};
    }
    static navigationOptions = {
        header: null
    }

    focusNextField(id, count) {
        if (count === 2) {
            if (id !== "ft") {
                this.inputs[id]._root.focus();
            }
        }
        else if (count === 4) {
            this.inputs[id]._root.focus();
        }
        else if (count === "jump") {
            this.inputs[id]._root.focus();
        }

        // console.log(this.inputs)
        // console.warn(count)
    }

    // focusNextField(id) {
    //     this.inputs[id]._root.focus()
    // }

    // done(goBack) {
    //     let profileSetting = {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         email: this.state.email,
    //         weight: this.state.weight,
    //         desireWeight: this.state.desireWeight,
    //         in: this.state.in,
    //         ft: this.state.ft,
    //         date: this.state.date,
    //         month: this.state.month,
    //         year: this.state.year,

    //     }
    //     this.props.profileData(profileSetting)
    //     console.warn(done)
    //     profi
    // }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    keyboardDismissMode='interactive'
                >
                    {/* <HeaderBar
                    Heading="Profile Setting"
                    TextColor="black"
                    RightItem={<Image source={Icons.checkMark} style={{ height: 20, width: 20, resizeMode: 'contain' }} />}
                /> */}
                    <View style={styles.content}>
                        <View style={styles.insideFormView}>
                            <Input
                                inputRef={ref => this.inputs['fName'] = ref}
                                onSubmitEditing={() => this.focusNextField('lName', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'First Name '}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, firstName: e.nativeEvent.text } })}
                                placeholder={'Andre'} />
                            <Input
                                inputRef={ref => this.inputs['lName'] = ref}
                                onSubmitEditing={() => this.focusNextField('uName', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'Last Name'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, lastName: e.nativeEvent.text } })}
                                placeholder={'Oliveira'} />
                        </View>

                        <View style={styles.insideFormView}>
                            <Input
                                inputRef={ref => this.inputs['uName'] = ref}
                                onSubmitEditing={() => this.focusNextField('goal', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'User Name '}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, username: e.nativeEvent.text } })}
                                placeholder={'Voxelration'} />
                            <Input
                                inputRef={ref => this.inputs['goal'] = ref}
                                onSubmitEditing={() => this.focusNextField('weight', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'Your Goal'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, goal: e.nativeEvent.text } })}
                                placeholder={'Reduce Weight'} />
                        </View>

                        

                        {/* <View style={styles.insideFormView}>
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'E-mail'}
                                onChange={() => {}}
                                placeholder={'name@gmail.com'}
                                keyboardType={'email-address'}
                                />
                            <Input
                                itemStyle={styles.inputStyle}
                                label={'Your Goal'}
                                onChange={() => {}}
                                placeholder={'Reduce weight'}/>
                        </View> */}
                        <View style={styles.insideFormView}>
                            <Input
                                inputRef={ref => this.inputs['weight'] = ref}
                                onSubmitEditing={() => this.focusNextField('desireWeight', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'Weight'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, weight: e.nativeEvent.text } })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={3}
                            />
                            <Input
                                inputRef={ref => this.inputs['desireWeight'] = ref}
                                onSubmitEditing={() => this.focusNextField('ft', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'Desire Weight'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, desireWeight: e.nativeEvent.text } })}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={3}
                            />
                        </View>

                        <View style={styles.insideFormView}>
                            <Input
                                inputRef={ref => this.inputs['ft'] = ref}
                                onSubmitEditing={() => this.focusNextField('in', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={'Height'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, ft: e.nativeEvent.text } })}
                                placeholder={'00'}
                                text={'ft'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                            <Input
                                inputRef={ref => this.inputs['in'] = ref}
                                onSubmitEditing={() => this.focusNextField('date', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.inputStyle}
                                label={' '}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, in: e.nativeEvent.text } })}
                                placeholder={'00'}
                                text={'in'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                        </View>

                        <View style={styles.insideFormView}>
                            {/* <Input
                                itemStyle={styles.itemStyleView}
                                label={'Date of Birth'}
                                onChange={() => { }}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                            <Input
                                itemStyle={styles.itemStyleView}
                                label={' '}
                                onChange={() => { }}
                                placeholder={'00'}
                                keyboardType={'numeric'}
                                maxLength={2}
                            />
                            <Input
                                itemStyle={styles.itemStyleView}
                                label={' '}
                                onChange={() => { }}
                                placeholder={'0000'}
                                keyboardType={'numeric'}
                                maxLength={4}
                            /> */}

                            <Input
                                inputRef={ref => this.inputs['date'] = ref}
                                onSubmitEditing={() => this.focusNextField('month', 'jump')}
                                returnKeyType="next"
                                itemStyle={styles.itemStyleView}
                                label={'Date of Birth'}
                                onChange={() => { }}
                                placeholder={'00'}
                                text={'dd'}
                                // textStyle={numberStyle}
                                keyboardType={'numeric'}
                                maxLength={2}
                                onChange={(e) => {
                                    this.props.setState({ profileData: { ...this.props.state, date: e.nativeEvent.text } })
                                    this.focusNextField('month', e.nativeEvent.text.length);
                                }
                                }/>

                            <Input
                                inputRef={ref => this.inputs['month'] = ref}
                                onSubmitEditing={() => this.focusNextField('year', 'jump')}
                                itemStyle={styles.itemStyleView}
                                label={'  '}
                                onChange={() => { }}
                                placeholder={'00'}
                                text={'mm'}
                                // textStyle={numberStyle}
                                keyboardType={'numeric'}
                                maxLength={2}
                                onChange={(e) => {
                                    this.props.setState({ profileData: { ...this.props.state, month: e.nativeEvent.text } });
                                    this.focusNextField('year', e.nativeEvent.text.length);
                                }
                                }/>

                            <Input
                                inputRef={ref => this.inputs['year'] = ref}
                                // onSubmitEditing={() => this.focusNextField()}
                                // returnKeyType="next"
                                itemStyle={styles.itemStyleView}
                                label={'  '}
                                onChange={() => { }}
                                placeholder={'0000'}
                                text={'yy'}
                                // textStyle={numberStyle}
                                keyboardType={'numeric'}
                                maxLength={4}
                                onChange={(e) => {
                                    this.props.setState({ profileData: { ...this.props.state, year: e.nativeEvent.text } });
                                }
                                }/>
                        </View>

                        {/* <View style={styles.insideFormView}>
                            <Input
                                itemStyle={{ width: width * 0.95 }}
                                label={'Gender'}
                                onChange={() => { }}
                                placeholder={'Female'} />
                        </View> */}
                        <View style={styles.insideFormView}>
                            <View style={{ justifyContent: "center", width: "100%", borderBottomWidth: 0.5, borderBottomColor: "#8DAAB9" }}>
                                <View style={styles.subjectLabelView}>
                                    <Text style={styles.subjectLabelStyle}>Gender</Text>
                                </View>
                                <Picker

                                    mode="dropdown"
                                    style={styles.picker}
                                    itemStyle={{}}
                                    selectedValue={this.props.state.gender}
                                    onValueChange={(itemValue, itemIndex) => this.props.setState({ profileData: { ...this.props.state, gender: itemValue } })}>
                                    <Picker.Item color={"#8DAAB9"}
                                        label="Female" value="female" />
                                    <Picker.Item
                                        color={"#8DAAB9"}
                                        label="Male" value="male" />
                                </Picker>
                            </View>
                        </View>
                        {this.props.state.gender === "female" &&
                            <View style={styles.insideFormView}>
                                {/* <Input
                                itemStyle={{width: width * 0.95}}
                                label={'Status'}
                                onChange={() => {}}
                                placeholder={"I'm Pregnent"}/> */
                                }
                                <View style={{ justifyContent: "center", width: "100%", borderBottomWidth: 0.5, borderBottomColor: "#8DAAB9" }}>
                                    <View style={styles.subjectLabelView}>
                                        <Text style={styles.subjectLabelStyle}>Status</Text>
                                    </View>
                                    <Picker
                                        mode="dropdown"
                                        style={styles.picker}
                                        itemStyle={{}}
                                        selectedValue={this.props.state.status}
                                        onValueChange={(itemValue, itemIndex) => this.props.setState({ profileData: { ...this.props.state, status: itemValue } })}>
                                        <Picker.Item color={"#8DAAB9"}
                                            label="None" value="none" />
                                        <Picker.Item
                                            color={"#8DAAB9"}
                                            label="I'm pregnant" value="pragnant" />
                                        <Picker.Item color={"#8DAAB9"}
                                            label="I'm breastfeeding" value="breastfeeding" />
                                        <Picker.Item color={"#8DAAB9"}
                                            label=" I'm Pregnant and breastfeeding" value="both" />
                                    </Picker>
                                </View>
                            </View>}

                            <View style={styles.insideFormView}>
                            <Input
                                inputRef={ref => this.inputs['email'] = ref}
                                onSubmitEditing={() => this.focusNextField('pass', 'jump')}
                                returnKeyType="next"
                                itemStyle={{ width: width * 0.95 }}
                                label={'Email'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, email: e.nativeEvent.text } })}
                                placeholder={'name@gmail.com'}
                                keyboardType={'email-address'}
                            />
                        </View>


                            <View style={styles.insideFormView}>
                            <Input
                                inputRef={ref => this.inputs['pass'] = ref}
                                // onSubmitEditing={() => this.focusNextField('weight', 'jump')}
                                // returnKeyType="next"
                                itemStyle={{ width: width * 0.95 }}
                                label={'Change my Password'}
                                onChange={(e) => this.props.setState({ profileData: { ...this.props.state, password: e.nativeEvent.text } })}
                                placeholder={'**********'}
                            />
                        </View>
                     
                     <View  style={styles.buttonViewContainer}>
                     <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={{color:"#fff",fontFamily: Fonts.book}}>Delete my Account</Text>
                     </TouchableOpacity>
                     </View>
                 

                        {/* <View style={styles.insideFormView}>
                            <Input
                                itemStyle={{width: width * 0.95}}
                                label={'Email'}
                                onChange={() => {}}
                                placeholder={'name@gmail.com'}
                                keyboardType={'email-address'}
                                />
                        </View> */}
                    </View>
                </ScrollView>
            </View >
        );
    }
}

export default ProfileSetting;
const styles = ({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        backgroundColor: '#fff',
        flex: 1
    },
    buttonViewContainer:{
      padding:10,
      width: width * 0.55,
      marginTop:10,
    },
    buttonContainer: {
        backgroundColor: '#6162ff',
        padding:10,
        borderRadius:1,
        // height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideFormView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.96,
        alignSelf: 'center',
        paddingTop: '2%'
    },
    inputStyle: {
        width: width * 0.43
    },
    itemStyleView: {
        width: width * 0.3
    },

    subjectLabelView: {
        height: height * 0.05,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end'
    },
    subjectLabelStyle: {
        color: 'black',
        paddingTop: (height / 100 * 6.1) / 3,
        fontFamily: Fonts.book,
    },
})