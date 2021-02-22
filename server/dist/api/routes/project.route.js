"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var _middlewares = require("../middlewares");

var _task = _interopRequireDefault(require("./task.route"));

var router = (0, _express.Router)(); // define availables routes

router.use(_middlewares.AuthMiddleware);
router.route('/').post(_project.createProjectController).get(_project.getProjectsFromUserController);
router.route('/:projectId').get(_project.getProjectByIdController).put(_project.updateProjectController);
router.use('/:projectId/task', _task["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=project.route.js.map