// import React, { //PropTypes, 
//     Component
// } from 'react';
// import PropTypes from 'prop-types';
// import { Animated, View } from 'react-native';
// import Svg, { Defs, Stop, G, Path, LinearGradient } from 'react-native-svg';
// import { arc, line } from 'd3-shape';
// import range from 'lodash/range';

// function calculateStopColor(i, beginColor, endColor) {
//     return [
//         Math.round(beginColor[0] + (endColor[0] - beginColor[0]) * i / noOfSeg),
//         Math.round(beginColor[1] + (endColor[1] - beginColor[1]) * i / noOfSeg),
//         Math.round(beginColor[2] + (endColor[2] - beginColor[2]) * i / noOfSeg)
//     ];
// }

// //// colors from sketch /////
// // const beginColor =
// // [232, 53, 255];
// // const endColor =
// // [97, 98, 255];

// const beginColor =
//     [255, 84, 243];
// const endColor =
//     [101, 43, 226];
// const noOfSeg = 2;
// const LINEAR_GRADIENT_PREFIX_ID = 'gradientRing';
// const r1 = 49;
// const r2 = 59;


// export default class LineProgressBar extends Component {

//     static navigationOptions = {
//         header: null
//     }

//     renderLinearGradients() {
//         let color1 = this.props.color1 || beginColor
//         let color2 = this.props.color2 || endColor

//         let startColor = color1;//beginColor;
//         let stopColor = calculateStopColor(1, color1, color2);
//         let startAngle = 0;
//         let stopAngle = (2.5 * Math.PI) / noOfSeg;

//         return range(1, noOfSeg + 1).map(i => {
//             const linearGradient = (
//                 <LinearGradient
//                     id={LINEAR_GRADIENT_PREFIX_ID + i}
//                     key={LINEAR_GRADIENT_PREFIX_ID + i}
//                     x1={r1 * Math.sin(startAngle)}
//                     y1={-r1 * Math.cos(startAngle)}
//                     x2={r1 * Math.sin(stopAngle)}
//                     y2={-r1 * Math.cos(stopAngle)}
//                 >
//                     <Stop offset="0" stopColor={
//                         // '#6162FF'
//                         "rgb(" + startColor.join(',') + ")"
//                     } />
//                     <Stop offset="1" stopColor={
//                         // '#E835FF'
//                         "rgb(" + stopColor.join(',') + ")"
//                     } />
//                 </LinearGradient>
//             );
//             startColor = stopColor;
//             stopColor = calculateStopColor(i + 2, color1, color2);
//             startAngle = stopAngle;
//             stopAngle += (2 * Math.PI) / noOfSeg;

//             return linearGradient;
//         });
//     }

//     extractFill() {
//         return Math.min(100, Math.max(0, (this.props.fill || 70) / (this.props.totalFill || 100) * 100));
//     }

//     extractFillView() {
//         if (this.props.showRemainingValue) {
//             return Math.min(this.props.totalFill, Math.max(0
//                 , (this.props.totalFill || 100) - (this.props.fill || 70)
//             ));
//         }
//         else {
//             return Math.min((this.props.totalFill || 100), Math.max(0, (this.props.fill || 70)
//             ));
//         }
//     }

//     renderBackgroundPath() {
//         let circularSize = 0;
//         circularSize = this.props.circularSize === "large" ? 10 : this.props.circularSize === "extraLarge" ? 20 : 0;

//         const { size, width, backgroundColor } = this.props;
//         const backgroundPath = arc()
//             .innerRadius(r1 + 2.5 + circularSize)
//             .outerRadius(r2 - 2.5 + circularSize)
//             .startAngle(0)
//             .endAngle(2 * Math.PI)

//         return (
//             <Path
//                 x={(size || 100) / 2}
//                 y={(size || 100) / 3}
//                 d={backgroundPath()}
//                 fill={
//                     //backgroundColor
//                     "gray"
//                 }
//             />
//         );
//     }

//     renderCirclePaths() {
//         const fill = this.extractFill();

//         let circularSize = 0;
//         // circularSize = this.props.circularSize === "large" ? 10 : 0;
//         circularSize = this.props.circularSize === "large" ? 10 : this.props.circularSize === "extraLarge" ? 20 : 0;

//         let numberOfPathsToDraw = Math.floor(
//             ((2 * Math.PI) * (fill / 100)) / ((2 * Math.PI) / noOfSeg)
//         );
//         let rem = (((2 * Math.PI) * (fill / 100)) / ((2 * Math.PI) / noOfSeg)) % 1;
//         if (rem > 0) {
//             numberOfPathsToDraw++;
//         }
//         let startAngle = 0;
//         let stopAngle = - (2 * Math.PI) / noOfSeg;

//         return range(1, numberOfPathsToDraw + 1).map(i => {
//             if (i === numberOfPathsToDraw && rem) {
//                 stopAngle = -2 * Math.PI * (fill / 102);
//             }
//             const circlePath = line()
//                 .x(20)
//                 .y(12)

//             // .innerRadius(r1 + circularSize)
//             // .outerRadius(r2 + circularSize)
//             // .padRadius(20)
//             // // .padAngle(20)
//             // .cornerRadius(20)
//             // .startAngle(-startAngle)
//             // .endAngle(-stopAngle + 0.15);

//             const path = (
//                 <Path
//                     x={(this.props.size || 100) / 2}
//                     y={(this.props.size || 100) / 3}
//                     key={fill + i}
//                     d={circlePath()}
//                     fill={'url(#' + LINEAR_GRADIENT_PREFIX_ID + (noOfSeg - i + 1) + ')'}
//                 />
//             );
//             startAngle = stopAngle;
//             stopAngle -= ((2 * Math.PI) / noOfSeg);

//             return path;
//         });
//     }

//     render() {
//         const { size, rotation, style, children } = this.props;
//         const fill = this.extractFillView();

//         return (
//             <View style={style}>
//                 <Svg
//                     width={(size || 100)}
//                     height={(size || 100)}
//                 >
//                     <Defs>
//                         {this.renderLinearGradients()}
//                     </Defs>
//                     <G rotate={(rotation || 180) - 90}>
//                         {this.renderBackgroundPath()}
//                         {this.renderCirclePaths()}
//                     </G>
//                 </Svg>
//                 {/* <View style={{
//                     // backgroundColor: "red",
//                     borderRadius: 74,
//                     height: 148,
//                     width: 148,
//                     position: "absolute",
//                     zIndex: 10,
//                     alignItems: "center",
//                     justifyContent: "center",
//                     alignSelf: "center",
//                     marginVertical: 25,
//                 }}>{children && children(fill)}</View> */}
//             </View>
//         );
//     }
// }

// LineProgressBar.propTypes = {
//     backgroundColor: PropTypes.string,
//     children: PropTypes.func,
//     fill: PropTypes.number.isRequired,
//     rotation: PropTypes.number,
//     size: PropTypes.number.isRequired,
//     // style: View.propTypes.style,
//     tintColor: PropTypes.string,
//     width: PropTypes.number.isRequired,
//     linecap: PropTypes.string
// };

// LineProgressBar.defaultProps = {
//     tintColor: 'black',
//     backgroundColor: '#e4e4e4',
//     rotation: 20,
//     line: 100,
//     linecap: 'round'
// };
import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { TouchableOpacity, Text, View } from 'react-native';

export default class StackedAreaExample extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    month: new Date(2015, 0, 1),
                    apples: 3840,
                    bananas: 1920,
                    cherries: 960,
                    dates: 400,
                },
                {
                    month: new Date(2015, 1, 1),
                    apples: 1600,
                    bananas: 1440,
                    cherries: 960,
                    dates: 400,
                },
                {
                    month: new Date(2015, 2, 1),
                    apples: 640,
                    bananas: 960,
                    cherries: 3640,
                    dates: 400,
                },
                {
                    month: new Date(2015, 3, 1),
                    apples: 3320 + 20,
                    bananas: 480,
                    cherries: 640,
                    dates: 400,
                }
            ],
            source: { 'apples': '#8800cc', 'bananas': '#aa00ff', 'cherries': '#cc66ff', 'dates': '#eeccff' }
        }
    }

    changeFillFillColor = (data, change) => {
        let ap = 0
        data = data.map((val) => {
            let a = {};
            Object.keys(val).map((v, i) => {
                if (v !== 'month') {
                    a[v] = val[v] + change[i]
                }
            })
            // console.log(a, val)
            return a
        })
        console.log(data)
        this.setState({data})
    }




    render() {
        const {data, source} = this.state

        console.log("data", data)

        return (
            <View>
                <StackedAreaChart
                    style={{ height: 300, paddingVertical: 16 }}
                    data={data}
                    keys={Object.keys(source)}
                    colors={Object.values(source)}
                    curve={shape.curveNatural}
                    showGrid={false}
                />
                <TouchableOpacity onPress={() => { this.changeFillFillColor(data, Object.keys(data[0]).map(a => -Math.round(Math.random() * 2000 + 1000))) }}>
                    <Text>ASD--</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.changeFillFillColor(data, Object.keys(data[0]).map(a => Math.round(Math.random() * 2000 + 1000))) }}>
                    <Text>ASD++</Text>
                </TouchableOpacity>
            </View>

        )
    }
}