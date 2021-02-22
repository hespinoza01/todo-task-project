"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CreateToken = CreateToken;
exports.DecodeToken = DecodeToken;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _jsonwebtoken = require("jsonwebtoken");

var _config = require("../config");

/**
 * Create a new auth token
 * @param {Object} payload
 * @return {String}
 */
function CreateToken(payload) {
  return new _promise["default"](function (resolve, reject) {
    (0, _jsonwebtoken.sign)(payload, _config.vars.JWT_SECRET, function (err, token) {
      // check for errors
      if (err) {
        reject(err.message);
      }

      resolve(token);
    });
  });
}
/**
 * Decode a auth token
 * @param {String} token
 * @return {Object}
 */


function DecodeToken(token) {
  return new _promise["default"](function (resolve, reject) {
    try {
      // if not token, raise error
      if (!token) {
        reject('Token es requerido');
      }

      (0, _jsonwebtoken.verify)(token, _config.vars.JWT_SECRET, function (err, decoded) {
        // if error on verify, raise message
        if (err) {
          throw err;
        }

        resolve(decoded);
      });
    } catch (error) {
      console.log("DecodeToken: ".concat(error));
      reject('Error al decodificar el token');
    }
  });
}
//# sourceMappingURL=auth-token.util.js.map