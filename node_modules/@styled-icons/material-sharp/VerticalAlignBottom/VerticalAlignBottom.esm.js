import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var VerticalAlignBottom = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"
  }));
});
VerticalAlignBottom.displayName = 'VerticalAlignBottom';
export var VerticalAlignBottomDimensions = {
  height: 24,
  width: 24
};