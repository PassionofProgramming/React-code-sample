// import React from 'react';
// import PropTypes from 'prop-types';
// import { View, ViewPropTypes, Platform, ART } from 'react-native';
// const { Surface, Shape, Path, Group } = ART;
// import MetricsPath from 'art/metrics/path';

// export default class CircularProgress extends React.Component {

//   circlePath(cx, cy, r, startDegree, endDegree) {
//     let p = Path();
//     p.path.push(0, cx + r, cy);
//     p.path.push(4, cx, cy, r, startDegree * Math.PI / 180, endDegree * Math.PI / 180, 1);
//     return p;
//   }

//   extractFill(fill) {
//     return Math.min(100, Math.max(0, fill));
//   }

//   render() {
//     const {
//       size,
//       width,
//       backgroundWidth,
//       tintColor,
//       backgroundColor,
//       style,
//       rotation,
//       linecap,
//       children
//     } = this.props;

//     const fill = this.extractFill(this.props.fill);
//     const backgroundPath = this.circlePath(size / 2, size / 2, size / 2 - width / 2, 0, 360 * .9999);
//     const circlePath = this.circlePath(size / 2, size / 2, size / 2 - width / 2, 0, (360 * .9999) * fill / 100);
//     const offset = size - (width * 2);

//     const childContainerStyle = {
//       position: 'absolute',
//       left: width,
//       top: width,
//       width: offset,
//       height: offset,
//       borderRadius: offset / 2,
//       alignItems: 'center',
//       justifyContent: 'center',
//     }

//     return (
//       <View style={style}>
//         <Surface
//           width={size}
//           height={size}
//         >
//           <Group rotation={rotation - 90} originX={size/2} originY={size/2}>
//             { backgroundColor !== 'transparent' && (
//               <Shape
//                 d={backgroundPath}
//                 stroke={backgroundColor}
//                 strokeWidth={backgroundWidth != null ? backgroundWidth : width}
//               />
//             )}
//             <Shape
//               d={circlePath}
//               stroke={tintColor}
//               strokeWidth={width}
//               strokeCap={linecap}
//             />
//           </Group>
//         </Surface>
//         {children && (
//           <View style={childContainerStyle}>
//             {children(fill)}
//           </View>
//         )}
//       </View>
//     )
//   }
// }

// CircularProgress.propTypes = {
//   style: ViewPropTypes.style,
//   size: PropTypes.number.isRequired,
//   fill: PropTypes.number.isRequired,
//   width: PropTypes.number.isRequired,
//   backgroundWidth: PropTypes.number,
//   tintColor: PropTypes.string,
//   backgroundColor: PropTypes.string,
//   rotation: PropTypes.number,
//   linecap: PropTypes.string,
//   children: PropTypes.func
// }

// CircularProgress.defaultProps = {
//   tintColor: 'black',
//   backgroundColor: '#e4e4e4',
//   rotation: 20,
//   linecap: ''
// }




import React, { //PropTypes, 
  Component
} from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';
import Svg, { Defs, Stop, G, Path, LinearGradient } from 'react-native-svg';
import { arc } from 'd3-shape';
import range from 'lodash/range';

function calculateStopColor(i, beginColor, endColor) {
  return [
    Math.round(beginColor[0] + (endColor[0] - beginColor[0]) * i / noOfSeg),
    Math.round(beginColor[1] + (endColor[1] - beginColor[1]) * i / noOfSeg),
    Math.round(beginColor[2] + (endColor[2] - beginColor[2]) * i / noOfSeg)
  ];
}

//// colors from sketch /////
// const beginColor =
// [232, 53, 255];
// const endColor =
// [97, 98, 255];

const beginColor =
  [255, 84, 243];
const endColor =
  [101, 43, 226];
const noOfSeg = 1;
const LINEAR_GRADIENT_PREFIX_ID = 'gradientRing';
const r1 = 49;
const r2 = 59;

export default class CircularProgress extends Component {

  renderLinearGradients() {
    let color1 = this.props.color1
    let color2 = this.props.color2

    let startColor = color1;//beginColor;
    let stopColor = calculateStopColor(1, color1, color2);
    let startAngle = 0.5;
    let stopAngle = (2.5 * Math.PI) / noOfSeg + 2.7;

    return range(1, noOfSeg + 3).map(i => {
      const linearGradient = (
        <LinearGradient
          id={LINEAR_GRADIENT_PREFIX_ID + i}
          key={LINEAR_GRADIENT_PREFIX_ID + i}
          x1={r1 * Math.sin(startAngle)}
          y1={-r1 * Math.cos(startAngle)}
          x2={r1 * Math.sin(stopAngle)}
          y2={-r1 * Math.cos(stopAngle)}
        >
          <Stop offset="0" stopColor={
            // '#6162FF'
            "rgb(" + startColor.join(',') + ")"
          } />
          <Stop offset="1" stopColor={
            // '#E835FF'
            "rgb(" + stopColor.join(',') + ")"
          } />
        </LinearGradient>
      );
      startColor = stopColor;
      stopColor = calculateStopColor(i, color1, color2);
      startAngle = stopAngle;
      stopAngle += (2 * Math.PI) / noOfSeg + 3;

      return linearGradient;
    });
  }

  extractFill() {
    return Math.min(100, Math.max(0, this.props.fill / this.props.totalFill * 100));
  }

  extractFillView() {
    if (this.props.showRemainingValue) {
      return Math.min(this.props.totalFill, Math.max(0
        , this.props.totalFill - this.props.fill
      ));
    }
    else {
      return Math.min(this.props.totalFill, Math.max(0, this.props.fill
      ));
    }
  }

  renderBackgroundPath() {
    let circularSize = 0;
    circularSize = this.props.circularSize === "large" ? 10 : this.props.circularSize === "extraLarge" ? 20 : 0;

    const { size, width, backgroundColor } = this.props;
    const backgroundPath = arc()
      .innerRadius(r1 + 2.5 + circularSize)
      .outerRadius(r2 - 2.5 + circularSize)
      .startAngle(0)
      .endAngle(2 * Math.PI)

    return (
      <Path
        x={size / 2}
        y={size / 3}
        d={backgroundPath()}
        fill={backgroundColor}
      />
    );
  }

  renderCirclePaths() {
    const fill = this.extractFill();

    let circularSize = 0;
    // circularSize = this.props.circularSize === "large" ? 10 : 0;
    circularSize = this.props.circularSize === "large" ? 10 : this.props.circularSize === "extraLarge" ? 20 : 0;

    let numberOfPathsToDraw = Math.floor(
      ((2 * Math.PI) * (fill / 100)) / ((2 * Math.PI) / noOfSeg)
    );
    let rem = (((2 * Math.PI) * (fill / 100)) / ((2 * Math.PI) / noOfSeg)) % 1;
    if (rem > 0) {
      numberOfPathsToDraw++;
    }
    let startAngle = 0;
    let stopAngle = - (2 * Math.PI) / noOfSeg;

    return range(1, numberOfPathsToDraw + 1).map(i => {
      if (i === numberOfPathsToDraw && rem) {
        stopAngle = -2 * Math.PI * (fill / 102);
      }
      const circlePath = arc()
        .innerRadius(r1 + circularSize)
        .outerRadius(r2 + circularSize)
        .padRadius(20)
        // .padAngle(20)
        .cornerRadius(20)
        .startAngle(-startAngle)
        .endAngle(-stopAngle + 0.15);

      const path = (
        <Path
          x={this.props.size / 2}
          y={this.props.size / 3}
          key={fill + i}
          d={circlePath()}
          fill={'url(#' + LINEAR_GRADIENT_PREFIX_ID + (noOfSeg - i + 1) + ')'}
        />
      );
      startAngle = stopAngle;
      stopAngle -= ((2 * Math.PI) / noOfSeg);

      return path;
    });
  }

  render() {
    const { size, rotation, style, children } = this.props;
    const fill = this.extractFillView();

    return (
      <View style={style}>
        <Svg
          width={size}
          height={size}
        >
          <Defs>
            {this.renderLinearGradients()}
          </Defs>
          <G rotate={rotation - 90}>
            {this.renderBackgroundPath()}
            {this.renderCirclePaths()}
          </G>
        </Svg>
        <View style={{
          // backgroundColor: "red",
          borderRadius: 74,
          height: 148,
          width: 148,
          position: "absolute",
          zIndex: 10,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginVertical: 25,
        }}>{children && children(fill)}</View>
      </View>
    );
  }
}

CircularProgress.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.func,
  fill: PropTypes.number.isRequired,
  rotation: PropTypes.number,
  size: PropTypes.number.isRequired,
  // style: View.propTypes.style,
  tintColor: PropTypes.string,
  width: PropTypes.number.isRequired,
  linecap: PropTypes.string
};

CircularProgress.defaultProps = {
  tintColor: 'black',
  backgroundColor: '#e4e4e4',
  rotation: 20,
  linecap: 'round'
};