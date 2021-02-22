"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api"));

var _loaders = _interopRequireDefault(require("./loaders"));

var _config = require("./config");

function startServer() {
  return _startServer.apply(this, arguments);
}

function _startServer() {
  _startServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var app;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express["default"])();
            _context.next = 3;
            return _loaders["default"].init({
              expressApp: app,
              expressRoutes: _api["default"],
              sequelizeInstance: _config.db
            });

          case 3:
            app.listen(_config.vars.PORT, function (err) {
              if (err) {
                console.log(err);
                return;
              }

              console.log("Server running at port: ".concat(_config.vars.PORT));
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startServer.apply(this, arguments);
}

startServer();
//# sourceMappingURL=app.js.map