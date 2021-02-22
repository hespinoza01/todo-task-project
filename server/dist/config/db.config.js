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

exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _sequelize = require("sequelize");

var _vars = _interopRequireDefault(require("./vars.config"));

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Extract db conf
var dbConfig = _vars["default"].DB;
/**
 * Make a sequelize instance
 * @param {String} username - database user
 * @param {String} password - database password
 * @param {String} database - database name
 * @param {String} host - database server host
 * @param {String} dialect - database type
 */

var db = new _sequelize.Sequelize(dbConfig.NAME, dbConfig.USERNAME, dbConfig.PASSWORD, {
  host: dbConfig.INSTANCE_CONNECTION_NAME ? "/cloudsql/".concat(dbConfig.INSTANCE_CONNECTION_NAME) : dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  dialectOptions: _objectSpread({}, dbConfig.INSTANCE_CONNECTION_NAME ? {
    socketPath: "/cloudsql/".concat(dbConfig.INSTANCE_CONNECTION_NAME)
  } : {}),
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var _default = db;
exports["default"] = _default;
//# sourceMappingURL=db.config.js.map