"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MyComponent = function MyComponent() {
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "Hello from my React Native package!"));
};
var _default = exports["default"] = MyComponent;