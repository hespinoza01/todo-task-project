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

exports.createTaskController = createTaskController;
exports.getTaskFromProjectController = getTaskFromProjectController;
exports.updateTaskController = updateTaskController;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _services = require("../../services");

var _validators = require("../../validators");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * POST: {{SERVER_ADDRESS}}/project/:projectId/task
 * params: TaskValidationSchema
 * Create a new task
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function createTaskController(_x, _x2) {
  return _createTaskController.apply(this, arguments);
}
/**
 * GET: {{SERVER_ADDRESS}}/project/:projectId/task
 * Get all task from project
 * @param {Express.Request} req
 * @param {Express.Response} res
 */


function _createTaskController() {
  _createTaskController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var projectId, data, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // extract project id
            projectId = req.params.projectId;
            console.log(req.params); // validate input data

            _context.next = 5;
            return (0, _validators.TaskValidation)(req.body);

          case 5:
            data = _context.sent;
            _context.next = 8;
            return _services.TaskService.createTask(projectId, data);

          case 8:
            response = _context.sent;
            res.send(response);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.send({
              error: true,
              message: _context.t0
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _createTaskController.apply(this, arguments);
}

function getTaskFromProjectController(_x3, _x4) {
  return _getTaskFromProjectController.apply(this, arguments);
}
/**
 * PUT: {{SERVER_ADDRESS}}/project/:project/task/:taskId
 * update a current task
 * @param {Express.Request} req
 * @param {Express.Response} res
 */


function _getTaskFromProjectController() {
  _getTaskFromProjectController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var projectId, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // extract project id
            projectId = req.params.projectId;
            _context2.next = 4;
            return _services.TaskService.getTaskFromProject(projectId);

          case 4:
            response = _context2.sent;
            res.send(response);
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.send({
              error: true,
              message: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getTaskFromProjectController.apply(this, arguments);
}

function updateTaskController(_x5, _x6) {
  return _updateTaskController.apply(this, arguments);
}

function _updateTaskController() {
  _updateTaskController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$params, ProjectId, taskId, data, response;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // extract project and task id
            _req$params = req.params, ProjectId = _req$params.projectId, taskId = _req$params.taskId; // validate input data

            _context3.next = 4;
            return (0, _validators.TaskValidation)(req.body);

          case 4:
            data = _context3.sent;
            _context3.next = 7;
            return _services.TaskService.updateTask(taskId, _objectSpread(_objectSpread({}, data), {}, {
              ProjectId: ProjectId
            }));

          case 7:
            response = _context3.sent;
            res.send(response);
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.send({
              error: true,
              message: _context3.t0
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return _updateTaskController.apply(this, arguments);
}
//# sourceMappingURL=task.controller.js.map