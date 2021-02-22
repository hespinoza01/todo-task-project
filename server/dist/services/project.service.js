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
  createProject: createProject,
  updateProject: updateProject,
  getProjectById: getProjectById,
  getProjectsFromUser: getProjectsFromUser
};
/**
 * Create a new project
 * @param {Number} UserId
 * @param {Object} projectData
 */

exports["default"] = _default;

function createProject(UserId, projectData) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var newProject;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(!UserId || !(0, _utils.isObject)(projectData))) {
                _context.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context.next = 5;
              return _models.ProjectModel.create(_objectSpread(_objectSpread({}, projectData), {}, {
                UserId: UserId
              }));

            case 5:
              newProject = _context.sent;
              resolve(newProject.get({
                plain: true
              }));
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log("ProjectService.createProject: ".concat(_context.t0));
              reject('Error al crear el proyecto');

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
 * Update a exist project by project id
 * @param {Number} projectId
 * @param {Object} projectData
 */


function updateProject(projectId, projectData) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
      var project, _projectData, UserId, updatedProject;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(!projectId || !(0, _utils.isObject)(projectData))) {
                _context2.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context2.next = 5;
              return _models.ProjectModel.findByPk(projectId);

            case 5:
              project = _context2.sent;

              if (project) {
                _context2.next = 9;
                break;
              }

              reject('No se encontró el proyecto');
              return _context2.abrupt("return");

            case 9:
              // extact user id
              _projectData = projectData, UserId = _projectData.UserId; // check if user is owner from current project

              if (UserId !== project.get('UserId')) {
                reject('No tienes permisos para actualizar este projecto');
              } // remove inmutable project data


              projectData = (0, _utils.ommitKey)(projectData, 'id', 'UserId');
              _context2.next = 14;
              return project.update(projectData);

            case 14:
              updatedProject = _context2.sent;
              resolve(updatedProject.get({
                plain: true
              }));
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              console.log("ProjectService.updateProject: ".concat(_context2.t0));
              reject('Error al actualizar el proyecto');

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
 * Get project detail by id
 * @param {Number} projectId
 */


function getProjectById(projectId) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(resolve, reject) {
      var project;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (projectId) {
                _context3.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context3.next = 5;
              return _models.ProjectModel.findByPk(projectId);

            case 5:
              project = _context3.sent;

              if (project) {
                _context3.next = 9;
                break;
              }

              reject('No se encontró el proyecto');
              return _context3.abrupt("return");

            case 9:
              resolve(project.get({
                plain: true
              }));
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              console.log("ProjectService.getProject: ".concat(_context3.t0));
              reject('Error al obtener detalle del proyecto');

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
 * Get all projects from a user
 * @param {Number} UserId
 */


function getProjectsFromUser(UserId) {
  return new _promise["default"]( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
      var projects;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              if (UserId) {
                _context4.next = 3;
                break;
              }

              throw String('Invalid input data');

            case 3:
              _context4.next = 5;
              return _models.ProjectModel.findAll({
                raw: true,
                where: {
                  UserId: UserId
                }
              });

            case 5:
              projects = _context4.sent;
              resolve(projects);
              _context4.next = 13;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);
              reject('Error al obtener la lista de proyectos');

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
}
//# sourceMappingURL=project.service.js.map