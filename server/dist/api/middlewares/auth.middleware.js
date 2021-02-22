"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = AuthMiddleware;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _utils = require("../../utils");

/**
 * Check user credentials before request
 */
function AuthMiddleware(_x, _x2, _x3) {
  return _AuthMiddleware.apply(this, arguments);
}

function _AuthMiddleware() {
  _AuthMiddleware = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // extract token header
            token = req.header('Authorization') || null; // assign user data to req

            _context.next = 4;
            return (0, _utils.DecodeToken)(token);

          case 4:
            req.user = _context.sent;
            next();
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(401).json({
              error: true,
              message: 'Tu sesión ha caducado'
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _AuthMiddleware.apply(this, arguments);
}
//# sourceMappingURL=auth.middleware.js.map