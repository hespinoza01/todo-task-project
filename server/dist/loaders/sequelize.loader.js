"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _models = require("../models");

// import models for sync
// Initial data for TaskStateModel
var taskStates = [{
  id: 1,
  description: 'Pendiente'
}, {
  id: 2,
  description: 'En proceso'
}, {
  id: 3,
  description: 'Finalizado'
}];
/**
 * sync sequelize models with database
 * @param {Sequelize} sequelizeInstance
 */

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(sequelizeInstance) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!sequelizeInstance || !sequelizeInstance.sync)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            // Configuring model relationships
            _models.ProjectModel.belongsTo(_models.UserModel);

            _models.UserModel.hasMany(_models.ProjectModel);

            _models.TaskModel.belongsTo(_models.TaskStateModel);

            _models.TaskModel.belongsTo(_models.ProjectModel);

            _models.ProjectModel.hasMany(_models.TaskModel); // models sync


            _context.next = 9;
            return sequelizeInstance.sync({
              alter: false
            });

          case 9:
            _context.next = 11;
            return _models.TaskStateModel.count();

          case 11:
            _context.t0 = _context.sent;

            if (!(_context.t0 === 0)) {
              _context.next = 15;
              break;
            }

            _context.next = 15;
            return _models.TaskStateModel.bulkCreate(taskStates, {
              validate: true
            });

          case 15:
            return _context.abrupt("return", sequelizeInstance);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
//# sourceMappingURL=sequelize.loader.js.map