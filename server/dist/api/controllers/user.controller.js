"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createUserController = createUserController;
exports.updateUserController = updateUserController;
exports.getUserController = getUserController;
exports.loginUserController = loginUserController;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _services = require("../../services");

var _validators = require("../../validators");

/**
 * POST: {{SERVER_ADDRESS}}/user
 * params: UserValidationSchema
 * Create a user acount
 */
function createUserController(_x, _x2) {
  return _createUserController.apply(this, arguments);
}
/**
 * PUT: {{SERVER_ADDRESS}}/user
 * params: UserValidationSchema
 * Update a current user account
 */


function _createUserController() {
  _createUserController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var data, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _validators.UserValidation)(req.body);

          case 3:
            data = _context.sent;
            _context.next = 6;
            return _services.UserService.createUser(data);

          case 6:
            response = _context.sent;
            res.send(response);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.send({
              error: true,
              message: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _createUserController.apply(this, arguments);
}

function updateUserController(_x3, _x4) {
  return _updateUserController.apply(this, arguments);
}
/**
 * GET: {{SERVER_ADDRESS}}/user
 * Get info from current user
 */


function _updateUserController() {
  _updateUserController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, data, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // extract user id
            id = req.user.id; // validate user fields

            _context2.next = 4;
            return (0, _validators.UserValidation)(req.body);

          case 4:
            data = _context2.sent;
            _context2.next = 7;
            return _services.UserService.updateUser(id, data);

          case 7:
            response = _context2.sent;
            res.send(response);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            res.send({
              error: true,
              message: _context2.t0
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return _updateUserController.apply(this, arguments);
}

function getUserController(_x5, _x6) {
  return _getUserController.apply(this, arguments);
}
/**
 * POST: {{SERVER_ADDRESS}}/user/acceso
 * params: LoginUserValidationSchema
 * Check user credentials to application access
 */


function _getUserController() {
  _getUserController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // Extract user id storage for auth middleware
            id = req.user.id; // invoke user service

            _context3.next = 4;
            return _services.UserService.getUser(id);

          case 4:
            response = _context3.sent;
            res.send(response);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.send({
              error: true,
              message: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getUserController.apply(this, arguments);
}

function loginUserController(_x7, _x8) {
  return _loginUserController.apply(this, arguments);
}

function _loginUserController() {
  _loginUserController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _yield$LoginUserValid, email, password, response;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _validators.LoginUserValidation)(req.body);

          case 3:
            _yield$LoginUserValid = _context4.sent;
            email = _yield$LoginUserValid.email;
            password = _yield$LoginUserValid.password;
            _context4.next = 8;
            return _services.UserService.login(email, password);

          case 8:
            response = _context4.sent;
            res.send(response);
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.send({
              error: true,
              message: _context4.t0
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return _loginUserController.apply(this, arguments);
}
//# sourceMappingURL=user.controller.js.map