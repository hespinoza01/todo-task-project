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

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _models = require("../models");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  createUser: createUser,
  updateUser: updateUser,
  getUser: getUser,
  login: login
};
/**
 * Create a new user register
 * @param {Object} userData
 */

exports["default"] = _default;

function createUser(userData) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var _user, _password, newUser, result;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if ((0, _utils.isObject)(userData)) {
                _context.next = 3;
                break;
              }

              throw String('UserService.createUser: Invalid input data');

            case 3:
              _context.next = 5;
              return _models.UserModel.findByEmail(userData.email);

            case 5:
              _user = _context.sent;

              if (!_user) {
                _context.next = 9;
                break;
              }

              reject('El correo ingresado ya está en uso');
              return _context.abrupt("return");

            case 9:
              // create encode password
              _password = (0, _utils.EncodePassword)(userData.password); // persist user register into db

              _context.next = 12;
              return _models.UserModel.create(_objectSpread(_objectSpread({}, userData), {}, {
                password: _password
              }));

            case 12:
              newUser = _context.sent;
              // get raw data from prev consult and remove sensible data from user
              result = (0, _utils.ommitKey)(newUser.get({
                plain: true
              }), 'password');
              resolve(result);
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              reject('Error al crear usuario');

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
/**
 * Update a existent user register
 * @param {Number} userId - ID from user
 * @param {Object} userData
 */


function updateUser(userId, userData) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
      var _user, _password, updatedUser, result;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(!userId || !(0, _utils.isObject)(userData))) {
                _context2.next = 3;
                break;
              }

              throw String('UserService.updateUser: Invalid input data');

            case 3:
              // Remove id key from userData if exist
              delete userData.id; // get user register by id

              _context2.next = 6;
              return _models.UserModel.findByPk(userId);

            case 6:
              _user = _context2.sent;

              if (_user) {
                _context2.next = 10;
                break;
              }

              reject('No se encontró el usuario');
              return _context2.abrupt("return");

            case 10:
              // create encode password
              _password = (0, _utils.EncodePassword)(userData.password); // persist user register into db

              _context2.next = 13;
              return _user.update(_objectSpread(_objectSpread({}, userData), {}, {
                password: _password
              }));

            case 13:
              updatedUser = _context2.sent;
              // get raw data from prev consult and remove sensible data from user
              result = (0, _utils.ommitKey)(updatedUser.get({
                plain: true
              }), 'password');
              resolve(result);
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              reject('Error al actualizar usuario');

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 18]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}
/**
 * Get user info from id
 * @param {Number} userId
 */


function getUser(userId) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
      var user;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (userId) {
                _context3.next = 3;
                break;
              }

              throw String('UserService.getUser: Invalid input data');

            case 3:
              _context3.next = 5;
              return _models.UserModel.findByPk(userId);

            case 5:
              user = _context3.sent;

              if (user) {
                _context3.next = 9;
                break;
              }

              reject('El usuario no existe');
              return _context3.abrupt("return");

            case 9:
              resolve((0, _utils.ommitKey)(user.get({
                plain: true
              }), 'password'));
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);
              reject('Error al obtener los datos del usuario');

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
}
/**
 * check user credentials
 * @param {String} email
 * @param {String} password
 */


function login(email, password) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
      var user, token;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              if (!(!email || !password)) {
                _context4.next = 3;
                break;
              }

              throw String('UserService.login: Invalid input data');

            case 3:
              _context4.next = 5;
              return _models.UserModel.findByEmail(email);

            case 5:
              user = _context4.sent;

              if (user) {
                _context4.next = 8;
                break;
              }

              throw String('Usuario no existe');

            case 8:
              delete user.password;
              _context4.next = 11;
              return (0, _utils.CreateToken)(user);

            case 11:
              token = _context4.sent;
              resolve(_objectSpread(_objectSpread({}, user), {}, {
                token: token
              }));
              _context4.next = 19;
              break;

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              reject('Credenciales incorrectas');

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 15]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=user.service.js.map