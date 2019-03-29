import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthActions } from "../../store/actions/index";
import {
    View, Text,TouchableOpacity, StyleSheet, Dimensions, Image, Picker,
    Animated, findNodeHandle
} from 'react-native'
import * as NB from 'native-base';
import Stepper from '../common/Stepper';
import Button from "../common/FormButton"
import Input from '../common/FormInput'
import { Icons, Fonts } from '../../config/index';

const { height, width } = Dimensions.get('window');
class StepOne extends Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super(); {
            this.state = {
                // email: '',
                gender: false,
                femaleStatus: 0,
                date: "",
                month: "",
                foot:true,
                Cm:false,
                kg:false,
                lb:true,
                 kg1:false,
                lb1:true,
                year: "",
                ft: "",
                in: "",
                weight: "",
                desireWeight: "",
                dateStyle: { width: (width / 100 * 84.8) / 3.3 },
                monthStyle: { width: (width / 100 * 84.8) / 3.3, },
                yearStyle: { width: (width / 100 * 84.8) / 3.3, },
                ftStyle: { width: (width / 100 * 84.8) /3, },
                ftStyle1: { width: (width / 100 * 75)},
                inStyle: { width: (width / 100 * 84.8) / 3, },
                weightStyle: { width: (width / 100 * 84.8) / 3, },
                desireWeightStyle: { width: (width / 100 * 84.8) / 3 },
                slide: new Animated.Value(100)
            };
            this.inputs = {};
        }
    }
    componentDidMount() {
        Animated.spring(
            this.state.slide,
            {
                toValue: 0,
            }
        ).start();
    }
    inputFocused(refName) {
        // setTimeout(() => {
        //     let scrollResponder = this.refs.scrollView.getScrollResponder();
        //     scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        //         findNodeHandle(this.refs[refName]),
        //         110, //additionalOffset
        //         true
        //     );
        // }, 50);
    }
    focusNextField(id, count) {
        setTimeout(() => {
            if (count === 2) {
                if (id !== "ft") {
                    if (this.inputs[id]) {
                        this.inputs[id]._root.focus();
                        this.props.scroll(height * 0.14)
                    }
                    // console.warn(height)
                }
            }
            else if (count === 4) {
                if (this.inputs[id]) {
                    this.inputs[id]._root.focus();
                    this.props.scroll(height * 0.25)
                }
            }
            else if (count === "jump") {
                if (this.inputs[id]) {
                    this.inputs[id]._root.focus();
                }
            }
        }, 20)

        // console.log(this.inputs)
        // console.warn(count)
    }
    next() {
        let stepOne = {
            gender: this.state.gender ? "male" : "female",
            status: this.state.gender ? null : this.state.femaleStatus,
            dob: this.state.date + "-" + this.state.month + "-" + this.state.year,
            height: this.state.ft.toString() + "." + this.state.in.toString(),
            weight: this.state.weight,
            desireWeight: this.state.desireWeight,
        }
        if (!this.state.date) {
            this.setState({ dateStyle: { ...this.state.dateStyle, borderColor: "red" } })
            NB.Toast.show({
                text: ' Enter Date of Birth ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.month) {
            this.setState({ monthStyle: { ...this.state.monthStyle, borderColor: "red" } })
            NB.Toast.show({
                text: ' Enter Month of your Birth ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.year) {
            this.setState({ yearStyle: { ...this.state.yearStyle, borderColor: "red" } })
            NB.Toast.show({
                text: ' Enter Year of your Birth ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.ft) {
            this.setState({ ftStyle: { ...this.state.ftStyle, borderColor: "red" } })
            NB.Toast.show({
                text: ' Enter your Height  ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.in) {
            this.setState({ inStyle: { ...this.state.inStyle, borderColor: "red" } })
            NB.Toast.show({
                text: '  Enter your Height  ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.weight) {
            this.setState({ weightStyle: { ...this.state.weightStyle, borderColor: "red" } })
            NB.Toast.show({
                text: '  Enter your Weight  ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else if (!this.state.desireWeight) {
            this.setState({ desireWeight: { ...this.state.desireWeight, borderColor: "red" } })
            NB.Toast.show({
                text: '  Enter your Desire Weight  ',
                position: 'bottom',
                type: 'success',
                textStyle: styles.toastText,
                style: styles.toastStyle
            })
        }
        else {
            this.props.setState({ stepOne })
            this.props.nextState()
            // console.warn(stepOne);
        }

    }
    feet=()=>{

     this.setState({Cm:true, foot:false})
    }
    centrimeter=()=>{
        this.setState({Cm:false, foot:true})

    }
    Kg=()=>{

     this.setState({lb:true, kg:false})
    }
    Lb=()=>{
        this.setState({lb:false, kg:true})

    }
     Kg1=()=>{

     this.setState({lb1:true, kg1:false})
    }
    Lb1=()=>{
        this.setState({lb1:false, kg1:true})

    }

    render() {
        const { container, content, btnStyle, btnText, btnViewStyle, button, btnCheck, activeButton, textView, numberStyle, buttonImage, formView, inputStyle, inputStyle2 } = styles;
        return (
            <View style={container} >
                <Animated.View style={{
                    flex: 1, transform: [
                        {
                            translateX: this.state.slide
                        }
                    ]
                }} >
                    <View style={content}>

                        <View style={formView}>
                            <View style={btnCheck}>
                                <NB.Button
                                    style={[button, this.state.gender && activeButton
                                    ]}
                                    onPress={() => this.setState({ gender: true })}
                                >
                                    <Image
                                        source={this.state.gender ? Icons.maleActive : Icons.maleDisable} style={buttonImage}
                                    />
                                    <Text style={[btnText, this.state.gender && { color: 'white' }]}> Male </Text>
                                </NB.Button>
                                <NB.Button
                                    style={[button, !this.state.gender && activeButton
                                    ]}
                                    onPress={() => this.setState({ gender: false })} >
                                    <Image
                                        source={this.state.gender ? Icons.femaleDisable : Icons.femaleActive} style={buttonImage}
                                    />
                                    <Text style={[btnText, !this.state.gender && { color: 'white' }]}> Female </Text>
                                </NB.Button>
                            </View>
                            <View>
                                {
                                    this.state.gender ?
                                        <View style={{ height: "20%" }} />
                                        :
                                        <View style={{ justifyContent: "center", width: "100%", borderBottomWidth: 0.5, borderBottomColor: "#8DAAB9" }}>
                                            <View style={styles.subjectLabelView}>
                                                <Text style={styles.subjectLabelStyle}>Status </Text>
                                            </View>
                                            <Picker
                                                mode="dropdown"
                                                style={styles.picker}
                                                itemStyle={{}}
                                                selectedValue={this.state.femaleStatus}
                                                onValueChange={(itemValue, itemIndex) => {
                                                    this.setState({ femaleStatus: itemValue }
                                                        ,
                                                        () => {
                                                            this.focusNextField('date', "jump");
                                                            setTimeout(() => this.props.scroll(height * 0.14), 300)
                                                        });
                                                }}>
                                                <Picker.Item color={"#8DAAB9"}
                                                    label="None" value={0} />
                                                <Picker.Item
                                                    color={"#8DAAB9"}
                                                    label="I'm pregnant" value={1} />
                                                <Picker.Item color={"#8DAAB9"}
                                                    label="I'm breastfeeding" value={2} />
                                                <Picker.Item color={"#8DAAB9"}
                                                    label=" I'm Pregnant and breastfeeding" value={3} />
                                            </Picker>
                                        </View>
                                    // <Input
                                    //     itemStyle={{
                                    //         width: width / 100 * 84.81, marginVertical: height / 100 * 1,
                                    //     }}
                                    //     label={'Status'}
                                    //     onChange={() => { }}
                                    //     placeholder={"I'm pregnant"}
                                    // />
                                }

                                <View style={textView}>
                                    <Input
                                        inputRef={ref => this.inputs['date'] = ref}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => {
                                            this.focusNextField('month', "jump");
                                            this.props.scroll(height * 0.14)
                                        }}
                                        returnKeyType="next"
                                        itemStyle={this.state.dateStyle}
                                        label={'Date of Birth'}
                                        // onChangeText={(value) => { this.setState({ date: value }) }}
                                        placeholder={'00'}
                                        text={'dd'}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={2}
                                        onChange={(e) => {
                                            this.setState({ date: e.nativeEvent.text })
                                            this.focusNextField('month', e.nativeEvent.text.length);
                                        }
                                        }
                                    />

                                    <Input
                                        inputRef={ref => this.inputs['month'] = ref}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => {
                                            this.focusNextField('year', "jump");
                                            this.props.scroll(height * 0.14)
                                        }}
                                        returnKeyType="next"
                                        itemStyle={this.state.monthStyle}
                                        label={'  '}
                                        // onChangeText={(value) => { this.setState({ month: value }) }}
                                        placeholder={'00'}
                                        text={'mm'}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={2}
                                        onChange={(e) => {
                                            this.setState({ month: e.nativeEvent.text });
                                            this.focusNextField('year', e.nativeEvent.text.length);
                                        }
                                        }
                                    />

                                    <Input
                                        blurOnSubmit={false}
                                        // ref="year"
                                        inputRef={ref => this.inputs['year'] = ref}
                                        itemStyle={this.state.yearStyle}
                                        label={'  '}
                                        // onChangeText={(value) => { this.setState({ year: value }) }}
                                        onSubmitEditing={() => {
                                            this.focusNextField('ft', "jump");
                                            this.props.scroll(height * 0.25)
                                        }}
                                        returnKeyType="next"

                                        placeholder={'00'}
                                        text={'yy'}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={2}
                                        onChange={(e) => {
                                            this.setState({ year: e.nativeEvent.text });
                                            this.focusNextField('ft', e.nativeEvent.text.length);
                                        }
                                        }
                                        onFocus={this.inputFocused.bind(this, 'year')}
                                    />

                                </View>

                                                                
                          {this.state.foot ?<View style={textView}>
                                    <Input
                                        blurOnSubmit={false}
                                        inputRef={ref => this.inputs['ft'] = ref}
                                        itemStyle={this.state.ftStyle}
                                        onSubmitEditing={() => {
                                            this.focusNextField('in', "jump"); this.props.scroll(height * 0.25)
                                        }}
                                        returnKeyType="next"
                                        label={'Height'}
                                        // onChangeText={(value) => { this.setState({ ft: value }) }}
                                        placeholder={'00'}
                                        text={''}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={2}
                                        onChange={(e) => {
                                            this.setState({ ft: e.nativeEvent.text })
                                            this.focusNextField('in');
                                        }
                                        }/>
                                    {this.state.foot ?<TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}}  onPress={this.feet.bind(this)}>
                                     <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>FT</Text>
                                     </TouchableOpacity>:
                                     <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}}  onPress={this.centrimeter.bind(this)}>
                                     <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>CM</Text>
                                     </TouchableOpacity>
                                      
                                     }
                                     <Input
                                        blurOnSubmit={false}
                                        inputRef={ref => this.inputs['in'] = ref}
                                        itemStyle={this.state.inStyle}
                                        label={' '}
                                        onSubmitEditing={() => {
                                            this.focusNextField('weight', "jump"); this.props.scroll(height * 0.35)
                                        }}
                                        returnKeyType="next"
                                        // onChangeText={(value) => { this.setState({ in: value }) }}
                                        placeholder={'00'}
                                        // text={'in'}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={2}
                                        onChange={(e) => {
                                            this.setState({ in: e.nativeEvent.text })
                                            this.focusNextField('weight');
                                        }
                                        }/>
                                       {this.state.foot ? <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}}>
                                    <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>IN</Text>
                                     </TouchableOpacity>:
                                     <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}} >
                                     <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>CM</Text>
                                     </TouchableOpacity>
                                      
                                     }
                                  
                                </View>:
                                <View style={textView}>
                                    <Input
                                        blurOnSubmit={false}
                                        inputRef={ref => this.inputs['ft'] = ref}
                                        itemStyle={this.state.ftStyle1}
                                        onSubmitEditing={() => {
                                            this.focusNextField('in', "jump"); this.props.scroll(height * 0.25)
                                        }}
                                        returnKeyType="next"
                                        label={'Height'}
                                        // onChangeText={(value) => { this.setState({ ft: value }) }}
                                        placeholder={'00'}
                                        text={''}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={2}
                                        onChange={(e) => {
                                            this.setState({ ft: e.nativeEvent.text })
                                            this.focusNextField('in');
                                        }
                                        }/>
                                    {this.state.foot ?<TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}}  onPress={this.feet.bind(this)}>
                                     <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>FT</Text>
                                     </TouchableOpacity>:
                                     <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}}  onPress={this.centrimeter.bind(this)}>
                                     <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>CM</Text>
                                     </TouchableOpacity>
                                      
                                     }</View>}

                                <View style={textView}>

                                    <Input
                                        blurOnSubmit={false}
                                        inputRef={ref => this.inputs['weight'] = ref}
                                        itemStyle={this.state.weightStyle}
                                        label={'Weight'}
                                        onSubmitEditing={() => {
                                            this.focusNextField('desireWeight', "jump"); this.props.scroll(height * 0.35)
                                        }}
                                        returnKeyType="next"
                                        // onChangeText={(value) => { this.setState({ weight: value }) }}
                                        placeholder={'00'}
                                        // text={'lb'}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={3}
                                        onChange={(e) => {
                                            this.setState({ weight: e.nativeEvent.text })
                                            this.focusNextField('desireWeight');
                                        }
                                        }/>
                                   {this.state.lb ? <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}} onPress={this.Lb.bind(this)}>
                                    <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>LB</Text>
                                     </TouchableOpacity>:
                                     <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}} onPress={this.Kg.bind(this)}>
                                    <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>KG</Text>
                                     </TouchableOpacity>
                                 }
                                    <Input
                                        inputRef={ref => this.inputs['desireWeight'] = ref}
                                        itemStyle={this.state.desireWeightStyle}
                                        label={'Desire Weight'}
                                        // onSubmitEditing={() => this.next()}
                                        returnKeyType="done"
                                        placeholder={'00'}
                                        // text={'lb'}
                                        textStyle={numberStyle}
                                        keyboardType={'numeric'}
                                        maxLength={3}
                                        onChange={(e) => {
                                            this.setState({ desireWeight: e.nativeEvent.text })
                                            // this.focusNextField('desireWeight');
                                        }
                                        } />
                                          {this.state.lb1 ?  
                                    <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}} onPress={this.Lb1.bind(this)}>
                                      <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>LB</Text>
                                     </TouchableOpacity>: 
                                            <TouchableOpacity style={{borderColor:"#6068fa",justifyContent:"center",borderRadius:30,borderWidth:1,height:25,width:35,marginTop:45}} onPress={this.Kg1.bind(this)}>
                                      <Text style={{fontFamily: Fonts.latoThin,textAlign:'center', color:"#6068fa",}}>KG</Text>
                                     </TouchableOpacity>

                                        }

                                </View>
                            </View>
                        </View>

                        <View style={btnViewStyle}>
                            <Button
                                style={btnStyle}
                                onPress={() => this.next()}
                                text={"Next"}
                            />

                        </View >
                    </View>
                </Animated.View>
            </View >
        )
    }

}

const mapStateToProps = (state) => {
    return { authObj: state.authReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signup: (userObj) => dispatch(AuthActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: height / 100 * 76,
        backgroundColor: '#ffffff',
        width: width,
    },
    content: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: width / 100 * 84.8,
        height: height * 0.76,
    },
    btnStyle: {
        width: width / 100 * 84.8,
        backgroundColor: '#6D6EFF',
        justifyContent: 'center',
        elevation: 0
    },
    btnViewStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: (height / 100 * 76) / 100 * 12,
    },
    button: {
        width: width * 0.35,
        height: height / 15,
        backgroundColor: 'white',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        justifyContent: 'space-around',
        marginHorizontal: width / 100 * 2,
        elevation: 0
    },
    btnText: {
        fontFamily: Fonts.medium,
        fontSize: 18

    },
    activeButton: {
        backgroundColor: '#4D4EEB',
        borderWidth: 0,
    },
    btnCheck: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: (height / 100 * 76) / 100 * 9,
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    numberStyle: {
        color: '#C7D6DE',
        fontFamily: Fonts.book
    },
    buttonImage: {
        width: width * 0.1,
        height: height * 0.05,
        resizeMode: 'contain',
        position: 'relative',
    },
    // inputStyle: {
    //     width: (width / 100 * 84.8) / 3.3,
    // },
    // inputStyle2: {
    //     width: (width / 100 * 84.8) / 2.3,
    // },
    formView: {
        height: (height / 100 * 76) / 100 * 80,
        justifyContent: 'space-around'
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
    picker: {
        width: "100%"//width * 0.99
    },
    toastText: {
        textAlign: 'center',
        fontFamily: Fonts.book
    },
    toastStyle: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: width * 0.95,
        borderRadius: 10,
        alignSelf: 'center',
    }
})