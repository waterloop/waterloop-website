import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var ScatterPlot = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    cx: 7,
    cy: 14,
    r: 3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 11,
    cy: 6,
    r: 3
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16.6,
    cy: 17.6,
    r: 3
  }));
});
ScatterPlot.displayName = 'ScatterPlot';
export var ScatterPlotDimensions = {
  height: 24,
  width: 24
};