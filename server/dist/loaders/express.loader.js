"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _express = require("express");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

/**
 * Configure a express instance
 * @param {Express} app - Express instance
 * @param {Express.Route} api - Express App Routes
 * @return {Express} app
 */
var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(app, api) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (app) {
              _context.next = 3;
              break;
            }

            console.log('not app');
            return _context.abrupt("return", null);

          case 3:
            app.enable('trust proxy'); // config middlewares

            app.use((0, _helmet["default"])());
            app.use((0, _cors["default"])({
              origin: '*'
            }));
            app.use((0, _morgan["default"])('dev'));
            app.use(_bodyParser["default"].json());
            app.use((0, _express.urlencoded)({
              extended: false
            })); // config routes

            app.get('/', function (_, res) {
              return res.send('running');
            });

            if (api) {
              app.use(api);
            }

            return _context.abrupt("return", app);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;
//# sourceMappingURL=express.loader.js.map