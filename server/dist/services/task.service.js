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

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _models = require("../models");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  createTask: createTask,
  updateTask: updateTask,
  getTaskFromProject: getTaskFromProject
};
/**
 * Create a new task
 * @param {Number} ProjectId
 * @param {Object} taskData
 */

exports["default"] = _default;

function createTask(ProjectId, taskData) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var newTask;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(!ProjectId || !(0, _utils.isObject)(taskData))) {
                _context.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context.next = 5;
              return _models.TaskModel.create(_objectSpread(_objectSpread({}, taskData), {}, {
                TaskStateId: taskData.status,
                ProjectId: ProjectId
              }));

            case 5:
              newTask = _context.sent;
              resolve(newTask.get({
                plain: true
              }));
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log("TaskService.createTask: ".concat(_context.t0));
              reject('Error al crear la tarea');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
/**
 * Update a exist task by id
 * @param {Number} taskId
 * @param {Object} taskData
 */


function updateTask(taskId, taskData) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
      var task, _taskData, ProjectId, updatedTask;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(!taskId || !(0, _utils.isObject)(taskData))) {
                _context2.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context2.next = 5;
              return _models.TaskModel.findByPk(taskId);

            case 5:
              task = _context2.sent;

              if (task) {
                _context2.next = 9;
                break;
              }

              reject('No se encontró la tarea');
              return _context2.abrupt("return");

            case 9:
              // extact user id
              _taskData = taskData, ProjectId = _taskData.ProjectId; // check if task is associate to register project

              if ((0, _parseInt2["default"])(ProjectId) !== task.get('ProjectId')) {
                reject('No tienes permisos para actualizar este tarea');
              } // remove inmutable project data


              taskData = (0, _utils.ommitKey)(taskData, 'id', 'ProjectId');
              taskData.TaskStateId = taskData.status;
              _context2.next = 15;
              return task.update(taskData);

            case 15:
              updatedTask = _context2.sent;
              resolve(updatedTask.get({
                plain: true
              }));
              _context2.next = 23;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](0);
              console.log("TaskService.updateTask: ".concat(_context2.t0));
              reject('Error al actualizar la tarea');

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 19]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}
/**
 * Get all task from project
 * @param {Number} ProjectId
 */


function getTaskFromProject(ProjectId) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
      var tasks;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (ProjectId) {
                _context3.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context3.next = 5;
              return _models.TaskModel.findAll({
                raw: true,
                nest: true,
                where: {
                  ProjectId: ProjectId
                },
                include: _models.TaskStateModel
              });

            case 5:
              tasks = _context3.sent;
              resolve(tasks);
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.log("TaskService.getTaskFromProject: ".concat(_context3.t0));
              reject('Error al obtener la lista de tareas');

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=task.service.js.map