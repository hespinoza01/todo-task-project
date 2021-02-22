"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = EncodePassword;

var _cryptoJs = require("crypto-js");

var _config = require("../config");

/**
 * Create a encode hash for password
 * @param {String} password - password to encode
 * @return {String}
 */
function EncodePassword(password) {
  var encoded = (0, _cryptoJs.SHA256)(password, _config.vars.PASSWORD_SECRET).toString();
  return encoded;
}
//# sourceMappingURL=encode-password.util.js.map