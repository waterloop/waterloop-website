import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var BubbleChart = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7.2,
    cy: 14.4,
    r: 3.2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14.8,
    cy: 18,
    r: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15.2,
    cy: 8.8,
    r: 4.8
  }));
});
BubbleChart.displayName = 'BubbleChart';
export var BubbleChartDimensions = {
  height: 24,
  width: 24
};