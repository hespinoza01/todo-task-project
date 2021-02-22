"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("./express.loader"));

var _sequelize = _interopRequireDefault(require("./sequelize.loader"));

var _default = {
  init: function init(_ref) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _ref$expressApp, expressApp, _ref$expressRoutes, expressRoutes, _ref$sequelizeInstanc, sequelizeInstance;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$expressApp = _ref.expressApp, expressApp = _ref$expressApp === void 0 ? null : _ref$expressApp, _ref$expressRoutes = _ref.expressRoutes, expressRoutes = _ref$expressRoutes === void 0 ? null : _ref$expressRoutes, _ref$sequelizeInstanc = _ref.sequelizeInstance, sequelizeInstance = _ref$sequelizeInstanc === void 0 ? null : _ref$sequelizeInstanc;
              _context.next = 3;
              return (0, _express["default"])(expressApp, expressRoutes);

            case 3:
              _context.next = 5;
              return (0, _sequelize["default"])(sequelizeInstance);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map