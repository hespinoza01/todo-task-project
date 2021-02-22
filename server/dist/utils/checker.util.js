"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

var _Object$defineProperties = require("@babel/runtime-corejs2/core-js/object/define-properties");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptors");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols");

var _Object$keys = require("@babel/runtime-corejs2/core-js/object/keys");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isObject = isObject;
exports.ommitKey = ommitKey;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Check if values is a js literal object
 * @param {Object} value
 * @return {Boolean}
 */
function isObject(value) {
  if (!value || Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  return true;
}
/**
 * Return a new object with ommiteds keys
 * @param {Object} objectData
 * @param  {String} toOmmit
 * @return {Object}
 */


function ommitKey(objectData) {
  if ((0, _typeof2["default"])(objectData) !== 'object') {
    return objectData;
  } // create a object clon


  var result = _objectSpread({}, objectData);

  for (var _len = arguments.length, toOmmit = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    toOmmit[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _toOmmit = toOmmit; _i < _toOmmit.length; _i++) {
    var key = _toOmmit[_i];
    delete result[key];
  }

  return result;
}
//# sourceMappingURL=checker.util.js.map