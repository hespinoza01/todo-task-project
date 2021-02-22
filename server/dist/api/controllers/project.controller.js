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

exports.createProjectController = createProjectController;
exports.getProjectsFromUserController = getProjectsFromUserController;
exports.getProjectByIdController = getProjectByIdController;
exports.updateProjectController = updateProjectController;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _services = require("../../services");

var _validators = require("../../validators");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * POST: {{SERVER_ADDRESS}}/project
 * params: PojectValidationSchema
 * Create a new project
 */
function createProjectController(_x, _x2) {
  return _createProjectController.apply(this, arguments);
}
/**
 * GET: {{SERVER_ADDRESS}}/project
 * Get all project from user
 * @param {Express.Request} req
 * @param {Express.Response} res
 */


function _createProjectController() {
  _createProjectController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var UserID, data, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // extract user id
            UserID = req.user.id; // validate project data

            _context.next = 4;
            return (0, _validators.ProjectValidation)(req.body);

          case 4:
            data = _context.sent;
            _context.next = 7;
            return _services.ProjectService.createProject(UserID, data);

          case 7:
            response = _context.sent;
            res.send(response);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.send({
              error: true,
              message: _context.t0
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _createProjectController.apply(this, arguments);
}

function getProjectsFromUserController(_x3, _x4) {
  return _getProjectsFromUserController.apply(this, arguments);
}
/**
 * GET: {{SERVER_ADDRESS}}/project/:projectId
 * Get project detail by id
 * @param {Express.Request} req
 * @param {Express.Response} res
 */


function _getProjectsFromUserController() {
  _getProjectsFromUserController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var UserId, response;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // extarct user id
            UserId = req.user.id;
            _context2.next = 4;
            return _services.ProjectService.getProjectsFromUser(UserId);

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
  return _getProjectsFromUserController.apply(this, arguments);
}

function getProjectByIdController(_x5, _x6) {
  return _getProjectByIdController.apply(this, arguments);
}
/**
 * PUT: {{SERVER_ADDRESS}}/project/:projectId
 * params: ProjectValidationSchema
 * Update a exist project
 * @param {Express.Request} req
 * @param {Express.Response} res
 */


function _getProjectByIdController() {
  _getProjectByIdController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var UserId, projectId, project;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // extract user id
            UserId = req.user.id; // extact project id

            projectId = req.params.projectId;
            _context3.next = 5;
            return _services.ProjectService.getProjectById(projectId);

          case 5:
            project = _context3.sent;

            if (!(project.UserId !== UserId)) {
              _context3.next = 8;
              break;
            }

            throw String('No se encontró el proyecto');

          case 8:
            res.send(project);
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
  return _getProjectByIdController.apply(this, arguments);
}

function updateProjectController(_x7, _x8) {
  return _updateProjectController.apply(this, arguments);
}

function _updateProjectController() {
  _updateProjectController = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var UserId, projectId, data, resutl;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            // extract user id
            UserId = req.user.id; // extract project id

            projectId = req.params.projectId; // validate input data

            _context4.next = 5;
            return (0, _validators.ProjectValidation)(req.body);

          case 5:
            data = _context4.sent;
            _context4.next = 8;
            return _services.ProjectService.updateProject(projectId, _objectSpread(_objectSpread({}, data), {}, {
              UserId: UserId
            }));

          case 8:
            resutl = _context4.sent;
            res.send(resutl);
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.send({
              error: true,
              message: _context4.t0
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return _updateProjectController.apply(this, arguments);
}
//# sourceMappingURL=project.controller.js.map